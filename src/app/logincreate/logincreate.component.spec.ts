import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincreateComponent } from './logincreate.component';

describe('LogincreateComponent', () => {
  let component: LogincreateComponent;
  let fixture: ComponentFixture<LogincreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogincreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogincreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
