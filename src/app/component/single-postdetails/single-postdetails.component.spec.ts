import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePostdetailsComponent } from './single-postdetails.component';

describe('SinglePostdetailsComponent', () => {
  let component: SinglePostdetailsComponent;
  let fixture: ComponentFixture<SinglePostdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglePostdetailsComponent]
    });
    fixture = TestBed.createComponent(SinglePostdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
