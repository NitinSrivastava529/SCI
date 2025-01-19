import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSciComponent } from './about-sci.component';

describe('AboutSciComponent', () => {
  let component: AboutSciComponent;
  let fixture: ComponentFixture<AboutSciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSciComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
