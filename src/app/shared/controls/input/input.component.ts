import {Component, forwardRef, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder: string | undefined;
  @Output() changed = new EventEmitter<string>();

  value: string | undefined;
  isDisabled: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  onKeyup($event: Event): void {
    this.value = (<HTMLInputElement>$event.target).value;
    this.propagateChange((<HTMLInputElement>$event.target).value);
    this.changed.emit((<HTMLInputElement>$event.target).value);
  }

  onBlur(): void {
    this.propagateTouched();
  }

}
