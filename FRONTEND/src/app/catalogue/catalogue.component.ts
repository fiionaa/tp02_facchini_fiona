import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../services/http-service.service';
import {Observable} from 'rxjs';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(private httpservice : HttpServiceService) { 
    this.products = [];
    this.observable$ = new Observable;
  }

  observable$ : Observable<Product[]>;
  products: Product[];

  ngOnInit(): void {
    this.observable$ = this.httpservice.getCatalogue();   
    this.observable$.subscribe(item => this.products = item); 
  }

}
