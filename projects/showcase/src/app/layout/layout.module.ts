import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { NavComponent } from './nav/nav.component'
import { SharedModule } from '../modules/shared/shared.module'

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, FooterComponent, NavComponent],
})
export class LayoutModule {}
