import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  effect,
  untracked,
} from '@angular/core';
import { DateService } from '../../services/date/date.service';

@Directive({
  selector: '[cldDatePicker]',
  standalone: true,
})
export class DatePickerDirective {
  public dateService = inject(DateService);
  public day = inject(DateService).day;
  public month = this.dateService.month;
  public year = this.dateService.year;

  constructor(private element: ElementRef<HTMLInputElement>) {
    effect(() => {
      this.element.nativeElement.value = this.day()
        ? new Date(
            untracked(this.year),
            untracked(this.month),
            this.day()!
          ).toLocaleString()
        : '';
    });
  }

  @HostListener('click', ['$event']) toggleDatePicker(event: MouseEvent): void {
    this.dateService.handleDatePickerOpening(event);
  }
}
