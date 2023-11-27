import { Module } from '@nestjs/common';
import { CommitsModule } from './commits/commits.module';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [CommitsModule,
    ConfigModule.forRoot()],
})

export class AppModule { }
