import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonViewDetailsComponent } from './person-view-details.component';

describe('PersonViewDetailsComponent', () => {
  let component: PersonViewDetailsComponent;
  let fixture: ComponentFixture<PersonViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonViewDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
