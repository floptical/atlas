(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{318:function(t,e,s){var r=s(410);"string"==typeof r&&(r=[[t.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s(12)(r,n);r.locals&&(t.exports=r.locals)},409:function(t,e,s){"use strict";var r=s(318);s.n(r).a},410:function(t,e,s){(t.exports=s(11)(!1)).push([t.i,"\n.list-group[data-v-6ddfb187] {\r\n  height: 300px;\r\n  width: 250px;\r\n  overflow: auto;\r\n  margin-top: 1px !important;\n}\n.list-group-full[data-v-6ddfb187] {\r\n  height: 300px;\r\n  width: 197px;\r\n  overflow: auto;\r\n  margin-top: 1px !important;\n}\n.list-group-mobile[data-v-6ddfb187] {\r\n  height: 300px;\r\n  width: 250px;\r\n  overflow: auto;\r\n  margin-top: 1px !important;\n}\n.list-group-mobile-full[data-v-6ddfb187] {\r\n  height: 300px;\r\n  width: 197px;\r\n  overflow: auto;\r\n  margin-top: 1px !important;\n}\nul[data-v-6ddfb187] {\r\n  list-style-type: none;\r\n  margin-left: 0px;\n}\n.list-group-item[data-v-6ddfb187] {\r\n  /* width: 237px; */\r\n  display: block;\r\n  border-radius: 2px;\r\n  box-shadow:0 2px 4px rgba(0,0,0,0.2),0 -1px 0px rgba(0,0,0,0.02);\r\n  border: 2;\r\n  background-color: white;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  padding-left: 10px;\r\n  font-family: 'Montserrat', 'Tahoma', sans-serif;\r\n  font-size: 14px;\r\n  font-weight: normal;\n}\n.list-group-item[data-v-6ddfb187]:hover {\r\n  background-color: #ffefa2;\r\n  font-weight: bold;\n}\r\n\r\n/*small*/\n@media screen and (max-width: 39.9375em) {\n.list-group[data-v-6ddfb187] {\r\n    width: 200px;\n}\n.list-group-mobile[data-v-6ddfb187] {\r\n    width: 200px;\n}\n.list-group-full[data-v-6ddfb187] {\r\n    width: 147px;\n}\n.list-group-mobile-full[data-v-6ddfb187] {\r\n    width: 158px;\n}\n}\r\n\r\n",""])},494:function(t,e,s){"use strict";s.r(e);var r=s(0),n={name:"MapAddressCandidateList",props:["position"],computed:{map(){return this.$store.state.map.map},candidates(){return this.$store.state.candidates},shouldShowAddressCandidateList(){return this.$store.state.shouldShowAddressCandidateList},activeTopic(){return this.$store.state.activeTopic},isMobileOrTablet(){return this.$store.state.isMobileOrTablet},listGroupClass(){return this.isMobileOrTablet?this.addressAutocompleteEnabled?""===this.addressEntered||null===this.addressEntered?"list-group-mobile":"list-group-mobile-full":"list-group-mobile":this.addressAutocompleteEnabled?""===this.addressEntered||null===this.addressEntered?"list-group":"list-group-full":"list-group"},addressAutocompleteEnabled(){return!!this.$config.addressInput&&!0===this.$config.addressInput.autocompleteEnabled}},watch:{shouldShowAddressCandidateList(t){!0===t&&this.createControl()}},methods:{createLink(t){return this.$store.state.activeTopic?"#/"+t+"/"+this.activeTopic:"#/"+t},createLeafletElement(t){return new class extends t.Control{constructor(t,e){super(e),this.el=t}onAdd(){const e=this.el;return t.DomEvent.disableClickPropagation(e),t.DomEvent.disableScrollPropagation(e),e}}(this.$el,{position:this.position})},createControl(){const t=this.createLeafletElement(r);this.$leafletElement=t;const e=this.map;t.addTo(e)},parentMounted(t,e){},maybeUsedArrow(t){const e=t.target.id,s=parseInt(e.substring(e.lastIndexOf("-")+1));let r,n;r=s<this.candidates.length-1?s+1:s,n=0!==s?s-1:0,"ArrowDown"===t.key&&document.getElementById("address-candidate-list-"+r).focus(),"ArrowUp"===t.key&&document.getElementById("address-candidate-list-"+n).focus()},closeAddressCandidateList(t){this.$store.commit("setAddressEntered",t),this.$store.commit("setShouldShowAddressCandidateList",!1)}}},i=(s(409),s(47)),d=Object(i.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:this.shouldShowAddressCandidateList,expression:"this.shouldShowAddressCandidateList"}],class:this.listGroupClass},[s("ul",t._l(t.candidates,function(e,r){return s("li",[s("a",{staticClass:"list-group-item",attrs:{href:t.createLink(e),tabindex:"-1",id:"address-candidate-list-"+r},on:{click:function(s){return t.closeAddressCandidateList(e)},keydown:t.maybeUsedArrow}},[t._v("\n        "+t._s(e)+"\n      ")])])}),0)])},[],!1,null,"6ddfb187",null);e.default=d.exports}}]);