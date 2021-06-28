import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkLinkDirective } from '../../directives/sprk-link/sprk-link.directive';
import { SprkToggleComponent } from './sprk-toggle.component';

describe('SprkToggleComponent', () => {
  let component: SprkToggleComponent;
  let fixture: ComponentFixture<SprkToggleComponent>;
  let element: HTMLElement;
  let triggerElement: HTMLButtonElement;
  let contentElement: HTMLDivElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [BrowserAnimationsModule],
        declarations: [
          SprkToggleComponent,
          SprkIconComponent,
          SprkLinkDirective,
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngAfterContentInit();
    element = fixture.nativeElement.querySelector('div');
    triggerElement = element.querySelector('button');
    contentElement = element.querySelector('div');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('clicking should show body text', () => {
    element.querySelector('button').click();
    fixture.detectChanges();
    expect(element.querySelector('div.sprk-c-Toggle__content')).toBeTruthy();
  });

  it('should set the data-analytics attribute given a value in the analyticsString Input', () => {
    const str = 'One';
    component.analyticsString = str;
    fixture.detectChanges();
    expect(
      element.querySelector('button').getAttribute('data-analytics'),
    ).toEqual(str);
  });

  it('should add icon classes to icon when toggle is opened', () => {
    component.triggerText = 'placeholder';
    element.querySelector('button').click();
    fixture.detectChanges();
    expect(
      element.querySelector('button .sprk-c-Icon').classList.toString(),
    ).toEqual(
      'sprk-c-Icon sprk-c-Icon--xl sprk-c-Toggle__trigger-icon sprk-c-Icon--toggle sprk-c-Icon--open',
    );
  });

  it('should add icon classes to icon when the toggle is opened and then closed', () => {
    component.triggerText = 'placeholder';
    element.querySelector('button').click();
    fixture.detectChanges();
    expect(
      triggerElement.querySelector('.sprk-c-Icon').classList.toString(),
    ).toEqual(
      'sprk-c-Icon sprk-c-Icon--xl sprk-c-Toggle__trigger-icon sprk-c-Icon--toggle sprk-c-Icon--open',
    );
    element.querySelector('button').click();
    fixture.detectChanges();
    expect(
      element.querySelector('button .sprk-c-Icon').classList.toString(),
    ).toEqual(
      'sprk-c-Icon sprk-c-Icon--xl sprk-c-Toggle__trigger-icon sprk-c-Icon--toggle',
    );
  });

  // TODO: Remove `iconClass` in issue #1305
  it('should add the correct classes if iconClass have values', () => {
    component.iconClass = 'test';
    fixture.detectChanges();
    expect(
      element.querySelector('button .sprk-c-Icon').classList.toString(),
    ).toEqual(
      'sprk-c-Icon sprk-c-Icon--xl sprk-c-Toggle__trigger-icon sprk-c-Icon--toggle test',
    );
  });

  it('should add the correct classes if iconAdditionalClasses have values', () => {
    component.iconAdditionalClasses = 'test';
    fixture.detectChanges();
    expect(
      element.querySelector('button .sprk-c-Icon').classList.toString(),
    ).toEqual(
      'sprk-c-Icon sprk-c-Icon--xl sprk-c-Toggle__trigger-icon sprk-c-Icon--toggle test',
    );
  });

  // TODO: Remove `iconClass` in issue #1305
  it('should prefer iconAdditionalClasses if both iconClass and iconAdditionalClasses are set', () => {
    component.iconAdditionalClasses = 'should-add';
    component.iconClass = 'should-not-add';
    fixture.detectChanges();
    expect(
      element.querySelector('button .sprk-c-Icon').classList.toString(),
    ).toEqual(
      'sprk-c-Icon sprk-c-Icon--xl sprk-c-Toggle__trigger-icon sprk-c-Icon--toggle should-add',
    );
  });

  it('should add the correct classes if additionalClasses have values', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(element.classList.toString().includes('sprk-u-man')).toBe(true);
    expect(element.classList.toString().includes('sprk-c-Toggle')).toBe(true);
    expect(element.classList.toString().includes('sprk-u-pam')).toBe(true);
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

  it('should add aria-controls and id if contentId is not passed', () => {
    fixture.detectChanges();
    expect(contentElement.getAttribute('id')).toMatch(/sprk_toggle_content_\d/);
    expect(triggerElement.getAttribute('aria-controls')).toEqual(
      contentElement.getAttribute('id'),
    );
  });

  it('should add correct aria-controls and id if contentId is passed', () => {
    component.contentId = 'test_id';
    fixture.detectChanges();
    expect(contentElement.getAttribute('id')).toEqual('test_id');
    expect(triggerElement.getAttribute('aria-controls')).toEqual(
      contentElement.getAttribute('id'),
    );
  });

  // TODO: Remove `title` in issue #1305
  it('should add the correct title when set', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    expect(triggerElement.innerHTML).toContain('Test Title');
  });

  it('should add the correct triggerText when set', () => {
    component.triggerText = 'Test Title';
    fixture.detectChanges();
    expect(triggerElement.innerHTML).toContain('Test Title');
  });

  // TODO: Remove `title` in issue #1305
  it('should prefer triggerText over title if both are set', () => {
    component.triggerText = 'Test Title';
    component.title = 'Should not be the title';
    fixture.detectChanges();
    expect(triggerElement.innerHTML).toContain('Test Title');
  });

  it('should add the correct classes if contentAdditionalClasses is set', () => {
    component.contentAdditionalClasses = 'test-1 test-2';
    fixture.detectChanges();
    expect(
      element.querySelector('.sprk-c-Toggle__content').classList.toString(),
    ).toContain('sprk-c-Toggle__content test-1 test-2');
  });

  // TODO: Remove `titleFontClass` in issue #1305
  it('should add the correct classes if titleFontClass is set', () => {
    component.titleFontClass = 'test-1 test-2';
    fixture.detectChanges();
    expect(triggerElement.classList.toString()).toContain(
      'sprk-c-Toggle__trigger sprk-b-Type--crop-none test-1 test-2',
    );
  });

  it('should add the correct classes if triggerTextAdditionalClasses is set', () => {
    component.triggerTextAdditionalClasses = 'test-1 test-2';
    fixture.detectChanges();
    expect(triggerElement.classList.toString()).toContain(
      'sprk-c-Toggle__trigger sprk-b-Type--crop-none test-1 test-2',
    );
  });

  // TODO: Remove `titleFontClass` in issue #1305
  it('should prefer triggerTextAdditionalClasses over titleFontClass if both are set', () => {
    component.triggerTextAdditionalClasses = 'test-1 test-2';
    component.titleFontClass = 'test-3 test-4';
    fixture.detectChanges();
    expect(triggerElement.classList.toString()).toContain(
      'sprk-c-Toggle__trigger sprk-b-Type--crop-none test-1 test-2',
    );
  });

  it('should use correct toggleIconName if it is set', () => {
    fixture.detectChanges();
    expect(element.querySelector('use').getAttribute('xlink:href')).toEqual(
      '#chevron-down-circle',
    );
    component.toggleIconName = 'exclamation';
    fixture.detectChanges();
    expect(element.querySelector('use').getAttribute('xlink:href')).toEqual(
      '#exclamation',
    );
  });

  it('should emit open and closed events when toggled', (done) => {
    let openEventEmitted = false;
    let closedEventEmitted = false;

    component.openedEvent.subscribe((g) => {
      openEventEmitted = true;
      done();
    });
    component.closedEvent.subscribe((g) => {
      closedEventEmitted = true;
      done();
    });

    element.querySelector('button').click();
    expect(openEventEmitted).toEqual(true);
    expect(closedEventEmitted).toEqual(false);

    element.querySelector('button').click();
    expect(closedEventEmitted).toEqual(true);
  });
});
