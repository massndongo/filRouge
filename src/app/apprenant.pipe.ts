import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apprenant'
})
export class ApprenantPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if (value != "APPRENANT") {
      return value;
    }
  }

}
