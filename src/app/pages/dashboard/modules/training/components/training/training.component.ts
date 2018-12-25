import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {


  public navLinks: Array<{
    path: string,
    label: string
  }> = [
      { path: 'mine', label: 'Mine' },
      { path: 'browse', label: 'Browse' },
      { path: 'details', label: 'Details' },
      { path: 'now', label: 'Now' }
    ];

  constructor() { }

  ngOnInit() {
  }

}
