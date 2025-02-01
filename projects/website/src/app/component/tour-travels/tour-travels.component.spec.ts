import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourTravelsComponent } from './tour-travels.component';

describe('TourTravelsComponent', () => {
  let component: TourTravelsComponent;
  let fixture: ComponentFixture<TourTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourTravelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
