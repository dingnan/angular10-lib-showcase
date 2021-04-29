import { Component, OnInit } from '@angular/core';
import { AppConfigService } from 'projects/showcase/src/app/core/services/config/app-config.service';
import { PaymentService } from 'projects/showcase/src/app/core/services/payment/payment.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  bitcoinEnabled: boolean = this.appConfigService.config.enableBitcoin;
  
  constructor(private appConfigService: AppConfigService, private paymentService: PaymentService) { }

  ngOnInit(): void {
  }

}
