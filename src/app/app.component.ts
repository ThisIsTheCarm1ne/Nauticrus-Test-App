import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageListComponent } from './image-list/image-list.component';
import { FullImageShowcaseComponent } from './full-image-showcase/full-image-showcase.component';
import { ImageIdSharedService } from './image-id-shared.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    GalleryComponent,
    ImageListComponent,
    FullImageShowcaseComponent,
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ImageIdSharedService],
})
export class AppComponent implements OnInit {
  title = 'Nauticrus test app';
  showFullScreenImage: boolean = false;

  constructor(private imageIdSharedService: ImageIdSharedService) {}

  ngOnInit() {
    this.imageIdSharedService.showFullScreenImage$.subscribe((value: boolean) => {
      this.showFullScreenImage = value;
    });
  }
}
