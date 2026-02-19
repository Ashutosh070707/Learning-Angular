import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedRoutingProfile } from './nested-routing-profile';

describe('NestedRoutingProfile', () => {
  let component: NestedRoutingProfile;
  let fixture: ComponentFixture<NestedRoutingProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedRoutingProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedRoutingProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
