import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ITracking, Status } from '../../interfaces/tracking.interface';

@Schema()
export class Tracking extends Document implements ITracking {
    @Prop({required: true})
    keyword: string

    @Prop({required: true})
    searchByChats: boolean

    @Prop({required: true})
    searchByChannels: boolean

    @Prop({required: false, type: String, enum: Status, default: Status.Active})
    status: Status

    @Prop({type: Date, default: Date.now})
    createdAt: Date

    @Prop({default: [0, 0, 0, 0]})
    coverage: number[]

    @Prop({default: [0, 0, 0, 0]})
    mentioning: number[]
}

export const TrackingSchema = SchemaFactory.createForClass(Tracking)
