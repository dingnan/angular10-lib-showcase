import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Optional } from '@angular/core';
import { SkipSelf } from '@angular/core';

@NgModule({

})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule){
    if(parentModule){
        throw new Error('CoreModule is already loaded. Please add it in AppModule only.');
    }
  }
}
