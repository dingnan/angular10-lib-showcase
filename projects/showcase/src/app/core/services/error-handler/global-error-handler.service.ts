import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LoggerService } from '../logger/logger.service';


@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: any): void {
    // this error handler needs to be loaded first, thus making it not possible to use dependency injection in the constructor to get other services
    // we have to manually call the injector with Service name
    const loggingService = this.injector.get(LoggerService);
    const message = error?.message ?? error.toString();
    loggingService.log(message);
  }
}
