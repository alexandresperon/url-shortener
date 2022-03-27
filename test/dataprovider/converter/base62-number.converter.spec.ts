import { Base62Converter } from '@dataprovider/converter/base62-number.converter';
describe('Base62NumberConverter', () => {
  const base62Converter = new Base62Converter();
  it('should convert to base 62 correctly', () => {
    const convertedValue = base62Converter.convert(11157);
    expect(convertedValue).toBe('2TX');
  });
});
