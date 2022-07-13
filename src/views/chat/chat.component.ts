import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import modelMessage from './modelMessage';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  message: modelMessage = new modelMessage;
  messages: Array<any> = new Array();
  nome:any = window.localStorage.getItem("name")

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.socket.on('connect', () =>{
      this.chatService.socket.on('receive-message',(content:{message:string})=>{
          this.listMessages()
      })
  })
    this.listMessages();
  }

  async listMessages() {
    return await this.chatService.getMessages().subscribe(messages => {
      this.messages = messages;
    }, err => {
      console.log('erro ao listar', err)
    })
  }

  send() {
    this.message.name=this.nome
    this.chatService.send(this.message)
    this.message = new modelMessage
    
  }

}
