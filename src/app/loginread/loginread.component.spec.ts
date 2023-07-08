import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginreadComponent } from './loginread.component';

describe('LoginreadComponent', () => {
  let component: LoginreadComponent;
  let fixture: ComponentFixture<LoginreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginreadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
