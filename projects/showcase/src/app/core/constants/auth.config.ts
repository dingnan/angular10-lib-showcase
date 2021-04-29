import { InjectionToken } from '@angular/core'

export interface AuthConfig {
  token: string
}

export const AUTH_TOKEN = new InjectionToken<string>('uuid')
