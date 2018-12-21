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
  isServerCreated = false;
  servers = ['TestServer1',"TestServer2"];

  constructor() { 
    setTimeout (() => {this.allowNewServer = true},500);
  }

  onServerCreate(){
    this.servers.push(this.ServerName);
    this.serverCreationState = this.ServerName+" was created successfully";
    this.isServerCreated = true;
  }

  onUpdateServerName(event: Event){
    this.ServerName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
