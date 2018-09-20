import { Component, ViewChild, NgZone, ElementRef } from '@angular/core';
import {
  IonicPage, NavController, NavParams, MenuController, Content, PopoverController, Navbar,
  AlertController, Events
} from 'ionic-angular';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { CartProvider } from '../../providers/cart/cart';
import { RestProvider } from "../../providers/rest/rest";

@IonicPage({ name: "Storemenu" })


@Component({
  selector: 'page-storemenu',
  templateUrl: 'storemenu.html',
  animations: [
    trigger('hideShowAnimator', [
      state('true', style({ color: 'red' })),
      state('false', style({ color: 'green' })),
      transition('0 => 1', animate('.5s')),
      transition('1 => 0', animate('.9s'))
    ])
  ]

})
export class StoremenuPage {

  hideShowAnimator: boolean = true;
  hideShowAnimation() {
    this.hideShowAnimator = !this.hideShowAnimator;
  }

  @ViewChild(Navbar) navBar: Navbar;

  // shrinking page for top store info
  section: string = 'two';
  somethings: any = new Array(20);

  @ViewChild(Content) content: Content;



  outlet_data: any = this.navParams.get('data');



  // Initial cart values from localstorage
  // cartitem: any=localStorage.getItem('cartitem');
  cartitem: any = this.cartprvdr.localCartProducts;

  product_tax = [];
  menuList: any = [];



  cartProducts = [];
  addToCartButton: any = 1;
  cartQtyButton: any = 0;
  localCartProducts: any;
  hidebutton = [];
  showButton = [];
  cartItem: any;
  cartItemsLength: any;
  qty: any;
  cartProductQty = [];
  existCartprodnum: any;
  showToolbar: boolean;
  openMenu: boolean = false;

  searchTerm: any;
  items: any;
  cartLength: any;
  priceTotal: any;

  // test/////////////
  start = 0;
  threshold = 100;
  slideHeaderPrevious = 0;
  ionScroll: any;
  showheader: boolean;
  hideheader: boolean;
  headercontent: any;

  toggleProducts = [];

  ////////////////////////

  // for menu popup overlay
  overlayHidden: boolean = false;
  menublockHidden: boolean = false;


  prodcutSearchbar: boolean = false;
  openSearchMenu: boolean = false;

  dietType: boolean = false;


  ////////////////// --FILTER PRODUCTS--///////

  test = [];
  newAr = [];
  totalamt: any;
  taxObj: any;
  nestedMenu: any;
  outlet: any;
  outletName: any;
  outletCat: any;
  outletAddress: any;

  public search: any = '';

  grandTotal: any;

  information: any[];
  outlet_active_tax:any;
  filterInfo: any[];
  submenu: any;

  highlighted = false;


  hideMenulist: boolean = true;

  ////////////////////


  constructor(public cartprvdr: CartProvider, public navCtrl: NavController, public navParams: NavParams,
    public menuCtrl: MenuController, public zone: NgZone, public myElement: ElementRef, public popoverCtrl: PopoverController,
    public restprovider: RestProvider, public alertCtrl: AlertController, public events: Events) {

    this.showheader = false;
    this.hideheader = true;
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeEnable(false);
    this.qty = 1;

    this.getProducts();

  }

  // get products data from server
  getProducts() {


    this.outlet_active_tax = this.outlet_data.outlet_tax;
    this.information = this.outlet_data.menus;
    console.log(this.information)
    var outlet = {
      "name": "Pista House - Gachibowli",
      "category": "Biryani, Hyderabadi, North Indian, Tandoor, Mughlai, Kebabs, Chinese",
      "address": "Gachibowli, Hyderabad, Telangana- 500082"
    }

    this.outletName = outlet.name;
    this.outletCat = outlet.category;
    this.outletAddress = outlet.address;

    this.nestedProducts();

  }



  nestedProducts() {
    this.nestedMenu = this.information.filter(function (child) {
      return child.menu_name;
    });
    this.submenu = this.nestedMenu;
  }



