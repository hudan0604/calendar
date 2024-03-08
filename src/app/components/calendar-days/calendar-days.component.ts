import { DatePipe, SlicePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DateService } from '../../services/date/date.service';

@Component({
  selector: 'cld-calendar-days',
  standalone: true,
  imports: [DatePipe, SlicePipe],
  templateUrl: './calendar-days.component.html',
  styleUrl: './calendar-days.component.scss',
})
export class CalendarDaysComponent implements OnInit {
  public daysList = inject(DateService).daysList;
  public month = inject(DateService).month;

  constructor(public dateService: DateService) {}

  ngOnInit(): void {
    this.dateService.constructMonthDays();
  }
}
