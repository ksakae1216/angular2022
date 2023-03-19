/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class MyorgSharedApiConfiguration {
  rootUrl: string = 'https://local-myorg.com:4200/';
}

/**
 * Parameters for `MyorgSharedApiModule.forRoot()`
 */
export interface MyorgSharedApiConfigurationParams {
  rootUrl?: string;
}
