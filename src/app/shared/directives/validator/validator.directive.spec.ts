import { EmailValidatorDirective } from './validator.directive';

describe('ValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new EmailValidatorDirective();
    expect(directive).toBeTruthy();
  });
});
