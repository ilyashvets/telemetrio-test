import { Module } from '@nestjs/common';
import { TrackingController } from './tracking.controller';
import { TrackingRepository } from './repositories/tracking.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Tracking, TrackingSchema } from './models/tracking.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Tracking.name, schema: TrackingSchema}
    ])
  ],
  controllers: [TrackingController],
  providers: [TrackingRepository]
})
export class TrackingModule {}
