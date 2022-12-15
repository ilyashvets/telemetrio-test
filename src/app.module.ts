import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConfig } from './configs/mongo.config';
import { ConfigModule } from '@nestjs/config';
import { TrackingModule } from './tracking/tracking.module';

@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: '.env'
      }),
      MongooseModule.forRootAsync(getMongoConfig()),
      TrackingModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
