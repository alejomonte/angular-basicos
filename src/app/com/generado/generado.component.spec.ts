import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradoComponent } from './generado.component';

describe('GeneradoComponent', () => {
  let component: GeneradoComponent;
  let fixture: ComponentFixture<GeneradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
