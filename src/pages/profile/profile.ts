import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';

@IonicPage({name:'Profile'})
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public person: {name: string, gender: string, birthdate?: number};
  dob: any;
  age: any;
  showProfileInfo:any;
  showProfile: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
    this.person = {name: undefined, gender: undefined, birthdate: undefined};
    this.dob = undefined;
  }

  ionViewDidLoad() {
    this.showProfileInfo=1;
    let person = JSON.parse(localStorage.getItem('PERSON'));
    if (person){
      this.person = person;
      this.age = this.getAge(this.person.birthdate);
      this.dob = new Date(this.person.birthdate).toISOString();
    }
  }

  editProfileInfo(){
    this.showProfileInfo=0;

  }

profileUpdateConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you want to update your profile?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.showProfileInfo=1;
            this.ionViewDidLoad();
          }
        },
        {
          text: 'Update',
          handler: () => {
            this.save();
          }
        }
      ]
    });
    alert.present();
  }

  // reset(){
  //   this.person = {name: null, company: null, birthdate: null};
  //   this.dob = null;
  //   this.showProfile = false;
  // }

  save(){
    this.showProfileInfo=1;
    this.person.birthdate = new Date(this.dob).getTime();
    this.age = this.getAge(this.person.birthdate);
    this.showProfile = true;
    localStorage.setItem('PERSON', JSON.stringify(this.person));
  }

  getAge(birthdate){
    let currentTime = new Date().getTime();
     return ((currentTime - birthdate)/31556952000).toFixed(0);
  }


}