  ionViewDidLoad() {

    this.navBar.backButtonClick = (e: UIEvent) => {

      this.localCartProducts = this.cartprvdr.localCartProducts;

      console.log(+this.localCartProducts.length)

      if (this.localCartProducts.length >= 1) {
        {
          let alert = this.alertCtrl.create({
            title: 'Cart items will remove from the cart',
            message: 'wish to continue?',
            buttons: [
              {
                text: 'Disagree',
                handler: () => {
                  console.log('Disagree clicked');
                }
              },
              {
                text: 'Agree',
                handler: () => {
                  this.localCartProducts = [];
                  this.cartprvdr.localCartProducts = this.localCartProducts;
                  this.navCtrl.pop();

                }
              }
            ]
          });

          alert.present();
        }

      } else {
        this.localCartProducts = [];
        this.cartprvdr.localCartProducts = this.localCartProducts;
        this.navCtrl.pop();
      }

    }
  }



  goToCart() {
    this.navCtrl.push("Cart");
  }


  addTocart(item) {

    // console.log(item)

    //this.localCartProducts=JSON.parse(localStorage.getItem('cartitem'));
    this.localCartProducts = this.cartprvdr.localCartProducts;
    // console.log("local products data", this.localCartProducts,this.cartprvdr.localCartProducts)
    if (this.localCartProducts != null || this.localCartProducts != undefined) {
      this.existCartprodnum = this.localCartProducts.filter(function (element) {
        return (element.prodnum == item.prodnum);
      });

    }

    // to enable disable addtocart button
    this.cartProductQty[item.prodnum] = 1;
    this.hideAddcartBtn(item.prodnum);

    this.product_tax = [];
    for (let data of this.outlet_active_tax) {
      if (item[data.Tax_Id] == 1 && data.Tax_Percentage > 0) {
        this.taxObj = {
          tax_id: data.Tax_Id,
          taxdes: data.tax_Description,
          taxper: data.Tax_Percentage,
          taxtype: data.TaxType,
          taxprice: '',
          taxflatamount: (data.Tax_Percentage >= 0 ? 0 : data.Flat_Amount),

        }

        this.taxObj.taxprice = (parseFloat(item.price)) * (data.Tax_Percentage / 100);
        this.product_tax.push(this.taxObj);
      }

    }


    this.cartItem = {
      'prodnum': item.prodnum,
      'ProductName': item.prodname,
      'productQty': 1,
      'store_id': item.store_id,
      'productPrice': item.price1,
      'subTotal': item.price1,
      'Modifier': [],
      'Tax': this.product_tax
    };

    this.cartProducts.push(this.cartItem);


    //localStorage.setItem('cartitem',JSON.stringify(this.cartProducts));
    this.cartprvdr.localCartProducts = this.cartProducts;

    // console.log("cartData",this.cartprvdr.localCartProducts,this.cartProducts)

  }


  hideAddcartBtn(productId: number) {
    this.hidebutton[productId] = true;
  }

  showAddcartBtn(productId: number) {
    this.hidebutton[productId] = false;
  }

  // increment product qty
  incrementQty(product) {
    //this.localCartProducts=JSON.parse(localStorage.getItem('cartitem'));
    this.localCartProducts = this.cartprvdr.localCartProducts;
    if (this.localCartProducts != null || this.localCartProducts != undefined) {
      this.existCartprodnum = this.localCartProducts.filter(function (element) {
        return (element.prodnum == product.prodnum);
      });
    }

    var cartItem = this.existCartprodnum;
    cartItem[0].productQty++;
    this.cartProductQty[product.prodnum] = cartItem[0].productQty;
    console.log(cartItem[0].productQty)
    // cartItem[0].subTotal=(parseFloat(cartItem[0].productQty)*parseFloat(cartItem[0].Price1));
    product.qty++;



    // console.log(product.qty)
    this.cartprvdr.localCartProducts = this.localCartProducts;
    //localStorage.setItem('cartitem',JSON.stringify(this.localCartProducts));

  }




