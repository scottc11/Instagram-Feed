
// this example code should - in its current state - retreive photos in the format of a json file.
// It currently is throwing an error due to access_token problems ie. it doesn't have apporoval from instagram

// instagram url examples
var hashTag_URL = 'https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=ACCESS_TOKEN'


window.Instagram = {

  // store application settings
  config: {},

  BASE_URL: 'https://api.instagram.com/v1',

  init: function(opt) {
    opt = opt || {};

    this.config.client_id = opt.client_id;
    this.config.access_token = opt.access_token;
  },

  popular: function(callback) {

    // var endpoint = this.BASE_URL + '/media/popular?client_id=' + this.config.client_id;
    var endpoint = this.BASE_URL + '/tags/nofilter/media/recent?access_token=' + this.config.access_token;
    this.getJSON(endpoint, callback);
  },

  // Get a list of recently tagged media (need to edit url to access_token)
  tagsByName: function(name, callback) {
    var endpoint = this.BASE_URL + '/tags/' + name + '/media/recent?client_id=' + this.config.client_id;
    this.getJSON(endpoint, callback);
  },

  getJSON: function(url, callback) {
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'jsonp',
        success: function(response) {
            if (typeof callback === 'function') callback(response);
        }
    });
  }

};

Instagram.init({
  client_id: 'd49da08a520f47cbb6e7618f077f33ef',
  access_token: '16324296.1677ed0.6f34fde30aad48ffa63471cbea1c63ef'
});
