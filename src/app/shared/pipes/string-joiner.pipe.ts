import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringJoiner'
})
export class StringJoinerPipe implements PipeTransform {

  transform(input:Array<any>, sep = ','): string {
    return input.join(sep);
  }


}
