import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRendererActivityComponent } from './custom-renderer-activity.component';

describe('CustomRendererActivityComponent', () => {
  let component: CustomRendererActivityComponent;
  let fixture: ComponentFixture<CustomRendererActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomRendererActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomRendererActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
