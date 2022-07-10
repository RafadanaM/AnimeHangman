import { IsISO8601, IsNumber, IsString, Min } from 'class-validator';

export class AnimeDTO {
  @IsISO8601({ strict: true })
  date: string;
}

export class verifyAnswerDTO {
  @IsISO8601({ strict: true })
  date: string;

  @IsString()
  title: string;

  @IsNumber()
  @Min(0)
  tries: number;
}
