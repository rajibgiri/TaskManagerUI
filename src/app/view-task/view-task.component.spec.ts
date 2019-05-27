import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule} from '@angular/forms';
import { ViewTaskComponent } from './view-task.component';

describe('ViewTaskComponent', () => {
  let component: ViewTaskComponent;
  let fixture: ComponentFixture<ViewTaskComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     imports:[FormsModule],
  //     declarations: [ ViewTaskComponent ]
  //   })
  //   .compileComponents();
  // }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(ViewTaskComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    component = new ViewTaskComponent(null,null);
  });

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });
});
