import { Component, OnInit, ElementRef } from '@angular/core';
import * as $ from 'jQuery';
import * as SIP from 'sip.js/dist/sip';

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

  createUa () {

    var config = {
      // Replace this IP address with your Asterisk IP address
      uri: '6003@192.168.1.161',
    
      // Replace this IP address with your Asterisk IP address,
      // and replace the port with your Asterisk port from the http.conf file
      ws_servers: 'ws://192.168.1.161:8088/ws',
    
      // Replace this with the username from your sip.conf file
      authorizationUser: '6003',
    
      // Replace this with the password from your sip.conf file
      password: '1234',
    };
    
    var ua = new SIP.UA(config);
    
    // Invite with audio only
    ua.invite('6003',{
      sessionDescriptionHandlerOptions: {
        constraints: {
          audio: true,
          video: false
        }
      }
    });

  }

  // configuseragent () {
  // var userAgent = new SIP.UA({
  //   uri: '6003@192.168.1.161',
  //   transportOptions: {
  //     wsServers: ['ws://192.168.1.161:8088/ws']
  //   },
  //   authorizationUser: '6003',
  //   password: '1234'
  // });} 

 
}
