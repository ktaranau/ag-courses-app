import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creationDate'
})
export class CreationDatePipe implements PipeTransform {

  transform(date: Date | string, day: number, format: string = 'DD-MM-YYYY'): string {
    date = new Date(date); 
    date.setDate(date.getDate()-day);
    return new DatePipe('').transform(date, format);
  }

}
