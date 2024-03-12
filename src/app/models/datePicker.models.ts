export class DatePickerDay {
  constructor(public date: Date, public isSelected: boolean) {}
}

export class DatePickerParams {
  constructor(public isOpened: boolean, public position: DatePickerPosition) {}

  public static getNewObject(): DatePickerParams {
    return new DatePickerParams(false, DatePickerPosition.getNewObject());
  }
}

export class DatePickerPosition {
  constructor(public top: number, public left: number) {}

  public static getNewObject(): DatePickerPosition {
    return new DatePickerPosition(0, 0);
  }
}
