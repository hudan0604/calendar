import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  inject,
} from '@angular/core';
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
  public calendarParams = inject(DateService).calendarParams;

  @HostBinding('style.height') get height() {
    return this.calendarParams().isOpened ? '406px' : '0';
  }
  @HostBinding('style.top') get top() {
    return this.calendarParams().position.top + 'px';
  }
  @HostBinding('style.left') get left() {
    return this.calendarParams().position.left + 'px';
  }
}
