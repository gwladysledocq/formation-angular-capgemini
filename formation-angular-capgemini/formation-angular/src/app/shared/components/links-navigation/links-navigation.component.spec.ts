import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksNavigationComponent } from './links-navigation.component';

describe('LinksNavigationComponent', () => {
  let component: LinksNavigationComponent;
  let fixture: ComponentFixture<LinksNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
