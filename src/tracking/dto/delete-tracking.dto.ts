import { IsString } from 'class-validator';

export class DeleteTrackingDto {
    @IsString()
    _id: string
}