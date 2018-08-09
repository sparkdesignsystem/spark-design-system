import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[sprk-tabbed-navigation-tab]'
})

export class SprkTabbedNavigationTabDirective implements OnInit {
  @Input() additionalClasses: string;
  @Input() defaultActive: boolean;

  getClasses(): Array<String> {
   let classArray: Array<String> = ['sprk-c-Tabs__button'];

   if(this.defaultActive) {
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
    this.ref.nativeElement.setAttribute('aria-selected', this.defaultActive? 'true': 'false');
  }

  constructor(public ref: ElementRef) {}
}
