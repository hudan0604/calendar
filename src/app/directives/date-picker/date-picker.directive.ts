import { Directive, HostListener, inject } from '@angular/core';
import { DateService } from '../../services/date/date.service';

@Directive({
  selector: '[cldDatePicker]',
  standalone: true,
})
export class DatePickerDirective {
  public dateService = inject(DateService);

  @HostListener('click', ['$event']) openDatePicker(event: MouseEvent): void {
    this.dateService.handleDatePickerOpening(event);
  }
}
