import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenProyectoComponent } from './imagen-proyecto.component';

describe('ImagenProyectoComponent', () => {
  let component: ImagenProyectoComponent;
  let fixture: ComponentFixture<ImagenProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
