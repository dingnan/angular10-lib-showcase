import { ModuleWithProviders, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AngularMaterialModule } from './material.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserComponent } from './components/user/user.component';
import { SpinnerOverlayService } from './services/spinner/spinner-overlay.service';
import { LOGGER_SETTING, LoggingLevel } from './model/log.settings';
import { LoggerService } from './services/logger/logger.service';

@NgModule({
  declarations: [PageNotFoundComponent, UserComponent],
  imports: [CommonModule],
  exports: [AngularMaterialModule, PageNotFoundComponent, UserComponent],
})
export class SharedModule {
  static forRoot(config?: LoggingLevel): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [ 
        {provide: LOGGER_SETTING, useValue: config ?? LoggingLevel.all}, // if no config passed, use default settings
        SpinnerOverlayService, 
        {provide: LoggerService, useClass: LoggerService, deps: [LOGGER_SETTING]} ]
    }
  }
}
