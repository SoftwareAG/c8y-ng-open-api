/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Tenant } from '../../models/tenant';

export interface PutTenantResource$Params {

/**
 * Unique identifier of a Cumulocity IoT tenant.
 */
  tenantId: string;

/**
 * Advertises which content types, expressed as MIME types, the client is able to understand.
 */
  Accept?: string;
      body: Tenant & {
'adminName'?: any;
}
}

export function putTenantResource(http: HttpClient, rootUrl: string, params: PutTenantResource$Params, context?: HttpContext): Observable<StrictHttpResponse<Tenant>> {
  const rb = new RequestBuilder(rootUrl, putTenantResource.PATH, 'put');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
    rb.header('Accept', params.Accept, {});
    rb.body(params.body, 'application/vnd.com.nsn.cumulocity.tenant+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/vnd.com.nsn.cumulocity.tenant+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Tenant>;
    })
  );
}

putTenantResource.PATH = '/tenant/tenants/{tenantId}';
