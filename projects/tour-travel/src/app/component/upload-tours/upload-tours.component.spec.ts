import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadToursComponent } from './upload-tours.component';

describe('UploadToursComponent', () => {
  let component: UploadToursComponent;
  let fixture: ComponentFixture<UploadToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadToursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
