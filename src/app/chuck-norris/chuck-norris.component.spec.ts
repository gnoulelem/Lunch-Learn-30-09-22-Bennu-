import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ChuckNorrisComponent } from './chuck-norris.component';

describe('ChuckNorrisComponent', () => {
  let component: ChuckNorrisComponent;
  let fixture: ComponentFixture<ChuckNorrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      declarations: [ ChuckNorrisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChuckNorrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
