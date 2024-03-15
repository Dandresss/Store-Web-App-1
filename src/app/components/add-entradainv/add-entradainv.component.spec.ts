import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntradainvComponent } from './add-entradainv.component';

describe('AddEntradainvComponent', () => {
  let component: AddEntradainvComponent;
  let fixture: ComponentFixture<AddEntradainvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEntradainvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEntradainvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
