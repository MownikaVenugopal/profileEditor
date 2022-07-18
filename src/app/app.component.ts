import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, NgForm,  } from '@angular/forms';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Profile Editor';
  constructor(private fb:FormBuilder) {
  }
  user = new FormGroup({
    name: new FormControl("Priyanka"),
    age: new FormControl(14),
    favoriteColor:new FormControl("Pink"),
    gender: new FormControl("Female")
  });   
formUser = new FormGroup({
  name: new FormControl("Priyanka"),
  age: new FormControl(14),
  favoriteColor:new FormControl("Pink"),
  gender: new FormControl("Female")
});

 displayEdit : boolean = false;

 allGender = [
  new Gender(1,"Male"),
  new Gender(2,"Female")
] 

toggleEdit() : void {
if(this.displayEdit){
  this.displayEdit = false;
}
else{
  this.displayEdit = true;
}
}
onProfileChange() : void{
  console.log(this.user);
  }
saveChanges():void{
console.log(this.user.value);
  
  this.toggleEdit();
}
}

export class Gender { 
  constructor(public gIndex:number, public genderName:string) {
  }

} 
