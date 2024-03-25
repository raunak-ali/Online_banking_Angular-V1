import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPaypeeComponent } from './new-paypee.component';

describe('NewPaypeeComponent', () => {
  let component: NewPaypeeComponent;
  let fixture: ComponentFixture<NewPaypeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPaypeeComponent]
    });
    fixture = TestBed.createComponent(NewPaypeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
