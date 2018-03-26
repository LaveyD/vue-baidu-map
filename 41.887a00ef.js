webpackJsonp([41],{sNb8:function(t,s,a){var e=a("VU/8")(a("x8BS"),a("tMCM"),null,null);t.exports=e.exports},tMCM:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[[a("h1",[t._v("BaiduMap")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Instance Properties")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("Events")]),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v("Custom Themes")]),t._v(" "),a("p",[t._v("Baidu Map instance allows users to set a custom theme.")]),t._v(" "),t._m(3),t._v(" "),a("h2",[t._v("Examples")]),t._v(" "),a("h3",[t._v("Set latitude and longitude and zoom levels")]),t._v(" "),a("h4",[t._v("Code")]),t._v(" "),t._m(4),t._v(" "),a("h4",[t._v("Preview")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:15}})],1),t._v(" "),a("h3",[t._v("Wheel Zoom")]),t._v(" "),a("h4",[t._v("Code")]),t._v(" "),t._m(5),t._v(" "),a("h4",[t._v("Preview")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:15,"scroll-wheel-zoom":!0}})],1),t._v(" "),a("h3",[t._v("Set a Custom Theme")]),t._v(" "),a("h4",[t._v("Code")]),t._v(" "),t._m(6),t._v(" "),a("h4",[t._v("Preview")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:15,mapStyle:{styleJson:t.styleJson}}})],1),t._v(" "),a("h3",[t._v("Set Map Type")]),t._v(" "),a("h4",[t._v("Code")]),t._v(" "),t._m(7),t._v(" "),a("h4",[t._v("Preview")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:15,mapType:"BMAP_SATELLITE_MAP"}})],1),t._v(" "),a("h3",[t._v("Twoway Binding")]),t._v(" "),a("h4",[t._v("Code")]),t._v(" "),t._m(8),t._v(" "),a("h4",[t._v("Preview")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{"scroll-wheel-zoom":!0,center:t.center,zoom:t.zoom},on:{moving:t.syncCenterAndZoom,moveend:t.syncCenterAndZoom,zoomend:t.syncCenterAndZoom}}),t._v(" "),a("md-table",[a("md-table-header",[a("md-table-head",[t._v("Longitude")]),t._v(" "),a("md-table-head",[t._v("Latitude")]),t._v(" "),a("md-table-head",[t._v("Zoom")])],1),t._v(" "),a("md-table-body",[a("md-table-row",[a("md-table-cell",[a("md-input-container",[a("md-input",{attrs:{"md-inline":""},model:{value:t.center.lng,callback:function(s){t.center.lng=t._n(s)},expression:"center.lng"}})],1)],1),t._v(" "),a("md-table-cell",[a("md-input-container",[a("md-input",{attrs:{"md-inline":""},model:{value:t.center.lat,callback:function(s){t.center.lat=t._n(s)},expression:"center.lat"}})],1)],1),t._v(" "),a("md-table-cell",[a("md-input-container",[a("md-input",{attrs:{"md-inline":""},model:{value:t.zoom,callback:function(s){t.zoom=t._n(s)},expression:"zoom"}})],1)],1)],1)],1)],1)],1)]],2)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("BaiduMap")]),t._v(" is a container of Baidu Map core class and instance. It's the root component of other components of "),a("em",[t._v("vue-baidu-map")]),t._v("."),a("br"),t._v("\nThe container is an empty DOM node which used to mount other components or DOM nodes.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("default")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("ak")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Baidu map developer platform application key. Valid only when registered locally.")])]),t._v(" "),a("tr",[a("td",[t._v("center")]),t._v(" "),a("td",[t._v("Point, String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Center coordinate of the map.")])]),t._v(" "),a("tr",[a("td",[t._v("zoom")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Zoom level of the map.")])]),t._v(" "),a("tr",[a("td",[t._v("min-zoom")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The maximum limit of zoom level.")])]),t._v(" "),a("tr",[a("td",[t._v("max-zoom")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The minimum limit of zoom level.")])]),t._v(" "),a("tr",[a("td",[t._v("high-resolution")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("High resolution mode.")])]),t._v(" "),a("tr",[a("td",[t._v("map-click")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Allow to click on the map.")])]),t._v(" "),a("tr",[a("td",[t._v("map-type")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("BMAP_NORMAL_MAP")]),t._v(" "),a("td",[t._v("Map type.")])]),t._v(" "),a("tr",[a("td",[t._v("dragging")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Allow to drag on the map.")])]),t._v(" "),a("tr",[a("td",[t._v("scroll-wheel-zoom")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("Allow to zoom by mousewheel on the map.")])]),t._v(" "),a("tr",[a("td",[t._v("double-click-zoom")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Allow to zoom by double click on the map.")])]),t._v(" "),a("tr",[a("td",[t._v("keyboard")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Allow keyboard events on the map.")])]),t._v(" "),a("tr",[a("td",[t._v("inertial-dragging")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("Dragging with inertia.")])]),t._v(" "),a("tr",[a("td",[t._v("continuous-zoom")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("Continuous zoom.")])]),t._v(" "),a("tr",[a("td",[t._v("pinch-to-zoom")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Allow pinch to zoom.")])]),t._v(" "),a("tr",[a("td",[t._v("auto-resize")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Allow auto resize.")])]),t._v(" "),a("tr",[a("td",[t._v("theme")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Set custom themes.")])]),t._v(" "),a("tr",[a("td",[t._v("mapStyle")]),t._v(" "),a("td",[t._v("MapStyle")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Set custom styles of the map.")])]),t._v(" "),a("tr",[a("td",[a("s",[t._v("theme")])]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Custom theme as an alias of "),a("code",[t._v("mapStyle.styleJson")]),t._v(", it might be "),a("strong",[t._v("REMOVED")]),t._v(" in the next major version, not be recommended.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("parameter")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("click")]),t._v(" "),a("td",[t._v("{type, target, point, pixel, overlay}")]),t._v(" "),a("td",[t._v("Triggers when you click the map on the left mouse button.")])]),t._v(" "),a("tr",[a("td",[t._v("dblclick")]),t._v(" "),a("td",[t._v("{type, target, pixel, point}")]),t._v(" "),a("td",[t._v("Triggers when you double click the map on the left mouse button.")])]),t._v(" "),a("tr",[a("td",[t._v("rightclick")]),t._v(" "),a("td",[t._v("{type, target, point, pixel, overlay}")]),t._v(" "),a("td",[t._v("Triggers when you click the map on the right mouse button.")])]),t._v(" "),a("tr",[a("td",[t._v("rightdblclick")]),t._v(" "),a("td",[t._v("{type, target, point, pixel, overlay}")]),t._v(" "),a("td",[t._v("Triggers when you double click the map on the right mouse button.")])]),t._v(" "),a("tr",[a("td",[t._v("maptypechange")]),t._v(" "),a("td",[t._v("{type, target}")]),t._v(" "),a("td",[t._v("Triggers when the map type changes.")])]),t._v(" "),a("tr",[a("td",[t._v("mousemove")]),t._v(" "),a("td",[t._v("{type, target, point, pixel, overlay}")]),t._v(" "),a("td",[t._v("Triggers when the mouse is moving on the map.")])]),t._v(" "),a("tr",[a("td",[t._v("mouseover")]),t._v(" "),a("td",[t._v("{type, target}")]),t._v(" "),a("td",[t._v("Triggers when the mouse is moving over the map.")])]),t._v(" "),a("tr",[a("td",[t._v("mouseout")]),t._v(" "),a("td",[t._v("{type, target}")]),t._v(" "),a("td",[t._v("Triggers when the mouse is moving out of the map.")])]),t._v(" "),a("tr",[a("td",[t._v("movestart")]),t._v(" "),a("td",[t._v("{type, target}")]),t._v(" "),a("td",[t._v("Triggers at the beginning of the map movement.")])]),t._v(" "),a("tr",[a("td",[t._v("moving")]),t._v(" "),a("td",[t._v("{type, target}")]),t._v(" "),a("td",[t._v("Triggers during map movement.")])]),t._v(" "),a("tr",[a("td",[t._v("moveend")]),t._v(" "),a("td",[t._v("{type, target}")]),t._v(" "),a("td",[t._v("Triggers at the end of the map movement.")])]),t._v(" "),a("tr",[a("td",[t._v("zoomstart")]),t._v(" "),a("td",[t._v("{type, target}")]),t._v(" "),a("td",[t._v("Triggers at the beginning of changing the zoom level.")])]),t._v(" "),a("tr",[a("td",[t._v("zoomend")]),t._v(" "),a("td",[t._v("{type, target}")]),t._v(" "),a("td",[t._v("Triggers at the end of changing the zoom level.")])]),t._v(" "),a("tr",[a("td",[t._v("addoverlay")]),t._v(" "),a("td",[t._v("{type, target}")]),t._v(" "),a("td",[t._v("Triggers when using the Map.addOverlay() method to add a single overlay to the map.")])]),t._v(" "),a("tr",[a("td",[t._v("addcontrol")]),t._v(" "),a("td",[t._v("{type, target}")]),t._v(" "),a("td",[t._v("Triggers when using the Map.addControl() method to add a single control to the map.")])]),t._v(" "),a("tr",[a("td",[t._v("removecontrol")]),t._v(" "),a("td",[t._v("{type, target}")]),t._v(" "),a("td",[t._v("Triggers when a single control is removed using the Map.removeControl() method.")])]),t._v(" "),a("tr",[a("td",[t._v("removeoverlay")]),t._v(" "),a("td",[t._v("{type, target}")]),t._v(" "),a("td",[t._v("Triggers when a single overlay is removed using the Map.removeOverlau() method.")])]),t._v(" "),a("tr",[a("td",[t._v("clearoverlays")]),t._v(" "),a("td",[t._v("{type, target}")]),t._v(" "),a("td",[t._v("Triggers when all overlays is removed by using the Map.clearOverlays() method at once.")])]),t._v(" "),a("tr",[a("td",[t._v("dragstart")]),t._v(" "),a("td",[t._v("{type, target, pixel, point}")]),t._v(" "),a("td",[t._v("Triggers at the beginning of dragging the map.")])]),t._v(" "),a("tr",[a("td",[t._v("dragging")]),t._v(" "),a("td",[t._v("{type, target, pixel, point}")]),t._v(" "),a("td",[t._v("Triggers when dragging the map.")])]),t._v(" "),a("tr",[a("td",[t._v("dragend")]),t._v(" "),a("td",[t._v("{type, target, pixel, point}")]),t._v(" "),a("td",[t._v("Triggers at the end of dragging the map.")])]),t._v(" "),a("tr",[a("td",[t._v("addtilelayer")]),t._v(" "),a("td",[t._v("{type, target}")]),t._v(" "),a("td",[t._v("Triggers when adding a custom tile layer.")])]),t._v(" "),a("tr",[a("td",[t._v("removetilelayer")]),t._v(" "),a("td",[t._v("{type, target}")]),t._v(" "),a("td",[t._v("Triggers when removing a custom tile layer.")])]),t._v(" "),a("tr",[a("td",[t._v("load")]),t._v(" "),a("td",[t._v("{type, target, pixel, point, zoom}")]),t._v(" "),a("td",[t._v("Trigger when the Map.centerAndZoom() method is called.")])]),t._v(" "),a("tr",[a("td",[t._v("resize")]),t._v(" "),a("td",[t._v("{type, target, size}")]),t._v(" "),a("td",[t._v("Triggers when the map visual area size changes.")])]),t._v(" "),a("tr",[a("td",[t._v("hotspotclick")]),t._v(" "),a("td",[t._v("{type, target, spots}")]),t._v(" "),a("td",[t._v("Triggers when the hot spot is clicked.")])]),t._v(" "),a("tr",[a("td",[t._v("hotspotover")]),t._v(" "),a("td",[t._v("{type, target, spots}")]),t._v(" "),a("td",[t._v("Triggers when the mouse is moving over the hot spot.")])]),t._v(" "),a("tr",[a("td",[t._v("hotspotout")]),t._v(" "),a("td",[t._v("{type, target, spots}")]),t._v(" "),a("td",[t._v("Triggers when the mouse is moving out of the hot spot.")])]),t._v(" "),a("tr",[a("td",[t._v("tilesloaded")]),t._v(" "),a("td",[t._v("{type, target}")]),t._v(" "),a("td",[t._v("Triggers when all the tile layers of the map are loaded.")])]),t._v(" "),a("tr",[a("td",[t._v("touchstart")]),t._v(" "),a("td",[t._v("{type, target, point,pixel}")]),t._v(" "),a("td",[t._v("Triggers at the beginning of touching the map, only for mobile devices.")])]),t._v(" "),a("tr",[a("td",[t._v("touchmove")]),t._v(" "),a("td",[t._v("{type, target, point,pixel}")]),t._v(" "),a("td",[t._v("Triggers when touching is moved, only for mobile devices.")])]),t._v(" "),a("tr",[a("td",[t._v("touchend")]),t._v(" "),a("td",[t._v("{type, target, point,pixel}")]),t._v(" "),a("td",[t._v("Triggers at the end of touching the map, only for mobile devices.")])]),t._v(" "),a("tr",[a("td",[t._v("longpress")]),t._v(" "),a("td",[t._v("{type, target, point,pixel}")]),t._v(" "),a("td",[t._v("Trigger when the map is long pressed, only for mobile devices.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("blockquote",[a("p",[t._v("Reference: "),a("a",{attrs:{href:"http://developer.baidu.com/map/custom/"}},[t._v("Baidu map theme editor")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"15"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"15"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":scroll-wheel-zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"15"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":mapStyle")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{styleJson: styleJson}"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),a("span",{staticClass:"javascript"},[t._v("\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("styleJson")]),t._v(": [\n        {\n          "),a("span",{staticClass:"hljs-string"},[t._v('"featureType"')]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v('"all"')]),t._v(",\n          "),a("span",{staticClass:"hljs-string"},[t._v('"elementType"')]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v('"geometry"')]),t._v(",\n          "),a("span",{staticClass:"hljs-string"},[t._v('"stylers"')]),t._v(": {\n              "),a("span",{staticClass:"hljs-string"},[t._v('"hue"')]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v('"#007fff"')]),t._v(",\n              "),a("span",{staticClass:"hljs-string"},[t._v('"saturation"')]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("89")]),t._v("\n          }\n        },\n        {\n          "),a("span",{staticClass:"hljs-string"},[t._v('"featureType"')]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v('"water"')]),t._v(",\n          "),a("span",{staticClass:"hljs-string"},[t._v('"elementType"')]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v('"all"')]),t._v(",\n          "),a("span",{staticClass:"hljs-string"},[t._v('"stylers"')]),t._v(": {\n              "),a("span",{staticClass:"hljs-string"},[t._v('"color"')]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v('"#ffffff"')]),t._v("\n          }\n        }\n      ]\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"15"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("mapType")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"BMAP_SATELLITE_MAP"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("input")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model.number")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"center.lng"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("input")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model.number")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"center.lat"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("input")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model.number")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"zoom"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" \n        "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v("\n        "),a("span",{staticClass:"hljs-attr"},[t._v(":scroll-wheel-zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v("\n        "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"center"')]),t._v("\n        "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"zoom"')]),t._v("\n        "),a("span",{staticClass:"hljs-attr"},[t._v("@moving")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"syncCenterAndZoom"')]),t._v("\n        "),a("span",{staticClass:"hljs-attr"},[t._v("@moveend")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"syncCenterAndZoom"')]),t._v("\n        "),a("span",{staticClass:"hljs-attr"},[t._v("@zoomend")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"syncCenterAndZoom"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),a("span",{staticClass:"javascript"},[t._v("\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("center")]),t._v(": {\n        "),a("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("116.404")]),t._v(",\n        "),a("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("39.915")]),t._v("\n      },\n      "),a("span",{staticClass:"hljs-attr"},[t._v("zoom")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("15")]),t._v("\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    syncCenterAndZoom (e) {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" {lng, lat} = e.target.getCenter()\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".center.lng = lng\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".center.lat = lat\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".zoom = e.target.getZoom()\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]}},tiQD:function(t,s,a){t.exports=a("sNb8")},x8BS:function(t,s,a){var e,v,_;!function(a,n){v=[t,s],e=n,void 0!==(_="function"==typeof e?e.apply(s,v):e)&&(t.exports=_)}(0,function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{center:{lng:116.404,lat:39.915},zoom:15,styleJson:[{featureType:"all",elementType:"geometry",stylers:{hue:"#007fff",saturation:89}},{featureType:"water",elementType:"all",stylers:{color:"#ffffff"}}]}},methods:{syncCenterAndZoom:function(t){var s=t.target.getCenter(),a=s.lng,e=s.lat;this.center.lng=a,this.center.lat=e,this.zoom=t.target.getZoom()}}},t.exports=s.default})}});