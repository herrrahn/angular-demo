import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[apDarkOnHover]'
})
export class DarkenOnHoverDirective {
  constructor(private el: ElementRef,
              private render: Renderer2) {
  }

  @Input() brightness = '90%';

  @HostListener('mouseover')
  darkenOn() {
    this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }
}
