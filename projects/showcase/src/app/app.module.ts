import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'
import { LayoutModule } from './layout/layout.module'
import { HomeModule } from './modules/home/home.module'
import { AppRoutingModule } from './app-routing.module'
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    HomeModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
