import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectListItemWithColour } from '../models/select-list-item';

@Component({
  selector: 'app-drop-down-list-edit',
  templateUrl: './drop-down-list-edit.component.html',
  styleUrls: ['./drop-down-list-edit.component.scss'],
})
export class DropDownListEditComponent {
  @Input()
  get editMode(): boolean {
    return this._editMode;
  }
  @Input()
  get optionList(): SelectListItemWithColour[] {
    return this._optionList;
  }

  @Output() editModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() optionListChange: EventEmitter<SelectListItemWithColour[]> =
    new EventEmitter<SelectListItemWithColour[]>();

  _editMode: boolean = false;
  _optionList: SelectListItemWithColour[] = [];
  activeScrollbar: boolean = true;
  inputFocused: boolean = false;
  autoFocusInputFieldTriggered: boolean = false;
  autoScrollToBottomTriggered: boolean = false;
  controlName = 'priority';
  newOptionData: SelectListItemWithColour = {
    Colour: '',
    Text: '',
    Value: -1,
  };

  set editMode(value: boolean) {
    this._editMode = value;
    this.editModeChange.emit(this._editMode);
  }

  set optionList(value: SelectListItemWithColour[]) {
    this._optionList = value;
    this.optionListChange.emit(this._optionList);
  }

  onToggleEditMode() {
    if (this.editMode) {
      this.resetEditOptionStatus();
    } else {
      this.editMode = true;
      this.autoFocusInputFieldTriggered = true;
      this.autoScrollToBottomTriggered = true;
    }
  }

  resetEditOptionStatus() {
    this.editMode = false;
    this.newOptionData = { Colour: '', Text: '', Value: -1 };
  }

  onCreateNewOption() {
    // replace with the actual service method
    if (!!this.newOptionData.Colour && !!this.newOptionData.Text) {
      this.optionList.push({
        Colour: this.newOptionData.Colour,
        Value:
          Math.max.apply(
            Math,
            this._optionList.map((item) => {
              return item.Value;
            })
          ) + 1,
        Text: this.newOptionData.Text,
      });
      this.newOptionData.Text = '';

      this.autoFocusInputFieldTriggered = true;
      this.autoScrollToBottomTriggered = true;
    }
  }
}
