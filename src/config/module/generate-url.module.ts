import { NumberConverterGateway } from '@core/gateway/number-converter.gateway';
import { GetIdGateway } from '@core/gateway/get-id.gateway';
import { Module } from '@nestjs/common';
import { GenerateUrlController } from '@entrypoint/rest/controller/generate-url.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlEntity } from '@dataprovider/database/entity/url.entity';
import { Base62Converter } from '@dataprovider/converter/base62-number.converter';
import { GetIdRepository } from '@dataprovider/database/repository/get-id.repository';
import { SaveUrlRepository } from '@dataprovider/database/repository/save-url.repository';
import { SaveUrlGateway } from '@core/gateway/save-url.gateway';
import { GenerateUrlUseCase } from '@core/usecase/generate-url.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([UrlEntity])],
  controllers: [GenerateUrlController],
  providers: [
    GenerateUrlUseCase,
    { provide: NumberConverterGateway, useClass: Base62Converter },
    { provide: GetIdGateway, useClass: GetIdRepository },
    { provide: SaveUrlGateway, useClass: SaveUrlRepository },
  ],
})
export class GenerateUrlModule {}
