import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  const navigationState = this.router.getCurrentNavigation()?.extras.state as { solutionSteps: any[] } | null;
  const solutionStepsData = navigationState?.solutionSteps;
  console.log("Steps: ", solutionStepsData);
    if (Array.isArray(solutionStepsData)) {
      this.solutionSteps = solutionStepsData;
    }
  }

}
