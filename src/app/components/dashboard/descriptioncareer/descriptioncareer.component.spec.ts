import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptioncareerComponent } from './descriptioncareer.component';

describe('DescriptioncareerComponent', () => {
  let component: DescriptioncareerComponent;
  let fixture: ComponentFixture<DescriptioncareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptioncareerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptioncareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
