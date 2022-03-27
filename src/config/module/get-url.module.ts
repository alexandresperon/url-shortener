import { GetUrlRepository } from './../../dataprovider/database/repository/get-url.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlEntity } from '@dataprovider/database/entity/url.entity';
import { GetUrlUseCase } from '@core/usecase/get-url.usecase';
import { RedirectUrlController } from '@entrypoint/rest/controller/redirect-url.controller';
import { GetUrlGateway } from '@core/gateway/get-url.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([UrlEntity])],
  controllers: [RedirectUrlController],
  providers: [
    GetUrlUseCase,
    { provide: GetUrlGateway, useClass: GetUrlRepository },
  ],
})
export class GetUrlModule {}
