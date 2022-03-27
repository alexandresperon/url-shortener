import { UrlEntity } from '@dataprovider/database/entity/url.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UrlModel } from '@core/model/url.model';
import { GetUrlGateway } from '@core/gateway/ger-url.gateway';

@Injectable()
export class GetUrlRepository implements GetUrlGateway {
  constructor(
    @InjectRepository(UrlEntity)
    private readonly urlRepository: Repository<UrlEntity>,
  ) {}

  async getUrl(shortUrl: string): Promise<UrlModel> {
    return this.urlRepository.findOne({ where: { shortUrl } });
  }
}
