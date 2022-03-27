import { NumberConverterGateway } from '@core/gateway/number-converter.gateway';
import { UrlModel } from '@core/model/url.model';
import { Inject, Injectable } from '@nestjs/common';
import { SaveUrlGateway } from '@core/gateway/save-url.gateway';
import { GetIdGateway } from '@core/gateway/get-id.gateway';

@Injectable()
export class GenerateUrlUseCase {
  constructor(
    @Inject(GetIdGateway) private readonly getIdGateway: GetIdGateway,
    @Inject(SaveUrlGateway) private readonly saveUrlGateway: SaveUrlGateway,
    @Inject(NumberConverterGateway)
    private readonly numberConverterGateway: NumberConverterGateway,
  ) {}

  async generateUrl(originalUrl: string): Promise<UrlModel> {
    const id = await this.getIdGateway.getId();
    const shortUrl = this.numberConverterGateway.convert(id);
    const urlModel: UrlModel = { id, originalUrl, shortUrl };
    return this.saveUrlGateway.saveUrl(urlModel);
  }
}
