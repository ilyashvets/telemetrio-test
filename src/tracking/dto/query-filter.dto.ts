import { Status } from '../../interfaces/tracking.interface';
import { IsEnum, IsNumberString } from 'class-validator';

enum SortBy {
    asc = 'asc',
    desc = 'desc'
}

export class QueryFilterDto {
    @IsEnum(Status)
    status: Status

    @IsEnum(SortBy)
    sort: SortBy

    @IsNumberString()
    skip: number

    @IsNumberString()
    limit: number
}