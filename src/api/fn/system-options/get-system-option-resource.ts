/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SystemOption } from '../../models/system-option';

export interface GetSystemOptionResource$Params {

/**
 * The category of the system options.
 */
  category: string;

/**
 * The key of a system option.
 */
  key: string;
}

export function getSystemOptionResource(http: HttpClient, rootUrl: string, params: GetSystemOptionResource$Params, context?: HttpContext): Observable<StrictHttpResponse<SystemOption>> {
  const rb = new RequestBuilder(rootUrl, getSystemOptionResource.PATH, 'get');
  if (params) {
    rb.path('category', params.category, {});
    rb.path('key', params.key, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.option+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SystemOption>;
    })
  );
}

getSystemOptionResource.PATH = '/tenant/system/options/{category}/{key}';
