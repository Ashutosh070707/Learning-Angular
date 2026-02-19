import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedRoutingSettings } from './nested-routing-settings';

describe('NestedRoutingSettings', () => {
  let component: NestedRoutingSettings;
  let fixture: ComponentFixture<NestedRoutingSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedRoutingSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedRoutingSettings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
