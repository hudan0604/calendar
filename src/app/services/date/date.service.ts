import { Injectable, signal, WritableSignal } from '@angular/core';
import {
  DatePickerDay,
  DatePickerParams,
  DatePickerPosition,
} from '../../models/datePicker.models';
import { calculateDatePickerPosition } from '../../utils/positioning/positioning.utils';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor() {}

  public month: WritableSignal<number> = signal(new Date().getMonth());
  public year: WritableSignal<number> = signal(new Date().getFullYear());
  public day: WritableSignal<number | null> = signal(null);
  public daysList: WritableSignal<Array<DatePickerDay>> = signal([]);
  public calendarParams: WritableSignal<DatePickerParams> = signal(
    DatePickerParams.getNewObject()
  );

  public getDaysInMonth(monthNumber: number): number {
    return new Date(this.year(), monthNumber + 1, 0).getDate();
  }

  public constructMonthDays() {
    let arr: Array<DatePickerDay> = [];
    for (let i = 1; i <= this.getDaysInMonth(this.month()); i++) {
      arr.push(
        new DatePickerDay(new Date(this.year(), this.month(), i), false)
      );
    }
    const firstDayNumberInWeek = arr[0]!.date.getDay() - 1;
    if (firstDayNumberInWeek > 0) {
      const lastMonthNumberOfDays = this.getDaysInMonth(this.month() - 1);
      for (let i = 0; i < firstDayNumberInWeek; i++) {
        arr.unshift(
          new DatePickerDay(
            new Date(
              this.month() === 0 ? this.year() - 1 : this.year(),
              this.month() - 1,
              lastMonthNumberOfDays - i
            ),
            false
          )
        );
      }
    }
    this.daysList.set(arr);
  }

  public decr() {
    if (this.month() === 0) {
      this.month.set(11);
      this.year.update((val) => val - 1);
    } else {
      this.month.update((val) => val - 1);
    }

    this.constructMonthDays();
  }

  public incr() {
    if (this.month() === 11) {
      this.month.set(0);
      this.year.update((val) => val + 1);
    } else {
      this.month.update((val) => val + 1);
    }

    this.constructMonthDays();
  }

  public handleDatePickerOpening(event?: MouseEvent) {
    this.calendarParams.set(
      new DatePickerParams(
        !this.calendarParams().isOpened,
        event
          ? calculateDatePickerPosition(event)
          : this.calendarParams().position
      )
    );
    if (!this.calendarParams().isOpened) {
      this.constructMonthDays();
    }
  }
}
