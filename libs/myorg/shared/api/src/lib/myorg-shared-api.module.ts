/* tslint:disable */
/* eslint-disable */
import {
  NgModule,
  ModuleWithProviders,
  SkipSelf,
  Optional,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  MyorgSharedApiConfiguration,
  MyorgSharedApiConfigurationParams,
} from './myorg-shared-api-configuration';

import { LoginApiService } from './services/login-api.service';
import { ListApiService } from './services/list-api.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [LoginApiService, ListApiService, MyorgSharedApiConfiguration],
})
export class MyorgSharedApiModule {
  static forRoot(
    params: MyorgSharedApiConfigurationParams
  ): ModuleWithProviders<MyorgSharedApiModule> {
    return {
      ngModule: MyorgSharedApiModule,
      providers: [
        {
          provide: MyorgSharedApiConfiguration,
          useValue: params,
        },
      ],
    };
  }

  constructor(
    @Optional() @SkipSelf() parentModule: MyorgSharedApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error(
        'MyorgSharedApiModule is already loaded. Import in your base AppModule only.'
      );
    }
    if (!http) {
      throw new Error(
        'You need to import the HttpClientModule in your AppModule! \n' +
          'See also https://github.com/angular/angular/issues/20575'
      );
    }
  }
}
