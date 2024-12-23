import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletSelectComponent } from './tablet-select.component';

describe('TabletSelectComponent', () => {
  let component: TabletSelectComponent;
  let fixture: ComponentFixture<TabletSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabletSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabletSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
