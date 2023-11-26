import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignLobbyPage } from './sign-lobby.page';

describe('SignLobbyPage', () => {
  let component: SignLobbyPage;
  let fixture: ComponentFixture<SignLobbyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SignLobbyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
