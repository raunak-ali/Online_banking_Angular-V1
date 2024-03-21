import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWebApiComponent } from './login-web-api.component';

describe('LoginWebApiComponent', () => {
  let component: LoginWebApiComponent;
  let fixture: ComponentFixture<LoginWebApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginWebApiComponent]
    });
    fixture = TestBed.createComponent(LoginWebApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
