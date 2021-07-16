import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkUnorderedListComponent } from './sprk-unordered-list.component';
import { SprkUnorderedListModule } from './sprk-unordered-list.module';
import { SprkListItemModule } from '../sprk-list-item/sprk-list-item.module';

@Component({
  selector: 'sprk-test',
  template: `
    <sprk-unordered-list>
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
    </sprk-unordered-list>
  `,
})
class TestingComponent {}

describe('SprkUnorderedListComponent', () => {
  let component: SprkUnorderedListComponent;
  let fixture: ComponentFixture<SprkUnorderedListComponent>;
  let element;

  // for testing list items
  let listItemFixture: ComponentFixture<TestingComponent>;
  let listItem;
  let noId;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TestingComponent],
        imports: [SprkListItemModule, SprkUnorderedListModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkUnorderedListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('ul');
    fixture.detectChanges();

    // testing project list items
    listItemFixture = TestBed.createComponent(TestingComponent);
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

  it('classes should get set if listType is indented', () => {
    component.listType = 'indented';
    fixture.detectChanges();
    expect(element.classList.contains('sprk-b-List--indented')).toEqual(true);
  });

  it('classes should get set if listType is bare', () => {
    component.listType = 'bare';
    fixture.detectChanges();
    expect(element.classList.contains('sprk-b-List--bare')).toEqual(true);
  });

  it('classes should get set if listType is horizontal', () => {
    component.listType = 'horizontal';
    fixture.detectChanges();
    expect(element.classList.contains('sprk-o-HorizontalList')).toEqual(true);
  });

  it('should add the correct classes if additionalClasses have values', () => {
    component.listType = 'bare';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual(
      'sprk-b-List sprk-b-List--bare sprk-u-pam sprk-u-man',
    );
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
