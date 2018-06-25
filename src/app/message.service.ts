import {Component, OnInit} from '@angular/core';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  staticAlertClosed = false;
  messages: string[] = [];
  type: 'warning';
  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
  ngOnInit(): void {
    setTimeout(() => this.staticAlertClosed = true, 1000);
  }
}