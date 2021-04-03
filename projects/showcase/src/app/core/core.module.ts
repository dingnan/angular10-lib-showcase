import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { UserComponent } from './components/user/user.component'
import { AuthService } from './service/auth.service'

@NgModule({
  declarations: [PageNotFoundComponent, UserComponent],
  imports: [CommonModule],
  exports: [PageNotFoundComponent, UserComponent],
})
export class CoreModule {}
