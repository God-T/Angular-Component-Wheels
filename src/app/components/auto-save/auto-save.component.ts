import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { EnumAutoSaveStatus } from 'src/app/models/enums';

@Component({
  selector: 'app-auto-save',
  templateUrl: './auto-save.component.html',
  styleUrls: ['./auto-save.component.scss'],
})
export class AutoSaveComponent implements OnInit {
  // @Input()
  // get autoSaveStatus(): AutoSaveStatus {
  //   return this._autoSaveStatus.getValue();
  // }
  // set autoSaveStatus(value: AutoSaveStatus) {
  //   this._autoSaveStatus.next(value);
  //   this.autoSaveStatusChange.emit(this._autoSaveStatus.getValue());
  // }

  // @Output() autoSaveStatusChange: EventEmitter<AutoSaveStatus> =
  //   new EventEmitter<AutoSaveStatus>();

  @Input() statusUpdating: BehaviorSubject<EnumAutoSaveStatus>;

  autoSaveStatusEnum = EnumAutoSaveStatus;
  returnIdleTimer: ReturnType<typeof setTimeout>;
  throttlingCounter = 0;

  get currentStatus() {
    return this.statusUpdating?.getValue();
  }
  get haveAllSavingsCompleted() {
    return this.throttlingCounter === 0 ? true : false;
  }

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.statusUpdating.subscribe((status) => {
      switch (status) {
        case this.autoSaveStatusEnum.Saving:
          this.start();
          break;
        case this.autoSaveStatusEnum.Saved:
          this.success();
          break;
        case this.autoSaveStatusEnum.Error:
          this.failed();
          break;
        default:
      }
    });
  }

  public start() {
    this.counterIncrement();
    clearTimeout(this.returnIdleTimer);
    this.snackBar.dismiss();
  }

  public success() {
    console.log(
      'throttlingCounter',
      this.throttlingCounter,
      this.haveAllSavingsCompleted
    );
    this.counterDecrement();
    clearTimeout(this.returnIdleTimer);
    if (this.haveAllSavingsCompleted) {
      this.openSnackBar('The stakeholder changes has been saved');
      this.returnIdleTimer = setTimeout(() => {
        // this.autoSaveStatus = this.autoSaveStatusEnum.Idle;
        this.statusUpdating.next(this.autoSaveStatusEnum.Idle);
      }, 2200);
    }
  }

  public failed() {
    // TODO: Handle save failed
  }

  private openSnackBar(message: string, action?: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['auto-save-snackbar'],
    });
  }

  counterIncrement() {
    console.log('+1');
    this.throttlingCounter++;
  }

  counterDecrement() {
    this.throttlingCounter--;
  }
}
