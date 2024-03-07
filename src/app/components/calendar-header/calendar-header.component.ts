import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'cld-calendar-header',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './calendar-header.component.html',
  styleUrl: './calendar-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarHeaderComponent {
  public month = input<number>(0);
  public year = input<number>(0);
  public date = computed(() => new Date(this.year(), this.month(), 1));
}
