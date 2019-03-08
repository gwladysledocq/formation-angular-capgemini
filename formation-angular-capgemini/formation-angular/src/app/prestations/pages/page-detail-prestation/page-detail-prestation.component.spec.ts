import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailPrestationComponent } from './page-detail-prestation.component';

describe('PageDetailPrestationComponent', () => {
  let component: PageDetailPrestationComponent;
  let fixture: ComponentFixture<PageDetailPrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDetailPrestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDetailPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
