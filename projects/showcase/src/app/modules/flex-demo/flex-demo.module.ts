import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FlexPageComponent } from './page/flex-page/flex-page.component'
import { RouterModule, Routes } from '@angular/router'

const route: Routes = [{ path: '', component: FlexPageComponent }]

@NgModule({
  declarations: [FlexPageComponent],
  imports: [CommonModule, RouterModule.forChild(route)],
})
export class FlexDemoModule {}
