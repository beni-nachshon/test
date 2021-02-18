import { Component, Input, OnInit } from '@angular/core';
import { GlassesService } from '../glasses.service';

@Component({
  selector: 'app-one-lens',
  templateUrl: './one-lens.component.html',
  styleUrls: ['./one-lens.component.css']
})
export class OneLensComponent implements OnInit {
  @Input () lens : any;
  constructor(private glassesService :GlassesService) { }

  ngOnInit(): void {
  }
  add(){
    this.glassesService.lens=this.lens;
    }
}
