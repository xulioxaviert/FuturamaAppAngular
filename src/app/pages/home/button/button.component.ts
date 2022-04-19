import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() emitMessage = new EventEmitter<string>();
  public style: string = 'dark';

  constructor() { }

  ngOnInit(): void {
  }
  public changeMode(): void {
    this.style = this.style === 'dark' ? 'light' : 'dark';
    console.log("button", this.style);
    this.emitMessage.emit(this.style)
  }

}
