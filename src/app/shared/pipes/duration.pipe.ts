import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationPipe'
})
export class DurationPipe implements PipeTransform {

  transform(totalMinutes: number): string {
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60;
    return hours.toString().padStart(1, '0') + ':' + minutes.toString().padStart(2, '0') + (hours > 1 ? ' hours' : ' hour')
  }


}
