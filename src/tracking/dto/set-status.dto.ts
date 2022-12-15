import { Status } from '../../interfaces/tracking.interface';
import { IsEnum, IsString } from 'class-validator';

export class SetStatusDto {
    @IsString()
    _id: string

    @IsEnum(Status)
    status: Status
}