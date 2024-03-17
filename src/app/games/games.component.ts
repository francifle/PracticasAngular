import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>

  fav(gameName: string){
    this.addFavoriteEvent.emit(gameName)
  }

  games = [
    {
      id: 1,
      name: 'Call of Duty'
      },
      {
      id: 2,
      name: 'The Legend of Zelda: Breath of the Wild'
      },
      {
      id: 3,
      name: 'Super Mario Odyssey'
      },
      {
      id: 4,
      name: 'Red Dead Redemption 2'
      },
      {
      id: 5,
      name: 'Fortnite'
      }
  ]
}
