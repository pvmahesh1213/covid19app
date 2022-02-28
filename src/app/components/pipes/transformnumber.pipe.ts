import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformnumber'
})
export class TransformnumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args == 'delta') {
      var val: any = Math.abs(value)
      if (val >= 10000000) {
        val = (val / 10000000).toFixed(2) + ' Cr';
      } else if (val >= 100000) {
        val = (val / 100000).toFixed(2) + ' L';
      } else if (val >= 1000) {
        val = (val / 1000).toFixed(2) + 'K';
      }
      return val;
    } else {
      var val: any = Math.abs(value)
      if (val >= 10000000) {
        val = (val / 10000000).toFixed(2) + ' Cr';
      } else if (val >= 100000) {
        val = (val / 100000).toFixed(2) + ' L';
      }
      return val;
    }
  }

}
