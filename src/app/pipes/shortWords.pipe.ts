import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortWords'
})
export class ShortWordsPipe implements PipeTransform {

  transform(value: string , countCutting:number ): string {
    return  value.split(' ').splice(0,countCutting).join(' ');
  }

}
