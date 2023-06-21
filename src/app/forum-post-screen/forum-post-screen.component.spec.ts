import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumPostScreenComponent } from './forum-post-screen.component';

describe('ForumPostScreenComponent', () => {
  let component: ForumPostScreenComponent;
  let fixture: ComponentFixture<ForumPostScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumPostScreenComponent]
    });
    fixture = TestBed.createComponent(ForumPostScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
