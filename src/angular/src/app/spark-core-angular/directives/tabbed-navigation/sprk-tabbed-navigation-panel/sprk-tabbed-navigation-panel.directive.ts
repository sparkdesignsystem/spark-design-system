import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[sprk-tabbed-navigation-panel]'
})

export class SprkTabbedNavigationPanelDirective implements OnInit {
  @Input() additionalClasses: string;

  getClasses(): Array<String> {
    let classArray: Array<String> = ['sprk-c-Tabs__content'];

    // if(this.isActive) {
    //   classArray.push('sprk-c-Tabs__button--active');
    // }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray;
  }

  ngOnInit(): void {

    this.ref.nativeElement.setAttribute('role', 'tabpanel');
    this.ref.nativeElement.setAttribute('tabindex', '0');

    this.getClasses().forEach((item)=>{
      this.ref.nativeElement.classList.add(item);
    })
  }

  constructor(public ref: ElementRef) { }
}
