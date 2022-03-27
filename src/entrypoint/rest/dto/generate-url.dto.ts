import { IsNotEmpty } from 'class-validator';

export class GenerateUrlDto {
  @IsNotEmpty({ message: 'Url query param must be provided' })
  url: string;
}
