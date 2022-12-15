import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { CreateTrackingDto, DeleteTrackingDto, EditTrackingDto, QueryFilterDto, SetStatusDto } from './dto';
import { TrackingRepository } from './repositories/tracking.repository';
import { TrackingEntity } from './entities/tracking.entity';
import { Status } from '../interfaces/tracking.interface';

@Controller('tracking')
export class TrackingController {
    constructor(
        private readonly trackingRepository: TrackingRepository
    ) {
    }

    @Get()
    async getAll(@Query() filter: QueryFilterDto) {
        console.log(filter)
        return await this.trackingRepository.findAll(filter)
    }

    @Post('create')
    async create(@Body() dto: CreateTrackingDto) {
        const newTrackingEntity = new TrackingEntity(dto).setStatus(Status.Active)
        return this.trackingRepository.createTracking(newTrackingEntity)
    }

    @Post('edit')
    async edit(@Body() {_id, searchByChats, searchByChannels}: EditTrackingDto) {
        const tracking = await this.trackingRepository.findById(_id)
        if (!tracking) throw new HttpException('Tracking not found', HttpStatus.BAD_REQUEST)

        const trackingEntity = new TrackingEntity(tracking).updateTracking(searchByChats, searchByChannels)

        await this.trackingRepository.updateTracking(trackingEntity)

        return 'Updated'
    }

    @Post('set-status')
    async setStatus(@Body() {_id, status}: SetStatusDto) {
        const tracking = await this.trackingRepository.findById(_id)
        if (!tracking) throw new HttpException('Tracking not found', HttpStatus.BAD_REQUEST)

        const trackingEntity = new TrackingEntity(tracking).setStatus(status)

        await this.trackingRepository.updateTracking(trackingEntity)

        console.log(await this.trackingRepository.findById(_id))

        return `Status set to ${status}`
    }

    @Delete()
    async delete(@Query() {_id}: DeleteTrackingDto) {
        const tracking = await this.trackingRepository.findById(_id)
        if (!tracking) throw new HttpException('Nothing to delete', HttpStatus.BAD_REQUEST)

        await this.trackingRepository.deleteTracking(_id)

        return 'Deleted'
    }
}
