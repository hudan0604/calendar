import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DateService } from '../../services/date/date.service';
import { CalendarComponent } from '../calendar/calendar.component';

import { CalendarHeaderComponent } from './calendar-header.component';

describe('CalendarHeaderComponent', () => {
  let component: CalendarHeaderComponent;
  let fixture: ComponentFixture<CalendarHeaderComponent>;
  let service: DateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarHeaderComponent],
      providers: [DateService],
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarHeaderComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(DateService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display proper month and year', () => {
    fixture.componentRef.setInput('month', 1);
    fixture.componentRef.setInput('year', 2024);
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('[data-testid="monthAndYear"]'))
        .nativeElement.textContent
    ).toBe('Feb 2024');
  });
});
