import { Component } from '@angular/core';

@Component({
  selector: 'app-colour-picker',
  templateUrl: './colour-picker.component.html',
  styleUrls: ['./colour-picker.component.scss']

})
export class ColourPickerComponent {
  // colourValueList = [ "#990038", "#ffa3c5", "#a3b6ff", "#001b85", "#078500", "#adffa8"];
  colourPicked: string = "No result";
  colourValueList = [ "#c7c4c4", "#f06a6a", "#ec8d71", "#f1bd6c", "#f8df72", "#aecf55", "#5da283", "#4ecbc4",
                       "#9ee7e3", "#4573d2", "#8d84e8", "#b36bd4", "#f9aaef", "#f26fb2", "#fc979a", "#6d6e6f"];

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
    return l / 255;
  }
}
