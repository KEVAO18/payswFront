import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasItemsComponent } from './tablas-items.component';

describe('TablasItemsComponent', () => {
  let component: TablasItemsComponent;
  let fixture: ComponentFixture<TablasItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablasItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablasItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
