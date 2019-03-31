import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHero(id: number) : Observable<Hero>{
    this.messageService.add("Added message");
    return of(HEROES.find(hero => hero.id === id));
  }
    getHeroes() : Observable<Hero[]>{
    this.messageService.add("Added message");
    return of(HEROES);
  }
  constructor(private messageService: MessageService) { }
}
