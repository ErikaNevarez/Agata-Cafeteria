import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscencialesComponent } from './escenciales.component';

describe('EscencialesComponent', () => {
  let component: EscencialesComponent;
  let fixture: ComponentFixture<EscencialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscencialesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscencialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
