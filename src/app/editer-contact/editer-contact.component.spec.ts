import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerContactComponent } from './editer-contact.component';

describe('EditerContactComponent', () => {
  let component: EditerContactComponent;
  let fixture: ComponentFixture<EditerContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
