import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyorgFeatureTopComponent } from './feature-top.component';

describe('MyorgFeatureTopComponent', () => {
  let component: MyorgFeatureTopComponent;
  let fixture: ComponentFixture<MyorgFeatureTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyorgFeatureTopComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyorgFeatureTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
