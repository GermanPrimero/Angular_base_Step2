import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appShowOrHideFilter]',
  standalone: false,
})
export class ShowOrHideFilterDirective implements OnInit, OnChanges {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  @Input('appShowOrHideFilter') showFilter: boolean = false;

  ngOnInit(): void {
    // this.showFilter = input(Boolean);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Add the next condition is a good practise
    // if (changes['showFilter']) {
      if (this.showFilter) {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
      } else {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
      // }
    }
  }

  constructor() {}
}
