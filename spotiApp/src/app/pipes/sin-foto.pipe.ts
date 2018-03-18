import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinFoto'
})
export class SinFotoPipe implements PipeTransform {

  transform(value: any[]): any {

    const noImage = 'assets/img/noimage.png';
    if ( !value ) {
      return noImage;
    }

    return (value.length > 0) ? value[1].url : noImage;
  }

}
