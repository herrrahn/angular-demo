import {Directive, ElementRef, OnInit} from '@angular/core';
import {PlatformDetectorService} from '../../../core/platform-detector/platform-detector.service';

@Directive({
  selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {
  constructor(private element: ElementRef<any>, private plattform: PlatformDetectorService) {
  }

  ngOnInit(): void {
    if (this.plattform.isPlatformBrowser()) {
      this.element.nativeElement.click();
    }
  }

}
