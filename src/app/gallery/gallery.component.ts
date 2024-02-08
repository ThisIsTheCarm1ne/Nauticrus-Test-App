import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageIdSharedService } from '../image-id-shared.service';
import { Subscription } from 'rxjs';

interface Image {
  imageURL: string;
  author: string;
  date: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  images: Image[] = [];
  selectedImageIndex: number = 0;
  private subscription!: Subscription;

  constructor(private http: HttpClient, private imageIdSharedService: ImageIdSharedService) {}

  ngOnInit() {
    this.fetchImages();
    this.subscription = this.imageIdSharedService.selectedImageIndex$.subscribe((index: number) => {
      this.selectedImageIndex = index;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  fetchImages() {
    this.http.get<Image[]>('assets/images.json').subscribe((data) => {
      this.images = data;
    });
  }

  openFullScreenImage() {
    this.imageIdSharedService.setShowFullScreenImage(true);
  }
}
