(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{282:function(e,t,o){"use strict";t.a=function(e,t,o){const l=Object.keys(o).filter(e=>e.startsWith("l-")).map(e=>e.slice(2));for(let o of l){const l="l-"+o;t.on(o,t=>{e.$emit(l,t)})}}},525:function(e,t,o){"use strict";o.r(t);var l=o(0),n=o(282);const s=l.geoJSON;var a={name:"Geojson",props:["geojson","fillColor","color","weight","opacity","fillOpacity","data"],mounted(){const e=this.$leafletElement=this.createLeafletElement(),t=this.$store.state.map.map;t&&e.addTo(t),Object(n.a)(this,this.$leafletElement,this._events)},destroyed(){this.$leafletElement._map.removeLayer(this.$leafletElement)},render(e){},methods:{createLeafletElement(){const e=this.$props,{geojson:t,...o}=e;return new s(t,o)},parentMounted(e){const t=e.$leafletElement;this.$leafletElement.addTo(t)}}},i=o(47),r=Object(i.a)(a,void 0,void 0,!1,null,null,null);t.default=r.exports}}]);