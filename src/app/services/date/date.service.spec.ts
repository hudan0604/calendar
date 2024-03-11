import { TestBed } from '@angular/core/testing';

import { DateService } from './date.service';

describe('DateService', () => {
  let service: DateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should increment properly the month when month is not last month of year', () => {
    service.month.set(4);
    service.incr();
    expect(service.month()).toEqual(5);
  });
  it('should increment properly the month and year when month is the last month of year', () => {
    service.month.set(11);
    service.year.set(2024);
    service.incr();
    expect(service.month()).toEqual(0);
    expect(service.year()).toEqual(2025);
  });
  it('should decrement properly the month when month is not first month of year', () => {
    service.month.set(7);
    service.decr();
    expect(service.month()).toEqual(6);
  });
  it('should decrement properly the month and year when month is the first month of year', () => {
    service.month.set(0);
    service.year.set(2012);
    service.decr();
    expect(service.month()).toEqual(11);
    expect(service.year()).toEqual(2011);
  });
});
