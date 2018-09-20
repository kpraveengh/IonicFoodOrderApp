import { Component,ElementRef, ViewChild, NgZone } from '@angular/core';
import { IonicPage,Platform, NavController, NavParams,ModalController,ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
import { GoogleMaps, GoogleMap } from '@ionic-native/google-maps';

declare var google; 

@IonicPage({name:"Location"})
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})



export class LocationPage {
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


  constructor(public navCtrl: NavController, public zone: NgZone,
    public maps: GoogleMapsProvider,
    public platform: Platform, 
    public geolocation: Geolocation,
    public viewCtrl: ViewController) {
      this.searchDisabled = true;
      this.saveDisabled = true;
  }

  ionViewDidLoad(): void {

      let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(() => {

          this.autocompleteService = new google.maps.places.AutocompleteService();
          this.placesService = new google.maps.places.PlacesService(this.maps.map);
          this.searchDisabled = false;

      });

  }
  

  selectPlace(place){

      this.places = [];

      let location = {
          lat: null,
          lng: null,
          name: place.name
      };

      this.placesService.getDetails({placeId: place.place_id}, (details) => {

          this.zone.run(() => {

              location.name = details.name;
              location.lat = details.geometry.location.lat();
              location.lng = details.geometry.location.lng();
              this.saveDisabled = false;

              let pos = {
                lat:location.lat ,
                lng:location.lng
              };
              this.maps.map.setCenter(pos);
      
              this.markers=[];
              let marker = new google.maps.Marker({
                map: this.maps.map,
                icon:"../../assets/icon/map-pin.png",
                title: 'I am here!',
                animation: google.maps.Animation.DROP,
                position: pos,
                draggable: true
              });
              this.markers.push(marker)

              // console.log('lat',location.lat,'lng',location.lng)
              
              // console.log(details)

              this.location = location;

          });

      });

  }

  searchPlace(){

      this.saveDisabled = true;

      if(this.query.length > 0 && !this.searchDisabled) {

          let config = {
              types: ['geocode'],
              input: this.query
          }

          this.autocompleteService.getPlacePredictions(config, (predictions, status) => {

              if(status == google.maps.places.PlacesServiceStatus.OK && predictions){

                  this.places = [];

                  predictions.forEach((prediction) => {
                      this.places.push(prediction);
                  });
              }

          });

      } else {
          this.places = [];
      }

  }

  save(){
      this.viewCtrl.dismiss(this.location);
  }

  close(){
      this.viewCtrl.dismiss();
  }  
getLiveLocation(){
 
    this.geolocation.getCurrentPosition().then((resp) => {
      let pos = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
      this.maps.map.setCenter(pos);

      this.markers=[];
      let marker = new google.maps.Marker({
        map: this.maps.map,
        icon:"../../assets/icon/map-pin.png",
        title: 'I am here!',
        animation: google.maps.Animation.DROP,
        position: pos,
        draggable: true
      });
      
      this.markers.push(marker);
              
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }




}
