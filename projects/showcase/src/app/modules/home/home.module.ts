import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomePageComponent } from './page/home.page/home.page.component'
import { SharedModule } from '../shared/shared.module'
import { CoreModule } from '../../core/core.module'

@NgModule({
  declarations: [HomePageComponent],
  //imports: [CommonModule, CoreModule.forChild(), SharedModule],
  imports: [CommonModule, CoreModule, SharedModule],
  exports: [HomePageComponent],
})
export class HomeModule {}
