import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageIdSharedService } from '../image-id-shared.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Image {
  imageURL: string;
  author: string;
  date: string;
  comments: string[];
}

@Component({
  selector: 'app-comment-section',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './comment-section.component.html',
  styleUrl: './comment-section.component.css'
})
export class CommentSectionComponent implements OnInit {
  commentText: string = '';
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
      this.images = data.map(image => ({ ...image, comments: [] }));
    });
  }

  submitComment() {
    if (this.commentText) {
      this.images[this.selectedImageIndex].comments.push(this.commentText);
      this.commentText = '';
    }
  }
}
