import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTablaComponent } from './registro-tabla.component';

describe('RegistroTablaComponent', () => {
  let component: RegistroTablaComponent;
  let fixture: ComponentFixture<RegistroTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroTablaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
