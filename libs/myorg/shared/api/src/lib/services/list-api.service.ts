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

import { ElementList } from '../models/element-list';
import { Paginator } from '../models/paginator';

@Injectable({
  providedIn: 'root',
})
export class ListApiService extends BaseService {
  constructor(config: MyorgSharedApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /**
   * Path part for operation getList
   */
  static readonly GetListPath = '/api/list';

  /**
   * Your GET endpoint.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getList$Response(
    params: {
      pageSize: number;
      currentPage: number;
    },
    context?: HttpContext
  ): Observable<
    StrictHttpResponse<{
      list: Array<ElementList>;
      paginator: Paginator;
    }>
  > {
    const rb = new RequestBuilder(
      this.rootUrl,
      ListApiService.GetListPath,
      'get'
    );
    if (params) {
      rb.query('pageSize', params.pageSize, {});
      rb.query('currentPage', params.currentPage, {});
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
          return r as StrictHttpResponse<{
            list: Array<ElementList>;
            paginator: Paginator;
          }>;
        })
      );
  }

  /**
   * Your GET endpoint.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getList(
    params: {
      pageSize: number;
      currentPage: number;
    },
    context?: HttpContext
  ): Observable<{
    list: Array<ElementList>;
    paginator: Paginator;
  }> {
    return this.getList$Response(params, context).pipe(
      map(
        (
          r: StrictHttpResponse<{
            list: Array<ElementList>;
            paginator: Paginator;
          }>
        ) =>
          r.body as {
            list: Array<ElementList>;
            paginator: Paginator;
          }
      )
    );
  }
}
