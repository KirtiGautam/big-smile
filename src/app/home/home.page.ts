import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { LoadingController } from '@ionic/angular';
import { CommonService } from 'src/common.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  searchQuery: string = '';
  recentSearches: string[] = [];

  constructor(private router: Router, private loadingController: LoadingController, private httpService: HttpService, private commonService: CommonService) { }

  async scanQuestion() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera
      });

      if (image && image.base64String) {
        this.sendImageToBackend(image.base64String);
      }
    } catch (error) {
      this.commonService.presentAlert('Scan Failed', 'Failed to scan the question. Please try again.');
    }
  }

  async sendImageToBackend(base64String: string) {
    const endpoint = 'extract_text';
    const blob = this.base64ToBlob(base64String, 'image/jpeg');
    const formData = new FormData();
    formData.append('image', blob, 'image.jpg');

    const loading = await this.loadingController.create({
      message: 'Uploading...',
      spinner: 'circles'
    });

    await loading.present();

    const headers = new HttpHeaders();

    // Set content type header
    headers.set('Content-Type', 'multipart/form-data');
    this.httpService.post(endpoint, formData, headers
    ).subscribe({
      next: (response: any) => {
        console.log('Image uploaded successfully:', response);
        this.commonService.presentToast('Image uploaded successfully.');

        if (Array.isArray(response)) {
          this.router.navigate(['/solution'], { state: { solutionSteps: response } });
        }
      },
      error: (error: any) => {
        console.error('Error while uploading image:', JSON.stringify(error));
        this.commonService.presentAlert('Upload Failed', 'Failed to upload image. Please try again.');
      },
      complete: async () => {
        await loading.dismiss();
      }
    });
  }

  base64ToBlob(base64: string, contentType: string): Blob {
    const byteCharacters = atob(base64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
  }

}
