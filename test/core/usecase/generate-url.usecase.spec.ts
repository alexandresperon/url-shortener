import { GenerateUrlUseCase } from '@core/usecase/generate-url.usecase';

const mockGetIdGateway = {
  getId: () => Promise.resolve(100),
};

const mockSaveUrlGateway = {
  saveUrl: (urlModel) => Promise.resolve(urlModel),
};

const mockNumberConverterGateway = {
  convert: (num) => num.toString(16),
};

describe('GenerateUrlUseCase', () => {
  const generateUrlUseCase = new GenerateUrlUseCase(
    mockGetIdGateway,
    mockSaveUrlGateway,
    mockNumberConverterGateway,
  );
  it('should generate a short url correcty', async () => {
    const url = 'https://mylongurl.com/home';
    const urlModel = await generateUrlUseCase.generateUrl(url);
    expect(urlModel.shortUrl).toBe('64');
  });
});
