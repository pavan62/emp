import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Camera} from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imageUrl;
  user: any;
  

  constructor(private userService: UsersService,private camera:Camera) { }

  ngOnInit() {
    this.user = this.userService;
  }

  getcamera(){
    this.camera.getPicture({
      sourceType:this.camera.PictureSourceType.CAMERA,
      destinationType:this.camera.DestinationType.DATA_URL
    }).then((res)=>{
      this.imageUrl=res;
    })

  }
  getgallery(){
    this.camera.getPicture({
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType:this.camera.DestinationType.FILE_URI
    }).then((res)=>{
      this.imageUrl='data:image/jpeg;base64,'+res;
    })

  }
  
}