import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postsFilter'
})
export class PostsFilterPipe implements PipeTransform {

 transform(items: any[], searchText: string, searchParam: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter( item => {
      return item[searchParam].toLowerCase().includes(searchText);
    });
   }

}
