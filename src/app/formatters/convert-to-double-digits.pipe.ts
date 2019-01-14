import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'convertToDoubleDigits'
})
export class ConvertToDoubleDigitsPipe implements PipeTransform {
  transform(value: number): string {
     return value < 10 ? `0${value}` : `${value}`
  }
}
