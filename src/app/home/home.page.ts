import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  searchQuery: string = '';
  recentSearches: string[] = [];

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController, private router: Router) { }

  onSearch() {
    if (this.searchQuery.trim() !== '') {
      this.recentSearches.unshift(this.searchQuery);
      this.recentSearches = this.recentSearches.slice(0, 5); // Limit to 5 recent searches
      this.fetchSolution(this.searchQuery);
    }
  }

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
      this.presentAlert('Scan Failed', 'Failed to scan the question. Please try again.');
    }
  }

  async sendImageToBackend(base64String: string) {
    const url = 'http://localhost:2121/upload'; // Replace with your backend endpoint
    const blob = this.base64ToBlob(base64String, 'image/jpeg');
    const formData = new FormData();
    formData.append('image', blob, 'image.jpg');
  
    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Image uploaded successfully:', response.data);
      this.presentToast('Image uploaded successfully.');
      
      // Redirect to Solutions page
      if (Array.isArray(response.data)) {
        this.router.navigate(['/solution'], { state: { solutionSteps: response.data } });
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      this.presentAlert('Upload Failed', 'Failed to upload image. Please try again.');
    }
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

  async fetchSolution(query: string) {
    // Fetch solution steps based on the query
    console.log('Fetching solution for:', query);
    // Implement the logic to fetch and display the solution
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
