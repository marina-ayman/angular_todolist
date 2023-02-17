import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingComponent } from './adding.component';

describe('AddingComponent', () => {
  let component: AddingComponent;
  let fixture: ComponentFixture<AddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
