import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorAddFormComponent } from './author-add-form.component';

describe('AuthorAddFormComponent', () => {
  let component: AuthorAddFormComponent;
  let fixture: ComponentFixture<AuthorAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorAddFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
