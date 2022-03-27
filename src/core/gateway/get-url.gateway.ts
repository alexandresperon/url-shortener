import { UrlModel } from '@core/model/url.model';

export interface GetUrlGateway {
  getUrl(shortUrl: string): Promise<UrlModel>;
}

export const GetUrlGateway = Symbol('GetUrlGateway');
