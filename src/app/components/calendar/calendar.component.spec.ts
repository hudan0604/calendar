import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('datePicker open closed assertions', () => {
    expect(component.calendarParams().isOpened).toBe(false);

    fixture.debugElement
      .query(By.css('[data-testid="calendarWraperLayout"]'))
      .nativeElement.click();
    expect(component.calendarParams().isOpened).toBe(true);
  });
});
