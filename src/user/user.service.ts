import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/User.schema';
import { Model } from 'mongoose';
import { PostUserLogin } from './dto/post-user-login.dto.';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  createUser(postUserLogin: PostUserLogin) {
    const user = new this.userModel(postUserLogin);

    return user.save();
  }
}
