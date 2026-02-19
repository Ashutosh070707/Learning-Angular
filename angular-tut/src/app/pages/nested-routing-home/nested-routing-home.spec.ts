import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedRoutingHome } from './nested-routing-home';

describe('NestedRoutingHome', () => {
  let component: NestedRoutingHome;
  let fixture: ComponentFixture<NestedRoutingHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedRoutingHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedRoutingHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
