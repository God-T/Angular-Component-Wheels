import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownListEditComponent } from './drop-down-list-edit.component';

describe('DropDownListEditComponent', () => {
  let component: DropDownListEditComponent;
  let fixture: ComponentFixture<DropDownListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropDownListEditComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
