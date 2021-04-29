import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApplicationConfig } from '../../../data/schema/app-config.interface';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private appConfig: IApplicationConfig = {
    enableBitcoin: false
  }

  constructor(private http: HttpClient) { }

  loadAppConfig(): Promise<void> {
    const url = "/assets/env/app-config.json";
    return this.http.get(url)
      .toPromise()
      .then((data: any) => this.appConfig = data)
      .catch((err: Error) => console.error('Could not load app config: ', err));
  }

  get config() {
    return this.appConfig;
  }
}
