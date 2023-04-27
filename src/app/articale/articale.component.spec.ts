import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticaleComponent } from './articale.component';

describe('ArticaleComponent', () => {
  let component: ArticaleComponent;
  let fixture: ComponentFixture<ArticaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
