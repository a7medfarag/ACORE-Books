import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBooksComponent } from './main-books.component';

describe('MainBooksComponent', () => {
  let component: MainBooksComponent;
  let fixture: ComponentFixture<MainBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainBooksComponent]
    });
    fixture = TestBed.createComponent(MainBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
