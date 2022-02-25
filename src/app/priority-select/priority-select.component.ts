import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-priority-select',
  templateUrl: './priority-select.component.html',
  styleUrls: ['./priority-select.component.scss'],
  animations: [
    trigger('expandingAnimation', [
      state('void', style({height: 0, opacity: 0})),
      transition('void <=> *', [
        animate("0.2s ease")
      ]),
    ]),
    trigger('fadingAnimation', [
      state('*', style({opacity: 1, height: '48px'})),
      state('void', style({opacity: 0, height: 0})),
      transition('void <=> *', [animate('.3s ease')]),
    ]),
    trigger('test-bgC', [
      state('*', style({backgroundColor: 'green'})),
      state('void', style({backgroundColor: 'yellow'})),
      transition('void <=> *', [animate('.3s ease')]),
      // transition('* => void', [ style({ opacity: 1, height: '48px'}), animate('.5s ease', style({ opacity: 0, height: 0}))]),
      // transition('* => void', [style({opacity: 1, height: '48px'}), animate('.5s ease', style({opacity: 0, height: 0}))]),
      // transition('* <=> *', [
      //   style({opacity: 0, height: 0}),
      //   animate('.5s ease', style({opacity: 1, height: '48px'})),
      // ])
    ])
  ],
})


export class PrioritySelectComponent {
  // *add colour attribute

  selectedItemValue = 1
  items = [{"Colour": "#ed4345", "Value": 3, "Text": "High"}
          , {"Colour": "#fac14e", "Value": 1, "Text": "Low"}
          , {"Colour": "#6470ed", "Value": 2, "Text": "Medium"}]
  controlName = 'priority';


  // codes need to be included
  newOptionData = {"Colour": "", "Text":""}
  editOptionMode: boolean = false ; // hidden by default
  currentItemLengthWhenEditing: number = 3; // @discarded
  tempState: string = 'step1'; // @discarded

  onCreateNewOption () {
    // replace with the actual service   method
    if (!!this.newOptionData.Colour && !!this.newOptionData.Text) {
      this.items.push({"Colour": this.newOptionData.Colour, "Value": Math.max.apply(Math, this.items.map( item => { return item.Value; }))+1, "Text": this.newOptionData.Text});
      this.newOptionData.Text = "";
    }
  }

  onOpenedChange(){
    this.resetEditOptionStatus();
    this.items = this.items.map(item => Object.assign({}, item)); // Do deep clone to force DOM rerender to work around the void animation status set by mat-select-panel
  }

  onDeleteOption(optionValue: number){
    this.items = this.items.filter(({Value}) => optionValue !== Value);
  }

  onToggleEditMode () {
    if (this.editOptionMode){
      this.resetEditOptionStatus()
    } else
      this.editOptionMode = true;
  }

  resetEditOptionStatus () {
    this.editOptionMode = false;
    this.newOptionData = {"Colour": "", "Text":""};
  }

  get selectedItem () {
    const value = this.selectedItemValue;
    const selectedItem = this.items.find(item => item.Value === value);
    return {"Colour": selectedItem?.Colour, "Value": selectedItem?.Value, "Text": selectedItem?.Text};
  }

}
