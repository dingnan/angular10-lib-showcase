import { Injectable } from '@angular/core';
import { AppConfigService } from '../config/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private appConfigService: AppConfigService) { 
    console.log('PaymentService: bitcoin payment: ', appConfigService.config.enableBitcoin)
  }
}
