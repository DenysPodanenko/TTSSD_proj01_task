import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynmicContentComponent } from './dynmic-content.component';

describe('DynmicContentComponent', () => {
  let component: DynmicContentComponent;
  let fixture: ComponentFixture<DynmicContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynmicContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynmicContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
