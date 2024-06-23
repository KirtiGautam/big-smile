import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CardModalPage } from '../card-modal/card-modal.page';

interface SolutionStep {
  title: string;
  description: string;
  image_url: string | null;
  step_number: number;
}

@Component({
  selector: 'app-solution',
  templateUrl: './solution.page.html',
  styleUrls: ['./solution.page.scss'],
})
export class SolutionPage implements OnInit {

  solutionSteps: SolutionStep[] = [];
  private modal: HTMLIonModalElement | undefined;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private modalController: ModalController) { }

  ngOnInit() {
    const navigationState = this.router.getCurrentNavigation()?.extras.state as { solutionSteps: any[] } | null;
    const solutionStepsData = navigationState?.solutionSteps;
    console.log("Steps: ", solutionStepsData);
    if (Array.isArray(solutionStepsData)) {
      this.solutionSteps = solutionStepsData;
    }
  }

  async openModal(step: SolutionStep) {
    // Check if modal is already open and dismiss it
    if (this.modal) {
      await this.modal.dismiss();
    }

    this.modal = await this.modalController.create({
      component: CardModalPage,
      componentProps: {
        selectedStep: step
      }
    });
    return await this.modal.present();
  }

}
