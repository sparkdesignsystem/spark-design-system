import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[sprk-tabbed-navigation-tab]'
})

export class SprkTabbedNavigationTabDirective implements OnInit {
  @Input() additionalClasses: string;
  @Input() isActive: boolean;
  @Input() controlsId: string;
  @Input() id: string;

  getClasses(): Array<String> {
   let classArray: Array<String> = ['sprk-c-Tabs__button'];

   if(this.isActive) {
     classArray.push('sprk-c-Tabs__button--active');
   }

   if (this.additionalClasses) {
     this.additionalClasses.split(' ').forEach((className) => {
       classArray.push(className);
     })
   }

   return classArray;
  }

  ngOnInit(): void {
    this.getClasses().forEach((item)=>{
      this.ref.nativeElement.classList.add(item);
    })

    this.ref.nativeElement.setAttribute('role', 'tab');
    this.ref.nativeElement.setAttribute('aria-controls', this.controlsId);
    this.ref.nativeElement.setAttribute('aria-selected', this.isActive ? 'true': 'false');
    this.ref.nativeElement.setAttribute('id', this.id);
  }

  constructor(public ref: ElementRef) {}
}
