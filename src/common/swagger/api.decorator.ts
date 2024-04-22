import { HttpStatus, Type, applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiExtraModels,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTooManyRequestsResponse,
  ApiUnauthorizedResponse,
  getSchemaPath,
} from '@nestjs/swagger';
import { createSchema } from './api.schema';
import { ResponseEntity } from '../entity/response.entity';

export const SwaggerAPI = ({
  name,
  success = HttpStatus.OK,
  fail = HttpStatus.NOT_FOUND,
  model = Object,
}: OptionsProps): MethodDecorator => {
  return applyDecorators(
    ApiOperation({
      summary: `${name} API`,
    }),

    ApiExtraModels(ResponseEntity, model),

    ApiNotFoundResponse({
      description:
        'Response when there is no data, 404 status code and message returned',
      schema: {
        allOf: [
          createSchema({
            status: fail,
            message: `Failed to find '${name}. input: {prop}'`,
            success: false,
          }),
        ],
      },
    }),

    ApiBadRequestResponse({
      description:
        'Response when incorrect request. Request failure message is returned with 400 status code',
      schema: {
        allOf: [
          createSchema({
            status: HttpStatus.BAD_REQUEST,
            message: `It's a wrong request`,
            success: false,
          }),
        ],
      },
    }),

    ApiTooManyRequestsResponse({
      description:
        'Response when the number of requests is exceeded. 429 status code is returned',
      schema: {
        allOf: [
          createSchema({
            status: HttpStatus.TOO_MANY_REQUESTS,
            message: 'Too many requests, please try again in a moment.',
            success: false,
          }),
        ],
      },
    }),

    ApiUnauthorizedResponse({
      description:
        'Response when not logged in. Request failure message is returned with 401 status code',
      schema: {
        allOf: [
          createSchema({
            status: HttpStatus.UNAUTHORIZED,
            message: 'A login is required.',
            success: false,
          }),
        ],
      },
    }),

    ApiResponse({
      status: success,
      description: 'Returns an OK response when successful.',
      schema: {
        allOf: [
          createSchema({
            status: success,
            message: `I did '${name}`,
            success: true,
            data: {
              $ref: getSchemaPath(model),
            },
          }),
        ],
      },
    }),
  );
};

interface OptionsProps {
  name: string;
  success?: number;
  fail?: number;
  model?: Type<unknown>;
}
