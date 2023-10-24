import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackArowComponent } from './back-arrow.component';

describe('BackArowComponent', () => {
  let component: BackArowComponent;
  let fixture: ComponentFixture<BackArowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackArowComponent]
    });
    fixture = TestBed.createComponent(BackArowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
