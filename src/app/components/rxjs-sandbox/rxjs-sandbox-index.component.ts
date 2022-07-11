import {
  Component,
  KeyValueDiffer,
  KeyValueDiffers,
  OnInit,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InputDTO, NestingInputDTO, SliderDTO } from './../../models/rxjsDTO';

@Component({
  selector: 'app-rxjs-sandbox-index',
  templateUrl: './rxjs-sandbox-index.component.html',
  styleUrls: ['./rxjs-sandbox-index.component.scss'],
})
export class RxjsSandboxIndexComponent implements OnInit {
  sliderSubject: BehaviorSubject<SliderDTO>;

  differ: KeyValueDiffer<string, any>;
  input: InputDTO;
  nestingInput: NestingInputDTO;

  get slider(): SliderDTO {
    return this.sliderSubject.getValue();
  }
  set slider(value: SliderDTO) {
    this.sliderSubject.next(value);
  }

  formatHeightLabel = (value: number) => value + 'cm';
  formatWeightLabel = (value: number) => value + 'kg';

  constructor(private differs: KeyValueDiffers) {}

  ngOnInit(): void {
    this.sliderSubject = new BehaviorSubject<SliderDTO>(new SliderDTO(178, 65));
    this.sliderSubject.subscribe(console.log);

    this.input = new InputDTO();
    this.differ = this.differs.find(this.input).create();

    this.nestingInput = new NestingInputDTO();
    this.nestingInput.input = new InputDTO();
    this.differ = this.differs.find(this.nestingInput).create();
  }

  ngDoCheck(): void {
    const changes = this.differ.diff(this.nestingInput);
    console.log(changes);
    if (changes) {
      console.log('changes');
    }
  }

  handleHeightChange(change: number) {
    this.slider = new SliderDTO(change, 65);
  }
}

// ngAfterViewInit() {
//   console.log('ngAfterViewInit');
// const autoSaveDebouncing = (next: QueryList<ElementRef>) => {
//   // Debouncing with 0.5 sec
//   if (!next.first) return;
//   console.log('binding');
//   this.stkFormRef.first.valueChanges
//     .pipe(
//       distinctUntilChanged(
//         (a, b) => JSON.stringify(a) === JSON.stringify(b)
//       )
//     )
//     .subscribe(() => {
//       console.log('form value changed', this.stakeholder);
//     });
// };
// this.stkFormRef.changes.subscribe(autoSaveDebouncing);
// }

// @ViewChildren('stkFormRef', { read: ElementRef })
// stkFormRef: QueryList<ElementRef>;

// ngAfterViewInit() {
//   console.log('ngAfterViewInit');
//   const autoSaveDebouncing = () => {
//     this.stkForm.valueChanges.subscribe((selectedValue) => {
//       console.log('form value changed');
//       console.log(selectedValue);
//     });
//   };
//   this.stkFormRef.changes.subscribe(autoSaveDebouncing);
// }
