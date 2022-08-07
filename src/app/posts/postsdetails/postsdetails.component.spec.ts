import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsdetailsComponent } from './postsdetails.component';

describe('PostsdetailsComponent', () => {
  let component: PostsdetailsComponent;
  let fixture: ComponentFixture<PostsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
