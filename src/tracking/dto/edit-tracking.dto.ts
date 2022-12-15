import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class EditTrackingDto {
    @IsString()
    _id: string

    @IsBoolean()
    @IsOptional()
    searchByChats: boolean

    @IsBoolean()
    @IsOptional()
    searchByChannels: boolean
}