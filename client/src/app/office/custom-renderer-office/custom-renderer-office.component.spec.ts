import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRendererOfficeComponent } from './custom-renderer-office.component';

describe('CustomRendererOfficeComponent', () => {
  let component: CustomRendererOfficeComponent;
  let fixture: ComponentFixture<CustomRendererOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomRendererOfficeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomRendererOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
