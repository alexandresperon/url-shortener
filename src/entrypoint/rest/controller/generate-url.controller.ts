import { Controller, Post, Query } from '@nestjs/common';
import { GenerateUrlUseCase } from '@core/usecase/generate-url.usecase';
import { GenerateUrlDto } from '@entrypoint/rest/dto/generate-url.dto';

@Controller()
export class GenerateUrlController {
  constructor(private readonly generateUrlUseCase: GenerateUrlUseCase) {}

  @Post('/shorten')
  async generateUrl(@Query() generateUrlDto: GenerateUrlDto): Promise<string> {
    const urlModel = await this.generateUrlUseCase.generateUrl(
      generateUrlDto.url,
    );
    return process.env.HOST_URL + urlModel.shortUrl;
  }
}
