(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{296:function(t,e,o){var i=o(376);"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o(12)(i,a);i.locals&&(t.exports=i.locals)},342:function(t,e,o){"use strict";var i=o(341),a=o.n(i);o(18);e.a=class{constructor(t,e,o,i=3857,a){this.baseUrl=t,this.username=e,this.password=o,this.srid=i,this.proxy=a}getRecordings(t,e){const o=t.getSouthWest(),i=t.getNorthEast(),r=`<wfs:GetFeature service="WFS" version="1.1.0" resultType="results" outputFormat="text/xml; subtype=gml/3.1.1" xmlns:wfs="http://www.opengis.net/wfs">\n\t\t\t\t\t\t\t\t\t\t\t<wfs:Query typeName="atlas:Recording" srsName="EPSG:${this.srid}" xmlns:atlas="http://www.cyclomedia.com/atlas">\n\t\t\t\t\t\t\t\t\t\t\t\t<ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">\n\t\t\t\t\t\t    \t\t\t\t\t<ogc:And>\n\t\t\t\t\t\t      \t\t\t\t\t<ogc:BBOX>\n\t\t\t\t\t\t\t\t\t\t\t        <gml:Envelope srsName="EPSG:${this.srid}" xmlns:gml="http://www.opengis.net/gml">\n\t\t\t\t\t\t\t\t\t\t\t          <gml:lowerCorner>${o.lng} ${o.lat}</gml:lowerCorner>\n\t\t\t\t\t\t\t\t\t\t\t          <gml:upperCorner>${i.lng} ${i.lat}</gml:upperCorner>\n\t\t\t\t\t\t\t\t\t\t\t        </gml:Envelope>\n\t\t\t\t\t\t\t\t\t\t\t      </ogc:BBOX>\n\t\t\t\t\t\t\t\t\t\t\t      <ogc:PropertyIsNull>\n\t\t\t\t\t\t\t\t\t\t\t        <ogc:PropertyName>expiredAt</ogc:PropertyName>\n\t\t\t\t\t\t\t\t\t\t\t      </ogc:PropertyIsNull>\n\t\t\t\t\t\t\t\t\t\t\t    </ogc:And>\n\t\t\t\t\t\t\t\t\t\t\t  </ogc:Filter>\n\t\t\t\t\t\t\t\t\t\t\t </wfs:Query>\n\t\t\t\t\t\t\t\t\t\t\t</wfs:GetFeature>`,s=(this.proxy||"")+this.baseUrl;a.a.ajax({url:s,data:r,type:"POST",contentType:"text/xml",headers:{Authorization:"Basic "+window.btoa(this.username+":"+this.password)},success(t){console.log("got recordings",t);const o=t.getElementsByTagNameNS("*","Recording"),i=[].slice.call(o);if(i.length<1)return void console.log("no cyclomedia recordings for bounds");const a=i.map(t=>{const e=t.getElementsByTagNameNS("*","imageId")[0].firstChild.data,o=t.getElementsByTagNameNS("*","pos")[0].firstChild.data,[i,a]=o.split(" ").map(parseFloat);return{imageId:e,lng:i,lat:a}});e(a)},error(t,e,o){console.log(t.status),console.log(o)}})}}},375:function(t,e,o){"use strict";var i=o(296);o.n(i).a},376:function(t,e,o){(t.exports=o(11)(!1)).push([t.i,"\n.mb-panel-map[data-v-382279cc] {\n  /*this allows the loading mask to fill the div*/\n  position: relative;\n}\n.mb-map-with-widget[data-v-382279cc] {\n  height: 50%;\n}\n.widget-slot[data-v-382279cc] {\n  display: inline-block;\n  float: left;\n}\n.mb-map-loading-mask[data-v-382279cc] {\n  /*display: inline;*/\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0 ,0 , 0.25);\n  z-index: 1000;\n  text-align: center;\n  vertical-align: middle;\n}\n.mb-map-loading-mask-inner[data-v-382279cc] {\n  position: absolute;\n  top: 40%;\n  left: 40%;\n}\n\n/*small retina*/\n/*@media\n(-webkit-min-device-pixel-ratio: 2),\n(min-resolution: 192dpi),\n(max-width: 39.9375em) {\n  .mb-search-control-input {\n    max-width: 250px;\n  }\n}*/\n\n",""])},485:function(t,e,o){"use strict";o.r(e);var i=o(0),a=o.n(i),r={watch:{activeFeature(t,e){const o=this.$store.state.map.map._layers,i=Object.values(o);let a,r,s,n,l,c,d;e&&e.tableId&&e.featureId&&(s=(a=e).tableId,n=a.featureId,d=i.filter(t=>{const e=(t.options||{}).data;if(!e)return;const o=e.featureId,i=e.tableId;return o===n&&i===s})[0],this.updateMarkerFillColor(d)),t&&t.tableId&&t.featureId&&(s=(r=t).tableId,l=r.featureId,c=i.filter(t=>{const e=(t.options||{}).data;if(!e)return;const o=e.featureId,i=e.tableId;return o===l&&i===s})[0],this.updateMarkerFillColor(c),this.bringMarkerToFront(c))}},computed:{locationMarker(){return{latlng:[this.$store.state.map.location.lat,this.$store.state.map.location.lng],radius:6,fillColor:"#ff3f3f",color:"#ff0000",weight:1,opacity:1,fillOpacity:1}},markersForAddress(){const t=[],e=this.geocodeGeom;if("address-marker"===this.identifyFeature&&e){const o={latlng:[...e.coordinates].reverse(),key:this.geocodeResult.properties.street_address,color:"#2176d2",markerType:"geocode",icon:{prefix:"fas",icon:"map-marker-alt",shadow:!0,size:50}};t.push(o)}return t},markersForTopic(){const t=[],e=this.activeTopicConfig.markersForTopic;if(e){const o=this.$store.state,i=e.data(o);if(null!==i){const o={latlng:[i[e.lat],i[e.lng]],key:i[e.key],color:e.color||"green",markerType:"overlay",icon:e.icon};t.push(o)}}return t},reactiveCircleMarkers(){const t=this.$store.state.horizontalTables.filteredData;let e=[];const o=this.$store.getters.visibleTableIds;for(let i of o){const o=((this.getConfigForTable(i)||{}).options||{}).mapOverlay;if(!o||"circle"!==o.marker)continue;const a=t[i];if(a.length<1)continue;const r=o.style;for(let t of a){let o;if(t.geometry){const[e,i]=t.geometry.coordinates;o=[i,e]}else t.lat&&(o=[t.lat,t.lng]);let a=Object.assign({},r);a.latlng=o,a.featureId=t._featureId,a.tableId=i,e.push(a)}}return e},geojsonParcels(){const t=[],e=this.identifyFeature,o=this.activeParcelLayer;if("pwd-parcel"===e&&"pwd"===o&&this.pwdParcel){let e={};e.geojson=this.pwdParcel,e.color="blue",e.fillColor="blue",e.weight=2,e.opacity=1,e.fillOpacity=.3,e.key=e.geojson.properties.PARCELID,t.push(e)}else if("dor-parcel"===e&&"dor"===o){const e=this.dorParcels.map(t=>{let e={};return e.geojson=t,e.color="blue",e.fillColor="blue",e.weight=2,e.opacity=1,e.fillOpacity=.3,e.key=t.properties.OBJECTID,e});t.push.apply(t,e)}return t},geojsonForTopic(){const t=[],e=this.activeTopicConfig.geojsonForTopic;if(e){const o=this.$store.state,i=e.data(o);if(null!==i)for(let o of i){let i=Object.assign({},e.style);i.key=o[e.key],i.geojson=o,t.push(i)}}return t},reactiveGeojsonFeatures(){const t=[],e=this.$store.state.horizontalTables.filteredData,o=this.$store.getters.visibleTableIds;for(let i of o){const o=((this.getConfigForTable(i)||{}).options||{}).mapOverlay;if(!o||"geojson"!==o.marker)continue;const a=e[i];if(a.length<1)continue;const r=o.style;a.push(i);for(let e of a){let o=Object.assign({},r);o.geojson=e.geometry,o.key=e.id,o.featureId=e._featureId||null,o.tableId=a[a.length-1],t.push(o)}}return t},leafletMarkers(){const t=[];return t.push.apply(t,this.markers),t.push.apply(t,this.geojsonParcels),t}},methods:{getTableFromComps:(t,e)=>(t.filter(t=>"horizontal-table"===t.type&&t._id==e)||[])[0],getConfigForTable(t){const e=this.$config.topics||[];for(let o of e){const e=o.components||[],i=this.getTableFromComps(e,t);if(i)return i;for(let o of e){const e=o.options||{},i=e.components||e.tables||[];if(i.length>0){const e=this.getTableFromComps(i,t);if(e)return e}}}},bringMarkerToFront(t){const e=t._path,o=t._renderer._rootGroup;o.removeChild(e),o.appendChild(e)},handleMarkerMouseover(t){if(!this.isMobileOrTablet){const{target:e}=t,{featureId:o,tableId:i}=e.options.data;this.$store.commit("setActiveFeature",{featureId:o,tableId:i})}},handleMarkerClick(t){if(this.isMobileOrTablet){const{target:e}=t,{featureId:o,tableId:i}=e.options.data;this.$store.commit("setActiveFeature",{featureId:o,tableId:i})}},handleMarkerMouseout(t){const{target:e}=t;this.$store.commit("setActiveFeature",null)},updateMarkerFillColor(t){const{featureId:e,tableId:o}=t.options.data,i=this.fillColorForOverlayMarker(e,o),a=Object.assign({},t.options);a.fillColor=i,t.setStyle(a)}}},s={name:"cyclomediaMixin",computed:{cyclomediaActive(){return this.$store.state.cyclomedia.active},cyclomediaRecordings(){return this.$store.state.cyclomedia.recordings}},methods:{handleCyclomediaButtonClick(){this.updateCyclomediaRecordings()},handleCyclomediaRecordingClick(t){const e=t.latlng;console.log("handleCyclomediaRecordingClick is running, latlng:",e),this.$store.commit("setCyclomediaLatLngFromMap",e)},updateCyclomediaRecordings(){const t=this.$store.state.map.map,e=t.getZoom();if(!this.$store.state.cyclomedia.active||e<=18)return void this.$store.commit("setCyclomediaRecordings",[]);const o=t.getBounds();this.$cyclomediaRecordingsClient.getRecordings(o,t=>{this.$store.commit("setCyclomediaRecordings",t)})}}},n={name:"pictometryMixin",computed:{pictometryActive(){return this.$store.state.pictometry.active}}},l=o(342);const c=a.a.featureGroup,d=a.a.geoJSON,p=a.a.marker;console.log("cyclomediaMixin:",s,"pictometryMixin:",n),console.log("in MapPanel.vue, CyclomediaRecordingsClient:",l.a);var m={name:"MapPanel",mixins:[r,s,n],components:{Map_:()=>o.e(39).then(o.bind(null,493)),Control:()=>o.e(17).then(o.bind(null,272)),MapAddressInput:()=>o.e(40).then(o.bind(null,486)),MapAddressCandidateList:()=>o.e(2).then(o.bind(null,494)),EsriTiledMapLayer:()=>o.e(27).then(o.bind(null,531)),EsriTiledOverlay:()=>o.e(28).then(o.bind(null,497)),EsriDynamicMapLayer:()=>o.e(25).then(o.bind(null,498)),EsriFeatureLayer:()=>o.e(26).then(o.bind(null,530)),Geojson:()=>o.e(32).then(o.bind(null,525)),CircleMarker:()=>o.e(15).then(o.bind(null,528)),VectorMarker:()=>o.e(56).then(o.bind(null,527)),PngMarker:()=>o.e(48).then(o.bind(null,535)),BasemapToggleControl:()=>o.e(11).then(o.bind(null,507)),BasemapSelectControl:()=>o.e(10).then(o.bind(null,509)),FullScreenMapToggleTab:()=>o.e(30).then(o.bind(null,510)),LocationControl:()=>o.e(38).then(o.bind(null,492)),PictometryButton:()=>o.e(43).then(o.bind(null,513)),CyclomediaButton:()=>o.e(19).then(o.bind(null,515)),CyclomediaRecordingCircle:()=>o.e(20).then(o.bind(null,488)),SvgViewConeMarker:()=>o.e(21).then(o.bind(null,514)),MeasureControl:()=>o.e(59).then(o.bind(null,529)),LegendControl:()=>o.e(36).then(o.bind(null,511)),BasemapTooltip:()=>o.e(12).then(o.bind(null,508)),ControlCorner:()=>o.e(18).then(o.bind(null,526))},data:()=>({zoomToShape:{geojsonParcels:[],geojsonForTopic:[],markersForAddress:[],markersForTopic:[]}}),beforeCreate(){console.log("MapPanel.vue beforeCreate this.$config:",this.$config)},created(){console.log("MapPanel.vue created this.$config:",this.$config);const t=this.$config.defaultAddress;t&&this.$controller.goToDefaultAddress(t),(this.$config.cyclomedia||{}).enabled&&(this.$cyclomediaRecordingsClient=new l.a(this.$config.cyclomedia.recordingsUrl,this.$config.cyclomedia.username,this.$config.cyclomedia.password,4326))},computed:{addressAutocompleteEnabled(){return!!this.$config.addressInput&&!0===this.$config.addressInput.autocompleteEnabled},addressInputPosition(){return this.isMobileOrTablet?"topleft":"topalmostleft"},addressInputWidth(){return this.$config.addressInput?this.$config.addressInput.mapWidth:415},addressInputPlaceholder(){return this.$config.addressInput?this.$config.addressInput.placeholder:null},basemapSelectControlPosition(){return this.isMobileOrTablet?"topright":"topalmostright"},shouldShowAddressCandidateList(){return this.$store.state.shouldShowAddressCandidateList},measureControlEnabled(){return!1!==this.$config.measureControlEnabled},fullScreenMapEnabled(){return this.$store.state.fullScreenMapEnabled},fullScreenTopicsEnabled(){return this.$store.state.fullScreenTopicsEnabled},mapPanelContainerClass(){return this.fullScreenMapEnabled?"medium-24 small-order-1 small-24 medium-order-2 mb-panel mb-panel-map":this.fullScreenMapOnly?"medium-1 small-order-1 small-1 medium-order-2 mb-panel mb-panel-map":this.fullScreenTopicsEnabled?"medium-1 small-order-1 small-24 medium-order-2 mb-panel mb-panel-map":"medium-12 small-order-1 small-24 medium-order-2 mb-panel mb-panel-map"},cycloLatlng(){if(null!==this.$store.state.cyclomedia.orientation.xyz){const t=this.$store.state.cyclomedia.orientation.xyz;return[t[1],t[0]]}return this.$config.map.center},cycloRotationAngle(){return 57.29577951307855*this.$store.state.cyclomedia.orientation.yaw},cycloHFov(){return this.$store.state.cyclomedia.orientation.hFov},isMobileOrTablet(){return this.$store.state.isMobileOrTablet},shouldShowCyclomediaButton(){return this.$config.cyclomedia.enabled&&!this.isMobileOrTablet},shouldShowPictometryButton(){return this.$config.pictometry.enabled&&!this.isMobileOrTablet},geolocationEnabled(){return!!this.$config.geolocation&&this.$config.geolocation.enabled},activeDorParcel(){return this.$store.state.parcels.dor.activeParcel},legendControls(){return this.$config.legendControls||{}},imageOverlay(){return this.$store.state.map.imageOverlay},imageOverlayItems(){if(this.activeTopicConfig.imageOverlayGroup){const t=this.activeTopicConfig.imageOverlayGroup,e=this.$store.state;return this.$config.imageOverlayGroups[t].items(e)}return[]},imageOverlayInfo(){return this.$config.map.dynamicMapLayers.regmaps},activeBasemap(){if(this.$store.state.map.shouldShowImagery)return this.$store.state.map.imagery;const t=this.$config.map.defaultBasemap;return this.$store.state.map.basemap||t},tiledLayers(){const t=this.activeBasemap;return this.configForBasemap(t).tiledLayers||[]},activeTiledOverlays(){return this.activeTopicConfig&&this.activeTopicConfig.tiledOverlays?this.activeTopicConfig.tiledOverlays:[]},activeDynamicMaps(){return this.activeTopicConfig&&this.activeTopicConfig.dynamicMapLayers?this.activeTopicConfig.dynamicMapLayers:[]},activeFeatureLayers(){return this.activeTopicConfig&&this.activeTopicConfig.featureLayers?this.activeTopicConfig.featureLayers:[]},activeFeature(){return this.$store.state.activeFeature},basemaps(){return Object.values(this.$config.map.basemaps)},imageryBasemaps(){return this.basemaps.filter(t=>"imagery"===t.type)},hasImageryBasemaps(){return this.imageryBasemaps.length>0},shouldShowImageryToggle(){return this.$config.map.imagery?this.hasImageryBasemaps&&this.$config.map.imagery.enabled:this.hasImageryBasemaps},identifyFeature(){let t;return"intersection"===this.geocodeType?t="address-marker":this.activeTopicConfig.identifyFeature?t=this.activeTopicConfig.identifyFeature:this.$config&&(t=this.$config.map.defaultIdentifyFeature),t},activeTopic(){return this.$store.state.activeTopic},activeTopicConfig(){const t=this.activeTopic;let e;return t&&(e=this.$config.topics.filter(e=>e.key===t)[0]),e||{}},activeParcelLayer(){return this.activeTopicConfig.parcels},dorParcels(){return this.$store.state.parcels.dor.data},pwdParcel(){return this.$store.state.parcels.pwd},geocodeResult(){return this.$store.state.geocode.data||{}},geocodeGeom(){return this.geocodeResult.geometry},geocodeType(){return this.geocodeResult.ais_feature_type},streetAddress(){return this.geocodeResult.properties.street_address},picOrCycloActive(){return!(!this.cyclomediaActive&&!this.pictometryActive)},mapBounds(){},boundsBasedOnShape(){return this.$store.state.map.boundsBasedOnShape},isGeocoding(){return"waiting"===this.$store.state.geocode.status}},watch:{picOrCycloActive(t){this.$nextTick(()=>{this.$store.state.map.map.invalidateSize()})},geojsonForTopic(t){let e=this.activeTopicConfig.zoomToShape,o=this.$data.zoomToShape;e&&e.includes("geojsonForTopic")?(o.geojsonForTopic=t,this.checkBoundsChanges()):o.geojsonForTopic=[]},geojsonParcels(t){let e=this.activeTopicConfig.zoomToShape,o=this.$data.zoomToShape;e&&e.includes("geojsonParcels")?(o.geojsonParcels=t,this.checkBoundsChanges()):o.geojsonParcels=[]},markersForAddress(t){let e=this.activeTopicConfig.zoomToShape,o=this.$data.zoomToShape;e&&e.includes("markersForAddress")?(o.markersForAddress=t,this.checkBoundsChanges()):o.markersForAddress=[]},markersForTopic(t){let e=this.activeTopicConfig.zoomToShape,o=this.$data.zoomToShape;e&&e.includes("markersForTopic")?(o.markersForTopic=t,this.checkBoundsChanges()):o.markersForTopic=[]},fullScreenTopicsEnabled(){this.$nextTick(()=>{this.$store.state.map.map.invalidateSize()})}},methods:{checkBoundsChanges(){let t=this.activeTopicConfig.zoomToShape;if(!t)return;let e=this.$data.zoomToShape,o=[];for(let i of t)!1!==e[i]&&e[i].length>0?o.push(!0):o.push(!1);o.includes(!1)||this.setMapToBounds()},setMapToBounds(){let t=[],e=this.activeTopicConfig.zoomToShape;if(e){if(e.includes("geojsonParcels"))for(let e of this.geojsonParcels)t.push(d(e.geojson));if(e.includes("geojsonForTopic"))for(let e of this.geojsonForTopic)t.push(d(e.geojson));if(e.includes("markersForAddress"))for(let e of this.markersForAddress)t.push(p(e.latlng));if(e.includes("markersForTopic"))for(let e of this.markersForTopic)t.push(p(e.latlng));const o=new c(t).getBounds();this.$store.commit("setMapBounds",o)}},configForBasemap(t){return this.$config.map.basemaps[t]||{}},shouldShowGeojson(t){return"pwd"===this.activeTopicConfig.basemap||t===this.activeDorParcel},shouldShowImageOverlay(t){return t===this.imageOverlay},shouldShowFeatureLayer(t){return!!this.activeFeatureLayers.includes(t)},handleMapClick(t){this.$controller.handleMapClick(t)},handleMapMove(t){const e=this.$store.state.map.map,o=this.$config.pictometry||{},i=e.getCenter(),{lat:a,lng:r}=i,s=[r,a];if(o.enabled){this.$store.commit("setPictometryMapCenter",s);const t=e.getZoom();this.$store.commit("setPictometryMapZoom",t)}(this.$config.cyclomedia||{}).enabled&&(this.updateCyclomediaRecordings(),this.$store.commit("setCyclomediaLatLngFromMap",[a,r]))},fillColorForOverlayMarker(t,e){const o=this.getConfigForTable(e).options.mapOverlay,{style:i,hoverStyle:a}=o,r=this.activeFeature;return(t===r.featureId&&e===r.tableId?a:i).fillColor}}},h=(o(375),o(47)),u=Object(h.a)(m,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:this.mapPanelContainerClass,attrs:{id:"map-panel-container"}},[o("full-screen-map-toggle-tab"),t._v(" "),o("map_",{class:{"mb-map-with-widget":this.$store.state.cyclomedia.active||this.$store.state.pictometry.active},attrs:{id:"map-tag",center:this.$store.state.map.center,zoom:this.$store.state.map.zoom,"zoom-control-position":"bottomright","min-zoom":this.$config.map.minZoom,"max-zoom":this.$config.map.maxZoom},on:{"l-click":t.handleMapClick,"l-moveend":t.handleMapMove}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.isGeocoding,expression:"isGeocoding"}],staticClass:"mb-map-loading-mask"},[o("div",{staticClass:"mb-map-loading-mask-inner"},[o("i",{staticClass:"fa fa-spinner fa-4x spin"}),t._v(" "),o("h1",[t._v("Finding address...")])])]),t._v(" "),t._l(this.$config.map.basemaps,function(e,i){return t.activeBasemap===i?o("esri-tiled-map-layer",{key:i,attrs:{url:e.url,"max-zoom":e.maxZoom,attribution:e.attribution}}):t._e()}),t._v(" "),t._l(this.$config.map.tiledLayers,function(e,i){return t.tiledLayers.includes(i)?o("esri-tiled-map-layer",{key:i,attrs:{url:e.url,zIndex:e.zIndex,attribution:e.attribution}}):t._e()}),t._v(" "),t._l(this.$config.map.tiledOverlays,function(e,i){return t.activeTiledOverlays.includes(i)?o("esri-tiled-overlay",{key:i,attrs:{url:e.url,zIndex:e.zIndex,opacity:e.opacity}}):t._e()}),t._v(" "),t._l(this.$config.map.dynamicMapLayers,function(e,i){return t.activeDynamicMaps.includes(i)?o("esri-dynamic-map-layer",{key:i,attrs:{url:e.url,attribution:e.attribution,transparent:!0,opacity:e.opacity}}):t._e()}),t._v(" "),t._l(this.$config.map.featureLayers,function(e,i){return t.shouldShowFeatureLayer(i,e.minZoom)?o("esri-feature-layer",{key:i,attrs:{layerName:i,url:e.url,color:e.color,fillColor:e.color,fillOpacity:e.fillOpacity,weight:e.weight,style_:e.style,minZoom:e.minZoom,maxZoom:e.maxZoom,zIndex:e.zIndex,markerType:e.markerType,radius:e.radius,interactive:e.interactive}}):t._e()}),t._v(" "),t._l(this.imageOverlayItems,function(e,i){return t.shouldShowImageOverlay(e.properties.RECMAP)?o("esri-dynamic-map-layer",{key:i,attrs:{url:"//gis.phila.gov/arcgis/rest/services/Atlas/RegMaps/MapServer",layers:[0],layerDefs:"0:NAME='g"+e.properties.RECMAP.toLowerCase()+".tif'",transparent:!0,opacity:.5}}):t._e()}),t._v(" "),t._l(t.markersForAddress,function(t,e){return o("vector-marker",{key:t.key,attrs:{latlng:t.latlng,markerColor:t.color,icon:t.icon}})}),t._v(" "),t._l(t.markersForTopic,function(t,e){return o("vector-marker",{key:t.key,attrs:{latlng:t.latlng,markerColor:t.color,icon:t.icon}})}),t._v(" "),this.cyclomediaActive?o("png-marker",{attrs:{icon:"images/camera.png",latlng:t.cycloLatlng,rotationAngle:t.cycloRotationAngle}}):t._e(),t._v(" "),this.cyclomediaActive?o("svg-view-cone-marker",{attrs:{latlng:t.cycloLatlng,rotationAngle:t.cycloRotationAngle,hFov:t.cycloHFov}}):t._e(),t._v(" "),t._l(t.geojsonParcels,function(e){return t.shouldShowGeojson(e.key)?o("geojson",{key:e.key,attrs:{geojson:e.geojson,fillColor:e.fillColor,color:e.color,weight:e.weight,opacity:e.opacity,fillOpacity:e.fillOpacity,data:{featureId:e.featureId,tableId:e.tableId}}}):t._e()}),t._v(" "),t._l(t.geojsonForTopic,function(e){return t.shouldShowGeojson(e.key)?o("geojson",{key:e.key,attrs:{geojson:e.geojson,fillColor:e.fillColor,color:e.color,weight:e.weight,opacity:e.opacity,fillOpacity:e.fillOpacity,data:{featureId:e.featureId,tableId:e.tableId}}}):t._e()}),t._v(" "),t._l(t.reactiveGeojsonFeatures,function(e){return t.shouldShowGeojson(e.key)?o("geojson",{key:e.key,attrs:{geojson:e.geojson,fillColor:e.fillColor,color:e.color,weight:e.weight,opacity:e.opacity,fillOpacity:e.fillOpacity,data:{featureId:e.featureId,tableId:e.tableId}},on:{"l-mouseover":t.handleMarkerMouseover,"l-click":t.handleMarkerClick,"l-mouseout":t.handleMarkerMouseout}}):t._e()}),t._v(" "),null!=this.$store.state.map.location.lat?o("circle-marker",{key:Math.random(),attrs:{latlng:this.locationMarker.latlng,radius:this.locationMarker.radius,fillColor:this.locationMarker.fillColor,color:this.locationMarker.color,weight:this.locationMarker.weight,opacity:this.locationMarker.opacity,fillOpacity:this.locationMarker.fillOpacity}}):t._e(),t._v(" "),t._l(t.reactiveCircleMarkers,function(e){return o("circle-marker",{key:Math.random(),attrs:{latlng:e.latlng,radius:e.radius,fillColor:e.fillColor,color:e.color,weight:e.weight,opacity:e.opacity,fillOpacity:e.fillOpacity,data:{featureId:e.featureId,tableId:e.tableId}},on:{"l-mouseover":t.handleMarkerMouseover,"l-click":t.handleMarkerClick,"l-mouseout":t.handleMarkerMouseout}})}),t._v(" "),o("control-corner",{attrs:{vSide:"top",hSide:"almostright"}}),t._v(" "),o("control-corner",{attrs:{vSide:"top",hSide:"almostleft"}}),t._v(" "),t.shouldShowImageryToggle?o("basemap-toggle-control",{attrs:{position:"topright"}}):t._e(),t._v(" "),o("basemap-select-control",{attrs:{position:this.basemapSelectControlPosition}}),t._v(" "),this.shouldShowPictometryButton?o("pictometry-button",{attrs:{position:"topright",link:"pictometry",imgSrc:"images/pictometry.png"}}):t._e(),t._v(" "),this.shouldShowCyclomediaButton?o("cyclomedia-button",{attrs:{position:"topright",link:"cyclomedia",imgSrc:"images/cyclomedia.png"},on:{click:t.handleCyclomediaButtonClick}}):t._e(),t._v(" "),this.measureControlEnabled?o("div",[o("measure-control",{attrs:{position:"bottomleft"}})],1):t._e(),t._v(" "),t._l(Object.keys(t.legendControls),function(e){return o("legend-control",{key:e,attrs:{position:"bottomleft",options:t.legendControls[e].options,items:t.legendControls[e].data}})}),t._v(" "),this.geolocationEnabled?o("location-control",{attrs:{position:"bottomright"}}):t._e(),t._v(" "),o("map-address-input",{attrs:{position:this.addressInputPosition,placeholder:this.addressInputPlaceholder,widthFromConfig:this.addressInputWidth}}),t._v(" "),this.addressAutocompleteEnabled?o("map-address-candidate-list",{attrs:{position:this.addressInputPosition,widthFromConfig:this.addressInputWidth}}):t._e(),t._v(" "),t._l(t.cyclomediaRecordings,function(e){return t.cyclomediaActive?o("cyclomedia-recording-circle",{key:e.imageId,attrs:{imageId:e.imageId,latlng:[e.lat,e.lng],size:1.2,color:"#3388ff",weight:1},on:{"l-click":t.handleCyclomediaRecordingClick}}):t._e()})],2),t._v(" "),t._t("cycloWidget"),t._v(" "),t._t("pictWidget")],2)},[],!1,null,"382279cc",null);e.default=u.exports}}]);