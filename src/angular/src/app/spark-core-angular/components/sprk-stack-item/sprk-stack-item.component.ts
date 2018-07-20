import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[sprk-stack-item]',
})

export class SparkStackItemComponent implements OnInit {
  @Input() analyticsString: string;
  @Input() additionalClasses: string;

  getClasses(): Array<String> {
    let classArray: Array<String> = ['sprk-o-Stack__item'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray;
  }

  ngOnInit(): void {
    console.log(this.additionalClasses);
    this.getClasses().forEach((item)=>{
      this.ref.nativeElement.classList.add(item);
    })
  }

  constructor(public ref: ElementRef) {

  }
}
