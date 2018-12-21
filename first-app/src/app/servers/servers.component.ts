import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationState = "Server is not created";
  ServerName = "TestServer";

  constructor() { 
    setTimeout (() => {this.allowNewServer = true},500);
  }

  onServerCreate(){
    this.serverCreationState = "Server "+this.ServerName+" created successfully";
  }

  onUpdateServerName(event: Event){
    this.ServerName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
