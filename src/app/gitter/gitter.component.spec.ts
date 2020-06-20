import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitterComponent } from './gitter.component';

describe('GitterComponent', () => {
  let component: GitterComponent;
  let fixture: ComponentFixture<GitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
