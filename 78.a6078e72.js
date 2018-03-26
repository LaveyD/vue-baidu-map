webpackJsonp([78],{FZnN:function(t,s,_){t.exports=_("g6ow")},IVsG:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("section",[[_("h1",[t._v("公交路线检索")]),t._v(" "),t._m(0),t._v(" "),_("h2",[t._v("属性")]),t._v(" "),t._m(1),t._v(" "),_("h2",[t._v("事件")]),t._v(" "),t._m(2),t._v(" "),_("h2",[t._v("示例")]),t._v(" "),_("h3",[t._v("查询北京331路公交车途径路线")]),t._v(" "),_("h4",[t._v("代码")]),t._v(" "),t._m(3),t._v(" "),_("h4",[t._v("预览")]),t._v(" "),_("doc-preview",[_("baidu-map",[_("bm-view",{staticClass:"map"}),t._v(" "),_("bm-bus",{attrs:{keyword:"331","auto-viewport":!0,location:"北京"}})],1)],1)]],2)},staticRenderFns:[function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("p",[_("code",[t._v("BmBus")])])},function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("table",[_("thead",[_("tr",[_("th",[t._v("属性名")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("location")]),t._v(" "),_("td",[t._v("String, Point, None")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("location表示检索区域，其类型可为空、坐标点或城市名称的字符串。当参数为空时，检索位置由当前地图中心点确定，且搜索结果的标注将自动加载到地图上，并支持调整地图视野层级；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行。")])]),t._v(" "),_("tr",[_("td",[t._v("keyword")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("公交线路关键词")])]),t._v(" "),_("tr",[_("td",[t._v("panel")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("是否选展现检索结果面板。")])]),t._v(" "),_("tr",[_("td",[t._v("autoViewport")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("检索结束后是否自动调整地图视野。")])]),t._v(" "),_("tr",[_("td",[t._v("selectFirstResult")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("是否选择第一个检索结果。")])])])])},function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("table",[_("thead",[_("tr",[_("th",[t._v("事件名")]),t._v(" "),_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("getbuslistcomplete")]),t._v(" "),_("td",[t._v("{rs: BusListResult}")]),t._v(" "),_("td",[t._v("设置公交列表查询后的回调函数。")])]),t._v(" "),_("tr",[_("td",[t._v("getbuslinecomplete")]),t._v(" "),_("td",[t._v("{rs: BusLine")]),t._v(" "),_("td",[t._v("设置公交线路查询后的回调函数。")])]),t._v(" "),_("tr",[_("td",[t._v("buslisthtmlset")]),t._v(" "),_("td",[t._v("{container: HTMLElement}")]),t._v(" "),_("td",[t._v("公交列表结果页渲染后回调函数。")])]),t._v(" "),_("tr",[_("td",[t._v("buslinehtmlset")]),t._v(" "),_("td",[t._v("{container: HTMLElement}")]),t._v(" "),_("td",[t._v("公交线路结果页渲染后回调函数。")])]),t._v(" "),_("tr",[_("td",[t._v("markersset")]),t._v(" "),_("td",[t._v("{pois: Array, transfers: Array}")]),t._v(" "),_("td",[t._v("标注添加完成后的回调函数。")])]),t._v(" "),_("tr",[_("td",[t._v("polylinesset")]),t._v(" "),_("td",[t._v("{routes: Array, routes: Array}")]),t._v(" "),_("td",[t._v("折线添加完成后的回调函数。")])])])])},function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("pre",[_("code",{staticClass:"language-html"},[_("span",{staticClass:"hljs-tag"},[t._v("<"),_("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),_("span",{staticClass:"hljs-tag"},[t._v("<"),_("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n  "),_("span",{staticClass:"hljs-tag"},[t._v("<"),_("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(" "),_("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),_("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(">")]),t._v("\n  "),_("span",{staticClass:"hljs-tag"},[t._v("</"),_("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(">")]),t._v("\n  "),_("span",{staticClass:"hljs-tag"},[t._v("<"),_("span",{staticClass:"hljs-name"},[t._v("bm-bus")]),t._v(" "),_("span",{staticClass:"hljs-attr"},[t._v("keyword")]),t._v("="),_("span",{staticClass:"hljs-string"},[t._v('"331"')]),t._v(" "),_("span",{staticClass:"hljs-attr"},[t._v(":auto-viewport")]),t._v("="),_("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" "),_("span",{staticClass:"hljs-attr"},[t._v("location")]),t._v("="),_("span",{staticClass:"hljs-string"},[t._v('"北京"')]),t._v(">")]),_("span",{staticClass:"hljs-tag"},[t._v("</"),_("span",{staticClass:"hljs-name"},[t._v("bm-bus")]),t._v(">")]),t._v("\n"),_("span",{staticClass:"hljs-tag"},[t._v("</"),_("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),_("span",{staticClass:"hljs-tag"},[t._v("</"),_("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])}]}},g6ow:function(t,s,_){var v=_("VU/8")(null,_("IVsG"),null,null);t.exports=v.exports}});