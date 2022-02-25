import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  colourValueList = [ "#990038", "#ffa3c5", "#a3b6ff", "#001b85", "#078500", "#adffa8"];
  colourPicked: string = "";
  fieldName = "Todo"

  getLightnessFromHexValue(hex: string): number {
    // Convert hex to RGB first
    let r: string = "";
    let g: string = "";
    let b: string = "";
    if (hex.length == 4) {
      r = '0x' + hex[1] + hex[1];
      g = '0x' + hex[2] + hex[2];
      b = '0x' + hex[3] + hex[3];
    } else if (hex.length == 7) {
      r = '0x' + hex[1] + hex[2];
      g = '0x' + hex[3] + hex[4];
      b = '0x' + hex[5] + hex[6];
    }
    let l =
      (Math.min(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)) +
        Math.max(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16))) /
      2;
    l = +(l * 100).toFixed(1);
    console.log(l / 255);
    return l / 255;
  }
}
