import {Component} from '@angular/core';

@Component({
 selector: 'app-server',
 templateUrl: './server.component.html'
})

export class ServerComponent{
   uId : String = "u001";

   getServerState (){
       return "offline";
   }
}