import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ErrorPlaceComponent} from './error-place.component';

describe('ErrorPlaceComponent', () => {
  let component: ErrorPlaceComponent;
  let fixture: ComponentFixture<ErrorPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorPlaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
