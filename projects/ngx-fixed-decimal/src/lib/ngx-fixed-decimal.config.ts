import {InjectionToken} from '@angular/core';

export const FIXED_DECIMAL_CONFIG = new InjectionToken<FixedDecimalConfig>('FIXED_DECIMAL_CONFIG');

export type MathMethod = 'floor' | 'ceil' | 'round' | 'trunc';

export class FixedDecimalConfig {
  /** Rounding method */
  mathMethod: MathMethod = 'round';

  /** Number of characters after decimal point */
  precision = 2;

  /** Show zeros at the end */
  zeros = true;
}
