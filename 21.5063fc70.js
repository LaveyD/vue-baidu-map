webpackJsonp([21],{CEj8:function(t,s,a){t.exports=a("HqDV")},HqDV:function(t,s,a){var v=a("VU/8")(a("Z4Ej"),a("ielQ"),null,null);t.exports=v.exports},Z4Ej:function(t,s,a){var v,_,e;!function(a,n){_=[t,s],v=n,void 0!==(e="function"==typeof v?v.apply(s,_):v)&&(t.exports=e)}(0,function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{infoWindow:{show:!0},markerIcon:{url:"http://developer.baidu.com/map/jsdemo/img/fox.gif",size:{width:300,height:157}},markerLabel:{content:"Marker Label",opts:{offset:{width:20,height:-10}}},markerPoint:{lng:116.404,lat:39.915}}},methods:{infoWindowClose:function(){this.infoWindow.show=!1},infoWindowOpen:function(){this.infoWindow.show=!0}}},t.exports=s.default})},ielQ:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[[a("h1",[t._v("Marker Overlay")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Instance Properties")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("Events")]),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v("Examples")]),t._v(" "),a("h3",[t._v("Draggable Bouncing Marker with Label")]),t._v(" "),a("h4",[t._v("Code")]),t._v(" "),t._m(3),t._v(" "),a("h4",[t._v("Preview")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:15}},[a("bm-marker",{attrs:{position:t.markerPoint,dragging:!0,animation:"BMAP_ANIMATION_BOUNCE"}},[a("bm-label",{attrs:{content:"Tiananmen",labelStyle:{color:"#f33",fontSize:"12px"},offset:{width:-35,height:30}}})],1)],1)],1),t._v(" "),a("h3",[t._v("Custom icon of the marker")]),t._v(" "),a("h4",[t._v("Code")]),t._v(" "),t._m(4),t._v(" "),a("h4",[t._v("Preview")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:15}},[a("bm-marker",{attrs:{position:t.markerPoint,icon:t.markerIcon}})],1)],1)],t._v(" "),a("h3",[t._v("Show the InfoWindow when clicking on the Marker")]),t._v(" "),a("h4",[t._v("Code")]),t._v(" "),t._m(5),t._v(" "),a("h4",[t._v("Preview")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:15}},[a("bm-marker",{attrs:{position:{lng:116.404,lat:39.915},dragging:!0},on:{click:t.infoWindowOpen}},[a("bm-info-window",{attrs:{show:t.infoWindow.show},on:{close:t.infoWindowClose,open:t.infoWindowOpen}},[t._v("Tiananmen")])],1)],1)],1)],2)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("BmMarker")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("default")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("position")]),t._v(" "),a("td",[t._v("Point")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The position of the marker.")])]),t._v(" "),a("tr",[a("td",[t._v("offset")]),t._v(" "),a("td",[t._v("Size")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The offset of the marker.")])]),t._v(" "),a("tr",[a("td",[t._v("icon")]),t._v(" "),a("td",[t._v("Icon")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The marker icon.")])]),t._v(" "),a("tr",[a("td",[t._v("massClear")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Whether remove this overlay or not when "),a("code",[t._v("map.clearOverlays")]),t._v(" is called.")])]),t._v(" "),a("tr",[a("td",[t._v("dragging")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("Allow to drag on the map.")])]),t._v(" "),a("tr",[a("td",[t._v("clicking")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Allow to click on the map.")])]),t._v(" "),a("tr",[a("td",[t._v("raiseOnDrag")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("Enable the raising effect when dragging the marker.")])]),t._v(" "),a("tr",[a("td",[t._v("draggingCursor")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Set the cursor of marker when dragging it.")])]),t._v(" "),a("tr",[a("td",[t._v("rotation")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Rotation degree.")])]),t._v(" "),a("tr",[a("td",[t._v("shadow")]),t._v(" "),a("td",[t._v("Icon")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Shadow icon.")])]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The title of the marker.")])]),t._v(" "),a("tr",[a("td",[t._v("label")]),t._v(" "),a("td",[t._v("Label")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The label of the marker.")])]),t._v(" "),a("tr",[a("td",[t._v("animation")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Animation effects.")])]),t._v(" "),a("tr",[a("td",[t._v("top")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("Set whether the marker is at the top of others.")])]),t._v(" "),a("tr",[a("td",[t._v("zIndex")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("Set z-index of the marker.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("parameter")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("click")]),t._v(" "),a("td",[t._v("event{type, target}")]),t._v(" "),a("td",[t._v("Triggers when clicking on the marker.")])]),t._v(" "),a("tr",[a("td",[t._v("dblclick")]),t._v(" "),a("td",[t._v("event{type, target, point,pixel}")]),t._v(" "),a("td",[t._v("Triggers when double clicking on the marker.")])]),t._v(" "),a("tr",[a("td",[t._v("mousedown")]),t._v(" "),a("td",[t._v("event{type, target, point,pixel}")]),t._v(" "),a("td",[t._v("Triggers when press down the mouse on the marker.")])]),t._v(" "),a("tr",[a("td",[t._v("mouseup")]),t._v(" "),a("td",[t._v("event{type, target, point,pixel}")]),t._v(" "),a("td",[t._v("Triggers when release the mouse on the marker.")])]),t._v(" "),a("tr",[a("td",[t._v("mouseout")]),t._v(" "),a("td",[t._v("event{type, target, point,pixel}")]),t._v(" "),a("td",[t._v("Triggers when mouse pointer move out of the marker.")])]),t._v(" "),a("tr",[a("td",[t._v("mouseover")]),t._v(" "),a("td",[t._v("event{type, target, point,pixel}")]),t._v(" "),a("td",[t._v("Triggers when mouse pointer move over the marker.")])]),t._v(" "),a("tr",[a("td",[t._v("remove")]),t._v(" "),a("td",[t._v("event{type, target}")]),t._v(" "),a("td",[t._v("Triggers when the marker is removed.")])]),t._v(" "),a("tr",[a("td",[t._v("infowindowclose")]),t._v(" "),a("td",[t._v("event{type, target}")]),t._v(" "),a("td",[t._v("Triggers when the info window is closed on the marker.")])]),t._v(" "),a("tr",[a("td",[t._v("infowindowopen")]),t._v(" "),a("td",[t._v("event{type, target}")]),t._v(" "),a("td",[t._v("Triggers when the info window is opend on the marker.")])]),t._v(" "),a("tr",[a("td",[t._v("dragstart")]),t._v(" "),a("td",[t._v("event{type, target}")]),t._v(" "),a("td",[t._v("Triggers when the drag start on the marker.")])]),t._v(" "),a("tr",[a("td",[t._v("dragging")]),t._v(" "),a("td",[t._v("event{type, target, pixel, point}")]),t._v(" "),a("td",[t._v("Triggers when dragging the marker.")])]),t._v(" "),a("tr",[a("td",[t._v("dragend")]),t._v(" "),a("td",[t._v("event{type, target, pixel, point}")]),t._v(" "),a("td",[t._v("Triggers when the drag is over.")])]),t._v(" "),a("tr",[a("td",[t._v("rightclick")]),t._v(" "),a("td",[t._v("event{type, target}")]),t._v(" "),a("td",[t._v("Triggers when right click on the marker.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"15"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-marker")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":position")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":dragging")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("animation")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"BMAP_ANIMATION_BOUNCE"')]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-label")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("content")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"Tiananmen"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":labelStyle")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"{color: 'red', fontSize : '24px'}\"")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":offset")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{width: -35, height: 30}"')]),t._v("/>")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-marker")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"15"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-marker")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":position")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"markerPoint"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":dragging")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("animation")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"BMAP_ANIMATION_BOUNCE"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":icon")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"{url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif', size: {width: 300, height: 157"),a("span",[t._v("}}")]),t._v('"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-marker")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"15"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-marker")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":position")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"markerPoint"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":dragging")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("@click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"infoWindowOpen"')]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-info-window")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":show")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"show"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("@close")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"infoWindowClose"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("@open")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"infoWindowOpen"')]),t._v(">")]),t._v("Tiananmen"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-info-window")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-marker")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),a("span",{staticClass:"javascript"},[t._v("\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("show")]),t._v(": "),a("span",{staticClass:"hljs-literal"},[t._v("false")]),t._v("\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    infoWindowClose () {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".show = "),a("span",{staticClass:"hljs-literal"},[t._v("false")]),t._v("\n    },\n    infoWindowOpen () {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".show = "),a("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v("\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]}}});