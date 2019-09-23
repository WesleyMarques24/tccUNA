import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPrivadaPage } from './tela-privada.page';

describe('TelaPrivadaPage', () => {
  let component: TelaPrivadaPage;
  let fixture: ComponentFixture<TelaPrivadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaPrivadaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaPrivadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
