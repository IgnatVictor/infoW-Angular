import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveConfirmComponent } from './remove-confirm.component';

describe('RemoveConfirmComponent', () => {
  let component: RemoveConfirmComponent;
  let fixture: ComponentFixture<RemoveConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
