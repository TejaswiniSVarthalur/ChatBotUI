import { Component,OnInit  } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message'

import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice'

import {ReactiveFormsModule} from '@angular/forms'
import{AppserviceService} from './appservice.service'
@Component({
  selector: 'my-app',
  styleUrls : ['/app.component.css'],
  templateUrl: '/app.component.html'
})
export class AppComponent implements OnInit{
   // msgs: Message[] = [];
  constructor(private fb: FormBuilder, private appservice : AppserviceService ){  }
myForm : FormGroup
FromMessages =[]
ToMessages =[]


ngOnInit(){
}

data;
inputData
send =false;
Messages=[]
sendData(){
 let obj = {"message": this.inputData}
 
 this.ToMessages.push(this.inputData)
 this.Messages.push(this.inputData) 
 this.inputData=""
 this.appservice.getDataFromAPI(obj).subscribe(
   (success) => {
    this.data=success; 
    this.Messages.push(this.data.body); 
    this.FromMessages.push(this.data.body);
    console.log("To messages",this.ToMessages);
    console.log("From messages",this.FromMessages);

  },
    
   (error) => console.log(error) 
 )
  
}

}
