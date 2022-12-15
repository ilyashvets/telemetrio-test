import { IsBoolean, IsString } from 'class-validator';

export class CreateTrackingDto {
    @IsString()
    keyword: string

    @IsBoolean()
    searchByChats: boolean

    @IsBoolean()
    searchByChannels: boolean
}