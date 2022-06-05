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
import { MatDividerModule } from '@angular/material/divider';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { AutoScrollToBottomDirective } from './directives/auto-scroll-to-bottom.directive';
import { AutoFocusInputFieldDirective } from './directives/auto-focus-input-field.directive';
import { ColourPickerComponent } from './components/colour-pickers/colour-picker-mat-menu/colour-picker.component';
import { ColourPickerMatSelectComponent } from './components/colour-pickers/colour-picker-mat-select/colour-picker-mat-select.component';
import { PrioritySelectComponent } from './components/colour-pickers/priority-select--pure/priority-select.component';
import { DropDownListEditComponent } from './components/colour-pickers/drop-down-list-edit/drop-down-list-edit.component';
import { AutoSaveComponent } from './components/auto-save/auto-save.component';
import { AutoSaveDriverComponent } from './components/auto-save/auto-save-driver/auto-save-driver.component';
import { RxjsSandboxIndexComponent } from './components/rxjs-sandbox/rxjs-sandbox-index.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UnsavedChangesDialogComponent } from './components/auto-save/unsaved-changes-dialog/unsaved-changes-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

const baseComponents = [
  ColourPickerComponent,
  ColourPickerMatSelectComponent,
  PrioritySelectComponent,
  DropDownListEditComponent,
  AutoSaveComponent,
  AutoSaveDriverComponent,
  DragDropComponent,
  RxjsSandboxIndexComponent,
  UnsavedChangesDialogComponent,
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
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  MatDividerModule,
  DragDropModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatSliderModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatTooltipModule,
];

@NgModule({
  declarations: [AppComponent, ...baseComponents, ...baseDirectives],
  imports: [...baseModule, ...UIModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
