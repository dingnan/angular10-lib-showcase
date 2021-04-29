import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const route: Routes = [{ path: '', component: CheckoutComponent }]

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule, RouterModule.forChild(route), SharedModule
  ]
})
export class CheckoutModule { }
