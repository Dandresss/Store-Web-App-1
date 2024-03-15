import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpProductoComponent } from './up-producto.component';

describe('UpProductoComponent', () => {
  let component: UpProductoComponent;
  let fixture: ComponentFixture<UpProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
