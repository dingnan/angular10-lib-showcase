import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core'
import { Optional } from '@angular/core';
import { SkipSelf } from '@angular/core';
import { LOGGER_SETTING, LoggingLevel } from '../modules/shared/model/log.settings';
import { AppConfigService } from './services/config/app-config.service';
import { LoggerService } from './services/logger/logger.service';

const appInitializerFunc = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  }
}

@NgModule({

})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule){
    if(parentModule){
        throw new Error('CoreModule is already loaded. Please add it in AppModule only.');
    }
  }

  static forRoot(config?: LoggingLevel): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: appInitializerFunc,
          multi: true,
          deps: [AppConfigService]
        },
        {
          provide: LOGGER_SETTING,
          useValue: config ?? LoggingLevel.all // if no config passed, use default settings}
        },
        {
          provide: LoggerService, 
          useClass: LoggerService, 
          deps: [LOGGER_SETTING]
        }
      ]
    }
  }
}
