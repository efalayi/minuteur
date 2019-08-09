import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/google/auth.service'

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() user: object = {}
  isLoggedOut: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  logoutUser() {
    this.authService.logoutUser()
  }
}