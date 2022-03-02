import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { ColourPickerMatSelectComponent } from './colour-picker-mat-select/colour-picker-mat-select.component';
import { ColourPickerComponent } from './colour-picker-overlay/colour-picker.component';
import { MatDividerModule } from '@angular/material/divider';
import { DragDropComponent } from './drag-drop/drag-drop/drag-drop.component';
import { AutoScrollToBottomDirective } from './directives/auto-scroll-to-bottom.directive';
import { AutoFocusInputFieldDirective } from './directives/auto-focus-input-field.directive';
import { PrioritySelectComponent } from './priority-select--pure/priority-select.component';
import { EditableDropDownListComponent } from './editable-drop-down-list/editable-drop-down-list.component';

const baseComponents = [
  ColourPickerComponent,
  ColourPickerMatSelectComponent,
  PrioritySelectComponent,
  DragDropComponent,
];

const baseDirectives = [
  AutoScrollToBottomDirective,
  AutoFocusInputFieldDirective,
];

const baseModule = [BrowserModule, FormsModule];

const UIModule = [
  BrowserAnimationsModule,
  MatMenuModule,
  MatSelectModule,
  MatIconModule,
  MatGridListModule,
  MatDividerModule,
  DragDropModule,
];

@NgModule({
  declarations: [AppComponent, ...baseComponents, ...baseDirectives, EditableDropDownListComponent],
  imports: [...baseModule, ...UIModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
