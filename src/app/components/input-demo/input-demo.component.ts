import { Component } from '@angular/core';
import { DatePickerDirective } from '../../directives/date-picker/date-picker.directive';
import { DateService } from '../../services/date/date.service';

@Component({
  selector: 'cld-input-demo',
  standalone: true,
  imports: [DatePickerDirective],
  templateUrl: './input-demo.component.html',
  styleUrl: './input-demo.component.scss',
})
export class InputDemoComponent {
  constructor(public dateService: DateService) {}
}
