import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProcessInstanceListComponent } from './page-process-instance-list.component';

describe('PageProcessInstanceListComponent', () => {
  let component: PageProcessInstanceListComponent;
  let fixture: ComponentFixture<PageProcessInstanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProcessInstanceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProcessInstanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
