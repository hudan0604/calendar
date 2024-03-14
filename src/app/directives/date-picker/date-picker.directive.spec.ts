import { Component, inject } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { DateService } from '../../services/date/date.service';
import { DatePickerDirective } from './date-picker.directive';

@Component({
  template: ` <input type="text" cldDatePicker /> `,
})
class FakeInputDemoComponent {}

describe('DatePickerDirective', () => {
  let component: FakeInputDemoComponent;
  let fixture: ComponentFixture<FakeInputDemoComponent>;
  let service: DateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FakeInputDemoComponent],
      imports: [CalendarComponent, DatePickerDirective],
      providers: [DateService],
    }).compileComponents();

    fixture = TestBed.createComponent(FakeInputDemoComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should open the daterPicker when click on the input that has the directive', () => {
    TestBed.runInInjectionContext((): void => {
      const input = fixture.debugElement.query(By.css('input'));
      service = inject(DateService);
      input.nativeElement.click();

      expect(service.calendarParams().isOpened).toBe(true);
    });
  });
});
