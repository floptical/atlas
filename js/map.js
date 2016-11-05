/* global app, L */

app.map = (function ()
{
  // the leaflet map object
  var _map,
  // create an empty layer group
      _layerGroup = new L.LayerGroup();
      // overlayHS = L.esri.featureLayer({
      //   url: '//services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/SchoolDist_Catchments_HS/FeatureServer/0'
      // })

  return {
    //theObject: queryParcel,
    initMap : function () {
      app.state.map = {}
      app.state.clickedOnMap = false
      app.state.moveMode = true
      var CITY_HALL = [39.952388, -75.163596];

      _map = L.map('map', {
         zoomControl: false,
         //measureControl: true,
      });
      _map.setView(CITY_HALL, 18);

      // Basemaps
      var baseMapLight = L.esri.tiledMapLayer({
        url: "https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer",
        maxZoom: 22
      });
      var baseMapDark = L.esri.tiledMapLayer({
        url: "https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Slate/MapServer",
        maxZoom: 22
      });
      var baseMapImagery2015 = L.esri.tiledMapLayer({
        url: "https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2015_3in/MapServer",
        maxZoom: 22
      });
      baseMapLight.addTo(_map);

      // Overlays
      var overlayZoning = L.esri.tiledMapLayer({
        url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/ZoningMap_tiled/MapServer'
      });
      /*
      var overlayHS = L.esri.featureLayer({
        url: '//services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/SchoolDist_Catchments_HS/FeatureServer/0'
      });
      var overlayES = L.esri.featureLayer({
        url: '//services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/SchoolDist_Catchments_ES/FeatureServer/0'
      });
      var overlayMS = L.esri.featureLayer({
        url: 'services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/SchoolDist_Catchments_MS/FeatureServer/0'
      });
      */
      var baseLayers = {
        'Light':    baseMapLight,
        'Dark':     baseMapDark,
        'Imagery 2015': baseMapImagery2015,
      };
      /*
      var overlays = {
        'Zoning':     overlayZoning,
        'PWD Parcels':  overlayPwdParcels,
        // 'Land Use': landUse,
      };
      */

      // Controls
      L.control.layers(baseLayers, '', {position: 'topright'}).addTo(_map);
      //L.control.layers(baseLayers, overlays, {position: 'topright'}).addTo(map);
      //var measureControl = new L.Control.Measure({position: 'topright'});
      //measureControl.addTo(map);
      new L.Control.Zoom({position: 'topright'}).addTo(_map);
      _layerGroup.addTo(_map);

      // one of 2 ways to call AIS
      _map.on('click', app.map.didClickMap);

      // make "Obilque Imagery" button open Pictometry window
      $('#pict-button').on('click', function(e){
        e.preventDefault();
        app.map.theLeafletZoom = _map.getZoom();
        app.map.theCenter = _map.getCenter();
        app.map.theX = app.map.theCenter.lng;
        app.map.theY = app.map.theCenter.lat;
        app.map.thePictUrl = app.config.pictometry.pictometryUrl + '?lat=' + app.map.theY + '&lon=' + app.map.theX + '&zoom=' + (app.map.theLeafletZoom + 1);
        window.open(app.map.thePictUrl, app.config.pictometry.pictometryUrl);
        return false
      });

      // if map moves, reload Pictometry
      _map.on('dragend', function(){
        console.log('map was dragged');
        app.map.theCenter = _map.getCenter();
        app.map.theX = app.map.theCenter.lng;
        app.map.theY = app.map.theCenter.lat;
        localStorage.setItem('theX', app.map.theX)
        localStorage.setItem('theY', app.map.theY)
      });

      if(localStorage.getItem('theX')){
        var theX = localStorage.getItem('theX');
        console.log('got theX ' +  theX);
      } else {
        console.log('there is no theX');
      }

      _map.on('zoomend', function(){
        console.log('map was zoomed');
        app.map.theLeafletZoom = _map.getZoom();
        localStorage.setItem('theLeafletZoom', app.map.theLeafletZoom)
      })

    }, // end of initMap

    renderAisResult: function (obj) {
      // if no parcel, query for it
      if (!app.state.map.parcel) {
        var pwdParcelId = obj.properties.pwd_parcel_id;
        app.map.getParcelById(pwdParcelId);
      }
      else {

      }
    },

    getParcelById: function (id) {
      var parcelQuery = L.esri.query({url: app.config.map.parcelLayerUrl});
      parcelQuery.where('PARCELID = ' + id);
      parcelQuery.run(app.map.didGetParcelQueryResult);
    },

    didClickMap: function (e) {
      // set state
      // app.state.clickedOnMap = true
      app.state.map.didClickMap = true;
      app.state.map.shouldPan = false;

      // query parcel layer
      var parcelQuery = L.esri.query({url: app.config.map.parcelLayerUrl});
      parcelQuery.contains(e.latlng)
      parcelQuery.run(app.map.didGetParcelQueryResult);
    },

    // called after parcel query finishes
    // this is a slow process - only want to do it once
    didGetParcelQueryResult: function (error, featureCollection, response) {
      var parcel = featureCollection.features[0],
          parcelAddress = parcel.properties.ADDRESS;

      // update state
      app.state.map.parcel = parcel;

      // if this is the result of a map click, query ais for the address
      if (app.state.map.didClickMap) {
        app.getAis(parcelAddress);
        app.state.map.didClickMap = false;
      }

      // render parcel
      app.map.drawParcel();
    },

    drawParcel: function () {
      var parcel = app.state.map.parcel,
          // flip these because leaflet uses lat/lon and esri is x/y
          coords = app.util.flipCoords(parcel.geometry.coordinates),
          parcelPoly = L.polygon([coords], {
            color: 'blue',
            weight: 2
          }),
          parcelCentroid = parcelPoly.getBounds().getCenter();

      // clear existing parcel
      _layerGroup.clearLayers();

      // pan map
      // true if search button was clicked or if page is loaded w address parameter, false if a parcel was clicked
      // if (app.state.map.shouldPan) {
        // latlon = new L.LatLng(thelatlon[0], thelatlon[1]);
        _map.setView(parcelCentroid, 18);
      // }

      // add to map
      _layerGroup.addLayer(parcelPoly);
    }, // end of drawPolygon

    getGeomFromLatLon : function(latlon){
      //console.log('it did getGeom')
      queryParcel.contains(latlon)
      queryParcel.run(function (error, featureCollection, response) {
        app.state.map.curFeatGeo = featureCollection.features[0].geometry
        // app.gis.flipCoords(app.data.gis.curFeatGeo)
        // var coordsFlipped =
      });
    },

    //function drawPolygon(geoObj){
    // drawPolygon : function(geoObj, thelatlon) {
    //   app.data.gis.layerGroup.clearLayers()
    //   if (app.state.moveMode == true){  // true if search button was clicked or if page is loaded w address parameter, false if a parcel was clicked
    //     latlon = new L.LatLng(thelatlon[0],thelatlon[1])
    //     _map.setView(latlon, 20)
    //   }
    //   app.data.gis.layerGroup.addLayer(L.polygon([geoObj], {
    //     color: 'blue',
    //     weight: 2
    //   }))
    // } // end of drawPolygon

  }; // end of return
})();

app.map.initMap();