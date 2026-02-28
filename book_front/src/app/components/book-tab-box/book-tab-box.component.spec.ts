import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTabBoxComponent } from './book-tab-box.component';


describe('BookTabBoxComponent', () => {
  let component: BookTabBoxComponent;
  let fixture: ComponentFixture<BookTabBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookTabBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookTabBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
