import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})

export class SparkButtonComponent { 
  @Input() text: string;
  @Input() isSecondary: boolean;
}