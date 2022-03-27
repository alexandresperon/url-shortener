import { UrlModel } from './../../../src/core/model/url.model';
import { GetUrlUseCase } from '@core/usecase/get-url.usecase';

const urlModel: UrlModel = { id: 1, shortUrl: '1', originalUrl: 'myurl.com' };
const mockGetUrlGateway = {
  getUrl: (shortUrl: string): Promise<UrlModel> => Promise.resolve(urlModel),
};

describe('GetUrlUseCase', () => {
  const getUrlUseCase = new GetUrlUseCase(mockGetUrlGateway);
  it('should return url correcty', async () => {
    const shortUrl = '1';
    const result = await getUrlUseCase.getUrl(shortUrl);
    expect(result).toBe(urlModel);
  });
});
