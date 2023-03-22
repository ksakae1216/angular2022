import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyorgTopComponent } from './top.component';

describe('MyorgTopComponent', () => {
  let component: MyorgTopComponent;
  let fixture: ComponentFixture<MyorgTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyorgTopComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyorgTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
