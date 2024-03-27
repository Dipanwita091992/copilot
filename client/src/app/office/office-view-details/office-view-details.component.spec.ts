import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeViewDetailsComponent } from './office-view-details.component';

describe('OfficeViewDetailsComponent', () => {
  let component: OfficeViewDetailsComponent;
  let fixture: ComponentFixture<OfficeViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeViewDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfficeViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
