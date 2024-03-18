import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseToolbarComponent } from './browse-toolbar.component';

describe('BrowseToolbarComponent', () => {
  let component: BrowseToolbarComponent;
  let fixture: ComponentFixture<BrowseToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowseToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
