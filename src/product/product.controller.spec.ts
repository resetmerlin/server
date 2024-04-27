import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { Product } from './schema/Product.schema';
import { ProductService } from './product.service';
import { Types } from 'mongoose';

export const productStub = (): Product => {
  return {
    _id: '64057e49aafc2434e58:a9482',
    user: '65473337a5eb661ad031e22c' as unknown as Types.ObjectId,
    productId: 0,
    name: 'Nike Jordan 1 Retro',
    brand: 'Nike',
    category: 'Shoes',
    description: 'This is nike Air Jordan 1',
    rating: 4.5,
    numReviews: 12,
    price: 321,
    countInStock: 10,
    reviews: [],
  };
};
describe('ProductController', () => {
  let controller: ProductController;
  let service: ProductService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('get product by id', () => {
    describe('When get product by id is called', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let product: Product;

      beforeEach(async () => {
        product = await controller.findProductById(productStub()._id);
      });

      test('then it should call product service', () => {
        expect(service.findProductById).toHaveBeenCalled();
      });
    });
  });
});
