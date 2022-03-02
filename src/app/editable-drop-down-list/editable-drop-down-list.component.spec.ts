import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableDropDownListComponent } from './editable-drop-down-list.component';

describe('EditableDropDownListComponent', () => {
  let component: EditableDropDownListComponent;
  let fixture: ComponentFixture<EditableDropDownListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableDropDownListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableDropDownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
