import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  ElementRef,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-colour-picker-mat-select',
  templateUrl: './colour-picker-mat-select.component.html',
  styleUrls: ['./colour-picker-mat-select.component.scss'],
})
export class ColourPickerMatSelectComponent implements OnInit {
  @Input()
  get colourPicked(): string {
    return this._colourPicked;
  }

  @Output() colourPickedChange = new EventEmitter<string>();

  _colourPicked: string = '#f06a6a';
  colourValueList = [
    '#f06a6a',
    '#ec8d71',
    '#f1bd6c',
    '#f8df72',
    '#aecf55',
    '#5da283',
    '#4ecbc4',
    '#9ee7e3',
    '#4573d2',
    '#8d84e8',
    '#b36bd4',
    '#f9aaef',
    '#f26fb2',
    '#fc979a',
    '#c7c4c4',
    '#6d6e6f',
  ];

  set colourPicked(value: string) {
    this._colourPicked = value;
    this.colourPickedChange.emit(this._colourPicked);
  }

  ngOnInit() {
    this.onSelectionChange(this.colourPicked); // Worked
  }

  onSelectionChange(value: string) {
    this.colourPicked = value;
  }

  pickContentColourBasedOnBgColour(bgColour: string): string {
    var colour = bgColour.substring(1, 7);
    var r = parseInt(colour.substring(0, 2), 16);
    var g = parseInt(colour.substring(2, 4), 16);
    var b = parseInt(colour.substring(4, 6), 16);
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#ffffff';
  }
}
