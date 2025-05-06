import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WebSocketService {
  private ws!: WebSocket;

  constructor(private http: HttpClient) {}

  // async connect() {
  //  // return new Promise((resolve, reject) => {
  //   try {
  //    // const response: any = await firstValueFrom(this.http.get('http://localhost:5500/negotiate'));
  //    const url = 'wss://wpsuksnprdwafrowsdev6005.webpubsub.azure.com/client/hubs/Hub?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ3c3M6Ly93cHN1a3NucHJkd2Fmcm93c2RldjYwMDUud2VicHVic3ViLmF6dXJlLmNvbS9jbGllbnQvaHVicy9IdWIiLCJpYXQiOjE3NDY0MzkwOTQsImV4cCI6MTc0NjQ0MjY5NH0.XxNuFX3ud0hFQes9Yd9tJpKaBvkRaDomdPHZDPOPYHw';
  //   // const url = 'Endpoint=https://wpsuksnprdwafrowsdev6005.webpubsub.azure.com;AccessKey=1nzmmPOwaHX9COwxZuP7o7yKqBUF24cqbOhmS5C9jcUwEmYU1eyrJQQJ99BDACmepeSXJ3w3AAAAAWPSkHE3;Version=1.0;';


  //     this.ws = new WebSocket(url); //response.url , , 'json webpubsub.azure.v1'

  //     this.ws.onopen = () => {
  //       console.log('WebSocket connected');
  //      // resolve(true); // Resolve the promise when connected
  //       // Join the group 'group_1'
  //       // this.ws.send(
  //       //   JSON.stringify({ type: 'joinGroup', group: 'group_1' })
  //       // );
  //     };

  //     const messages: any[] = [];
      
  //     // this.ws.onmessage = (event) => {
  //     //   console.log('Message received:', event, event.data);
  //     //   try {
  //     //     const message = JSON.parse(event.data);
  //     //     console.log('Parsed message:', message);
  //     //     messages.push(message); // Collect messages
  //     //   } catch (error) {
  //     //     console.error('Error parsing message:', error);
  //     //   }
  //     // };
  //     this.ws.onmessage = (event) => {
  //       console.log('Message received:', event.data);
  //     };

  //     this.ws.onerror = (error) => console.error('WebSocket error:', error);

  //     this.ws.onclose = () => console.log('WebSocket closed');
  //   } catch (error) {
  //     console.error('Error establishing WebSocket connection:', error);
  //    // reject(error); // Reject the promise on connection failure
  //   }
  //  // });
  // }

  
}
