import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../shared/services/auth';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register {
  logInForm!:FormGroup;

  constructor(private fb:FormBuilder,
    private authService:Auth){
      this.onitForm();
    }
    
    
    onitForm(){
    this.logInForm=this.fb.group({
      firstname:['',Validators.required],
      lastName:['',Validators.required],
      age:['',Validators.required],
      emailId:['',Validators.required],
      userName:['',Validators.required],
      passWord:['',Validators.required],
     
  })


}

onSubmit(){
  if(this.logInForm.valid){
    console.log(this.logInForm.value);
          const logIndata = {
            firstName:this.logInForm.value.firstname,
            lastName: this.logInForm.value.lastName,

        age: Number(this.logInForm.value.age),

        email: this.logInForm.value.emailId,

        username: this.logInForm.value.userName,

        password: this.logInForm.value.passWord

      
        
      }

      
      this.authService.getRegister(logIndata).subscribe({
        next :  (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        }
       })
      


  }else{
    console.log('please enter your details');
  }


}
}