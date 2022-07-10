import { Type } from 'class-transformer';
import { IsISO8601, IsNumber, Min } from 'class-validator';

export class GetStatisticsDTO {
  @IsISO8601({ strict: true })
  date?: string;

  @IsNumber()
  @Min(1)
  @Type(() => Number)
  limit?: number;

  @IsNumber()
  @Min(0)
  @Type(() => Number)
  offset?: number;
}


export class ParticipateDTO {
  @IsISO8601({ strict: true })
  date: string;
}
