import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { updateUserPage } from './updateUser.page';

describe('updateUserPage', () => {
  let component: updateUserPage;
  let fixture: ComponentFixture<updateUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ updateUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(updateUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
