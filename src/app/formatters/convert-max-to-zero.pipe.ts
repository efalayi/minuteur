import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'convertMaxToZero'
})
export class ConvertMaxToZero implements PipeTransform {
  transform(value: number, maxValue: string): number {
    const maxNumber = Number.parseInt(maxValue)
    return value >= maxNumber ? 0 : value
  }
}