  // decrement product qty
  decrementQty(product, index) {
    //this.localCartProducts=JSON.parse(localStorage.getItem('cartitem'));
    this.localCartProducts = this.cartprvdr.localCartProducts;
    if (this.localCartProducts != null || this.localCartProducts != undefined) {
      this.existCartprodnum = this.localCartProducts.filter(function (element) {
        return (element.prodnum == product.prodnum);
      });
    }
    var cartItem = this.existCartprodnum;
    cartItem[0].productQty--;
    product.qty--;
    cartItem[0].productQty = product.qty;

    this.cartProductQty[product.prodnum] = product.qty;

    if (product.qty < 1) {
      this.localCartProducts.forEach((item, index) => {
        if (item === cartItem[0]) this.localCartProducts.splice(index, 1);
      });

      this.showAddcartBtn(product.prodnum);
      delete cartItem[0].productQty;

    }

    this.cartprvdr.localCartProducts = this.localCartProducts;
  }


  // setFilteredItems(prod) {
  //   // console.log('searchval',prod);
  //   for (let a in this.products) {
  //     this.newAr.push(this.products[a]);
  //     for (let bds of this.newAr) {
  //       for (let c in bds) {
  //         this.test.push(bds[c]);
  //         // console.log(bds[c])
  //       }
  //     }
  //   }
  //   // console.log('testarray',this.test);
  //   this.products = this.test.find(function (element) {
  //     return (element.prodname == prod);
  //   });
  //   // console.log(this.products);
  // }


  goToBack() {
    this.navCtrl.push('Home');

  }


  openMenuforOutlet() {
    this.openMenu = true;
  }

  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }

  toggleItem(i, j) {
    this.information[i].pages[j].open = !this.information[i].pages[j].open;
  }

  scrollToElement(menu) {
console.log(menu)
    let yOffset = document.getElementById(menu).offsetTop;
    this.content.scrollTo(0, yOffset, 2000);
  }

  prodcutSearchToggle() {
    this.openSearchMenu = !this.openSearchMenu;
    this.prodcutSearchbar = !this.prodcutSearchbar;
    this.hideMenulist = false;
    this.filterInfo = [];
    this.getProducts();

  }

  searchFilterProducts(data: any) {
    var searchKey = data.target.value;
    if (searchKey && searchKey.trim() != '') {
      this.getProducts();
      this.filterInfo = this.information.filter(function search(res) {
        var children;
        if (res.name.toUpperCase().search(searchKey.toUpperCase()) != -1) {
          return true;
        }
        if (!Array.isArray(res.pages)) {
          return false;
        }
        children = res.pages.filter(search);
        if (children.length) {
          res.products = children;
          return true;
        }
      });
    } else {
      this.getProducts();
      this.filterInfo = [];
    }
  }

  dietFilterProducts() {
    this.dietType = !this.dietType;
    if (this.dietType) {
      let diet_name = 'Veg';
      this.information = this.information.filter(function search(a) {
        var children;
        if (a.diet_type === diet_name) {
          return true;
        }
        if (!Array.isArray(a.children)) {
          return false;
        }
        children = a.children.filter(search);
        if (children.length) {
          a.children = children;
          return true;
        }
      });
    } else {
      this.getProducts();
    }
  }


  backdropEvent() {
    this.openMenu = !this.openMenu;
  }

  backdropforSearchEvent() {
    this.openSearchMenu = !this.openSearchMenu;
    this.prodcutSearchbar = !this.prodcutSearchbar;
  }


  ngDoCheck() {
    this.localCartProducts = this.cartprvdr.localCartProducts;
    this.cartLength = this.cartprvdr.cartLength();
    this.grandTotal = this.cartprvdr.priceTotal();
    this.cartprvdr.cartTax();


  }



}

