import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bicyclesfake1Component } from './bicyclesfake1.component';

describe('Bicyclesfake1Component', () => {
  let component: Bicyclesfake1Component;
  let fixture: ComponentFixture<Bicyclesfake1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bicyclesfake1Component]
    });
    fixture = TestBed.createComponent(Bicyclesfake1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
