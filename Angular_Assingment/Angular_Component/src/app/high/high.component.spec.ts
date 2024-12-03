import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighComponent } from './high.component';

describe('HighComponent', () => {
  let component: HighComponent;
  let fixture: ComponentFixture<HighComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighComponent]
    });
    fixture = TestBed.createComponent(HighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
