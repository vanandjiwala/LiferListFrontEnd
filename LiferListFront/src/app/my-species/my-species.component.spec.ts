import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySpeciesComponent } from './my-species.component';

describe('MySpeciesComponent', () => {
  let component: MySpeciesComponent;
  let fixture: ComponentFixture<MySpeciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySpeciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
