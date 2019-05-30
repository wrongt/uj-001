import { Component, OnInit } from '@angular/core';
import { MNOService } from './mno.service';
import {MessageService} from 'primeng/components/common/messageservice';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { mno } from './mno';

@Component({
  selector: 'app-mno',
  templateUrl: './mno.component.html',
  styleUrls: ['./mno.component.css'],
  providers: [MessageService]

})
export class MNOComponent implements OnInit {


  mnos:mno[];
  selectmno:mno;
  items: MenuItem[];


  constructor(private mList:MNOService,private messageService: MessageService,private router:Router) { }

  ngOnInit() {

    this.mList.getMnosList().then(data=>this.mnos = data);
    this.items = [
      { label: 'View', icon: 'pi pi-search', command: (event) => console.log("view", event,this.selectmno) },
      { label: 'Delete', icon: 'pi pi-times', command: (event) => console.log("delete", event, this.selectmno) }
  ];

  }

}
