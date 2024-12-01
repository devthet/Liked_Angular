import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  standalone: true,
  imports: [],
  templateUrl: './like.component.html',
  styleUrl: './like.component.css'
})
export class LikeComponent {

  @Input('likesCount') likesCount =0;
  @Input('isActive') isActive = false;

  onClick(){
    this.likesCount += (this.isActive)? 1 : -1;
    this.isActive = !this.isActive;
  }

}
