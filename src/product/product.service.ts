import { Injectable } from '@nestjs/common';
import { Product } from './schema/Product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(private readonly productModel: Model<Product>) {}

  findAllProduct() {
    return this.productModel.find({});
  }
}
