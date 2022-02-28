import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesmapComponent } from './seriesmap.component';

describe('SeriesmapComponent', () => {
  let component: SeriesmapComponent;
  let fixture: ComponentFixture<SeriesmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
