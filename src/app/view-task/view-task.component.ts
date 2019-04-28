import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ViewTaskComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  open(content){
    this.modalService.open(content, { centered: true ,size: 'lg' });
  }
}
