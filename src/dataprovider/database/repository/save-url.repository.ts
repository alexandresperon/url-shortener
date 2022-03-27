import { UrlModel } from '@core/model/url.model';
import { SaveUrlGateway } from '@core/gateway/save-url.gateway';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UrlEntity } from '@dataprovider/database/entity/url.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SaveUrlRepository implements SaveUrlGateway {
  constructor(
    @InjectRepository(UrlEntity)
    private readonly urlRepository: Repository<UrlEntity>,
  ) {}

  async saveUrl(url: UrlModel): Promise<UrlModel> {
    return this.urlRepository.save(url);
  }
}
