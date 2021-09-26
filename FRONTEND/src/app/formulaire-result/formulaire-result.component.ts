import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-formulaire-result',
  templateUrl: './formulaire-result.component.html',
  styleUrls: ['./formulaire-result.component.css']
})
export class FormulaireResultComponent implements OnInit {

  user: User;
  constructor(private userService: UserService) { 
    this.user = new User(
      '',
      '',
      '',
      0,
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    )
  }

  ngOnInit(): void {
    this.userService.userObservable.subscribe(
      (user: User) => {
        this.user = user;
      }
    )
  }

}
