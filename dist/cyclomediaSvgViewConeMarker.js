(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{326:function(t,e,i){var o=i(423);"string"==typeof o&&(o=[[t.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};i(12)(o,n);o.locals&&(t.exports=o.locals)},422:function(t,e,i){"use strict";var o=i(326);i.n(o).a},423:function(t,e,i){(t.exports=i(11)(!1)).push([t.i,"\n.svg-icon-noClick-svg {\n  pointer-events: none;\n}\n.svg-icon-noClick {\n  pointer-events: none;\n}\n",""])},514:function(t,e,i){"use strict";i.r(e);var o=i(0);var n=o.DivIcon.extend({options:{circleText:"",className:"svg-icon",circleAnchor:null,circleColor:null,circleOpacity:null,circleFillColor:"rgb(255,255,255)",circleFillOpacity:null,circleRatio:.5,circleWeight:null,color:"rgb(0,102,255)",fillColor:null,fillOpacity:.4,fontColor:"rgb(0, 0, 0)",fontOpacity:"1",fontSize:null,iconAnchor:null,iconSize:o.point(32,48),opacity:1,popupAnchor:null,weight:2},initialize:function(t){(t=o.Util.setOptions(this,t)).circleAnchor||(t.circleAnchor=o.point(Number(t.iconSize.x)/2,Number(t.iconSize.x)/2)),t.circleColor||(t.circleColor=t.color),t.circleFillOpacity||(t.circleFillOpacity=t.opacity),t.circleOpacity||(t.circleOpacity=t.opacity),t.circleWeight||(t.circleWeight=t.weight),t.fillColor||(t.fillColor=t.color),t.fontSize||(t.fontSize=Number(t.iconSize.x/4)),t.iconAnchor||(t.iconAnchor=o.point(Number(t.iconSize.x)/2,Number(t.iconSize.y))),t.popupAnchor||(t.popupAnchor=o.point(0,-.75*t.iconSize.y));this._createPath(),this._createCircle();t.html=this._createSVG()},_createCircle:function(){var t=Number(this.options.circleAnchor.x),e=Number(this.options.circleAnchor.y),i=this.options.iconSize.x/2*Number(this.options.circleRatio),o=this.options.circleFillColor.replace("rgb(","rgba(").replace(")",","+this.options.circleFillOpacity+")"),n=this.options.circleColor.replace("rgb(","rgba(").replace(")",","+this.options.circleOpacity+")"),c=this.options.circleWeight;return'<circle class="'+(this.options.className+"-circle")+'" cx="'+t+'" cy="'+e+'" r="'+i+'" fill="'+o+'" stroke="'+n+'" stroke-width="'+c+'"/>'},_createPathDescription:function(){var t=Number(this.options.iconSize.y),e=Number(this.options.iconSize.x),i=Number(this.options.weight),o=i/2;return"M "+o+" "+e/2+" "+("L "+e/2+" "+(t-i)+" ")+("L "+(e-o)+" "+e/2+" ")+("A "+e/4+" "+e/4+" 0 0 0 "+o+" "+e/2+" Z")},_createPath:function(){var t=this._createPathDescription(),e=this.options.weight,i=this.options.color.replace("rgb(","rgba(").replace(")",","+this.options.opacity+")"),o=this.options.fillColor.replace("rgb(","rgba(").replace(")",","+this.options.fillOpacity+")");return'<path class="'+(this.options.className+"-path")+'" d="'+t+'" stroke-width="'+e+'" stroke="'+i+'" fill="'+o+'"/>'},_createSVG:function(){var t=this._createPath(),e=this._createCircle(),i=this._createText();return'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="'+(this.options.className+"-svg")+'" style="'+("width:"+this.options.iconSize.x+"; height:"+this.options.iconSize.y+";")+'">'+t+e+i+"</svg>"},_createText:function(){var t=this.options.fontSize+"px",e=Number(this.options.fontSize),i=Number(this.options.iconSize.x)/2,o=i+.35*e,n=this.options.circleText;return'<text text-anchor="middle" x="'+i+'" y="'+o+'" style="font-size: '+t+'" fill="'+this.options.fontColor.replace("rgb(","rgba(").replace(")",","+this.options.fontOpacity+")")+'">'+n+"</text>"}});var c=n.extend({initialize:function(t){t=o.Util.setOptions(this,t);const e=o.point(Number(t.iconSize.x)/2,Number(t.iconSize.y)/2);return t.circleAnchor=e,t.circleRatio=0,t.className=t.className+"-noClick",n.prototype.initialize.call(this,t),t},_createPathDescription:function(){const t=Number(this.options.iconSize.y),e=Number(this.options.iconSize.x),i=Number(this.options.weight);return"M "+i+" 0 "+("L "+e/2+" "+(t-i)+" ")+("L "+(e-i)+" 0 Z")}}),r={name:"SvgViewConeMarker",props:["latlng","rotationAngle","hFov"],render(t){},mounted(){const t=this.$leafletElement=this.createLeafletElement(),e=this.$store.state.map.map;e&&t.addTo(e)},destroyed(){this.$leafletElement._map.removeLayer(this.$leafletElement)},watch:{rotationAngle(t){this.$leafletElement._map.removeLayer(this.$leafletElement);const e=this.$leafletElement=this.createLeafletElement(),i=this.$store.state.map.map;i&&e.addTo(i)},latlng(t){this.$leafletElement._map.removeLayer(this.$leafletElement);const e=this.$leafletElement=this.createLeafletElement(),i=this.$store.state.map.map;i&&e.addTo(i)}},computed:{coneCoords(){const t=57.29577951307855*this.hFov/2,e=Math.sin(t*Math.PI/180);return[50*e,50*Math.sqrt(1-e*e)]}},methods:{createLeafletElement(){this.coneCoords;const t=new c({iconSize:o.point(this.coneCoords[0],this.coneCoords[1]),iconAnchor:[this.coneCoords[0]/2,this.coneCoords[1]]});return o.marker(this.latlng,{icon:t,rotationAngle:this.rotationAngle})},parentMounted(t){const e=t.$leafletElement;this.$leafletElement.addTo(e)}}},l=(i(422),i(47)),s=Object(l.a)(r,void 0,void 0,!1,null,null,null);e.default=s.exports}}]);