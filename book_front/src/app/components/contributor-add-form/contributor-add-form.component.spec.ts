import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorAddFormComponent } from './contributor-add-form.component';

describe('AuthorAddFormComponent', () => {
  let component: ContributorAddFormComponent;
  let fixture: ComponentFixture<ContributorAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributorAddFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributorAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
