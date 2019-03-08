import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCommentPrestationComponent } from './page-comment-prestation.component';

describe('PageCommentPrestationComponent', () => {
  let component: PageCommentPrestationComponent;
  let fixture: ComponentFixture<PageCommentPrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCommentPrestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCommentPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
