import {Component, OnInit} from '@angular/core';
import {IProduct} from '../iproduct';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id: number;
  product: IProduct;

  constructor(private productService: ProductService,
              private router: Router,
              private activeRouter: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.activeRouter.snapshot.params.id;
    this.productService.showUpdateProduct(this.id).subscribe(data => {
      this.product = data;
      console.log(this.product);
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.id, this.product).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
