import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor() {}

  public month: WritableSignal<number> = signal(new Date().getMonth());
  public year: WritableSignal<number> = signal(new Date().getFullYear());
  public daysList: WritableSignal<Array<Date>> = signal([]);

  public getDaysInMonth(monthNumber: number): number {
    return new Date(this.year(), monthNumber + 1, 0).getDate();
  }

  public constructMonthDays() {
    let arr: Array<Date> = [];
    for (let i = 1; i <= this.getDaysInMonth(this.month()); i++) {
      arr.push(new Date(this.year(), this.month(), i));
    }
    console.log('arr', arr);
    const firstDayNumberInWeek = arr[0]!.getDay() - 1;
    console.log(firstDayNumberInWeek);
    const lastDayNumberInWeek = arr[arr.length - 1]!.getDay();

    if (firstDayNumberInWeek > 0) {
      const lastMonthNumberOfDays = this.getDaysInMonth(this.month() - 1);
      for (let i = 0; i < firstDayNumberInWeek; i++) {
        arr.unshift(
          new Date(
            this.month() === 0 ? this.year() - 1 : this.year(),
            this.month() - 1,
            lastMonthNumberOfDays - i
          )
        );
      }
    }
    this.daysList.set(arr);
  }
}