import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerasComponent } from './playeras.component';

describe('PlayerasComponent', () => {
  let component: PlayerasComponent;
  let fixture: ComponentFixture<PlayerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
