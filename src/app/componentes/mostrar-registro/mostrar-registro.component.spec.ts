import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarRegistroComponent } from './mostrar-registro.component';

describe('MostrarRegistroComponent', () => {
  let component: MostrarRegistroComponent;
  let fixture: ComponentFixture<MostrarRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostrarRegistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
