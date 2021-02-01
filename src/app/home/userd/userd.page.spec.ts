import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserdPage } from './userd.page';

describe('UserdPage', () => {
  let component: UserdPage;
  let fixture: ComponentFixture<UserdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
