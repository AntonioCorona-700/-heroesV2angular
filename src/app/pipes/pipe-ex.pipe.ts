import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeEx'
})
export class PipeExPipe implements PipeTransform {

  transform(value: string|number, ...args: unknown[]): unknown {
    return value.toString().toLowerCase();
  }

}
