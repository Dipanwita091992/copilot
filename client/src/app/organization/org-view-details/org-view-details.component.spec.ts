import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgViewDetailsComponent } from './org-view-details.component';

describe('OrgViewDetailsComponent', () => {
  let component: OrgViewDetailsComponent;
  let fixture: ComponentFixture<OrgViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrgViewDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrgViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
