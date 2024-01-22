import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourMinute'
})
export class HourMinutePipe implements PipeTransform {

  transform(value: number): string {
      const hours = Math.floor(value / 60);
      const minutes = Math.floor(value % 60);
      return `${hours}h ${minutes}m`;
    }

}
