import {Inject, Optional, Pipe, PipeTransform} from '@angular/core';
import {FIXED_DECIMAL_CONFIG, FixedDecimalConfig, MathMethod} from './ngx-fixed-decimal.config';

@Pipe({
  name: 'fixedDecimal'
})
export class NgxFixedDecimalPipe implements PipeTransform {
  constructor(
    @Optional() @Inject(FIXED_DECIMAL_CONFIG) private readonly config?: FixedDecimalConfig
  ) {
    this.config = _applyConfigDefaults(this.config, new FixedDecimalConfig());
  }

  transform(
    value: number,
    precision: number = this.config.precision,
    rounding: MathMethod = this.config.mathMethod,
    showZeros: boolean = this.config.zeros
  ): string {
    const factor = 10 ** precision;
    const result = Math[rounding](+(value * factor).toFixed(precision)) / factor;

    if (Number.isInteger(value) && showZeros) {
      return result.toFixed(precision);
    }
    else if (Number.isInteger(value)) {
      return result.toString();
    }
    else if (precision === 0) {
      return Math[rounding](value).toString();
    }
    else if (showZeros) {
      return result.toFixed(precision);
    }
    else {
      return result.toFixed(precision)
        .replace(new RegExp('0+$', 'g'), '')
        .replace(new RegExp('\\.$', 'g'), '');
    }
  }
}

/**
 * Applies default configuration.
 * @param config Config to be modified.
 * @param defaultConfig Default config.
 * @returns The new configuration object.
 */
function _applyConfigDefaults(config?: FixedDecimalConfig, defaultConfig?: FixedDecimalConfig): FixedDecimalConfig {
  return {...defaultConfig, ...config};
}
