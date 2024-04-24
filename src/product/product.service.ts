import { Injectable } from '@nestjs/common';
import { Product } from './schema/Product.schema';

@Injectable()
export class ProductService {
  constructor(private readonly productSchema: Product) {}
}
