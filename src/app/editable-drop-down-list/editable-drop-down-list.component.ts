import { Component, Input, OnInit } from '@angular/core';
import { SelectListItemWithColour } from '../models/select-list-item';

@Component({
  selector: 'app-editable-drop-down-list',
  templateUrl: './editable-drop-down-list.component.html',
  styleUrls: ['./editable-drop-down-list.component.css'],
})
export class EditableDropDownListComponent implements OnInit {
  @Input() editMode: boolean;
  @Input() list: SelectListItemWithColour;

  constructor() {}

  ngOnInit(): void {}
}
