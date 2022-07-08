import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantPrincipalComponent } from './assistant-principal.component';

describe('AssistantPrincipalComponent', () => {
  let component: AssistantPrincipalComponent;
  let fixture: ComponentFixture<AssistantPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistantPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssistantPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
