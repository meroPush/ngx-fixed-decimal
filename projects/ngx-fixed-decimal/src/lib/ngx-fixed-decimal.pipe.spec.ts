import { NgxFixedDecimalPipe } from './ngx-fixed-decimal.pipe';

describe('NgxFixedDecimalPipe', () => {
  let pipe: NgxFixedDecimalPipe;

  beforeEach(() => {
    pipe = new NgxFixedDecimalPipe();
  });

  it('Floor, Precision, Zeros', () => {
    expect(pipe.transform(0, 4, 'floor', true)).toBe('0.0000');
    expect(pipe.transform(1, 4, 'floor', true)).toBe('1.0000');
    expect(pipe.transform(10, 4, 'floor', true)).toBe('10.0000');
    expect(pipe.transform(10.12, 4, 'floor', true)).toBe('10.1200');
    expect(pipe.transform(10.1234, 4, 'floor', true)).toBe('10.1234');
    expect(pipe.transform(10.12344, 4, 'floor', true)).toBe('10.1234');
    expect(pipe.transform(10.123456, 4, 'floor', true)).toBe('10.1234');
    expect(pipe.transform(10.123456, 4, 'floor', true)).toBe('10.1234');
    expect(pipe.transform(10.5, 4, 'floor', true)).toBe('10.5000');
  });
  it('Floor, Precision', () => {
    expect(pipe.transform(0, 4, 'floor', false)).toBe('0');
    expect(pipe.transform(1, 4, 'floor', false)).toBe('1');
    expect(pipe.transform(10, 4, 'floor', false)).toBe('10');
    expect(pipe.transform(10.12, 4, 'floor', false)).toBe('10.12');
    expect(pipe.transform(10.1234, 4, 'floor', false)).toBe('10.1234');
    expect(pipe.transform(10.12344, 4, 'floor', false)).toBe('10.1234');
    expect(pipe.transform(10.123456, 4, 'floor', false)).toBe('10.1234');
    expect(pipe.transform(10.5, 4, 'floor', false)).toBe('10.5');
  });
  it('Floor, Zeros', () => {
    expect(pipe.transform(0, 0, 'floor', true)).toBe('0');
    expect(pipe.transform(1, 0, 'floor', true)).toBe('1');
    expect(pipe.transform(10, 0, 'floor', true)).toBe('10');
    expect(pipe.transform(10.12, 0, 'floor', true)).toBe('10');
    expect(pipe.transform(10.1234, 0, 'floor', true)).toBe('10');
    expect(pipe.transform(10.12344, 0, 'floor', true)).toBe('10');
    expect(pipe.transform(10.123456, 0, 'floor', true)).toBe('10');
    expect(pipe.transform(10.5, 0, 'floor', true)).toBe('10');
  });
  it('Floor', () => {
    expect(pipe.transform(0, 0, 'floor', false)).toBe('0');
    expect(pipe.transform(1, 0, 'floor', false)).toBe('1');
    expect(pipe.transform(10, 0, 'floor', false)).toBe('10');
    expect(pipe.transform(10.12, 0, 'floor', false)).toBe('10');
    expect(pipe.transform(10.1234, 0, 'floor', false)).toBe('10');
    expect(pipe.transform(10.12344, 0, 'floor', false)).toBe('10');
    expect(pipe.transform(10.123456, 0, 'floor', false)).toBe('10');
    expect(pipe.transform(10.5, 0, 'floor', false)).toBe('10');
  });

  it('Ceil, Precision, Zeros', () => {
    expect(pipe.transform(0, 4, 'ceil', true)).toBe('0.0000');
    expect(pipe.transform(1, 4, 'ceil', true)).toBe('1.0000');
    expect(pipe.transform(10, 4, 'ceil', true)).toBe('10.0000');
    expect(pipe.transform(10.12, 4, 'ceil', true)).toBe('10.1200');
    expect(pipe.transform(10.1234, 4, 'ceil', true)).toBe('10.1234');
    expect(pipe.transform(10.12344, 4, 'ceil', true)).toBe('10.1235');
    expect(pipe.transform(10.123456, 4, 'ceil', true)).toBe('10.1235');
    expect(pipe.transform(10.5, 4, 'ceil', true)).toBe('10.5000');
  });
  it('Ceil, Precision', () => {
    expect(pipe.transform(0, 4, 'ceil', false)).toBe('0');
    expect(pipe.transform(1, 4, 'ceil', false)).toBe('1');
    expect(pipe.transform(10, 4, 'ceil', false)).toBe('10');
    expect(pipe.transform(10.12, 4, 'ceil', false)).toBe('10.12');
    expect(pipe.transform(10.1234, 4, 'ceil', false)).toBe('10.1234');
    expect(pipe.transform(10.12344, 4, 'ceil', false)).toBe('10.1235');
    expect(pipe.transform(10.123456, 4, 'ceil', false)).toBe('10.1235');
    expect(pipe.transform(10.5, 4, 'ceil', false)).toBe('10.5');
  });
  it('Ceil, Zeros', () => {
    expect(pipe.transform(0, 0, 'ceil', true)).toBe('0');
    expect(pipe.transform(1, 0, 'ceil', true)).toBe('1');
    expect(pipe.transform(10, 0, 'ceil', true)).toBe('10');
    expect(pipe.transform(10.12, 0, 'ceil', true)).toBe('11');
    expect(pipe.transform(10.1234, 0, 'ceil', true)).toBe('11');
    expect(pipe.transform(10.12344, 0, 'ceil', true)).toBe('11');
    expect(pipe.transform(10.123456, 0, 'ceil', true)).toBe('11');
    expect(pipe.transform(10.5, 0, 'ceil', true)).toBe('11');
  });
  it('Ceil', () => {
    expect(pipe.transform(0, 0, 'ceil', false)).toBe('0');
    expect(pipe.transform(1, 0, 'ceil', false)).toBe('1');
    expect(pipe.transform(10, 0, 'ceil', false)).toBe('10');
    expect(pipe.transform(10.12, 0, 'ceil', false)).toBe('11');
    expect(pipe.transform(10.1234, 0, 'ceil', false)).toBe('11');
    expect(pipe.transform(10.12344, 0, 'ceil', false)).toBe('11');
    expect(pipe.transform(10.123456, 0, 'ceil', false)).toBe('11');
    expect(pipe.transform(10.5, 0, 'ceil', false)).toBe('11');
  });

  it('Round, Precision, Zeros', () => {
    expect(pipe.transform(0, 4, 'round', true)).toBe('0.0000');
    expect(pipe.transform(1, 4, 'round', true)).toBe('1.0000');
    expect(pipe.transform(10, 4, 'round', true)).toBe('10.0000');
    expect(pipe.transform(10.12, 4, 'round', true)).toBe('10.1200');
    expect(pipe.transform(10.1234, 4, 'round', true)).toBe('10.1234');
    expect(pipe.transform(10.12344, 4, 'round', true)).toBe('10.1234');
    expect(pipe.transform(10.123456, 4, 'round', true)).toBe('10.1235');
    expect(pipe.transform(10.5, 4, 'round', true)).toBe('10.5000');
  });
  it('Round, Precision', () => {
    expect(pipe.transform(0, 4, 'round', false)).toBe('0');
    expect(pipe.transform(1, 4, 'round', false)).toBe('1');
    expect(pipe.transform(10, 4, 'round', false)).toBe('10');
    expect(pipe.transform(10.12, 4, 'round', false)).toBe('10.12');
    expect(pipe.transform(10.1234, 4, 'round', false)).toBe('10.1234');
    expect(pipe.transform(10.12344, 4, 'round', false)).toBe('10.1234');
    expect(pipe.transform(10.123456, 4, 'round', false)).toBe('10.1235');
    expect(pipe.transform(10.5, 4, 'round', false)).toBe('10.5');
  });
  it('Round, Zeros', () => {
    expect(pipe.transform(0, 0, 'round', true)).toBe('0');
    expect(pipe.transform(1, 0, 'round', true)).toBe('1');
    expect(pipe.transform(10, 0, 'round', true)).toBe('10');
    expect(pipe.transform(10.12, 0, 'round', true)).toBe('10');
    expect(pipe.transform(10.1234, 0, 'round', true)).toBe('10');
    expect(pipe.transform(10.12344, 0, 'round', true)).toBe('10');
    expect(pipe.transform(10.123456, 0, 'round', true)).toBe('10');
    expect(pipe.transform(10.5, 0, 'round', true)).toBe('11');
  });
  it('Round', () => {
    expect(pipe.transform(0, 0, 'round', false)).toBe('0');
    expect(pipe.transform(1, 0, 'round', false)).toBe('1');
    expect(pipe.transform(10, 0, 'round', false)).toBe('10');
    expect(pipe.transform(10.12, 0, 'round', false)).toBe('10');
    expect(pipe.transform(10.1234, 0, 'round', false)).toBe('10');
    expect(pipe.transform(10.12344, 0, 'round', false)).toBe('10');
    expect(pipe.transform(10.123456, 0, 'round', false)).toBe('10');
    expect(pipe.transform(10.5, 0, 'round', false)).toBe('11');
  });

  it('Trunc, Precision, Zeros', () => {
    expect(pipe.transform(0, 4, 'trunc', true)).toBe('0.0000');
    expect(pipe.transform(1, 4, 'trunc', true)).toBe('1.0000');
    expect(pipe.transform(10, 4, 'trunc', true)).toBe('10.0000');
    expect(pipe.transform(10.12, 4, 'trunc', true)).toBe('10.1200');
    expect(pipe.transform(10.1234, 4, 'trunc', true)).toBe('10.1234');
    expect(pipe.transform(10.12344, 4, 'trunc', true)).toBe('10.1234');
    expect(pipe.transform(10.123456, 4, 'trunc', true)).toBe('10.1234');
    expect(pipe.transform(10.5, 4, 'trunc', true)).toBe('10.5000');
  });
  it('Trunc, Precision', () => {
    expect(pipe.transform(0, 4, 'trunc', false)).toBe('0');
    expect(pipe.transform(1, 4, 'trunc', false)).toBe('1');
    expect(pipe.transform(10, 4, 'trunc', false)).toBe('10');
    expect(pipe.transform(10.12, 4, 'trunc', false)).toBe('10.12');
    expect(pipe.transform(10.1234, 4, 'trunc', false)).toBe('10.1234');
    expect(pipe.transform(10.12344, 4, 'trunc', false)).toBe('10.1234');
    expect(pipe.transform(10.123456, 4, 'trunc', false)).toBe('10.1234');
    expect(pipe.transform(10.5, 4, 'trunc', false)).toBe('10.5');
  });
  it('Trunc, Zeros', () => {
    expect(pipe.transform(0, 0, 'trunc', true)).toBe('0');
    expect(pipe.transform(1, 0, 'trunc', true)).toBe('1');
    expect(pipe.transform(10, 0, 'trunc', true)).toBe('10');
    expect(pipe.transform(10.12, 0, 'trunc', true)).toBe('10');
    expect(pipe.transform(10.1234, 0, 'trunc', true)).toBe('10');
    expect(pipe.transform(10.12344, 0, 'trunc', true)).toBe('10');
    expect(pipe.transform(10.123456, 0, 'trunc', true)).toBe('10');
    expect(pipe.transform(10.5, 0, 'trunc', true)).toBe('10');
  });
  it('Trunc', () => {
    expect(pipe.transform(0, 0, 'trunc', false)).toBe('0');
    expect(pipe.transform(1, 0, 'trunc', false)).toBe('1');
    expect(pipe.transform(10, 0, 'trunc', false)).toBe('10');
    expect(pipe.transform(10.12, 0, 'trunc', false)).toBe('10');
    expect(pipe.transform(10.1234, 0, 'trunc', false)).toBe('10');
    expect(pipe.transform(10.12344, 0, 'trunc', false)).toBe('10');
    expect(pipe.transform(10.123456, 0, 'trunc', false)).toBe('10');
    expect(pipe.transform(10.5, 0, 'trunc', false)).toBe('10');
  });
});
