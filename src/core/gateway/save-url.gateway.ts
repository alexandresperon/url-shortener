import { UrlModel } from '@core/model/url.model';

export interface SaveUrlGateway {
  saveUrl(url: UrlModel): Promise<UrlModel>;
}

export const SaveUrlGateway = Symbol('SaveUrlGateway');
