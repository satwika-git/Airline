import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeComponent } from './userhome.component';

describe('UserhomeComponent', () => {
  let component: UserHomeComponent;
  let fixture: ComponentFixture<UserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
