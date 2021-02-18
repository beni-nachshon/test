import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lens',
  templateUrl: './lens.component.html',
  styleUrls: ['./lens.component.css']
})
export class LensComponent implements OnInit {
arr=['מולטיפוקל','רחוק','קרוב'];
  constructor() { }

  ngOnInit(): void {
  }

}
