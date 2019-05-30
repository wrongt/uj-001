import { Component, OnInit, ElementRef } from '@angular/core';
import * as $ from 'jQuery';

@Component({
  selector: 'app-webphone',
  templateUrl: './webphone.component.html',
  styleUrls: ['./webphone.component.css']
})
export class WebphoneComponent implements OnInit {

  constructor(private elementRef:ElementRef) {

  };

  ngOnInit() {


    var count = 0;

    $(".digit").on('click', function() {
      var num = ($(this).clone().children().remove().end().text());
      if (count < 11) {
        $("#output").append('<span>' + num.trim() + '</span>');
    
        count++
      }
    });
    
    $('.fa-long-arrow-left').on('click', function() {
      $('#output span:last-child').remove();
      count--;
    });

  
  
  }

}
