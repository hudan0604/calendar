import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DateService } from '../../services/date/date.service';
import { CalendarDaysComponent } from '../calendar-days/calendar-days.component';
import { CalendarHeaderComponent } from '../calendar-header/calendar-header.component';

@Component({
  selector: 'cld-calendar',
  standalone: true,
  imports: [CalendarDaysComponent, CalendarHeaderComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
  public month = inject(DateService).month;
  public year = inject(DateService).year;
}
