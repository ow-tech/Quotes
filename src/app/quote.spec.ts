import { Quote } from './quote';
import { stringify } from 'querystring';

describe('Quote', () => {
  it('should create an instance', () => {
    expect(new Quote('', '')).toBeTruthy();
  });
});
