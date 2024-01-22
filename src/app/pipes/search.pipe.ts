import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data:any[], words:string): any[] {
    return data.filter(el=>el.original_title.toLowerCase().includes(words.toLowerCase()))
  }

}
