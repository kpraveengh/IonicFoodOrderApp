import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CartProvider {

  localCartProducts: any = [];
  cartItems: any;

  totalamt: Number = 0;
  totalQty: Number = 0;
  taxArray = [];

  taxGroup: any;
  taxGroups = [];
  totaltax: any;
  totalbill = 0;
  existCartProductNumber = [];
  cartProductQty = [];
  hidebutton = [];
  existCartProdductNumber: any;

  constructor(public http: HttpClient) {


    console.log('cartprovider loaded');
    this.cartLength();
    this.priceTotal();
    this.itemtaxes();
    this.cartTax();
  }

  cartLength(): number {
    var items = 0
    if (this.localCartProducts != null || this.localCartProducts != undefined) {
      items = this.localCartProducts.length;
    }
    return items;
  }


  priceTotal(): number {
    var total = 0;
    if (this.localCartProducts != null && this.localCartProducts.length > 0) {
      this.localCartProducts.forEach(x => total += ((+x.productPrice * +x.productQty)));
    }
    return total;
  }
  itemtaxes() {
    var taxGroup = [];
    if (this.localCartProducts != null || this.localCartProducts != undefined) {
      this.taxGroups = this.localCartProducts.map(function (item) {
        for (let iTax of item.Tax) {
          if (item.Tax.find(x => x.tax_id == iTax.tax_id)) {
            taxGroup.push({
              'tax_id': iTax.tax_id,
              'taxdes': iTax.taxdes,
              'taxper': iTax.taxper,
              'taxprice': (iTax.taxprice * item.productQty)
            })
          }
        }
      });
    }
    return taxGroup;
  }

  cartTax() {
    var taxGroup = this.itemtaxes();
    var temp = {};
    var obj = null;
    for (var i = 0; i < taxGroup.length; i++) {
      obj = taxGroup[i];

      if (!temp[obj.tax_id]) {
        temp[obj.tax_id] = obj;
      } else {
        temp[obj.tax_id].taxprice += obj.taxprice;
      }
    }
    var result = [];
    for (var prop in temp) {
      result.push(temp[prop]);
    }
    return result;
  }


  grandTotal() {
    var taxGroup = this.itemtaxes();
    var total = 0;
    if (taxGroup != null && taxGroup.length > 0) {
      taxGroup.forEach(x => total += (+x.taxprice));
    }

    return total + this.priceTotal();
  }



  // increment product qty
  incrementQty(product) {
    if (this.localCartProducts != null || this.localCartProducts != undefined) {
      this.existCartProdductNumber = this.localCartProducts.filter(function (element) {
        return (element.prodnum == product.prodnum);
      });
    }
    var cartItem = this.existCartProdductNumber;
   
    cartItem[0].productQty++;
    cartItem[0].subTotal = (parseFloat(cartItem[0].productQty) * parseFloat(cartItem[0].Price1));

    return cartItem[0].productQty;

  }

  // decrement product qty
  decrementQty(product, index) {
    if (this.localCartProducts != null || this.localCartProducts != undefined) {
      this.existCartProdductNumber = this.localCartProducts.filter(function (element) {
        return (element.prodnum == product.prodnum);
      });
    }
    var cartItem = this.existCartProdductNumber;

    cartItem[0].productQty--;

    if (cartItem[0].productQty < 1) {
      const filteredItems = this.localCartProducts.filter((item) => item.prodnum !== cartItem[0].prodnum);
      this.localCartProducts = filteredItems;
    }
    return cartItem[0].productQty;

  }



  removeCartItem(product) {
    const filteredItems = this.localCartProducts.filter((item) => item.prodnum !== product.prodnum);
    this.localCartProducts = filteredItems;
    return this.localCartProducts;

  }




}
