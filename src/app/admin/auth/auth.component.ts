import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  public username: string = '';

  public password: string = '';
  public errorMessage: any = null;


  ngOnInit(): void {
  }

  login(form: NgForm) {
    if (form.valid) {
      this.authService.authenticate(this.username, this.password)
        .subscribe(response => {
          if(response) {
            console.log("gir")
            this.router.navigateByUrl('admin/main')

          }
          console.log(response);
          this.errorMessage = 'Hatalı username yada parola'

        })

    } else {
      this.errorMessage = 'Bilgileri eksiksiz girin'
    }

  }

}
