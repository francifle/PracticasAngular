import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent, CommentsComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = "Francisco";
  isLoggedIn = false;
  favGame = '';

  getFavorite(gameName: string){
    this.favGame = gameName;
  }

  greet (){
    alert ('Hola!!')
  }
}
