import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputDemoComponent } from './components/input-demo/input-demo.component';

@Component({
  selector: 'cld-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputDemoComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'calendar';
}
