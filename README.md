# NgxFixedDecimal

![npm](https://img.shields.io/npm/v/ngx-fixed-decimal)
![npm](https://img.shields.io/npm/dw/ngx-fixed-decimal)
![GitHub stars](https://img.shields.io/github/stars/meroPush/ngx-fixed-decimal)
![GitHub license](https://img.shields.io/github/license/meroPush/ngx-fixed-decimal)

NgxFixedDecimal this is Angular pipe for round a number to N decimal places.
Allows you to set a fixed number of decimal places, the missing number of characters will be filled with zeros.

For example, if the number of decimal places is 4, and the rounding method is `Math.ceil()`, the result is as follows:
```text
0             => 0.0000
1             => 1.0000
10            => 10.0000
10.12         => 10.1200
10.1234       => 10.1234
10.12344      => 10.1235
10.123456     => 10.1235
10.5          => 10.5000
```


## Installation

Add npm package
```bash
npm install ngx-fixed-decimal
```

Import `NgxFixedDecimal` into your application module
```javascript
import {NgxFixedDecimalModule} from 'ngx-fixed-decimal';

@NgModule({
  ...
  imports: [
    ...
    NgxFixedDecimalModule
    ...
  ],
})
```


## Using pipe

The pipe name to use in template bindings is `fixedDecimal`
```html
{{ number | fixedDecimal [ : mathMethod [ : precision [ : zeros ] ] ] }}
```

To use the `fixedDecimal` pipe in a component and services, add `NgxFixedDecimalPipe` to the list of providers in the root module.
```javascript
import {NgxFixedDecimalPipe} from 'ngx-fixed-decimal';

@NgModule({
  providers: [
    NgxFixedDecimalPipe
  ]
})
```

Inject the `NgxFixedDecimalPipe` into component constructor using dependency injection.
```javascript
import {NgxFixedDecimalPipe} from 'ngx-fixed-decimal';

@Component({
    ...
})
export class AppComponent {
  constructor(
    private fixedDecimal: NgxFixedDecimalPipe
  ) {
    console.log(this.fixedDecimal.transform(10.123456, 2, 'ceil'));
  }
}
```



## Specifying global configuration

Default options can be specified by providing an instance of [`FixedDecimalConfig`](#fixeddecimalconfig) for [`FIXED_DECIMAL_CONFIG`](#fixed_decimal_config) in the root module of your application.
```javascript
import {FIXED_DECIMAL_CONFIG} from 'ngx-fixed-decimal';

@NgModule({
  providers: [
    {
        provide: FIXED_DECIMAL_CONFIG,
        useValue: {
            mathMethod: 'round',
            precision: 2,
            zeros: true
        }
    }
  ]
})
```


## Classes
#### FixedDecimalConfig

Configuration for default options

**Properties**

| Name            | Type                        | Default   | Description                                   |
|-----------------|-----------------------------|-----------|-----------------------------------------------|
| `mathMethod`    | [MathMethod](#mathmethod)   | round     | Math rounding method                          |
| `precision`     | number                      | 2         | Number of characters after decimal point      |
| `zeros`         | boolean                     | true      | Show zeros at the end                         |


## Type aliases
#### MathMethod

Valid Math rounding methods
```javascript
type MathMethod = 'floor' | 'ceil' | 'round' | 'trunc';
```

| Name        | Description                                                                   |
|-------------|-------------------------------------------------------------------------------|
| `floor`     | Rounds the argument to the nearest smaller integer                            |
| `ceil`      | Rounds the argument to the nearest larger integer                             |
| `round`     | Rounds the argument to the nearest integer                                    |
| `trunc`     | Returns the integer part of a number by removing all fractional characters    |


## Constants
#### FIXED_DECIMAL_CONFIG

Injection token that can be used to specify default options.
```javascript
const FIXED_DECIMAL_CONFIG = new InjectionToken<FixedDecimalConfig>;
```
