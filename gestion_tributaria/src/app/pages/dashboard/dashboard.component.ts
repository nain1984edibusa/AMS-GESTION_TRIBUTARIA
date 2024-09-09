import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';
import { NavComponent } from '../../shared/nav/nav.component';
import { PersonalDetailsComponent } from '../../components/personal-details/personal-details.component';
import { NgIf } from '@angular/common';
import PlanesComponent from '../../business/planes/planes.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ NgIf,NavComponent, PersonalDetailsComponent, PlanesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export default class DashboardComponent implements OnInit {

  userLoginOn:boolean=false;
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    });

  }
}