(window.webpackJsonp=window.webpackJsonp||[]).push([[10,17],{272:function(e,t,s){"use strict";s.r(t);var a=s(0),n={name:"Control",props:["position"],methods:{createLeafletElement(e){return new class extends e.Control{constructor(e,t){super(t),this.el=e}onAdd(){const t=this.el;return e.DomEvent.disableClickPropagation(t),e.DomEvent.disableScrollPropagation(t),t}}(this.$el,{position:this.position})},parentMounted(e,t){const s=this.createLeafletElement(a);this.$leafletElement=s;const n=e.$leafletElement;s.addTo(n)}}},o=s(47),r=Object(o.a)(n,function(){var e=this.$createElement;return(this._self._c||e)("div",[this._t("default")],2)},[],!1,null,null,null);t.default=r.exports},509:function(e,t,s){"use strict";s.r(t);var a=s(272);const{props:n,methods:o}=a.default;var r={name:"BasemapSelectControl",props:["position"],computed:{shouldShowImagery(){return this.$store.state.map.shouldShowImagery},imageryTypes(){return this.$config.map.imageryTypes},currentImagery(){return this.$store.state.map.imagery}},watch:{currentImagery(e){const t=e.replace(/\D/g,"");document.getElementById("year-select").value=t}},methods:Object.assign(o,{handleImageryChange(){const e=document.getElementById("year-select"),t=e.options[e.selectedIndex].parentElement.label,s=e.options[e.selectedIndex].value,a=t.toLowerCase()+s;this.$store.commit("setImagery",a)},basemapsForImageryType(e){const t=this.$config.map.basemaps,s=Object.keys(t),a=[];for(let n of s){const s=t[n],o=s.type;if(o===e){const e=s.label;a.push({type:o,label:e})}}return a}})},l=s(47),i=Object(l.a)(r,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.shouldShowImagery,expression:"shouldShowImagery"}]},[s("select",{attrs:{id:"year-select"},on:{change:e.handleImageryChange}},e._l(e.imageryTypes,function(t,a){return s("optgroup",{attrs:{label:t.label}},e._l(e.basemapsForImageryType(a),function(t){return s("option",{attrs:{"data-key":t.key}},[e._v("\n        "+e._s(t.label)+"\n      ")])}),0)}),0)])},[],!1,null,"25790e29",null);t.default=i.exports}}]);