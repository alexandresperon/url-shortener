import { NumberConverterGateway } from '@core/gateway/number-converter.gateway';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Base62Converter implements NumberConverterGateway {
  private base62Chars =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  convert(num: number): string {
    if (num < 62) return this.base62Chars[num];
    const quotient = Math.floor(num / 62);
    const remainder = num % 62;
    return  this.convert(quotient) + this.base62Chars[remainder];
  }
}
