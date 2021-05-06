import { Inject, Injectable, Optional } from '@angular/core';
import { LOGGER_SETTING, LoggingLevel } from '../../model/log.settings';

// @Injectable({
//   providedIn: 'root'
// })
export class LoggerService {

  constructor(@Optional() @Inject(LOGGER_SETTING) private config) { }

  log(message: string) {
    console.log(`log level: ${LoggingLevel[this.config]} : `, message);
  }
}
