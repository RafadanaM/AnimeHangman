import { IsISO8601 } from 'class-validator';

export class AnimeDTO {
  @IsISO8601({ strict: true })
  date: string;
}
