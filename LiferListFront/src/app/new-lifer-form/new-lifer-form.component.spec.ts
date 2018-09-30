import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLiferFormComponent } from './new-lifer-form.component';

describe('NewLiferFormComponent', () => {
  let component: NewLiferFormComponent;
  let fixture: ComponentFixture<NewLiferFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLiferFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLiferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
