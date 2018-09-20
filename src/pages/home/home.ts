import { Component,ElementRef, ViewChild, NgZone,OnInit } from '@angular/core';
import {IonicPage, NavController,NavParams,ModalController,ViewController,
  LoadingController,PopoverController,AlertController, Events} from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest";
import { CartProvider } from "../../providers/cart/cart";
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
import {Observable} from 'rxjs/Rx';
declare var google; 

@IonicPage({name: "Home"})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  // public resultdata : any=this.navParams.get('data');
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

  latitude: number;
  longitude: number;
  autocompleteService: any;
  placesService: any;
  query: string = '';
  places: any = [];
  searchDisabled: boolean;
  saveDisabled: boolean;
  location: any; 
 google:any;
 markers=[];

  outletsAll:any;
  recomOutlets:any;
  dataForSorting:any=1;
  dataForFilter:any=1;
  success_color:any;
  avrg_color:any;
  result_data:any;
  localCartProducts:any;
  cartLength:any;
  loading:any;
  totalamt:Number=0;
  grandTotal:any;
  resultdata:any;
  priceTotal:any;
  currentLocation:any;


  constructor(public navCtrl: NavController,public navParams: NavParams,
    public modalCtrl: ModalController,public viewCtrl: ViewController,
    public popoverCtrl: PopoverController, public alertCtrl:AlertController,
    public loadingCtrl:LoadingController,
    public restprovider: RestProvider,
    public cartprovider:CartProvider, public event:Events,
    public googlemapprovider:GoogleMapsProvider,
    public zone: NgZone,
    public maps: GoogleMapsProvider,
    public geolocation: Geolocation,) {



      
  this.userAllOutletData();
    this.success_color='#16ac42';
    this.avrg_color='#e48900';


    // console.log(this.outletsAll)
    
    
    this.localCartProducts=JSON.parse(localStorage.getItem('cartitem'));

    if(this.localCartProducts !=null || this.localCartProducts !=undefined ){
      this.cartLength=this.localCartProducts.length;
    }

    
  }


  userAllOutletData(){
    const data={'username':'' , 'password':''}
    this.restprovider.getAllStoresData(data).subscribe((data:any)=>{
      this.result_data=data.data;   
     this.resultdata=this.result_data;
     this.outletsAll=this.resultdata.outlets;
     this.recomOutlets=this.resultdata.recom_outlets;
    //  console.log(this.resultdata);
    })
  }

  presentProfileModal() {
    let profileModal = this.modalCtrl.create('Location', { userId: 8675309 });
    profileModal.present();
  }


  filterdata(action) {
    if(action == 'Sorting'){
      this.dataForSorting=1;
      this.dataForFilter=0;
    }else if(action == 'Filter'){
      this.dataForFilter=1;
      this.dataForSorting=0;
    }
    
    let popover = this.modalCtrl.create('Filter',{'sort': this.dataForSorting,'filter': this.dataForFilter});
    popover.present({
      ev: action
    });
    
  }


  dismissLocationModal() {
    this.viewCtrl.dismiss();
  }
  goToMenu(store_id,org_id) {
   
    store_id="JAY01";
    org_id="JAY";
    this.presentWithGif1();
    const data={'store_id':store_id , 'org_id':org_id}
    this.restprovider.getStoreData(data).subscribe((data:any)=>{
      this.loaderDismiss();
      this.result_data=data;  
      console.log('rest', this.result_data) ;
      this.navCtrl.push('Storemenu',{'data':this.result_data});
    })
  }
  goToSearch(){
    this.navCtrl.push("Search");
  }


  // loader method start
  presentWithGif1() {
    this.loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: `
      <div class="custom-spinner-container">
        <img class="loading" width="120px" src="assets/imgs/loader.gif" />
      </div>`
    });
    
    return this.loading.present();
}

loaderDismiss() {
  return new Promise((resolve, reject) => {
      if (this.loading) {
          return this.loading.dismiss(resolve(true)).catch(error => {
              console.log('loading error: ', error);
          });
      } else {
          resolve(true);
      }
  });

}
ngOnInit(){
  let timer = Observable.timer(20, 50);
  timer.subscribe(() =>   this.getLiveLocation());
}

// loader method end
ngDoCheck() {
  this.localCartProducts = this.cartprovider.localCartProducts;
  this.cartLength = this.cartprovider.cartLength();
  this.priceTotal = this.cartprovider.priceTotal();


}


ionViewDidLoad(): void {

  let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(() => {

      this.autocompleteService = new google.maps.places.AutocompleteService();
      this.placesService = new google.maps.places.PlacesService(this.maps.map);

      console.log(this.placesService)
      this.searchDisabled = false;


  });


 

}





getLiveLocation(){
  this.geolocation.getCurrentPosition().then((resp) => {
    let pos = {
      lat: resp.coords.latitude,
      lng: resp.coords.longitude
    };

    if(typeof google == "undefined" || typeof google.maps == "undefined"){
    var geocoder = new google.maps.Geocoder;
    geocoder.geocode({'location': pos}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        this.currentLocation=results[1].formatted_address;
        console.log(this.currentLocation)
      
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
    }
    else {
      this.currentLocation='Choose Location';
    }
            
  })


}








}
