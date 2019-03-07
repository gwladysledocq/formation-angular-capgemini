import { Prestation } from 'src/app/shared/models/prestation.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Prestation, tva?: number): number {
    if (value) {
      if (tva) {
        return value.totalTTC(tva);
      }
      return value.totalHT();
    }
    return null;
  }

}
