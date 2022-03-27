import { UrlEntity } from '@dataprovider/database/entity/url.entity';
import { Injectable } from '@nestjs/common';
import { GetIdGateway } from '@core/gateway/get-id.gateway';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GetIdRepository implements GetIdGateway {
  constructor(
    @InjectRepository(UrlEntity)
    private readonly urlRepository: Repository<UrlEntity>,
  ) {}

  async getId(): Promise<number> {
    const result = await this.urlRepository.save({});
    return result.id;
  }
}
