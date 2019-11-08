import {TestBed, async} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import {AppModule} from './app.module';

describe('AppComponent', () => {
  let fixture;
  let debugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  }));

  afterEach(function() {
    fixture = null;
    debugElement = null;
  });

  it('issue example', () => {
    expect(debugElement.query(By.css('input[type="radio"]')).properties.checked).toBeDefined();
    expect(debugElement.query(By.css('input[type="radio"]')).properties.checked).toBe(true);

    expect(debugElement.query(By.css('input[type="radio"]')).nativeElement.checked).toBe(true); // works correct
  });
});
