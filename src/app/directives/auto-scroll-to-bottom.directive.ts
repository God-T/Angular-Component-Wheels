import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutoScrollToBottom]',
})
export class AutoScrollToBottomDirective {
  constructor(private el: ElementRef) {}

  ngAfterViewChecked() {
    this.el.nativeElement.scrollTop = this.el.nativeElement.scrollHeight;
  }
}
