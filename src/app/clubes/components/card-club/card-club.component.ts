import { Component, Input, OnInit } from '@angular/core';
import { Clubes } from '../../interfaces/clubes.interface';

@Component({
  selector: 'app-card-club',
  templateUrl: './card-club.component.html',
  styleUrls: ['./card-club.component.css']
})
export class CardClubComponent {
  @Input() club!: Clubes;

}
