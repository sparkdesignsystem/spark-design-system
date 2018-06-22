//TODO: the direct reference needs to go once publishing
import { Component, Input } from '../../../../src/angular/node_modules/@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sprk-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})

export class SparkButtonComponent { 
  @Input() text: string;
  @Input() isSecondary: boolean;
}