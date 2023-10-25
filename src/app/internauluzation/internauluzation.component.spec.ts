import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternauluzationComponent } from './internauluzation.component';

describe('InternauluzationComponent', () => {
  let component: InternauluzationComponent;
  let fixture: ComponentFixture<InternauluzationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternauluzationComponent]
    });
    fixture = TestBed.createComponent(InternauluzationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
