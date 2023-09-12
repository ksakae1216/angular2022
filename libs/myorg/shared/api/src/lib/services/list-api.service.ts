/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { MyorgSharedApiConfiguration } from '../myorg-shared-api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Element } from '../models/element';

@Injectable({
  providedIn: 'root',
})
export class ListApiService extends BaseService {
  constructor(config: MyorgSharedApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /**
   * Path part for operation getApiList
   */
  static readonly GetApiListPath = '/api/list';

  /**
   * Your GET endpoint.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiList$Response(
    params?: {},
    context?: HttpContext
  ): Observable<StrictHttpResponse<Element>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      ListApiService.GetApiListPath,
      'get'
    );
    if (params) {
    }

    return this.http
      .request(
        rb.build({
          responseType: 'json',
          accept: 'application/json',
          context: context,
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Element>;
        })
      );
  }

  /**
   * Your GET endpoint.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApiList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiList(params?: {}, context?: HttpContext): Observable<Element> {
    return this.getApiList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Element>) => r.body as Element)
    );
  }
}
