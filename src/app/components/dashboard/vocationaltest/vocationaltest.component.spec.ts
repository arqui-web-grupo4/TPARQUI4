import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocationaltestComponent } from './vocationaltest.component';

describe('VocationaltestComponent', () => {
  let component: VocationaltestComponent;
  let fixture: ComponentFixture<VocationaltestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocationaltestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VocationaltestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
