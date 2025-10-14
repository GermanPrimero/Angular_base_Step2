import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
/*TemplateRef: represents the content of tag which apply this directive*/
/*ViewContainerRef: represent the <ng-template> associated my directive*/

@Directive({
  selector: '[appUnless]',
  standalone: false
})
export class UnlessDirective {

  constructor(private templateRef: TemplateRef<any>,      
  private viewContainer: ViewContainerRef ) { }

  @Input() set appUnless(condition:boolean) {

    if(!condition) {
      
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
