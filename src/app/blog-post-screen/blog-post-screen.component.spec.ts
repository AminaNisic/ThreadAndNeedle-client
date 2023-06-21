import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostScreenComponent } from './blog-post-screen.component';

describe('BlogPostScreenComponent', () => {
  let component: BlogPostScreenComponent;
  let fixture: ComponentFixture<BlogPostScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogPostScreenComponent]
    });
    fixture = TestBed.createComponent(BlogPostScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
