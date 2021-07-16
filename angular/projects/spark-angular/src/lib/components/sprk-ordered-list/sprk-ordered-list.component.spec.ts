import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkOrderedListComponent } from './sprk-ordered-list.component';
import { SprkOrderedListModule } from './sprk-ordered-list.module';
import { SprkListItemModule } from '../sprk-list-item/sprk-list-item.module';

@Component({
  selector: 'sprk-test',
  template: `
    <sprk-ordered-list>
      <sprk-list-item
        additionalClasses="test-class"
        analyticsString="test-analytics-string"
        idString="test-id-string"
      >
        Content
      </sprk-list-item>
      <sprk-list-item additionalClasses="no-id">
        Content
      </sprk-list-item>
    </sprk-ordered-list>
  `,
})
class SprkTestingComponent {}

describe('SprkOrderedListComponent', () => {
  let component: SprkOrderedListComponent;
  let fixture: ComponentFixture<SprkOrderedListComponent>;
  let element;

  // for testing list items
  let listItemFixture: ComponentFixture<SprkTestingComponent>;
  let listItem;
  let noId;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkTestingComponent],
        imports: [SprkListItemModule, SprkOrderedListModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkOrderedListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('ol');
    fixture.detectChanges();

    // testing project list items
    listItemFixture = TestBed.createComponent(SprkTestingComponent);
    listItemFixture.detectChanges();
    listItem = listItemFixture.nativeElement.querySelector('li');
    noId = listItemFixture.nativeElement.querySelector('.no-id');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getClasses should match what gets set on the element', () => {
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual(component.getClasses());
  });

  it('should add the correct classes if bare is set as listType', () => {
    component.listType = 'bare';
    fixture.detectChanges();
    expect(element.classList.contains('sprk-b-List--bare')).toEqual(true);
  });

  it('should add the correct classes if indented is set as listType', () => {
    component.listType = 'indented';
    fixture.detectChanges();
    expect(element.classList.contains('sprk-b-List--indented')).toEqual(true);
  });

  it('should add the correct classes if additionalClasses have values', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-b-List sprk-u-pam sprk-u-man');
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    expect(element.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    expect(element.getAttribute('data-id')).toBeNull();
  });

  // Testing list items
  it('should add the correct classes if additionalClasses have values', () => {
    expect(listItem.classList.contains('test-class')).toBeTruthy();
  });

  it('should set the data-analytics attribute given a value in the analyticsString Input', () => {
    expect(listItem.hasAttribute('data-analytics')).toEqual(true);
    expect(listItem.getAttribute('data-analytics')).toEqual(
      'test-analytics-string',
    );
  });

  it('should add data-id when idString has a value', () => {
    expect(listItem.getAttribute('data-id')).toEqual('test-id-string');
  });

  it('should not add data-id when idString has no value', () => {
    expect(noId.getAttribute('data-id')).toBeNull();
  });
});
