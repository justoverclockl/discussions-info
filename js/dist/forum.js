module.exports=function(t){var e={};function r(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(o,a,function(e){return t[e]}.bind(null,a));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=3)}([function(t,e){t.exports=flarum.core.compat["forum/app"]},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["common/components/DiscussionListItem"]},function(t,e,r){"use strict";r.r(e);var o=r(0),a=r.n(o),n=r(1),i=r(2),s=r.n(i);a.a.initializers.add("justoverclock/discussion-info",(function(){Object(n.extend)(s.a.prototype,"infoItems",(function(t){var e=this.attrs.discussion,r=e.data.attributes.tag1,o=e.data.attributes.tag2,n=e.data.attributes.tag3,i={view:function(t){if(void 0!==r&&void 0!==o&&void 0!==n&&""!==r&&""!==o&&""!==n)return m("div",{className:"tags-filled"},[m("i",{className:"fas fa-tags icontext"}),m("strong",a.a.translator.trans("justoverclock-discussion-info.forum.tag")+": "),e.data.attributes.tag1+", "+e.data.attributes.tag2+", "+e.data.attributes.tag3])}};t.add("replyCount",m("div",{className:"replyCountBox"},[m("i",{className:"fas fa-users icontext"}),m("strong",a.a.translator.trans("justoverclock-discussion-info.forum.participantCount")+": "),e.data.attributes.participantCount,m("i",{className:"fas fa-clock icontext"}),m("strong",a.a.translator.trans("justoverclock-discussion-info.forum.createdAt")+": "),e.data.attributes.createdAt.slice(0,10),m(i)]))}))}))}]);
//# sourceMappingURL=forum.js.map