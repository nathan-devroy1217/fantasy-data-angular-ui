import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaDashboardComponent } from './meta-dashboard.component';

describe('MetaDashboardComponent', () => {
  let component: MetaDashboardComponent;
  let fixture: ComponentFixture<MetaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
