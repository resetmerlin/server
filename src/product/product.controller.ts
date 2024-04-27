import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { SwaggerAPI } from 'src/common/swagger/api.decorator';
import { Product } from './schema/Product.schema';
import mongoose from 'mongoose';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  @SwaggerAPI({
    name: 'product inquiry',
    model: Product,
  })
  findAllProduct() {
    return this.productService.findAllProduct();
  }

  @Get(':id')
  @SwaggerAPI({
    name: 'product inquiry by id',
    model: Product,
  })
  findProductById(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Product not found', 404);
    const product = this.productService.findProductById(id);
    if (!product) throw new HttpException('Product not found', 404);
    return product;
  }
}
