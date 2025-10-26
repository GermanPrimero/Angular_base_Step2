import { Directive, ElementRef, HostListener, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective {

// FEEDBACK: Use Renderer2 instead of elRef for edit style of dom in directives

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.elRef.nativeElement, 'borderBottom', '1px solid black');
    // this.elRef.nativeElement.style.borderBottom = '1px solid black';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.elRef.nativeElement, 'borderBottom', 'none');
    // this.elRef.nativeElement.style.borderBottom = 'none';
  }

}
