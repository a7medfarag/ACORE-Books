import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EditIconComponent} from './EditIcon.component';

describe('DotsComponent', () => {
  let component: EditIconComponent;
  let fixture: ComponentFixture<EditIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditIconComponent]
    });
    fixture = TestBed.createComponent(EditIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
