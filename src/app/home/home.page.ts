import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor() { }

  scanQuestion() {
    Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    }).then(image => {
      // Handle the image URI, e.g., process the image to extract text
      console.log('Image URI:', image.webPath);
    }).catch(error => {
      console.error('Camera error:', error);
    });
  }

}
