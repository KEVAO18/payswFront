import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTipo1Component } from './insert-tipo1.component';

describe('InsertTipo1Component', () => {
  let component: InsertTipo1Component;
  let fixture: ComponentFixture<InsertTipo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertTipo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertTipo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
