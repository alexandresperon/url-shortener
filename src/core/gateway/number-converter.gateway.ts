export interface NumberConverterGateway {
  convert(num: number): string;
}

export const NumberConverterGateway = Symbol('NumberConverterGateway');
