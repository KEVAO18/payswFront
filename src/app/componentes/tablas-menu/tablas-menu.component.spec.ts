import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasMenuComponent } from './tablas-menu.component';

describe('TablasMenuComponent', () => {
  let component: TablasMenuComponent;
  let fixture: ComponentFixture<TablasMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablasMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablasMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
