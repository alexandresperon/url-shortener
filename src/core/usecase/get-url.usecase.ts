import { UrlModel } from '@core/model/url.model';
import { Inject, Injectable } from '@nestjs/common';
import { GetUrlGateway } from '@core/gateway/get-url.gateway';

@Injectable()
export class GetUrlUseCase {
  constructor(
    @Inject(GetUrlGateway) private readonly getUrlGateway: GetUrlGateway,
  ) {}

  async getUrl(hash: string): Promise<UrlModel> {
    return this.getUrlGateway.getUrl(hash);
  }
}
