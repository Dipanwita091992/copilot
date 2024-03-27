import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRendererOrgComponent } from './custom-renderer-org.component';

describe('CustomRendererOrgComponent', () => {
  let component: CustomRendererOrgComponent;
  let fixture: ComponentFixture<CustomRendererOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomRendererOrgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomRendererOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
