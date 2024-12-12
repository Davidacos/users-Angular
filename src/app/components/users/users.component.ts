import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UsersInterface } from '../../interface/usersList.interface';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  
  usersList: UsersInterface[]=[];
  constructor(private usersService: UsersService){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.usersService.getUsers().subscribe({
      next: (result) =>{
        this.usersList = result
      },
      error: (err)=>{ 
        console.log(err);
      }
    })
  }

}
