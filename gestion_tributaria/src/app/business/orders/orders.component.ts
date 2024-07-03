import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrdersService } from './services/orders.service';
import { OrdersInterface } from './interfaces/orders.interface';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export default class OrdersComponent {

  ordersList: OrdersInterface[]=[];


  bookingObj: any  = {
    "name": "",
    "mobileNo": "",
    "email": "",
    "aadharNo": "",
    "city": "",
    "address": "",
    "bookingId": 0,
    "roomId": 0,
    "customerId": 0,
    "bookingFromDate": "",
    "bookingToDate": "",
    "createdDate": new Date(),
    "bookingRate": 0,
    "naration": "",
    "createdBy": 0,
    "hotelBookingDetails": [
      
    ]
  };

 

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
  }

  loadRooms() {
    
  }

  addGuest() {
   
  }

  removeGuest(index:number) {
  }

  onSaveBooking() {
    debugger
    this.ordersService.getOrders(this.bookingObj).subscribe((res: any) => {
      if(res.result) {
        alert('Booking Created')
      } else {
        alert(res.message)
      }
    })
  }
}
