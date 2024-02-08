import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ImageIdSharedService } from '../image-id-shared.service';

interface Image {
  imageURL: string;
  author: string;
  date: string;
}

@Component({
  selector: 'app-image-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './image-list.component.html',
  styleUrl: './image-list.component.css'
})
export class ImageListComponent implements OnInit {
  images: Image[] = [];
  isLastImage: boolean = false;
  isFirstImage: boolean = true;

  constructor(private http: HttpClient, private imageIdSharedService: ImageIdSharedService) {}

  ngOnInit() {
    this.fetchImages();
  }

  fetchImages() {
    this.http.get<Image[]>('assets/images.json').subscribe((data) => {
      this.images = data;
    });
  }

  onButtonClick(index: number) {
    this.imageIdSharedService.setSelectedImage(index);
  }

  nextImage() {
    const currentValue = this.imageIdSharedService.getSelectedImageIndex();
    if (currentValue !== this.images.length - 1) {
      this.imageIdSharedService.setSelectedImage(currentValue + 1);
    }
    this.updateImageStatus();
  }

  prevImage() {
    const currentValue = this.imageIdSharedService.getSelectedImageIndex();
    if (currentValue !== 0) {
      this.imageIdSharedService.setSelectedImage(currentValue - 1);
    }
    this.updateImageStatus();
  }

  private updateImageStatus() {
    const currentIndex = this.imageIdSharedService.getSelectedImageIndex();
    this.isLastImage = currentIndex === this.images.length - 1;
    this.isFirstImage = currentIndex === 0;
  }
}
