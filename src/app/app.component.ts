import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private enrolservice:EnrollmentService){}
  title = 'angular-form-demo';
  topics=['Angular', 'React', 'Vague'];
  userModel=new User('','mohit@gmail.com',8732947932,'default','morning',true)
  topicHasError=true;
  validateTopic(value){
    if(value == 'default')
    {
this.topicHasError=true;
    }
    else
    this.topicHasError=false;
  }


  onSubmit()
  {
    this.enrolservice.enrol(this.userModel)
    .subscribe(
      data=>console.log('success',data),
      error=>console.error('error',error)      
    )

  }
}
