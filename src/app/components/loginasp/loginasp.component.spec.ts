import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginaspComponent } from './loginasp.component';

describe('LoginaspComponent', () => {
  let component: LoginaspComponent;
  let fixture: ComponentFixture<LoginaspComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginaspComponent]
    });
    fixture = TestBed.createComponent(LoginaspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
