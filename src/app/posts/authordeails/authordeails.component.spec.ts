import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthordeailsComponent } from './authordeails.component';

describe('AuthordeailsComponent', () => {
  let component: AuthordeailsComponent;
  let fixture: ComponentFixture<AuthordeailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthordeailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthordeailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
