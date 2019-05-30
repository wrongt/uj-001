import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MNOComponent } from './mno.component';

describe('MNOComponent', () => {
  let component: MNOComponent;
  let fixture: ComponentFixture<MNOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MNOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MNOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
