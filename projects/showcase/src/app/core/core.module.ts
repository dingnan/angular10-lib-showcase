import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core'
import { Optional } from '@angular/core';
import { SkipSelf } from '@angular/core';
import { AppConfigService } from './services/config/app-config.service';

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

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: appInitializerFunc,
          multi: true,
          deps: [AppConfigService]
        }
      ]
    }
  }
}
