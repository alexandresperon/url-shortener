import { Response } from 'express';
import { Controller, Get, Param, Res } from '@nestjs/common';
import { GetUrlUseCase } from '@core/usecase/get-url.usecase';

@Controller()
export class RedirectUrlController {
  constructor(private readonly getUrlUseCase: GetUrlUseCase) {}

  @Get(':hash')
  async redirectUrl(
    @Param('hash') hash: string,
    @Res({ passthrough: true }) res: Response,
  ): Promise<void> {
    const urlModel = await this.getUrlUseCase.getUrl(hash);
    if (urlModel) res.redirect(301, urlModel.originalUrl);
    else res.status(404);
  }
}
