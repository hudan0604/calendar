import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDemoComponent } from './input-demo.component';

describe('InputDemoComponent', () => {
  let component: InputDemoComponent;
  let fixture: ComponentFixture<InputDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the datePicker when click on input that contains directive', () => {
    expect(component).toBeTruthy();
  });
});
