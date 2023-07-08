import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginupdateComponent } from './loginupdate.component';

describe('LoginupdateComponent', () => {
  let component: LoginupdateComponent;
  let fixture: ComponentFixture<LoginupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
