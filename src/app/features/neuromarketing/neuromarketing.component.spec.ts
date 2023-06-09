import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuromarketingComponent } from './neuromarketing.component';

describe('NeuromarketingComponent', () => {
  let component: NeuromarketingComponent;
  let fixture: ComponentFixture<NeuromarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuromarketingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeuromarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
