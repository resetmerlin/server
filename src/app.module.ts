import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), UserModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
