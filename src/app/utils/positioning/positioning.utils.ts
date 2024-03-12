import { DatePickerPosition } from '../../models/datePicker.models';

export function getBoundingClientRect(event: MouseEvent): DOMRect {
  return (event.target as HTMLElement).getBoundingClientRect();
}

export function calculateDatePickerPosition(
  event: MouseEvent
): DatePickerPosition {
  const elementPositioningDomRect: DOMRect = getBoundingClientRect(event);
  const windowWidth: number = window.innerWidth;
  const windowHeight: number = window.innerHeight;
  const top: number =
    windowHeight - elementPositioningDomRect.bottom >= 406
      ? elementPositioningDomRect.bottom
      : elementPositioningDomRect.top - 406;
  const bottom: number =
    windowWidth - elementPositioningDomRect.left >= 335
      ? elementPositioningDomRect.left
      : elementPositioningDomRect.right - 335;

  return new DatePickerPosition(top, bottom);
}
