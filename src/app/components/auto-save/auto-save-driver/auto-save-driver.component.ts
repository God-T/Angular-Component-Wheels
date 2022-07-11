import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { EnumAutoSaveStatus } from 'src/app/models/enums';
import { UnsavedChangesDialogComponent } from '../unsaved-changes-dialog/unsaved-changes-dialog.component';

@Component({
  selector: 'app-auto-save-driver',
  templateUrl: './auto-save-driver.component.html',
  styleUrls: ['./auto-save-driver.component.css'],
})
export class AutoSaveDriverComponent implements OnInit {
  autoSaveStatusUpdating: BehaviorSubject<EnumAutoSaveStatus> =
    new BehaviorSubject<EnumAutoSaveStatus>(EnumAutoSaveStatus.Idle);

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.autoSaveStatusUpdating = new BehaviorSubject<EnumAutoSaveStatus>(
      EnumAutoSaveStatus.Idle
    );
  }

  handleDialogOpen() {
    if (
      this.autoSaveStatusUpdating.getValue() === EnumAutoSaveStatus.Saving ||
      this.autoSaveStatusUpdating.getValue() === EnumAutoSaveStatus.Error
    )
      this.dialog
        .open(UnsavedChangesDialogComponent, {
          data: {
            autoSaveStatusUpdating: this.autoSaveStatusUpdating,
          },
          width: '500px',
        })
        .afterClosed();
  }

  handleAutoSave() {
    this.autoSaveStatusUpdating.next(EnumAutoSaveStatus.Saving);
    setTimeout(() => {
      this.autoSaveStatusUpdating.next(EnumAutoSaveStatus.Saved);
    }, 5000); // Faking the saving time with 5s
  }
}

// private checkActivitiesAlreadyLinkedOrUnlinked(
//   activities: ActivityDTO[],
//   isLinked: boolean
// ): boolean {
//   const names: string[] = [];
//   activities.map((a) => {
//     const found = this.stakeholder.StakeholderActivities.find(
//       (_a) => _a.LinkID === a.LinkID
//     );
//     if (!found) return;
//     names.push(found.MethodName);
//   });
//   if (names.length === 0) return false;
//   const nameToSting = names.join(' ,');
//   const msg =
//     $localize`Activities ` + nameToSting + isLinked
//       ? $localize` already linked`
//       : $localize` already unlinked`;
//   this.openSnackBar(msg);
//   return true;
// }
