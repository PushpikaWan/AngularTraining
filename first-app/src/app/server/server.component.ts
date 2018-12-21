import {Component} from '@angular/core';

@Component({
 selector: 'app-server',
 templateUrl: './server.component.html',
 styles:[`
   .online {
       color : white;
   }
 `]
})

export class ServerComponent{
   uId : String = "u001";
   serverState = "";

   constructor(){
      this.serverState = Math.random() > 0.5 ? 'online': 'offline';
   }

   getServerState (){
       return this.serverState;
   }

   getColor(){
       return this.serverState === 'online' ? 'green' : 'red';
   }
}