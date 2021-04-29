import { ModuleWithProviders, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AngularMaterialModule } from './material.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserComponent } from './components/user/user.component';
import { SpinnerOverlayService } from './services/spinner/spinner-overlay.service';

@NgModule({
  declarations: [PageNotFoundComponent, UserComponent],
  imports: [CommonModule],
  exports: [AngularMaterialModule, PageNotFoundComponent, UserComponent],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [ SpinnerOverlayService ]
    }
  }
}
