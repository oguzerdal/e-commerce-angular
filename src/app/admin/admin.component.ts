import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../model/auth.service';

@Component({
    selector: 'admin.component.html',
    templateUrl: 'admin.component.html'
})

export class AdminComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() { }


    logout(){
        this.authService.clear();
        this.router.navigateByUrl('admin/shop');   
    }
    
}