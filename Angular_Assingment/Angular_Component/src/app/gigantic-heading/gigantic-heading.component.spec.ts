import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiganticHeadingComponent } from './gigantic-heading.component';

describe('GiganticHeadingComponent', () => {
  let component: GiganticHeadingComponent;
  let fixture: ComponentFixture<GiganticHeadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiganticHeadingComponent]
    });
    fixture = TestBed.createComponent(GiganticHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
