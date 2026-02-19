import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedRoutingUser } from './nested-routing-user';

describe('NestedRoutingUser', () => {
  let component: NestedRoutingUser;
  let fixture: ComponentFixture<NestedRoutingUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedRoutingUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedRoutingUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
