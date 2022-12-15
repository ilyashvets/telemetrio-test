import { Injectable } from '@nestjs/common';
import { Tracking } from '../models/tracking.model';
import { Model } from 'mongoose';
import { TrackingEntity } from '../entities/tracking.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TrackingRepository {
    constructor(@InjectModel(Tracking.name) private readonly trackingModel: Model<Tracking>
    ) {
    }

    async findAll({status, sort, limit, skip}) {
        return this.trackingModel.find({status},null, {sort, limit, skip})
    }

    async findById(_id: string) {
        return this.trackingModel.findById(_id)
    }

    async createTracking(tracking: TrackingEntity) {
        const newTracking = new this.trackingModel(tracking)
        return newTracking.save()
    }

    async updateTracking({_id, ...rest}: TrackingEntity) {
        await this.trackingModel.updateOne({_id}, {$set: {...rest}})
    }

    async deleteTracking(_id: string) {
        await this.trackingModel.findByIdAndDelete({_id}).exec()
    }
}