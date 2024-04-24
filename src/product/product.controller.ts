import { Body, Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { GetProduct } from './dto/get-product.dto';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  findAllProduct(@Body() request: GetProduct) {
    console.log(request);
  }
}
