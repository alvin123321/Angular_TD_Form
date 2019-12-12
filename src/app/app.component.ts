import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: false }) SignForm: NgForm;
  defaultQuestion = 'pet';
  defaultGender = 'Male';
  answer = '';
  genders = ['Male', 'Female'];
  user = {
    username: '',
    email: '',
    secetQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    // setting all value of the form
    // this.SignForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   securityQuestion: {
    //     questionAnswer: '',
    //     secret: ''
    //   },
    //   gender: ''
    // });

    // modify only the specific value
    this.SignForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // get a snapshot of all the values
  // onSubmit(form: NgForm) {
  //   console.log(form);
  //   console.log('Secret: ', form.value['secret']);
  //   console.log('Username: ', form.value['username']);
  //   console.log('E-mail: ', form.value['email']);
  //   form.resetForm();
  // }

  onSubmit() {
    this.submitted = true;
    console.log(this.SignForm);
    this.user.username = this.SignForm.value.userData.username;
    this.user.email = this.SignForm.value.userData.email;
    this.user.secetQuestion = this.SignForm.value.securityQuestion.secret;
    this.user.answer = this.SignForm.value.securityQuestion.questionAnswer;
    this.user.gender = this.SignForm.value.gender;
    this.SignForm.resetForm({
      userData: {
        username: 'value set after reset',
        email: ''
      },
      securityQuestion: {
        questionAnswer: '',
        secret: ''
      },
      gender: ''
    });
  }
}
