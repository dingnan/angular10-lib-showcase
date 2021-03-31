import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AlertComponent } from './components/alert/alert.component'
import { AlertPageComponent } from './page/alert.page.component'

@NgModule({
  declarations: [AlertComponent, AlertPageComponent],
  imports: [CommonModule],
})
export class LibDemoModule {}
