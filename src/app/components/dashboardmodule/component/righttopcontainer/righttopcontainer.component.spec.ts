import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RighttopcontainerComponent } from './righttopcontainer.component';

describe('RighttopcontainerComponent', () => {
  let component: RighttopcontainerComponent;
  let fixture: ComponentFixture<RighttopcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RighttopcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RighttopcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
