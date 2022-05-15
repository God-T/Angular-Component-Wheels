import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EnumAutoSaveStatus } from 'src/app/models/enums';

@Component({
  selector: 'app-auto-save-driver',
  templateUrl: './auto-save-driver.component.html',
  styleUrls: ['./auto-save-driver.component.css'],
})
export class AutoSaveDriverComponent implements OnInit {
  autoSaveStatusUpdating: BehaviorSubject<EnumAutoSaveStatus> =
    new BehaviorSubject<EnumAutoSaveStatus>(EnumAutoSaveStatus.Idle);

  constructor() {}

  ngOnInit(): void {
    this.autoSaveStatusUpdating = new BehaviorSubject<EnumAutoSaveStatus>(
      EnumAutoSaveStatus.Idle
    );
  }

  handleAutoSave() {
    this.autoSaveStatusUpdating.next(EnumAutoSaveStatus.Saving);
    setTimeout(() => {
      this.autoSaveStatusUpdating.next(EnumAutoSaveStatus.Saved);
    }, 2000); // Faking the saving time with 2s
  }
}
