(window.webpackJsonp=window.webpackJsonp||[]).push([[38,17],{272:function(t,o,e){"use strict";e.r(o);var n=e(0),s={name:"Control",props:["position"],methods:{createLeafletElement(t){return new class extends t.Control{constructor(t,o){super(o),this.el=t}onAdd(){const o=this.el;return t.DomEvent.disableClickPropagation(o),t.DomEvent.disableScrollPropagation(o),o}}(this.$el,{position:this.position})},parentMounted(t,o){const e=this.createLeafletElement(n);this.$leafletElement=e;const s=t.$leafletElement;e.addTo(s)}}},i=e(47),a=Object(i.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)},[],!1,null,null,null);o.default=a.exports},492:function(t,o,e){"use strict";e.r(o);var n=e(272);const{props:s,methods:i}=n.default;var a={name:"LocationControl",props:["position"],data:()=>({locationOn:!1}),methods:Object.assign(i,{handleLocationButtonClick(t){this.$store.state.map.watchPositionOn?this.moveToPosition():(this.$store.commit("setWatchPositionOn",!0),navigator.geolocation.watchPosition(this.geofindSuccess,this.geofindError,{enableHighAccuracy:!0,timeout:1e3,maximumAge:0,distanceFilter:5}))},geofindSuccess(t){const o={lat:t.coords.latitude,lng:t.coords.longitude};this.$store.commit("setLocation",o),this.locationOn||(this.moveToPosition(),this.locationOn=!0)},moveToPosition(){const t=this.$store.state.map.map,o=this.$store.state.map.location;t.setView([o.lat,o.lng],19)},geofindError(){console.log("GeofindError")}})},l=e(47),c=Object(l.a)(a,function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"leaflet-bar easy-button-container leaflet-control"},[o("button",{on:{click:this.handleLocationButtonClick}},[o("span",{staticClass:"button-state state-unnamed-state unnamed-state-active"},[o("font-awesome-icon",{staticClass:"fa-lg",attrs:{icon:["far","dot-circle"]}})],1)])])},[],!1,null,"5b567ab2",null);o.default=c.exports}}]);