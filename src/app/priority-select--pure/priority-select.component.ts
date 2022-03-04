import {
  animate,
  animateChild,
  group,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectListItemWithColour } from '../models/select-list-item';

@Component({
  selector: 'app-priority-select',
  templateUrl: './priority-select.component.html',
  styleUrls: ['./priority-select.component.scss'],
  animations: [
    trigger('expandingAnimation', [
      state('void', style({ height: 0, opacity: 0 })),
      transition('void <=> *', [animate('0.2s ease')]),

      // transition('void => *', [
      //   group([
      //     animate('0.2s ease'),
      //     query('@expandingAnimationHori', [
      //       style({ opacity: 0, height: 0 }),
      //       animate('2s ease'),
      //       style({ opacity: 1, width: '24px' }),
      //     ]),
      //     // query('.text', [
      //     //   animate(
      //     //     '800ms ease-in-out',
      //     //     style({
      //     //       top: '10%',
      //     //       left: '90%',
      //     //       transform: 'translate(-170px, -75px)',
      //     //     })
      //     //   ),
      //     // ]),
      //   ]),
      // ]),
    ]),
    trigger('expandingAnimation2', [
      state('grow', style({ height: '*' })),
      state('shrink', style({ height: 0 })),
      transition('grow <=> shrink', [animate('0.2s ease')]),

      // transition('void => *', [
      //   group([
      //     animate('0.2s ease'),
      //     query('@expandingAnimationHori', [
      //       style({ opacity: 0, height: 0 }),
      //       animate('2s ease'),
      //       style({ opacity: 1, width: '24px' }),
      //     ]),
      //     // query('.text', [
      //     //   animate(
      //     //     '800ms ease-in-out',
      //     //     style({
      //     //       top: '10%',
      //     //       left: '90%',
      //     //       transform: 'translate(-170px, -75px)',
      //     //     })
      //     //   ),
      //     // ]),
      //   ]),
      // ]),
    ]),
    trigger('fadingAnimation', [
      state('*', style({ opacity: 1 })),
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('.3s ease')]),
      // transition('void <=> *', [
      //   group([
      //     query('@expandingAnimationHori', animateChild()),
      //     animate('.3s ease'),
      //   ]),
      // ]),
    ]),
    trigger('expandingAnimationHori', [
      state('show', style({ opacity: 1, width: '24px' })),
      state('hide', style({ opacity: 0, width: 0 })),
      transition('hide <=> show', [animate('2s ease')]),
    ]),
    trigger('test-bgC', [
      state('*', style({ backgroundColor: 'green' })),
      state('void', style({ backgroundColor: 'yellow' })),
      transition('void <=> *', [animate('.3s ease')]),
      // transition('* => void', [ style({ opacity: 1, height: '48px'}), animate('.5s ease', style({ opacity: 0, height: 0}))]),
      // transition('* => void', [style({opacity: 1, height: '48px'}), animate('.5s ease', style({opacity: 0, height: 0}))]),
      // transition('* <=> *', [
      //   style({opacity: 0, height: 0}),
      //   animate('.5s ease', style({opacity: 1, height: '48px'})),
      // ])
    ]),
  ],
})
export class PrioritySelectComponent {
  // *add colour attribute
  editMode: boolean;

  selectedItemValue: number = 1;

  optionList: SelectListItemWithColour[] = [
    { Colour: '#fac14e', Value: 1, Text: 'Low' },
    { Colour: '#6470ed', Value: 2, Text: 'Medium' },
    { Colour: '#ed4345', Value: 3, Text: 'High' },
  ];
  controlName: string = 'priority';

  // codes need to be included
  expandingAnimationHoriStatus: string = 'hide';

  onOpenedChange() {
    this.disableEditMode();
    // TODO emit to child
    this.optionList = this.optionList.map((item) => Object.assign({}, item)); // Do deep clone to force DOM rerender to work around the void animation status set by mat-select-panel
  }

  onDeleteOption(optionValue: number) {
    this.optionList = this.optionList.filter(
      ({ Value }) => optionValue !== Value
    );
  }

  disableEditMode() {
    this.editMode = false;
  }

  get selectedItem() {
    const value = this.selectedItemValue;
    const selectedItem = this.optionList.find((item) => item.Value === value);
    return {
      Colour: selectedItem?.Colour,
      Value: selectedItem?.Value,
      Text: selectedItem?.Text,
    };
  }
}
