import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ timestamps: true })
export class Review {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, required: true })
  rating: number;

  @Prop({ type: String, required: true })
  comment: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);

@Schema({ timestamps: true })
export class Product {
  @Prop({ type: Types.ObjectId, required: true, ref: 'User' })
  user: Types.ObjectId;

  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  productId: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: [ReviewSchema], default: [] })
  reviews: Review[];

  @Prop({ required: true })
  rating: number;

  @Prop({ required: true, default: 0 })
  numReviews: number;

  @Prop({ required: true, default: 0 })
  price: number;

  @Prop({ required: true, default: 0 })
  countInStock: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
