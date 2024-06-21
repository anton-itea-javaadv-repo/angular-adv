import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CommentsCheckerChild2Component} from './comments-checker-child2.component';

describe('CommentsCheckerChild2Component', () => {
  let component: CommentsCheckerChild2Component;
  let fixture: ComponentFixture<CommentsCheckerChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsCheckerChild2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsCheckerChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
