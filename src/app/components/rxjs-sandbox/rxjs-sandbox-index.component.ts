import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { RxjsInput, RxjsSlider } from './../../models/rxjsDTO';

@Component({
  selector: 'app-rxjs-sandbox-index',
  templateUrl: './rxjs-sandbox-index.component.html',
  styleUrls: ['./rxjs-sandbox-index.component.scss'],
})
export class RxjsSandboxIndexComponent implements OnInit {
  @Input() give: number;
  inputSubject: BehaviorSubject<RxjsInput>;
  sliderSubject: BehaviorSubject<RxjsSlider>;

  get input(): RxjsInput {
    return this.inputSubject.getValue();
  }
  set input(value: RxjsInput) {
    this.inputSubject.next(value);
  }

  get slider(): RxjsSlider {
    return this.sliderSubject.getValue();
  }
  set slider(value: RxjsSlider) {
    this.sliderSubject.next(value);
  }

  formatHeightLabel = (value: number) => value + 'cm';
  formatWeightLabel = (value: number) => value + 'kg';

  ngOnInit(): void {
    this.inputSubject = new BehaviorSubject<RxjsInput>(new RxjsInput());
    this.sliderSubject = new BehaviorSubject<RxjsSlider>(
      new RxjsSlider(178, 65)
    );

    this.sliderSubject.subscribe(console.log);
  }

  handleSliderChange(change: number) {
    this.slider = new RxjsSlider(change, 65);
  }
}
