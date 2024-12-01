import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LikeComponent } from "./like/like.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LikeComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 tweet = {
  body:'.....',
  likesCount : 10,
  isLike : true
 };

 courses =[1,2,3,4];


}
