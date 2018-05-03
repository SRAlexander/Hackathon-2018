import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalViewComponent } from './criminal-view.component';

describe('CriminalViewComponent', () => {
  let component: CriminalViewComponent;
  let fixture: ComponentFixture<CriminalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriminalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
