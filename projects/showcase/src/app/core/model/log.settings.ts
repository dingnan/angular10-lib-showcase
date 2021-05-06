import { InjectionToken } from "@angular/core";

export enum LoggingLevel {
    fatal = 1,
    error = 2,
    warn = 3,
    info = 4,
    debug = 5,
    trace = 6,
    all = 7,
    off = 0
}

export const LOGGER_SETTING = new InjectionToken<LoggingLevel>('LOGGER_SETTING');