/* global document, window, io, angular */

var socket, app;

$(document).ready(initialize);
setupAngular();

function initialize(){
  initializeSocketIO();
}

function setupAngular(){
  app = angular.module('App', []);

  app.controller('HomeController', function(){
    this.greeting = 'Welcome to Angular!';
  });
}

function initializeSocketIO(){
  var port = window.location.port ? window.location.port : '80';
  var url = window.location.protocol + '//' + window.location.hostname + ':' + port + '/app';

  socket = io.connect(url);
  socket.on('connected', socketConnected);
}

function socketConnected(data){
  console.log(data);
}
