(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{313:function(e,t,o){"use strict";o(23),o(175),o(69),o(176);var n=o(34);t.a={methods:{setDarkTheme:function(){if(this.$root.$yuu.darkTheme)return document.body.classList.add("yuu-theme-dark"),localStorage.setItem("dark-theme",!0);document.body.classList.remove("yuu-theme-dark"),localStorage.setItem("dark-theme",!1)},setIgnoreThemes:function(){if(this.setPageTheme(),this.$root.$yuu.ignoreThemes)return localStorage.setItem("ignore-themes",!0);localStorage.removeItem("ignore-themes")},setPageTheme:function(){var e=this.$root.$yuu,t=e.ignoreThemes,o=e.userTheme,n=this.$page.frontmatter.pageTheme,s=t?o:n||o;this.setTheme({colorTheme:s})},setTheme:function(e){var t=e.colorTheme,o=void 0===t?"default":t,s=e.persist,u=void 0!==s&&s,r=this.$site.themeConfig.yuu.themes,i=document.body.classList,a=r.map((function(e){return"yuu-theme-".concat(e)}));if("default"!==o&&!r.includes(o)){var c=localStorage.getItem("color-theme");o=r.includes(c)?c:"default"}if(u&&(this.$root.$yuu.userTheme=o,localStorage.setItem("color-theme",o)),this.$root.$yuu.colorTheme=o,"default"===o)return i.remove.apply(i,Object(n.a)(a));i.remove.apply(i,Object(n.a)(a.filter((function(e){return e!=="yuu-theme-".concat(o)})))),i.add("yuu-theme-".concat(o))}}}},314:function(e,t,o){},315:function(e,t,o){},316:function(e,t,o){},317:function(e,t,o){},318:function(e,t,o){},319:function(e,t,o){},323:function(e,t,o){"use strict";o(314)},324:function(e,t,o){"use strict";o(315)},325:function(e,t,o){"use strict";o(316)},326:function(e,t,o){"use strict";o(317)},327:function(e,t,o){"use strict";o(318)},328:function(e,t,o){"use strict";o(319)},391:function(e,t,o){"use strict";o.r(t);var n=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],s={methods:{getMsg:function(){return n[Math.floor(Math.random()*n.length)]}}},u=o(43),r={name:"NotFound",components:{ParentLayout:Object(u.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"theme-container"},[t("div",{staticClass:"theme-default-content"},[t("h1",[this._v("404")]),this._v(" "),t("blockquote",[this._v(this._s(this.getMsg()))]),this._v(" "),t("RouterLink",{attrs:{to:"/"}},[this._v("\n      Take me home.\n    ")])],1)])}),[],!1,null,null,null).exports},mixins:[o(313).a],beforeMount:function(){this.$root.$yuu.darkTheme&&this.setDarkTheme(),this.setPageTheme()}},i=(o(323),o(324),o(325),o(326),o(327),o(328),Object(u.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("parent-layout")}),[],!1,null,null,null));t.default=i.exports}}]);