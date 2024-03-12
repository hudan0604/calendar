import { DatePipe, NgClass, SlicePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DatePickerDay } from '../../models/datePicker.models';
import { DateService } from '../../services/date/date.service';

@Component({
  selector: 'cld-calendar-days',
  standalone: true,
  imports: [DatePipe, SlicePipe, NgClass],
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

  public selectDay(day: DatePickerDay) {
    const isDaySelected = !!this.daysList().find((day) => day.isSelected);
    if (!isDaySelected) {
      day.isSelected = true;
    } else {
      if (!day.isSelected) {
        this.daysList().find((day) => day.isSelected)!.isSelected = false;
      }
      day.isSelected = !day.isSelected;
    }
  }
}
