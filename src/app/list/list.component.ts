import { Component, OnInit } from '@angular/core';
import {IProduct} from '../iproduct';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  product: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.getAll();
  }

  ngOnInit() {
  }


  getAll(): IProduct[] {
    this.productService.getAllProduct().subscribe(products => {
      this.product = products;
    });
    return this.product;
  }

  delete(id) {
    if (confirm('Ban co thuc su muon xoa')) {
      this.productService.deleteProduct(id).subscribe(
        next => {
          this.product = this.getAll();
        },
        error => {
          alert('error');
        }
      );
    }
  }

}
