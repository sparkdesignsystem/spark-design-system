import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkModalComponent } from './sprk-modal.component';

describe('SprkModalComponent', () => {
  let component: SprkModalComponent;
  let fixture: ComponentFixture<SprkModalComponent>;
  let modalElement: HTMLElement;
  let confirmButtonElement: HTMLElement;
  let cancelElement: HTMLElement;
  let closeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkModalComponent, SprkIconComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkModalComponent);
    component = fixture.componentInstance;
    component.isVisible = true;
    component.modalType = 'choice';
    fixture.detectChanges();
    modalElement = fixture.nativeElement.querySelector('.sprk-c-Modal');
    confirmButtonElement = fixture.nativeElement.querySelectorAll(
      'footer button',
    )[1];
    cancelElement = fixture.nativeElement.querySelectorAll('footer button')[0];
    closeElement = fixture.nativeElement.querySelector('header button');
  });

  afterEach(() => {
    component.isVisible = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the modal when isVisible is true', () => {
    expect(modalElement.classList.contains('sprk-c-Modal')).toEqual(true);
  });

  it('should not show the modal when isVisible is false', () => {
    component.isVisible = false;
    fixture.detectChanges();
    modalElement = fixture.nativeElement.querySelector('.sprk-c-Modal');
    expect(modalElement).toEqual(null);
  });

  it('should not show the modal when isVisible is not set', () => {
    component.isVisible = null;
    fixture.detectChanges();
    modalElement = fixture.nativeElement.querySelector('.sprk-c-Modal');
    expect(modalElement).toEqual(null);
  });

  it('should set the title to the value of the title input', () => {
    component.title = 'This is my title';
    fixture.detectChanges();
    expect(
      modalElement.querySelector('.sprk-c-Modal__heading').textContent.trim(),
    ).toEqual('This is my title');
  });

  it('should emit confirmClick when the confirm button is clicked', (done) => {
    let called = false;
    component.confirmClick.subscribe((g) => {
      called = true;
      done();
    });
    confirmButtonElement.click();
    expect(called).toEqual(true);
  });

  it('should emit cancelClick when cancel is clicked', (done) => {
    let called = false;
    fixture.detectChanges();
    component.cancelClick.subscribe((g) => {
      called = true;
      done();
    });
    cancelElement.click();
    expect(called).toEqual(true);
  });

  it('should emit hide when Escape is pressed', (done) => {
    let called = false;
    component.hide.subscribe((g) => {
      called = true;
      done();
    });
    const event = new KeyboardEvent('keydown', {
      key: 'Escape',
    });
    document.dispatchEvent(event);
    expect(called).toEqual(true);
  });

  it('should not emit hide when Escape is pressed on a wait type', (done) => {
    let called = false;
    component.modalType = 'wait';
    fixture.detectChanges();
    component.hide.subscribe((g) => {
      called = true;
      done();
    });
    const event = new KeyboardEvent('keydown', {
      key: 'Escape',
    });
    document.dispatchEvent(event);
    // wait for 500ms then go, the expected behavior causes a timeout
    setTimeout(() => {
      done();
      expect(called).toEqual(false);
    }, 500);
  });

  it('should do nothing when a key is pressed that is not Escape', (done) => {
    let called = false;
    component.isVisible = false;
    fixture.detectChanges();
    component.hide.subscribe((g) => {
      called = true;
      done();
    });
    const event = new KeyboardEvent('keydown', {
      key: 'Control',
    });
    document.dispatchEvent(event);
    // wait for 500ms then go, the expected behavior causes a timeout
    setTimeout(() => {
      done();
      expect(called).toEqual(false);
    }, 500);
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    expect(modalElement.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    expect(modalElement.getAttribute('data-id')).toBeNull();
  });

  it('should add analyticsString to close modal button when analyticsString has a value', () => {
    const closeAnalyticsString = 'closeModal';
    component.closeAnalyticsString = closeAnalyticsString;
    fixture.detectChanges();
    expect(closeElement.getAttribute('data-analytics')).toEqual(
      closeAnalyticsString,
    );
  });

  it('should not add analyticsString to close modal button when analyticsString has no value', () => {
    component.closeAnalyticsString = null;
    fixture.detectChanges();
    expect(closeElement.getAttribute('data-analytics')).toBeNull();
  });
});
