import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'process';
import { FeedModule } from './feed/feed.module';

@Module({
  imports: [
ConfigModule.forRoot({isGlobal:true}),
TypeOrmModule.forRoot({
  type:'postgres',
  host:process.env.POSTGRES_HOST,
  port:parseInt(<string>process.env.POSTGRES_PORT),
username:process.env.POSTGRES_USER,
password:process.env.POSTGRES_PASSWORD,
database:process.env.POSTGRES_DATABASE,
autoLoadEntities:true,
synchronize:true,
}),
FeedModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
