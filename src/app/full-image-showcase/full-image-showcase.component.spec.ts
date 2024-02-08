import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullImageShowcaseComponent } from './full-image-showcase.component';

describe('FullImageShowcaseComponent', () => {
  let component: FullImageShowcaseComponent;
  let fixture: ComponentFixture<FullImageShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullImageShowcaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullImageShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
