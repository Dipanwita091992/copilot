import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditModelComponent } from './create-edit-model.component';

describe('CreateEditModelComponent', () => {
  let component: CreateEditModelComponent;
  let fixture: ComponentFixture<CreateEditModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEditModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateEditModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
