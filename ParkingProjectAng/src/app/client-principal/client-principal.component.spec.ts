import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPrincipalComponent } from './client-principal.component';

describe('ClientPrincipalComponent', () => {
  let component: ClientPrincipalComponent;
  let fixture: ComponentFixture<ClientPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
