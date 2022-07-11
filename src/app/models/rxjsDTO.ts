export class SliderDTO {
  constructor(_height: number, _weight: number) {
    this.height = _height;
    this.weight = _weight;
  }

  height: number;
  weight: number;
}

export class InputDTO {
  name: string;
  age: number;
}

export class NestingInputDTO {
  input: InputDTO;
}
