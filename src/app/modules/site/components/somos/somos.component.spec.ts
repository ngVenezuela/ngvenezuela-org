import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomosComponent } from './somos.component';

describe('SomosComponent', () => {
  let component: SomosComponent;
  let fixture: ComponentFixture<SomosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
