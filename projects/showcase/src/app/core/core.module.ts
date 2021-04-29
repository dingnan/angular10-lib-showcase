import { ModuleWithProviders, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PageNotFoundComponent } from '../modules/shared/components/page-not-found/page-not-found.component'
import { UserComponent } from '../modules/shared/components/user/user.component'
import { AuthService } from './services/auth/auth.service'
import { AUTH_TOKEN } from './constants/auth.config'
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: SpinnerInterceptor,
    //   multi: true,
    // },
  ],
  exports: [],
})
export class CoreModule {
  static forChild(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [AuthService], //{ provide: AUTH_TOKEN, useValue: 'FOO' }
    }
  }
}
