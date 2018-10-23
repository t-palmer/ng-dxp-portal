import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWorkItemListComponent } from './page-work-item-list.component';

describe('PageWorkItemListComponent', () => {
  let component: PageWorkItemListComponent;
  let fixture: ComponentFixture<PageWorkItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWorkItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWorkItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
