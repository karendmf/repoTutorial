import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  
  constructor(public messageService: MessageService) {}

  ngOnInit():void {
    //Despues de un determinado tiempo, se ejecuta la funcion "clear()" del servicio message, haciendo que el array vuelva a vacio.
    setInterval(()=>this.messageService.clear(), 15000);
  }
  
}
