import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeiasComponent } from './meias.component';

describe('MeiasComponent', () => {
  let component: MeiasComponent;
  let fixture: ComponentFixture<MeiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
