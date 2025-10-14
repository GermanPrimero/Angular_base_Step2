import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
   standalone: false
})
export class HighlightDirective implements OnChanges {

  //appHighlight = input(false);
  @Input('appHighlight') taskCompleted: boolean = false;

  constructor(private el: ElementRef, private render: Renderer2) {
   }

  ngOnChanges(changes: SimpleChanges) {

    if(changes['taskCompleted']) {
    
      if(this.taskCompleted) {
        // this.el.nativeElement.style.backgroundColor = 'yellow';  
        this.render.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
      } 
      else {
        this.render.setStyle(this.el.nativeElement, 'backgroundColor', '#f4f4f4');
      }

      
    }
  }

}
