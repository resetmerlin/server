import { Injectable } from '@nestjs/common';
import { Product } from './schema/Product.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  /**
   * @desc - logic that find all products
   *       - find all product from product model
   */
  findAllProduct() {
    return this.productModel.find({});
  }

  /**
   *
   * @param id - prodduct id to search
   * @desc - logic that find single product
   *       - find single product based on the id params
   */
  findProductById(id: string) {
    return this.productModel.findById(id);
  }
}
