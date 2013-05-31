// Filename: models/project
define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var Map = (function () {

    var loadedMap = function() {
      if (Map.activeMap)
        return Map.activeMap;

      var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(-31.9530044, 115.8585),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      Map.activeMap = map;
    }

    return {
      loadedMap: loadedMap
    }

  })();

  $(function() {
    Map.loadedMap();
  });

  window.Map = Map;
  return Map
});