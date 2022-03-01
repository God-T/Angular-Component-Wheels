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
import { PrioritySelectComponent } from './priority-select/priority-select.component';
import { MatDividerModule } from '@angular/material/divider';
import { DragDropComponent } from './drag-drop/drag-drop/drag-drop.component';
import { DropDownOptionEditComponent } from './drop-down-option-edit/drop-down-option-edit.component';
import { AutoScrollToBottomDirective } from './directives/auto-scroll-to-bottom.directive';

const baseComponents = [
  AppComponent,
  ColourPickerComponent,
  ColourPickerMatSelectComponent,
  PrioritySelectComponent,
  DragDropComponent,
  DropDownOptionEditComponent,
];
const baseDirectives = [AutoScrollToBottomDirective];

@NgModule({
  declarations: [...baseComponents, ...baseDirectives],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSelectModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
