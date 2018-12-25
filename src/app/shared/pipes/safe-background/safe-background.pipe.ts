import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeBackground'
})
export class SafeBackgroundPipe implements PipeTransform {

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  transform(value: any, args?: any): any {
    console.log('Piping, but no smoking');
    return this.sanitizer.bypassSecurityTrustStyle(`url(${value})`);
  }

}
