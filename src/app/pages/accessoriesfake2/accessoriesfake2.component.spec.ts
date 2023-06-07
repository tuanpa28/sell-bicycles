import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accessoriesfake2Component } from './accessoriesfake2.component';

describe('Accessoriesfake2Component', () => {
  let component: Accessoriesfake2Component;
  let fixture: ComponentFixture<Accessoriesfake2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Accessoriesfake2Component]
    });
    fixture = TestBed.createComponent(Accessoriesfake2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
