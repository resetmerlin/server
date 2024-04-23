import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { PostUserLogin } from './dto/post-user-login.dto.';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() request: PostUserLogin) {
    console.log(request);
  }
}
