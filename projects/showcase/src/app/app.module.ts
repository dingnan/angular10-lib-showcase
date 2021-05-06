import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ErrorHandler, NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'
import { LayoutModule } from './layout/layout.module'
import { HomeModule } from './modules/home/home.module'
import { AppRoutingModule } from './app-routing.module'
import { SharedModule } from './modules/shared/shared.module'
import { CoreModule } from './core/core.module'
import { LoggingLevel } from './core/model/log.settings'
import { GlobalErrorHandler } from './core/services/error-handler/global-error-handler.service'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule.forRoot(LoggingLevel.fatal),
    LayoutModule,
    HomeModule,
    SharedModule.forRoot(),
  ],
  providers: [ {provide: ErrorHandler, useClass: GlobalErrorHandler} ],
  bootstrap: [AppComponent],
})
export class AppModule {}
