import { plainToInstance } from 'class-transformer';
import { PostUserLogin } from './post-user-login.dto.';

describe('User Login', () => {
  let userLogin: PostUserLogin;

  beforeEach(() => {
    userLogin = plainToInstance(PostUserLogin, {
      name: 'admin',
      password: '1234',
    });
  });

  it('should be defined', () => {
    expect(userLogin).toBeDefined();
  });

  describe('userLogin', () => {
    it('toBeInstanceOf', () => {
      expect(userLogin).toBeInstanceOf(PostUserLogin);
    });
  });

  describe('name', () => {
    it('should be a string', () => {
      const isString = Reflect.getMetadata('design:type', userLogin, 'name');
      expect(isString).toBe(String);
    });
  });

  describe('password', () => {
    it('should be a string', () => {
      const isString = Reflect.getMetadata(
        'design:type',
        userLogin,
        'password',
      );
      expect(isString).toBe(String);
    });
  });
});
