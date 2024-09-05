import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { LoginService } from '../../services/auth/login.service';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,NgIf],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
  userLoginOn:boolean=false;
  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
     this.loginService.currentUserLoginOn.subscribe(
       {
         next:(userLoginOn) => {
           this.userLoginOn=userLoginOn;
         }
       }
     )
  }

  logout()
  {
    this.loginService.logout();
    this.router.navigate(['/inicio'])
  }

}
