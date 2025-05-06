import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { WebSocketService } from './websocket.service';
import { WebPubSubClient } from '@azure/web-pubsub-client';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
  messages: any[] = [];
  webPubSub: WebPubSubClient;

  constructor() {
    this.webPubSub = new WebPubSubClient('wss://wpsuksnprdwafrowsdev6005.webpubsub.azure.com/client/hubs/Hub?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ3c3M6Ly93cHN1a3NucHJkd2Fmcm93c2RldjYwMDUud2VicHVic3ViLmF6dXJlLmNvbS9jbGllbnQvaHVicy9IdWIiLCJpYXQiOjE3NDY1MjU4OTQsImV4cCI6MTc0NjUyOTQ5NH0.13GQW9LNOeuFehsZnkzXxUI3X7exLWqV7ff6IX8JfWw');

  }
 
  ngOnInit() {
  //  this.connect();
  // this.webPubSub.start()
  // for web pubsub native clients
  // let token = await serviceClient.getClientAccessToken();

  this.webPubSub.on('connected', () => {
    console.log('Connected to Azure Web PubSub');
  });

  this.webPubSub.on('disconnected', () => {
    console.log('Disconnected from Azure Web PubSub');
  });

  this.webPubSub.on("server-message", (message) => {
    console.log(`Received message ${message}`)
    this.messages.push(message);
});

  // Before a client can receive a message, 
  // you must invoke start() on the client object.
  this.webPubSub.start();

  // this.webPubSub.on('server-message', (message: any) => {
  //   console.log('Received group message:', message);
  //   this.messages.push(message); // Update the UI with the new message
  // });

  }


 
  // connect() {
  //   this.wsService.connect().then((data: any)=>{
  //     console.log('Messages received:', data);
  //     this.message = data;
  //   }).catch((error) => {
  //     console.error('WebSocket connection failed:', error);
  //   });

  //  // Listen for new messages
  //   this.wsService.onMessage((message: any) => {
  //     console.log('New message:', message);
  //     this.message.push(message); // Update the UI
  //   });
 // }
}
