import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonAddComponent } from './bouton-add.component';

describe('BoutonAddComponent', () => {
  let component: BoutonAddComponent;
  let fixture: ComponentFixture<BoutonAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutonAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
