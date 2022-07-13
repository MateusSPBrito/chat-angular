import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { io } from "socket.io-client";
import modelMessage from "./modelMessage";



@Injectable({
    providedIn: 'root'
})
export class ChatService {
    socket: any;
    readonly url = 'http://localhost:3000/'

    constructor(private http:HttpClient){
        this.socket=io(this.url,{ transports: ['websocket'] })
    }

    // listem():any{
    //     this.socket.on('connect', () =>{
    //         console.log('conectou')
    //         this.socket.on('receive-message',(content:{message:string})=>{
    //             console.log(content)
    //         })
    //     })
        
    // }

    send(message:modelMessage){
       this.socket.emit('send-message',message)
       
    }

    getMessages():Observable<any>{
        return this.http.get("http://localhost:3000/message")
    }
}