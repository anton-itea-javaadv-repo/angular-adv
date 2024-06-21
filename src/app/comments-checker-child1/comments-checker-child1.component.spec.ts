import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CommentsCheckerChild1Component} from './comments-checker-child1.component';

describe('CommentsCheckerChild1Component', () => {
  let component: CommentsCheckerChild1Component;
  let fixture: ComponentFixture<CommentsCheckerChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsCheckerChild1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsCheckerChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
