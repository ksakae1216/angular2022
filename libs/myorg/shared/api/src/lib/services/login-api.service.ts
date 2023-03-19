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

@Injectable({
  providedIn: 'root',
})
export class LoginApiService extends BaseService {
  constructor(config: MyorgSharedApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /**
   * Path part for operation postLogin
   */
  static readonly PostLoginPath = '/api/login';

  /**
   * Post Login.
   *
   * Log in with login ID and password
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postLogin()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postLogin$Response(
    params?: {
      body?: {
        loginId: string;
        password: string;
      };
    },
    context?: HttpContext
  ): Observable<
    StrictHttpResponse<{
      accessToken?: string;
      userName?: string;
    }>
  > {
    const rb = new RequestBuilder(
      this.rootUrl,
      LoginApiService.PostLoginPath,
      'post'
    );
    if (params) {
      rb.body(params.body, 'application/json');
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
            accessToken?: string;
            userName?: string;
          }>;
        })
      );
  }

  /**
   * Post Login.
   *
   * Log in with login ID and password
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postLogin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postLogin(
    params?: {
      body?: {
        loginId: string;
        password: string;
      };
    },
    context?: HttpContext
  ): Observable<{
    accessToken?: string;
    userName?: string;
  }> {
    return this.postLogin$Response(params, context).pipe(
      map(
        (
          r: StrictHttpResponse<{
            accessToken?: string;
            userName?: string;
          }>
        ) =>
          r.body as {
            accessToken?: string;
            userName?: string;
          }
      )
    );
  }
}
