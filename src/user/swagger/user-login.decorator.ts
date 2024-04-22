import { HttpStatus, applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { createSchema } from 'src/common/swagger/api.schema';

export const SwaggerLogIn = (): MethodDecorator =>
  applyDecorators(
    ApiOperation({
      summary: 'Login API',
      description:
        'API for login. Returns response status code and creates session',
    }),

    ApiOkResponse({
      description:
        'Response upon successful login. Request success message returned with 200 status code',
      schema: {
        allOf: [
          createSchema({
            status: HttpStatus.OK,
            message: 'you logined',
            success: true,
          }),
        ],
      },
    }),

    ApiUnauthorizedResponse({
      description:
        'Response when not logged in. Request failure message returned with 403 status code',
      schema: {
        allOf: [
          createSchema({
            status: HttpStatus.FORBIDDEN,
            message: 'A login is required',
            success: false,
          }),
        ],
      },
    }),

    ApiNotFoundResponse({
      description:
        'Response when login fails. Request failure message is returned with 404 status code',
      schema: {
        allOf: [
          createSchema({
            status: HttpStatus.NOT_FOUND,
            message: 'Administrator information not found',
            success: false,
          }),
        ],
      },
    }),

    ApiBadRequestResponse({
      description:
        'Response when already logged in. Request failure message is returned with 400 status code ',
      schema: {
        allOf: [
          createSchema({
            status: HttpStatus.BAD_REQUEST,
            message: 'You are already logged in',
            success: false,
          }),
        ],
      },
    }),
  );
