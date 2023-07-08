import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindeleteComponent } from './logindelete.component';

describe('LogindeleteComponent', () => {
  let component: LogindeleteComponent;
  let fixture: ComponentFixture<LogindeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogindeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogindeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
