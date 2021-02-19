import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private _crudservice: CrudServiceService) { }
  dataTitle = "UX Products";
  fetching: boolean;
  @ViewChild('id', { static: false }) id: ElementRef;
  @ViewChild('name', { static: false }) name: ElementRef;
  @ViewChild('price', { static: false }) price: ElementRef;

  editMode: boolean = false;
  editIndex: number;
  products: any = [];
  allcustomers = [];
  onAddProduct(id, name, price) {
    if (this.editMode) {
      this.products[this.editIndex] = {
        id: id.value,
        name: name.value,
        price: price.value
      }
      this.onSaveProduct();
      this.editMode = false;
      this.id.nativeElement.value = '';
      this.name.nativeElement.value = '';
      this.price.nativeElement.value = '';

    }
    else {
      this.products.push({
        id: id.value,
        name: name.value,
        price: price.value

      })
      this.id.nativeElement.value = '';
      this.name.nativeElement.value = '';
      this.price.nativeElement.value = '';
    }
  }
  onDeleteProduct(id) {
    alert("Do you want to delete this item");
    this.products.splice(id, 1);
    this.onSaveProduct()
  }
  onSaveProduct() {
    this._crudservice.saveProducts(this.products).subscribe(

    )
  }
  onFetchProduct() {
    this.fetching = true;
    this._crudservice.fetchProducts().subscribe(
      (response) => {

        this.products = response
        this.fetching = false;
      },
      (err) => console.log(err)
    )
  }

  onEditProduct(index: number) {
    this.editMode = true;
    this.editIndex = index;
    this.id.nativeElement.value = this.products[index].id;
    this.name.nativeElement.value = this.products[index].name;
    this.price.nativeElement.value = this.products[index].price;


  }
  ngOnInit() {

    this.onFetchProduct();
  }

}
