import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { EnumAutoSaveStatus } from 'src/app/models/enums';
import { BehaviorSubject } from 'rxjs';

export interface UnsavedChangesDialogData {
  autoSaveStatusUpdating: BehaviorSubject<EnumAutoSaveStatus>;
}

@Component({
  selector: 'app-unsaved-changes-dialog',
  templateUrl: './unsaved-changes-dialog.component.html',
  styleUrls: ['./unsaved-changes-dialog.component.scss'],
})
export class UnsavedChangesDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UnsavedChangesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UnsavedChangesDialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  isSaving(): boolean {
    return (
      this.data.autoSaveStatusUpdating.getValue() === EnumAutoSaveStatus.Saving
    );
  }
}
