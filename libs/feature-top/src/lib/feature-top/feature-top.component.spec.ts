import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTopComponent } from './feature-top.component';

describe('FeatureTopComponent', () => {
  let component: FeatureTopComponent;
  let fixture: ComponentFixture<FeatureTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureTopComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
