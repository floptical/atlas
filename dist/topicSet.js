(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{269:function(n,t,e){"use strict";var s={props:{slots:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}}},beforeCreate(){},created(){},computed:{nullValue(){return(this.options||{}).nullValue}},methods:{evaluateSlot(n,t=[],e=""){if(!n)return n;let s;if("function"===typeof n){const t=this.$store.state,e=this.$controller,o=n,i=this.item;s=i?o(t,i,e):o(t)}else s=n;if(!1===s);else if(!s)return e;for(let n of t){const t=this.$config.transforms[n];let e;const o=t.globals;o&&(e=Object.keys(window).filter(n=>o.includes(n)).reduce((n,t)=>(n[t]=window[t],n),{})),s=(0,t.transform)(s,e)}return s}}},o=e(47),i=Object(o.a)(s,void 0,void 0,!1,null,null,null);t.a=i.exports},281:function(n,t,e){var s=e(315);"string"==typeof s&&(s=[[n.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(12)(s,o);s.locals&&(n.exports=s.locals)},314:function(n,t,e){"use strict";var s=e(281);e.n(s).a},315:function(n,t,e){(n.exports=e(11)(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*REVIEW these aren't prefixed `mb-`because they're scoped, but it feels\ninconsistent?*/\n.topic-header[data-v-511f037c] {\n  background: #f5f5f5;\n  border: 1px solid #ddd;\n  display: block;\n  font-size: 18px;\n  font-weight: normal;\n  min-height: 70px;\n  line-height: 25px;\n  padding: 10px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  margin-bottom: 8px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: space-between;\n}\n.topic-header[data-v-511f037c]:hover {\n  background: #fff;\n  color: inherit;\n}\n.topic-header-content[data-v-511f037c] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.topic-header-icon[data-v-511f037c] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.topic-header-label-holder[data-v-511f037c] {\n  margin-left: 15px;\n}\n.topic-body[data-v-511f037c] {\n  padding: 5px;\n  margin-bottom: 10px;\n}\n.topic-body-enter-active[data-v-511f037c], .topic-body-leave-active[data-v-511f037c] {\n  transition: opacity 0.18s;\n}\n.topic-body-enter[data-v-511f037c], .topic-body-leave-to[data-v-511f037c] {\n  opacity: 0;\n}\n",""])},365:function(n,t,e){"use strict";e.r(t);var s=e(273),o={name:"Topic",props:["topicKey"],components:{},beforeCreate(){this.$options.components.TopicComponentGroup=s.default},computed:{topic(){const n=this.$props.topicKey,t=this.$config.topics.filter(n=>n.key===this.$props.topicKey);if(1!==t.length)throw`Could not get single config object for topic '${n}'.`;return t[0]},icon(){return this.topic.icon},isActive(){const n=this.topic.key;return this.$store.state.activeTopic===n},shouldShowHeader(){return this.$config.topics.length>1},dataSources(){return this.topic.dataSources||[]},hasData(){return this.dataSources.every(n=>{if(this.$config.dataSources[n].targets){const t=this.$store.state.sources[n].targets,e=Object.values(t);return 0!==e.length&&e.every(n=>"waiting"!==n.status)}return!!this.$store.state.sources[n].data})},shouldShowBody(){const n="success"===this.status,t=this.hasData;return n&&t&&this.isActive},shouldShowTopic(){return!this.topic.showTopicOnlyIfDataExists||(!!this.showTopicBasedOnOtherData||this.showTopicOnlyIfDataExists)},shouldShowError(){const n=this.isActive&&("error"===this.status||"waiting"!==this.status&&!this.hasData);return n&&console.log("BINGO BINGO BINGO:",this.topicKey,"shouldShowError:",n,"status:",this.status,"hasData:",this.hasData),n},errorMessage(){return this.topic.errorMessage?this.topic.errorMessage(this.$store.state):"Could not locate records for that address."},status:{cache:!1,get(){const n=this.topic.dataSources||[];if(0===n.length)return"success";let t;const e=n.map(n=>{if(this.$config.dataSources[n].targets){const t=this.$store.state.sources[n].targets,e=Object.values(t);if(0===e.length)return;return e.map(n=>n.status)}return[this.$store.state.sources[n].status]});let s=[];for(let n of e)if(n)for(let t of n)s.push(t);return t=s.includes("waiting")?"waiting":s.includes("error")?"error":"success"}},showTopicBasedOnOtherData(){if(!this.topic.showTopicBasedOnOtherData)return!1;const n=this.topic.showTopicBasedOnOtherData.requiredData;if(!this.checkForData(n))return!1;const t=Object.keys(this.topic.showTopicBasedOnOtherData.otherData);let e=[];for(let n of t){const t=this.topic.showTopicBasedOnOtherData.otherData[n],s=Object.keys(t);for(let o of s)this.$store.state.sources[n][o]===t[o]?e.push(!0):e.push(!1)}return!e.includes(!1)},showTopicOnlyIfDataExists(){return this.checkForData(this.topic.showTopicOnlyIfDataExists)}},methods:{checkForData(n){const t=Object.keys(n);let e=!0;for(let s of t){const t=n[s].pathToDataArray,o=n[s].minDataLength;let i;if(!this.$store.state.sources[s].data)return!1;t?1===t.length&&(i=this.$store.state.sources[s].data[t[0]]):i=this.$store.state.sources[s].data,i.length<o&&(e=!1)}return e},configForBasemap(n){return this.$config.map.basemaps[n]},handleTopicHeaderClick(n){const t=this.$props.topicKey;let e;t!==this.$store.state.activeTopic&&(e=t),this.$controller.handleTopicHeaderClick(e)}}},i=(e(314),e(47)),a=Object(i.a)(o,function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.shouldShowTopic?e("div",[n.shouldShowHeader?e("a",{staticClass:"topic-header",attrs:{href:"#","data-topic-key":n.topicKey},on:{click:function(t){return t.preventDefault(),n.handleTopicHeaderClick(t)}}},[e("div",{staticClass:"topic-header-content"},[e("font-awesome-icon",{attrs:{icon:n.icon}}),n._v(" "),e("div",{staticClass:"topic-header-label-holder"},[n._v("\n        "+n._s(n.topic.label)+"\n      ")])],1),n._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:"waiting"===n.status,expression:"status === 'waiting'"}],staticClass:"loading"},[e("font-awesome-icon",{staticClass:"fa-lg spin",attrs:{icon:"spinner"}})],1)]):n._e(),n._v(" "),e("transition",{attrs:{name:"topic-body"}},[n.shouldShowBody?e("div",{staticClass:"topic-body",attrs:{"data-topic-key":n.topicKey}},[e("topic-component-group",{attrs:{"topic-components":n.topic.components}})],1):n._e()]),n._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:n.shouldShowError,expression:"shouldShowError"}],staticClass:"topic-body",domProps:{innerHTML:n._s(this.errorMessage)}})],1):n._e()},[],!1,null,"511f037c",null);t.default=a.exports},522:function(n,t,e){"use strict";e.r(t);var s=e(365),o={mixins:[e(269).a],name:"TopicSet",components:{Topic:s.default},mounted(){null!==this.$store.state.activeTopic&&""!==this.$store.state.activeTopic||this.setDefaultTopicActive()},methods:{setDefaultTopicActive(){this.$props.options.defaultTopic&&(this.$store.state.activeTopic=this.$props.options.defaultTopic)}}},i=e(47),a=Object(i.a)(o,function(){var n=this.$createElement,t=this._self._c||n;return t("div",this._l(this.$config.topics,function(n){return t("topic",{key:n.key,attrs:{topicKey:n.key}})}),1)},[],!1,null,null,null);t.default=a.exports}}]);