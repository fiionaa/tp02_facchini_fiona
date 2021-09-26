import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { User } from'../models/user.model';
import { UserService } from'../services/user.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  userInfos: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.userInfos = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      street: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      sexe: ['', Validators.required],
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      login: ['', Validators.required], 
      country: ['', Validators.required],
    });
    
  }
  get password(){
    return this.userInfos.get('password');
  }
  get lastName(){
    return this.userInfos.get('lastName');
  }
  get firstName(){
    return this.userInfos.get('firstName');
  }
  get street(){
    return this.userInfos.get('street');
  }
  get zipCode(){
    return this.userInfos.get('zipCode');
  }
  get city(){
    return this.userInfos.get('city');
  }
  get phone(){
    return this.userInfos.get('phone');
  }
  get email(){
    return this.userInfos.get('email');
  }
  get sexe(){
    return this.userInfos.get('sexe');
  }
  get login(){
    return this.userInfos.get('login');
  }
  get country(){
    return this.userInfos.get('country');
  }

  submit(){
    const userInfosArray = this.userInfos.value;
    const newUser = new User(
      userInfosArray['lastName'],
      userInfosArray['firstName'],
      userInfosArray['street'],
      userInfosArray['zipCode'],
      userInfosArray['city'],
      userInfosArray['phone'],
      userInfosArray['email'],
      userInfosArray['sexe'],
      userInfosArray['password'],
      userInfosArray['login'],
      userInfosArray['country']
    )
    this.userService.addUser(newUser);
  }

  ngOnInit(): void {
  }

}
