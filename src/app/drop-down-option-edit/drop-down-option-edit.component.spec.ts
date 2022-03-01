import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownOptionEditComponent } from './drop-down-option-edit.component';

describe('DropDownOptionEditComponent', () => {
  let component: DropDownOptionEditComponent;
  let fixture: ComponentFixture<DropDownOptionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownOptionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownOptionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
