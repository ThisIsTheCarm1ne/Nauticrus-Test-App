import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageIdSharedService {
  private selectedImageIndexSource = new BehaviorSubject<number>(0);
  selectedImageIndex$ = this.selectedImageIndexSource.asObservable();

  private showFullScreenImageSource = new BehaviorSubject<boolean>(false);
  showFullScreenImage$ = this.showFullScreenImageSource.asObservable();

  getSelectedImageIndex(): number {
    return this.selectedImageIndexSource.getValue();
  }

  setSelectedImage(index: number) {
    this.selectedImageIndexSource.next(index);
  }

  getShowFullScreenImage(): boolean {
    return this.showFullScreenImageSource.getValue();
  }

  setShowFullScreenImage(value: boolean) {
    this.showFullScreenImageSource.next(value);
  }
}
