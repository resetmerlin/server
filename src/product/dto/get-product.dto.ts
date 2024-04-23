import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { Product } from '../schema/Product.schema';

export class GetProduct {
  @Exclude() readonly _id: string;
  @Exclude() readonly _name: string;
  @Exclude() readonly _productId: number;
  @Exclude() readonly _description: string;
  @Exclude() readonly _brand: string;
  @Exclude() readonly _category: string;
  @Exclude() readonly _price: number;
  @Exclude() readonly _countInStock: number;
  @Exclude() readonly _rating: number;
  @Exclude() readonly _numReviews: number;

  constructor(data: Product) {
    Object.keys(data).map((key) => (this[`_${key}`] = data[key]));
  }
  @ApiProperty({
    description: 'product name',
  })
  @Expose()
  get name(): string {
    return this._name;
  }

  @ApiProperty({
    description: 'product id',
  })
  @Expose()
  get productId(): number {
    return this._productId;
  }

  @ApiProperty({ description: 'id' })
  @Expose()
  get id(): string {
    return this._id;
  }

  @ApiProperty({
    description: 'product description',
  })
  @Expose()
  get description(): string {
    return this._description;
  }

  @ApiProperty({
    description: 'product brand',
  })
  @Expose()
  get brand(): string {
    return this._brand;
  }

  @ApiProperty({
    description: 'product category',
  })
  @Expose()
  get category(): string {
    return this._category;
  }

  @ApiProperty({
    description: 'product price',
  })
  @Expose()
  get price(): number {
    return this._price;
  }

  @ApiProperty({
    description: 'stock count of product ',
  })
  @Expose()
  get countInStock(): number {
    return this._countInStock;
  }

  @ApiProperty({
    description: 'product rating',
  })
  @Expose()
  get rating(): number {
    return this._rating;
  }

  @ApiProperty({
    description: 'product reviews',
  })
  @Expose()
  get numReviews(): number {
    return this._numReviews;
  }
}
