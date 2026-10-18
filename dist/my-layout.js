import { Fragment as e, Teleport as t, computed as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, createSlots as s, createTextVNode as c, createVNode as l, guardReactiveProps as u, inject as d, mergeProps as f, nextTick as p, normalizeClass as m, normalizeProps as h, normalizeStyle as g, onBeforeUnmount as ee, onMounted as te, openBlock as _, provide as v, reactive as y, ref as b, renderList as x, renderSlot as S, resolveDynamicComponent as C, toDisplayString as w, unref as T, useSlots as E, vShow as D, watch as O, withCtx as k, withDirectives as A, withModifiers as j } from "vue";
//#region \0plugin-vue:export-helper
var M = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, N = ["title"], P = {
	viewBox: "0 0 24 24",
	fill: "currentColor"
}, F = ["d"], I = ["title"], L = {
	viewBox: "0 0 24 24",
	fill: "currentColor"
}, ne = ["d"], R = ["title"], z = {
	viewBox: "0 0 24 24",
	fill: "currentColor"
}, re = ["d"], B = ["title"], V = {
	viewBox: "0 0 24 24",
	fill: "currentColor"
}, ie = ["d"], H = ["title"], U = {
	viewBox: "0 0 24 24",
	fill: "currentColor"
}, W = ["d"], ae = ["title"], G = {
	viewBox: "0 0 24 24",
	fill: "currentColor"
}, oe = ["d"], K = {
	class: "my-splitter__grip",
	"aria-hidden": "true"
}, se = {
	viewBox: "0 0 24 24",
	fill: "currentColor"
}, q = ["cx", "cy"], ce = ["title"], le = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.9",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, J = ["d"], ue = ["title"], de = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.9",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Y = ["d"], X = ["title"], Z = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.9",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, fe = ["d"], pe = ["title"], me = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.9",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, he = ["d"], ge = ["title"], _e = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.9",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, ve = ["d"], ye = ["title"], be = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.9",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, xe = ["d"], Se = {
	viewBox: "0 0 24 24",
	fill: "currentColor"
}, Ce = ["d"], we = /*#__PURE__*/ M({
	__name: "MySplitter",
	props: {
		direction: {
			type: String,
			default: "v-left"
		},
		min: {
			type: Number,
			default: 60
		},
		max: {
			type: Number,
			default: 800
		},
		step: {
			type: Number,
			default: 1
		},
		variant: {
			type: String,
			default: null,
			validator: (e) => e == null || ["modern", "classic"].includes(e)
		},
		split: {
			type: Boolean,
			default: !0
		},
		collapsible: {
			type: Boolean,
			default: !1
		},
		maxBtn: {
			type: Boolean,
			default: !1
		},
		maxed: {
			type: Boolean,
			default: !1
		},
		collapsed: {
			type: Boolean,
			default: !1
		},
		hidden: {
			type: Boolean,
			default: !1
		},
		dual: {
			type: Boolean,
			default: !1
		},
		nextCollapsed: {
			type: Boolean,
			default: !1
		},
		nextCollapsible: {
			type: Boolean,
			default: !1
		},
		hoverReveal: {
			type: Boolean,
			default: !0
		}
	},
	emits: [
		"dragStart",
		"dragMove",
		"dragEnd",
		"toggle",
		"toggleNext",
		"max"
	],
	setup(t, { emit: r }) {
		let s = t, c = r, l = b(!1), u = 0, f = 0, p = d("myLayoutSplitterVariant", null), h = n(() => s.variant || T(p) || "modern"), g = n(() => s.direction.startsWith("v")), te = n(() => s.direction.includes("right") || s.direction.includes("bottom") ? -1 : 1), v = n(() => s.direction === "v-right" || s.direction === "h-bottom"), y = n(() => s.hidden || !!(s.dual && (s.collapsed || s.nextCollapsed))), S = n(() => !s.dual || s.collapsed ? "own" : s.nextCollapsed ? "next" : "own"), C = {
			"v-left": "v-right",
			"v-right": "v-left",
			"h-top": "h-bottom",
			"h-bottom": "h-top"
		}, w = n(() => S.value === "own" ? s.direction : C[s.direction] || s.direction), E = n(() => h.value === "classic" && s.dual ? g.value : !g.value), D = n(() => !y.value && !s.maxed && (s.collapsible || s.nextCollapsible || s.maxBtn)), O = n(() => {
			let e = [
				s.collapsible ? "toggle" : "",
				s.dual && s.nextCollapsible ? "toggleNext" : "",
				s.maxBtn && !s.maxed ? "max" : ""
			].filter(Boolean);
			return e.length === 1 ? e[0] : "";
		});
		function k(e) {
			O.value && e.stopPropagation();
		}
		function A() {
			O.value === "toggle" ? c("toggle") : O.value === "toggleNext" ? c("toggleNext") : O.value === "max" && c("max");
		}
		let M = {
			left: "m15 18-6-6 6-6",
			right: "m9 18 6-6-6-6",
			up: "m18 15-6-6-6 6",
			down: "m6 9 6 6 6-6"
		}, we = {
			left: "M17 3 L7 12 L17 21 Z",
			right: "M7 3 L17 12 L7 21 Z",
			up: "M3 17 L12 7 L21 17 Z",
			down: "M3 7 L12 17 L21 7 Z"
		}, Te = n(() => h.value === "classic" ? M : we), Ee = {
			v: [
				[9, 6],
				[9, 12],
				[9, 18],
				[15, 6],
				[15, 12],
				[15, 18]
			],
			h: [
				[6, 9],
				[12, 9],
				[18, 9],
				[6, 15],
				[12, 15],
				[18, 15]
			]
		}, De = n(() => Ee[g.value ? "v" : "h"]), Oe = n(() => {
			let e = s.direction;
			return e === "v-left" ? "left" : e === "v-right" ? "right" : e === "h-top" ? "up" : "down";
		}), ke = n(() => ({
			left: "right",
			right: "left",
			up: "down",
			down: "up"
		})[Oe.value]), Ae = n(() => Te.value[s.collapsed ? ke.value : Oe.value]), je = n(() => s.collapsed ? "展开" : "收缩"), Me = n(() => Te.value[ke.value]), Ne = n(() => "最大化"), Pe = n(() => {
			let e = w.value;
			return e === "v-left" ? "left" : e === "v-right" ? "right" : e === "h-top" ? "up" : "down";
		}), Fe = n(() => ({
			left: "right",
			right: "left",
			up: "down",
			down: "up"
		})[Pe.value]), Ie = n(() => Te.value[Fe.value]), Le = n(() => Te.value[s.nextCollapsed ? Oe.value : ke.value]), Re = n(() => s.nextCollapsed ? "展开" : "收缩"), ze = n(() => S.value === "own" ? s.collapsible : s.nextCollapsible), Be = n(() => s.collapsible), Ve = n(() => s.maxBtn && !s.maxed), He = n(() => s.dual && s.nextCollapsible), Ue = n(() => Be.value ? "own" : Ve.value ? "max" : He.value ? "next" : null), We = (e) => s.hoverReveal && Ue.value !== e, Ge = n(() => We("own")), Ke = n(() => We("next")), qe = n(() => We("max"));
		function Je(e) {
			return g.value ? e.clientX : e.clientY;
		}
		function Ye(e) {
			!s.hidden && s.split && (e.preventDefault(), e.stopPropagation(), l.value = !0, u = Je(e), c("dragStart", {
				clientPos: u,
				setStartSize: (e) => {
					f = e;
				}
			}), document.addEventListener("mousemove", Xe), document.addEventListener("mouseup", Ze), document.body.style.cursor = g.value ? "col-resize" : "row-resize", document.body.style.userSelect = "none");
		}
		function Xe(e) {
			if (!l.value) return;
			let t = (Je(e) - u) * te.value, n = s.step > 1 ? Math.round(t / s.step) * s.step : t;
			c("dragMove", Math.max(s.min, Math.min(s.max, f + n)));
		}
		function Ze(e) {
			l.value = !1, document.removeEventListener("mousemove", Xe), document.removeEventListener("mouseup", Ze), document.body.style.cursor = "", document.body.style.userSelect = "", c("dragEnd", e);
		}
		ee(() => {
			document.removeEventListener("mousemove", Xe), document.removeEventListener("mouseup", Ze);
		});
		function Qe(e) {
			e.stopPropagation(), c("toggle");
		}
		function $e(e) {
			e.stopPropagation(), c("toggleNext");
		}
		function et(e) {
			e.stopPropagation(), c("max");
		}
		function tt(e) {
			e.stopPropagation(), S.value === "own" ? c("toggle") : c("toggleNext");
		}
		return (n, r) => y.value ? (_(), a("div", {
			key: 1,
			class: m(["my-splitter my-splitter--hidden", [`my-splitter--${w.value}`, `my-splitter--${h.value}`]])
		}, [ze.value ? (_(), a("button", {
			key: 0,
			class: m(["my-splitter__handle my-splitter__handle--float", `my-splitter__handle--${w.value}`]),
			title: "展开",
			onMousedown: r[12] ||= j(() => {}, ["stop"]),
			onClick: j(tt, ["stop"])
		}, [(_(), a("svg", Se, [o("path", { d: Ie.value }, null, 8, Ce)]))], 34)) : i("", !0)], 2)) : (_(), a("div", {
			key: 0,
			class: m(["my-splitter", [
				`my-splitter--${t.direction}`,
				`my-splitter--${h.value}`,
				{
					"my-splitter--dragging": l.value,
					"my-splitter--static": !t.split,
					"my-splitter--always": !t.hoverReveal
				}
			]]),
			onMousedown: Ye
		}, [r[13] ||= o("div", { class: "my-splitter__line" }, null, -1), h.value === "modern" && D.value ? (_(), a("div", {
			key: 0,
			class: m(["my-splitter__thumb", { "my-splitter__thumb--clickable": O.value }]),
			onMousedown: k,
			onClick: A
		}, [o("div", { class: m(["my-splitter__group", { "my-splitter__group--row": E.value }]) }, [v.value ? (_(), a(e, { key: 0 }, [
			t.maxBtn && !t.maxed ? (_(), a("button", {
				key: 0,
				type: "button",
				class: m(["my-splitter__handle", { "my-splitter__handle--reveal": qe.value }]),
				title: Ne.value,
				onMousedown: r[0] ||= j(() => {}, ["stop"]),
				onClick: j(et, ["stop"])
			}, [(_(), a("svg", P, [o("path", { d: Me.value }, null, 8, F)]))], 42, N)) : i("", !0),
			t.collapsible ? (_(), a("button", {
				key: 1,
				type: "button",
				class: m(["my-splitter__handle", { "my-splitter__handle--reveal": Ge.value }]),
				title: je.value,
				onMousedown: r[1] ||= j(() => {}, ["stop"]),
				onClick: j(Qe, ["stop"])
			}, [(_(), a("svg", L, [o("path", { d: Ae.value }, null, 8, ne)]))], 42, I)) : i("", !0),
			t.dual && t.nextCollapsible ? (_(), a("button", {
				key: 2,
				type: "button",
				class: m(["my-splitter__handle", { "my-splitter__handle--reveal": Ke.value }]),
				title: Re.value,
				onMousedown: r[2] ||= j(() => {}, ["stop"]),
				onClick: j($e, ["stop"])
			}, [(_(), a("svg", z, [o("path", { d: Le.value }, null, 8, re)]))], 42, R)) : i("", !0)
		], 64)) : (_(), a(e, { key: 1 }, [
			t.collapsible ? (_(), a("button", {
				key: 0,
				type: "button",
				class: m(["my-splitter__handle", { "my-splitter__handle--reveal": Ge.value }]),
				title: je.value,
				onMousedown: r[3] ||= j(() => {}, ["stop"]),
				onClick: j(Qe, ["stop"])
			}, [(_(), a("svg", V, [o("path", { d: Ae.value }, null, 8, ie)]))], 42, B)) : i("", !0),
			t.dual && t.nextCollapsible ? (_(), a("button", {
				key: 1,
				type: "button",
				class: m(["my-splitter__handle", { "my-splitter__handle--reveal": Ke.value }]),
				title: Re.value,
				onMousedown: r[4] ||= j(() => {}, ["stop"]),
				onClick: j($e, ["stop"])
			}, [(_(), a("svg", U, [o("path", { d: Le.value }, null, 8, W)]))], 42, H)) : i("", !0),
			t.maxBtn && !t.maxed ? (_(), a("button", {
				key: 2,
				type: "button",
				class: m(["my-splitter__handle", { "my-splitter__handle--reveal": qe.value }]),
				title: Ne.value,
				onMousedown: r[5] ||= j(() => {}, ["stop"]),
				onClick: j(et, ["stop"])
			}, [(_(), a("svg", G, [o("path", { d: Me.value }, null, 8, oe)]))], 42, ae)) : i("", !0)
		], 64))], 2)], 34)) : D.value ? (_(), a("div", {
			key: 1,
			class: m(["my-splitter__dock", { "my-splitter__dock--clickable": O.value }]),
			onMousedown: k,
			onClick: A
		}, [o("span", K, [(_(), a("svg", se, [(_(!0), a(e, null, x(De.value, (e, t) => (_(), a("circle", {
			key: t,
			cx: e[0],
			cy: e[1],
			r: "1.4"
		}, null, 8, q))), 128))]))]), o("div", { class: m(["my-splitter__group", { "my-splitter__group--row": E.value }]) }, [v.value ? (_(), a(e, { key: 0 }, [
			t.maxBtn && !t.maxed ? (_(), a("button", {
				key: 0,
				type: "button",
				class: "my-splitter__handle",
				title: Ne.value,
				onMousedown: r[6] ||= j(() => {}, ["stop"]),
				onClick: j(et, ["stop"])
			}, [(_(), a("svg", le, [o("path", { d: Me.value }, null, 8, J)]))], 40, ce)) : i("", !0),
			t.collapsible ? (_(), a("button", {
				key: 1,
				type: "button",
				class: "my-splitter__handle",
				title: je.value,
				onMousedown: r[7] ||= j(() => {}, ["stop"]),
				onClick: j(Qe, ["stop"])
			}, [(_(), a("svg", de, [o("path", { d: Ae.value }, null, 8, Y)]))], 40, ue)) : i("", !0),
			t.dual && t.nextCollapsible ? (_(), a("button", {
				key: 2,
				type: "button",
				class: "my-splitter__handle",
				title: Re.value,
				onMousedown: r[8] ||= j(() => {}, ["stop"]),
				onClick: j($e, ["stop"])
			}, [(_(), a("svg", Z, [o("path", { d: Le.value }, null, 8, fe)]))], 40, X)) : i("", !0)
		], 64)) : (_(), a(e, { key: 1 }, [
			t.collapsible ? (_(), a("button", {
				key: 0,
				type: "button",
				class: "my-splitter__handle",
				title: je.value,
				onMousedown: r[9] ||= j(() => {}, ["stop"]),
				onClick: j(Qe, ["stop"])
			}, [(_(), a("svg", me, [o("path", { d: Ae.value }, null, 8, he)]))], 40, pe)) : i("", !0),
			t.dual && t.nextCollapsible ? (_(), a("button", {
				key: 1,
				type: "button",
				class: "my-splitter__handle",
				title: Re.value,
				onMousedown: r[10] ||= j(() => {}, ["stop"]),
				onClick: j($e, ["stop"])
			}, [(_(), a("svg", _e, [o("path", { d: Le.value }, null, 8, ve)]))], 40, ge)) : i("", !0),
			t.maxBtn && !t.maxed ? (_(), a("button", {
				key: 2,
				type: "button",
				class: "my-splitter__handle",
				title: Ne.value,
				onMousedown: r[11] ||= j(() => {}, ["stop"]),
				onClick: j(et, ["stop"])
			}, [(_(), a("svg", be, [o("path", { d: Me.value }, null, 8, xe)]))], 40, ye)) : i("", !0)
		], 64))], 2)], 34)) : i("", !0)], 34));
	}
}, [["__scopeId", "data-v-c48e2814"]]), Te = /* @__PURE__ */ new Map(), Ee = "BorderLayout", De = "defaultname", Oe = 0;
function ke(e = "layout") {
	return `${e}_${++Oe}`;
}
function Ae(e, t, n) {
	return `${e}__${t}__${n || "defaultname"}`;
}
function je(e, t) {
	e && Te.set(e, t);
}
function Me(e) {
	e && Te.delete(e);
}
function Ne(e) {
	return e && Te.get(e) || null;
}
function Pe(e) {
	return e ? Te.has(e) : !1;
}
function Fe() {
	return Array.from(Te.keys());
}
//#endregion
//#region src/mylayout/composables/theme.js
var Ie = Symbol("my-layout-theme"), Le = "light", Re = [
	"light",
	"light-blue",
	"dark"
], ze = { blue: "light-blue" };
function Be(e) {
	if (!e) return "";
	let t = ze[e] || e;
	return Re.includes(t) ? t : Le;
}
function Ve(e) {
	let t = Be(e);
	return t ? `my-layout-theme-${t}` : "";
}
function He(e) {
	let t = d(Ie, null), r = n(() => Be(e.theme)), i = n(() => r.value || t?.value || "light");
	return v(Ie, i), {
		own: r,
		resolved: i
	};
}
//#endregion
//#region src/mylayout/components/MyPanel.vue
var Ue = {
	key: 0,
	class: "my-panel__title"
}, We = {
	key: 0,
	class: "my-panel__icon"
}, Ge = { class: "my-panel__title-text" }, Ke = {
	key: 1,
	class: "my-panel__subtitle"
}, qe = {
	key: 1,
	class: "my-panel__actions"
}, Je = { class: "my-panel__buttons" }, Ye = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Xe = ["d"], Ze = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Qe = ["d"], $e = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, et = ["d"], tt = ["title"], nt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, rt = ["d"], it = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Q = ["d"], $ = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, at = ["d"], ot = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, st = ["d"], ct = {
	key: 1,
	class: "my-panel__footer"
}, lt = /*#__PURE__*/ M({
	__name: "MyPanel",
	props: {
		name: {
			type: String,
			default: ""
		},
		title: {
			type: String,
			default: ""
		},
		iconCls: {
			type: String,
			default: ""
		},
		icon: {
			type: String,
			default: ""
		},
		hasTitle: {
			type: Boolean,
			default: !0
		},
		hasSubTitle: {
			type: Boolean,
			default: !1
		},
		subTitle: {
			type: String,
			default: ""
		},
		hasTool: {
			type: Boolean,
			default: !0
		},
		hasFooter: {
			type: Boolean,
			default: !1
		},
		footer: {
			type: String,
			default: ""
		},
		border: {
			type: Boolean,
			default: !0
		},
		scroll: {
			type: Boolean,
			default: !0
		},
		noscroll: {
			type: Boolean,
			default: !1
		},
		opacity: {
			type: [Number, String],
			default: ""
		},
		float: {
			type: Boolean,
			default: !1
		},
		headerHeight: {
			type: Number,
			default: 34
		},
		bodyPadding: {
			type: String,
			default: "10px 12px"
		},
		panelClass: {
			type: String,
			default: ""
		},
		headerClass: {
			type: String,
			default: ""
		},
		bodyClass: {
			type: String,
			default: ""
		},
		panelStyle: {
			type: [Object, String],
			default: null
		},
		headerStyle: {
			type: [Object, String],
			default: null
		},
		bodyStyle: {
			type: [Object, String],
			default: null
		},
		theme: {
			type: String,
			default: ""
		},
		min: {
			type: Boolean,
			default: !0
		},
		max: {
			type: Boolean,
			default: !0
		},
		close: {
			type: Boolean,
			default: !1
		},
		refresh: {
			type: Boolean,
			default: !1
		},
		nav: {
			type: Boolean,
			default: !1
		}
	},
	emits: [
		"min",
		"max",
		"restore",
		"close",
		"refresh"
	],
	setup(e, { emit: t }) {
		let r = {
			max: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3",
			restore: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3",
			minus: "M5 12h14",
			chevronDown: "m6 9 6 6 6-6",
			close: "M18 6 6 18M6 6l12 12",
			refresh: "M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5",
			navBack: "M19 12H5m7-7-7 7 7 7",
			navForward: "M5 12h14m-7-7 7 7-7 7"
		}, s = e, l = t;
		function u() {
			return {
				region: h.value,
				name: s.name
			};
		}
		let d = b(null), f = b(!1), p = b(!1);
		O(() => s.name, () => {
			f.value = !1;
		});
		let h = b("");
		function ee() {
			let e = d.value?.closest?.("[data-region]");
			h.value = e?.dataset?.region || "";
		}
		te(ee);
		function v() {
			let e = (d.value?.closest?.("[data-layout-id]") || null)?.dataset?.layoutId;
			return e ? Ne(e) : null;
		}
		function y(e, t) {
			let n = v();
			n && typeof n.notifyPanel == "function" && n.notifyPanel(e, h.value, s.name, t);
		}
		let x = n(() => f.value), C = n(() => {
			let e = v(), t = h.value;
			return e && t && typeof e.maxed == "function" ? !!e.maxed(t) : p.value;
		}), T = n(() => x.value ? "展开" : "最小化"), E = n(() => s.min && h.value !== "center");
		function k(e) {
			if (!s.nav) return null;
			let t = v(), n = h.value;
			return !t || !n || typeof t.getUpName != "function" ? null : (e === "up" ? t.getUpName(n, s.name) : t.getDownName(n, s.name)) || null;
		}
		let M = n(() => k("up")), N = n(() => k("down"));
		function P(e) {
			let t = v(), n = h.value;
			t && n && typeof t.up == "function" && t[e === "up" ? "up" : "down"](n, s.name);
		}
		let F = n(() => s.hasTitle || s.min || s.max || s.close || s.refresh || C.value), I = n(() => Ve(s.theme)), L = n(() => s.iconCls || s.icon), ne = n(() => ({
			height: x.value ? "auto" : "100%",
			opacity: s.opacity === "" ? void 0 : Number(s.opacity)
		}));
		function R() {
			if (!E.value) return;
			let e = !x.value, t = v();
			if (t && h.value && typeof t.notifyPanel == "function") {
				t.notifyPanel(e ? "min" : "restore", h.value, s.name);
				return;
			}
			f.value = e, l(e ? "min" : "restore", u());
		}
		function z() {
			let e = v(), t = h.value;
			if (e && t && typeof e.maxed == "function") {
				e.maxed(t) ? e.restore(t) : e.max(t);
				return;
			}
			p.value = !p.value, l(p.value ? "max" : "restore", u());
		}
		function re() {
			l("close", u()), y("close");
		}
		function B() {
			l("refresh", u()), y("refresh");
		}
		return (t, n) => (_(), a("div", {
			ref_key: "panelEl",
			ref: d,
			class: m(["my-panel", [
				I.value,
				e.panelClass,
				{
					"my-panel--collapsed": x.value,
					"my-panel--noborder": !e.border,
					"my-panel--noscroll": e.noscroll,
					"my-panel--float": e.float,
					"my-panel--maxed": C.value
				}
			]]),
			style: g([ne.value, e.panelStyle])
		}, [
			F.value ? (_(), a("div", {
				key: 0,
				class: m(["my-panel__header", e.headerClass]),
				style: g([{ height: e.headerHeight + "px" }, e.headerStyle]),
				onDblclick: R
			}, [
				S(t.$slots, "leftTool", {}, void 0, !0),
				e.hasTitle ? (_(), a("div", Ue, [S(t.$slots, "title", {}, () => [
					L.value ? (_(), a("span", We, w(L.value), 1)) : i("", !0),
					o("span", Ge, w(e.title), 1),
					e.hasSubTitle && e.subTitle ? (_(), a("span", Ke, w(e.subTitle), 1)) : i("", !0)
				], !0)])) : i("", !0),
				e.hasTool ? (_(), a("div", qe, [S(t.$slots, "actions", {}, void 0, !0)])) : i("", !0),
				o("div", Je, [
					M.value ? (_(), a("button", {
						key: 0,
						type: "button",
						class: "my-panel__btn",
						title: "后退",
						onClick: n[0] ||= j((e) => P("up"), ["stop"])
					}, [(_(), a("svg", Ye, [o("path", { d: r.navBack }, null, 8, Xe)]))])) : i("", !0),
					N.value ? (_(), a("button", {
						key: 1,
						type: "button",
						class: "my-panel__btn",
						title: "前进",
						onClick: n[1] ||= j((e) => P("down"), ["stop"])
					}, [(_(), a("svg", Ze, [o("path", { d: r.navForward }, null, 8, Qe)]))])) : i("", !0),
					e.refresh ? (_(), a("button", {
						key: 2,
						type: "button",
						class: "my-panel__btn",
						title: "刷新",
						onClick: j(B, ["stop"])
					}, [(_(), a("svg", $e, [o("path", { d: r.refresh }, null, 8, et)]))])) : i("", !0),
					E.value ? (_(), a("button", {
						key: 3,
						type: "button",
						class: "my-panel__btn",
						title: T.value,
						onClick: j(R, ["stop"])
					}, [(_(), a("svg", nt, [o("path", { d: x.value ? r.chevronDown : r.minus }, null, 8, rt)]))], 8, tt)) : i("", !0),
					e.max && !C.value ? (_(), a("button", {
						key: 4,
						type: "button",
						class: "my-panel__btn",
						title: "最大化",
						onClick: j(z, ["stop"])
					}, [(_(), a("svg", it, [o("path", { d: r.max }, null, 8, Q)]))])) : i("", !0),
					C.value ? (_(), a("button", {
						key: 5,
						type: "button",
						class: "my-panel__btn my-panel__btn--active",
						title: "还原",
						onClick: j(z, ["stop"])
					}, [(_(), a("svg", $, [o("path", { d: r.restore }, null, 8, at)]))])) : i("", !0),
					e.close ? (_(), a("button", {
						key: 6,
						type: "button",
						class: "my-panel__btn my-panel__btn--danger",
						title: "关闭",
						onClick: j(re, ["stop"])
					}, [(_(), a("svg", ot, [o("path", { d: r.close }, null, 8, st)]))])) : i("", !0)
				])
			], 38)) : i("", !0),
			A(o("div", {
				class: m(["my-panel__body", e.bodyClass]),
				style: g([{
					padding: e.bodyPadding,
					overflow: e.noscroll ? "hidden" : e.scroll ? "auto" : "visible"
				}, e.bodyStyle])
			}, [S(t.$slots, "default", {}, void 0, !0)], 6), [[D, !x.value]]),
			e.hasFooter ? (_(), a("div", ct, [S(t.$slots, "footer", {}, () => [c(w(e.footer), 1)], !0)])) : i("", !0)
		], 6));
	}
}, [["__scopeId", "data-v-6b32997b"]]), ut = null;
function dt(e) {
	return typeof ut == "function" ? ut(e) : null;
}
function ft(e) {
	return typeof e != "string" || !e ? !1 : /[\\/]/.test(e) || /\.(vue|jsx?|tsx?)$/.test(e);
}
//#endregion
//#region src/mylayout/components/MyPanelContent.vue
var pt = ["src"], mt = ["innerHTML"], ht = /*#__PURE__*/ M({
	__name: "MyPanelContent",
	props: { item: {
		type: Object,
		default: () => ({})
	} },
	setup(e) {
		let t = e, i = n(() => {
			let e = t.item || {};
			return e.component ? "component" : e.url ? "url" : e.html != null && e.html !== "" ? "html" : "none";
		}), o = n(() => {
			let e = t.item?.component;
			return typeof e == "string" && ft(e) && dt(e) || e;
		}), s = n(() => t.item?.props || {}), c = n(() => {
			let e = t.item || {};
			return e.url ? l(e.url, e.params) : e.url;
		});
		function l(e, t) {
			if (!t || typeof t != "object") return e;
			let n = Object.entries(t).filter(([, e]) => e != null);
			if (!n.length) return e;
			let r = n.map(([e, t]) => `${encodeURIComponent(e)}=${encodeURIComponent(t)}`).join("&");
			return e + (e.includes("?") ? "&" : "?") + r;
		}
		return (t, n) => i.value === "component" ? (_(), r(C(o.value), h(f({ key: 0 }, s.value)), null, 16)) : i.value === "url" ? (_(), a("iframe", {
			key: 1,
			class: "my-panel-content__iframe",
			src: c.value,
			frameborder: "0"
		}, null, 8, pt)) : i.value === "html" ? (_(), a("div", {
			key: 2,
			class: "my-panel-content__html",
			innerHTML: e.item.html
		}, null, 8, mt)) : S(t.$slots, "default", {}, void 0, !0, 3);
	}
}, [["__scopeId", "data-v-3f600da1"]]), gt = ["data-panel"], _t = {
	class: "my-tabs__bar",
	role: "tablist"
}, vt = [
	"title",
	"aria-selected",
	"disabled",
	"onClick",
	"onContextmenu"
], yt = {
	key: 0,
	class: "my-tabs__icon"
}, bt = { class: "my-tabs__text" }, xt = ["onClick"], St = {
	key: 0,
	class: "my-tabs__tool"
}, Ct = { class: "my-tabs__body" }, wt = ["onClick"], Tt = {
	key: 0,
	class: "my-tabs__menu-icon"
}, Et = 200, Dt = /*#__PURE__*/ M({
	__name: "MyTabs",
	props: {
		items: {
			type: Array,
			default: () => []
		},
		active: {
			type: String,
			default: ""
		},
		position: {
			type: String,
			default: "top",
			validator: (e) => [
				"top",
				"bottom",
				"left",
				"right"
			].includes(e)
		},
		closable: {
			type: Boolean,
			default: !1
		},
		hasTool: {
			type: Boolean,
			default: !1
		},
		contextmenu: {
			type: Boolean,
			default: !1
		},
		menu: {
			type: Array,
			default: null
		},
		titleVertical: {
			type: Boolean,
			default: !1
		},
		tabsClass: {
			type: String,
			default: ""
		},
		panelName: {
			type: String,
			default: ""
		},
		theme: {
			type: String,
			default: ""
		}
	},
	emits: [
		"update:active",
		"change",
		"close",
		"refresh",
		"contextmenu",
		"menu-select"
	],
	setup(t, { expose: s, emit: c }) {
		let l = [
			{
				name: "close",
				title: "关闭"
			},
			{
				name: "closeOthers",
				title: "关闭其它"
			},
			{
				name: "closeAll",
				title: "关闭全部"
			},
			{
				name: "refresh",
				title: "刷新",
				divided: !0
			}
		], u = t, d = c, f = E(), p = b(null), h = b(""), v = b({}), y = b({}), C = n(() => u.active || h.value || u.items[0]?.name || ""), T = n(() => Ve(u.theme)), M = n(() => u.hasTool || !!f.tool), N = n(() => u.titleVertical && (u.position === "left" || u.position === "right"));
		function P(e) {
			return e.lazy === !1 || !!v.value[e.name];
		}
		function F(e) {
			return `${e.name}:${y.value[e.name] || 0}:${e.refreshAt || 0}`;
		}
		function I(e) {
			y.value[e] = (y.value[e] || 0) + 1;
		}
		O(C, (e) => {
			let t = u.items.find((t) => t.name === e);
			if (!t) return;
			let n = !!v.value[e];
			v.value[e] = !0, n && t.reload && I(e);
		}, { immediate: !0 });
		let L = b("");
		function ne() {
			L.value = p.value?.closest?.("[data-region]")?.dataset?.region || "";
		}
		te(ne);
		function R() {
			let e = (p.value?.closest?.("[data-layout-id]") || null)?.dataset?.layoutId;
			return e ? Ne(e) : null;
		}
		function z(e, t, n) {
			let r = R();
			return !r || typeof r.notifyTab != "function" ? !1 : (r.notifyTab(e, L.value, u.panelName, t, n), !0);
		}
		function re(e) {
			return e?.closable == null ? u.closable : !!e.closable;
		}
		function B(e) {
			let t = u.items.find((t) => t.name === e);
			return !t || t.disabled ? !1 : (z("change", e) || (h.value = e), d("update:active", e), d("change", {
				name: e,
				item: t
			}), !0);
		}
		function V(e) {
			e.name !== C.value && B(e.name);
		}
		function ie(e) {
			let t = u.items.find((t) => t.name === e);
			return t ? (d("close", {
				name: e,
				item: t
			}), z("close", e)) : !1;
		}
		function H(e, t) {
			t?.stopPropagation?.(), re(e) && ie(e.name);
		}
		function U(e) {
			return u.items.some((t) => t.name === e) ? (u.items.filter((t) => t.name !== e).forEach((e) => d("close", {
				name: e.name,
				item: e
			})), z("closeOthers", e)) : !1;
		}
		function W() {
			return u.items.forEach((e) => d("close", {
				name: e.name,
				item: e
			})), z("closeAll", C.value);
		}
		function ae(e) {
			let t = e || C.value;
			return t ? (I(t), d("refresh", {
				name: t,
				item: u.items.find((e) => e.name === t) || null
			}), z("refresh", t), !0) : !1;
		}
		let G = b(!1), oe = b(0), K = b(0), se = b(""), q = n(() => u.items.find((e) => e.name === se.value) || null), ce = n(() => q.value?.menu || u.menu || l), le = null;
		function J() {
			le &&= (clearTimeout(le), null);
		}
		function ue() {
			J();
		}
		function de() {
			J(), le = setTimeout(X, Et);
		}
		function Y(e, t) {
			let n = ce.value.length;
			oe.value = Math.min(e, Math.max(0, window.innerWidth - 150)), K.value = Math.min(t, Math.max(0, window.innerHeight - n * 30 - 12)), G.value = !0, J(), window.addEventListener("mousedown", Z, !0), window.addEventListener("keydown", fe, !0), window.addEventListener("scroll", X, !0);
		}
		function X() {
			J(), G.value && (G.value = !1, window.removeEventListener("mousedown", Z, !0), window.removeEventListener("keydown", fe, !0), window.removeEventListener("scroll", X, !0));
		}
		function Z(e) {
			p.value?.contains(e.target) || X();
		}
		function fe(e) {
			e.key === "Escape" && X();
		}
		ee(X);
		function pe(e, t) {
			d("contextmenu", {
				name: e.name,
				item: e,
				event: t
			}), u.contextmenu && (t.preventDefault(), e.disabled || B(e.name), se.value = e.name, Y(t.clientX, t.clientY));
		}
		function me(e) {
			if (!e || e.disabled) return;
			let t = se.value, n = q.value;
			if (X(), typeof e.handler == "function") return e.handler({
				name: t,
				item: n
			});
			if (e.name === "close") return ie(t);
			if (e.name === "closeOthers") return U(t);
			if (e.name === "closeAll") return W();
			if (e.name === "refresh") return ae(t);
			d("menu-select", {
				action: e.name,
				name: t,
				item: n
			}), z("menu", t, e.name);
		}
		return s({
			setActive: B,
			close: ie,
			closeOthers: U,
			closeAll: W,
			refresh: ae,
			closeMenu: X
		}), (n, s) => (_(), a("div", {
			ref_key: "tabsEl",
			ref: p,
			class: m(["my-tabs", [
				T.value,
				t.tabsClass,
				`my-tabs--${t.position}`,
				N.value && "my-tabs--title-v"
			]]),
			"data-panel": t.panelName
		}, [
			o("div", _t, [(_(!0), a(e, null, x(t.items, (e) => (_(), a("button", {
				key: e.name,
				type: "button",
				role: "tab",
				class: m(["my-tabs__item", {
					"my-tabs__item--active": e.name === C.value,
					"my-tabs__item--disabled": e.disabled
				}]),
				title: e.title || e.name,
				"aria-selected": String(e.name === C.value),
				disabled: e.disabled,
				onClick: (t) => V(e),
				onContextmenu: (t) => pe(e, t)
			}, [
				e.iconCls ? (_(), a("span", yt, w(e.iconCls), 1)) : i("", !0),
				o("span", bt, w(e.title || e.name), 1),
				re(e) ? (_(), a("svg", {
					key: 1,
					class: "my-tabs__close",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "1.8",
					"stroke-linecap": "round",
					onClick: (t) => H(e, t)
				}, [...s[1] ||= [o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)]], 8, xt)) : i("", !0)
			], 42, vt))), 128)), M.value ? (_(), a("div", St, [S(n.$slots, "tool", {}, void 0, !0)])) : i("", !0)]),
			o("div", Ct, [(_(!0), a(e, null, x(t.items, (e) => A((_(), a("div", {
				key: e.name,
				class: "my-tabs__pane"
			}, [P(e) ? (_(), r(ht, {
				key: F(e),
				item: e
			}, {
				default: k(() => [S(n.$slots, `tab:${e.name}`, { item: e }, () => [S(n.$slots, e.name, { item: e }, void 0, !0)], !0)]),
				_: 2
			}, 1032, ["item"])) : i("", !0)])), [[D, e.name === C.value]])), 128)), t.items.length ? i("", !0) : S(n.$slots, "empty", {}, void 0, !0, 0)]),
			G.value ? S(n.$slots, "menu", {
				items: ce.value,
				item: q.value,
				run: me,
				close: X
			}, () => [o("ul", {
				class: "my-tabs__menu",
				style: g({
					left: `${oe.value}px`,
					top: `${K.value}px`
				}),
				onContextmenu: s[0] ||= j(() => {}, ["prevent"]),
				onMouseenter: ue,
				onMouseleave: de
			}, [(_(!0), a(e, null, x(ce.value, (e) => (_(), a("li", {
				key: e.name,
				class: m(["my-tabs__menu-item", {
					"my-tabs__menu-item--divided": e.divided,
					"my-tabs__menu-item--disabled": e.disabled
				}]),
				onClick: (t) => me(e)
			}, [e.iconCls ? (_(), a("span", Tt, w(e.iconCls), 1)) : i("", !0), o("span", null, w(e.title || e.name), 1)], 10, wt))), 128))], 36)], !0, 0) : i("", !0)
		], 10, gt));
	}
}, [["__scopeId", "data-v-74605ae0"]]), Ot = /* @__PURE__ */ "title.iconCls.hasTitle.hasSubTitle.subTitle.hasTool.hasFooter.footer.border.scroll.noscroll.opacity.headerHeight.bodyPadding.panelClass.headerClass.bodyClass.panelStyle.headerStyle.bodyStyle.theme.min.max.close.refresh.nav".split("."), kt = Object.freeze({
	north: !0,
	south: !0,
	west: !0,
	east: !1,
	center: !0
}), At = Object.freeze({
	north: 56,
	south: 32,
	west: 220,
	east: 260
}), jt = {
	1: "page",
	2: "layout",
	3: "center"
}, Mt = Object.freeze({
	title: "",
	iconCls: "",
	hasTitle: !0,
	hasSubTitle: !1,
	subTitle: "",
	hasTool: !0,
	hasFooter: !1,
	footer: "",
	border: !0,
	scroll: !0,
	noscroll: !1,
	opacity: "",
	headerHeight: 34,
	bodyPadding: "10px 12px",
	panelClass: "",
	headerClass: "",
	bodyClass: "",
	panelStyle: null,
	headerStyle: null,
	bodyStyle: null,
	theme: "",
	min: !0,
	max: !0,
	close: !1,
	refresh: !1,
	nav: !1,
	region: "center",
	layout: "",
	min: !1,
	max: !1,
	border: !1,
	scroll: !1,
	close: !1,
	refresh: !1,
	collapsible: !1,
	float: !1,
	tab: null,
	parentName: "",
	lastName: "",
	split: !1,
	initSize: 0,
	collapseSize: 10,
	collapseFloat: !1,
	show: !0,
	maxType: "",
	width: "",
	height: ""
});
function Nt(e) {
	return e === "" || e == null ? "" : jt[e] ? jt[e] : e;
}
function Pt(e = {}, t = Mt) {
	let n = {
		...t,
		...e || {}
	};
	return !n.iconCls && e.icon && (n.iconCls = e.icon), n.maxType = Nt(n.maxType), n;
}
function Ft(e = {}, t = "") {
	let n = {};
	for (let t of Ot) e[t] !== void 0 && (n[t] = e[t]);
	return e.name && (n.name = e.name), n;
}
//#endregion
//#region src/mylayout/components/MyBorderLayout.vue
var It = [
	"data-layout-id",
	"data-mt",
	"data-mt-north",
	"data-mt-south",
	"data-mt-west",
	"data-mt-east",
	"data-mt-center",
	"data-animate",
	"data-anim-duration"
], Lt = {
	key: 0,
	class: "my-region-panel-body"
}, Rt = {
	key: 0,
	class: "my-region-panel-body"
}, zt = {
	class: "my-bl__center",
	"data-region": "center"
}, Bt = {
	key: 0,
	class: "my-region-panel-body"
}, Vt = {
	key: 0,
	class: "my-region-panel-body"
}, Ht = {
	key: 0,
	class: "my-region-panel-body"
}, Ut = /*#__PURE__*/ M({
	__name: "MyBorderLayout",
	props: {
		layoutId: {
			type: String,
			default: Ee
		},
		parentLayoutId: {
			type: String,
			default: ""
		},
		regionLevel: {
			type: [String, Number],
			default: "ns",
			validator: (e) => [
				"ns",
				"ew",
				"nws",
				"nwe",
				"north-south",
				"west-east",
				"north-west-south",
				"north-west-east",
				1,
				2,
				3,
				4
			].includes(e)
		},
		maxType: {
			type: String,
			default: "center"
		},
		splitterVariant: {
			type: String,
			default: ""
		},
		animate: {
			type: Boolean,
			default: !0
		},
		animationDuration: {
			type: Number,
			default: 260
		},
		regions: {
			type: Object,
			default: () => ({})
		},
		autoPanel: {
			type: Boolean,
			default: !1
		},
		border: {
			type: Boolean,
			default: !0
		},
		theme: {
			type: String,
			default: ""
		}
	},
	emits: [
		"update:regions",
		"update:sizes",
		"show",
		"hide",
		"max",
		"restore",
		"close",
		"refresh",
		"split",
		"menu-select",
		"ready"
	],
	setup(t, { expose: c, emit: l }) {
		let u = t, { own: d } = He(u), v = n(() => Ve(d.value)), x = l;
		function C(e, t, n) {
			return {
				region: e,
				name: t ?? null,
				layoutId: u.layoutId,
				...n || {}
			};
		}
		let w = [
			"north",
			"south",
			"west",
			"east",
			"center"
		], E = [
			"north",
			"south",
			"west",
			"east"
		], D = [
			"center",
			"layout",
			"page"
		];
		function A(e) {
			let t = {};
			for (let n of w) {
				let r = e?.[n];
				if (!r) {
					t[n] = {
						active: null,
						panels: [],
						show: kt[n]
					};
					continue;
				}
				let i = r.show == null ? kt[n] : !!r.show, a = (r.panels || []).map((e, t) => Pt({
					...e,
					name: e.name || `defaultname_${t}`,
					region: e.region || n
				}, Mt));
				i || a.forEach((e) => {
					e.hidden ??= !0;
				}), t[n] = {
					active: r.active || a[0]?.name || null,
					panels: a,
					show: i
				};
			}
			return t;
		}
		let j = b(A(u.regions)), M = !1;
		O(() => u.regions, (e) => {
			if (M) return;
			let t = A(e);
			JSON.stringify(t) !== JSON.stringify(j.value) && (j.value = t);
		}, { deep: !0 }), O(j, (e) => {
			M = !0, x("update:regions", e), p(() => {
				M = !1;
			});
		}, { deep: !0 });
		function N(e) {
			return j.value[e] || {
				active: null,
				panels: [],
				show: kt[e]
			};
		}
		function P(e) {
			return N(e).panels || [];
		}
		function F(e) {
			let t = N(e);
			return t.active ? t.active : t.panels?.[0]?.name ?? null;
		}
		function I(e) {
			let t = F(e);
			return P(e).find((e) => e.name === t) || {};
		}
		function L(e, t) {
			return P(e).find((e) => e.name === t) || null;
		}
		function ne(e) {
			return P(e).filter((e) => !e.hidden && e.show !== !1);
		}
		function R(e) {
			return P(e).length > 0;
		}
		function z(e, t) {
			let n = L(e, t || $(e));
			return n?.parentName && L(e, n.parentName) ? n.parentName : null;
		}
		function re(e, t) {
			let n = t || $(e), r = P(e).filter((e) => e.parentName === n);
			if (!r.length) return null;
			let i = L(e, n)?.lastName;
			return (r.find((e) => e.name === i && !e.hidden) || r.find((e) => !e.hidden) || r[0]).name;
		}
		function B(e, t) {
			if (!t?.parentName) return;
			let n = L(e, t.parentName);
			n && n.lastName !== t.name && (n.lastName = t.name);
		}
		function V(e, t) {
			let n = t?.parentName ? L(e, t.parentName) : null;
			return n ? (n.hidden = !1, vt(e, n.name), !0) : !1;
		}
		function ie(e) {
			let t = u.regions?.[e]?.panels;
			if (!t || !t.length) return {};
			let n = F(e);
			return t.find((e) => (e.name || "") === n) || t[0] || {};
		}
		function H(e) {
			let t = Ft(I(e), e);
			return t.border === void 0 && (t.border = u.border), e === "center" && (t.min = !1), t;
		}
		function U(e) {
			let t = I(e)?.tab;
			return t && typeof t == "object" ? t : null;
		}
		function W(e) {
			let t = U(e);
			return t ? {
				items: Array.isArray(t.items) ? t.items : [],
				active: t.active || "",
				position: t.position || "top",
				closable: !!t.closable,
				hasTool: !!t.hasTool,
				contextmenu: !!t.contextmenu,
				menu: t.menu || null,
				titleVertical: !!t.titleVertical,
				tabsClass: t.tabsClass || "",
				panelName: F(e) || ""
			} : null;
		}
		function ae(e) {
			let t = ie(e);
			return t.split != null && !!t.split;
		}
		function G(e) {
			let t = ie(e);
			return t.collapsible == null ? ae(e) : !!t.collapsible;
		}
		function oe(e) {
			let t = I(e);
			return t.max != null && !!t.max;
		}
		function K(e) {
			let t = I(e);
			return t.border == null ? u.border : !!t.border;
		}
		function se(e) {
			return Nt(I(e).maxType) || be(e);
		}
		function q(e) {
			let t = I(e), n = Number(t.initSize || (e === "west" || e === "east" ? t.width : t.height));
			return Number.isFinite(n) && n > 0 ? n : At[e];
		}
		function ce(e) {
			return E.includes(e) ? !!I(e).float : !1;
		}
		let le = n(() => E.filter(ce).map((e) => `my-bl--float-${e}`).join(" ")), J = y({
			north: q("north"),
			south: q("south"),
			west: q("west"),
			east: q("east")
		});
		O(() => w.map((e) => q(e)).join(","), () => {
			for (let e of E) J[e] !== q(e) && (J[e] = q(e));
		}, { immediate: !0 });
		let ue = {
			"north-south": "ns",
			"west-east": "ew",
			"north-west-south": "nws",
			"north-west-east": "nwe",
			1: "ns",
			2: "ew",
			3: "nws",
			4: "nwe"
		}, de = n(() => ue[u.regionLevel] || u.regionLevel || "ns");
		function Y(e) {
			return !Ee(e);
		}
		let X = b(null), Z = b("center"), fe = {
			north: "my-bl__north",
			south: "my-bl__south",
			west: "my-bl__west",
			east: "my-bl__east",
			center: "my-bl__center"
		};
		function pe(e) {
			let t = un.value;
			return t ? t.querySelector(":scope > ." + fe[e]) : null;
		}
		function me(e) {
			let t = pe(e);
			return t ? t.getBoundingClientRect() : null;
		}
		let he = null;
		function ge() {
			he &&= (clearTimeout(he), null);
		}
		function _e(e, t) {
			let n = pe(e);
			if (!n || !t || !u.animate) return;
			let r = Math.max(0, u.animationDuration || 0), i = n.getBoundingClientRect();
			if (i.width && i.height && !(Math.abs(i.width - t.width) < 1 && Math.abs(i.height - t.height) < 1)) {
				if (ge(), e === "south" && (n.style.alignSelf = "end"), e === "east" && (n.style.justifySelf = "end"), n.style.transition = "none", n.style.width = t.width + "px", n.style.height = t.height + "px", n.offsetWidth, r <= 0) {
					n.style.transition = "", n.style.width = "", n.style.height = "", n.style.alignSelf = "", n.style.justifySelf = "";
					return;
				}
				n.style.transition = `width ${r}ms ease, height ${r}ms ease`, n.style.width = i.width + "px", n.style.height = i.height + "px", he = setTimeout(() => {
					n && (n.style.transition = "", n.style.width = "", n.style.height = "", n.style.alignSelf = "", n.style.justifySelf = ""), he = null;
				}, r + 40);
			}
		}
		function ve() {
			return X.value !== null;
		}
		function ye(e) {
			return X.value === e;
		}
		function be(e) {
			return Nt(u.regions?.[e]?.maxType) || Nt(u.maxType) || "center";
		}
		function xe(e) {
			if (Z.value === "center") return e === "center" ? {
				north: !0,
				south: !0,
				west: !0,
				east: !0
			} : {};
			let t = {
				north: [
					"south",
					"west",
					"east"
				],
				south: [
					"north",
					"west",
					"east"
				],
				west: [
					"north",
					"south",
					"east"
				],
				east: [
					"north",
					"south",
					"west"
				],
				center: [
					"north",
					"south",
					"west",
					"east"
				]
			}, n = {};
			return w.forEach((e) => {
				n[e] = !1;
			}), (t[e] || []).forEach((e) => {
				n[e] = !0;
			}), n;
		}
		function Se(e) {
			return e === "center" || R(e) || !!N(e).show;
		}
		let Ce = n(() => ve() ? xe(X.value) : {});
		function Te(e) {
			if (!R(e)) return !0;
			let t = L(e, F(e));
			return !!t && !t.hidden;
		}
		function Ee(e) {
			if (ve()) {
				if (Ce.value[e]) return !1;
				if (e === X.value) return !0;
			}
			return e === "center" || Se(e) && Te(e);
		}
		let De = n(() => Ee("north")), Oe = n(() => Ee("south")), ke = n(() => Ee("west")), Pe = n(() => Ee("east"));
		function Fe(e) {
			return {
				north: De,
				south: Oe,
				west: ke,
				east: Pe,
				center: b(!0)
			}[e].value;
		}
		function Ie(e) {
			return Y(e) || ve() && Ce.value[e] ? 0 : J[e];
		}
		let Le = n(() => Ie("north")), Re = n(() => Ie("south")), ze = n(() => Ie("west")), Be = n(() => Ie("east"));
		function Ue(e) {
			if (ye(e)) return null;
			let t = {
				north: Le,
				south: Re,
				west: ze,
				east: Be
			}[e].value;
			return e === "west" || e === "east" ? { width: t + "px" } : { height: t + "px" };
		}
		let We = n(() => Ue("north")), Ge = n(() => Ue("south")), Ke = n(() => Ue("west")), qe = n(() => Ue("east"));
		function Je(e) {
			return Se(e) ? ae(e) || G(e) || oe(e) : !1;
		}
		function Ye(e) {
			return !Fe(e);
		}
		let Xe = b(!1);
		function Ze(e, t) {
			Xe.value = !0, t.setStartSize(J[e]);
		}
		function Qe(e, t) {
			J[e] = t, x("split", {
				...C(e),
				size: t
			}), x("update:sizes", { ...J });
		}
		function $e() {
			Xe.value = !1;
		}
		function et(e) {
			return Y(e) ? vt(e) : yt(e);
		}
		async function tt(e, t) {
			if (!w.includes(e) || (t ||= se(e), D.includes(t) || (t = "center"), X.value === e && Z.value === t)) return;
			let n = me(e);
			X.value && X.value !== e && nt(X.value), X.value = e, Z.value = t, E.includes(e) && Y(e) && vt(e), x("max", {
				...C(e, F(e)),
				mode: t
			}), await p(), _e(e, n);
		}
		function nt(e) {
			if (X.value !== e) return;
			let t = me(e);
			X.value = null, Z.value = "center", x("restore", C(e, F(e))), p(() => _e(e, t));
		}
		function rt(e, t) {
			ye(e) ? nt(e) : tt(e, t);
		}
		function it(e) {
			e.key === "Escape" && X.value && nt(X.value);
		}
		function Q(e) {
			return !e || e === u.layoutId ? null : Ne(e);
		}
		function $(e, t) {
			let n = Q(t);
			return n ? n.getCurName(e) : F(e);
		}
		function at(e, t, n) {
			let r = Q(n);
			return r ? r.getItem(e, t) : L(e, t || $(e));
		}
		function ot(e, t, n) {
			let r = Q(n);
			return r ? r.exist(e, t) : !!L(e, t || $(e));
		}
		function st(e, t, n) {
			let r = Q(n);
			if (r) return r.isActive(e, t);
			let i = t || $(e);
			return !!i && i === F(e) && !Y(e);
		}
		function ct(e, t) {
			let n = Q(t);
			return n ? n.getPanels(e) : [...P(e)];
		}
		function ut(e, t, n, r) {
			let i = Q(n);
			if (i) return i.open(e, t);
			if (!w.includes(e)) return null;
			let a = t?.name || "defaultname", o = L(e, a);
			return o ? Object.assign(o, t, { hidden: !1 }) : j.value[e].panels.push({
				...t,
				name: a
			}), j.value[e].active = a, x("show", C(e, a, r)), L(e, a);
		}
		function dt(e, t) {
			let n = Q(t);
			return n ? n.removeActive(e) : ft(e, $(e), t);
		}
		function ft(e, t, n) {
			let r = Q(n);
			if (r) return r.remove(e, t);
			let i = t || $(e), a = j.value[e].panels, o = a.findIndex((e) => e.name === i);
			if (o === -1) return !1;
			let s = a[o];
			return a.splice(o, 1), x("close", C(e, i)), j.value[e].active === i && (V(e, s) || (j.value[e].active = ne(e)[0]?.name || a[0]?.name || null)), !0;
		}
		function pt(e, t) {
			let n = Q(t);
			if (n) return n.removeAll(e);
			j.value[e].panels.splice(0, j.value[e].panels.length), j.value[e].active = null, E.includes(e) && (j.value[e].show = !1);
		}
		function mt(e) {
			return P(e).filter((e) => !e.hidden && e.show !== !1);
		}
		function gt(e) {
			return mt(e)[0]?.name || ne(e)[0]?.name || P(e)[0]?.name || null;
		}
		function _t(e, t, n) {
			if (!t) return;
			let r = n || $(t);
			return e === "min" ? yt(t, r) : e === "close" ? ft(t, r) : e === "max" ? nn(t, r) : e === "restore" ? rn(t, r) : e === "refresh" && en(t, r);
		}
		function vt(e, t, n, r) {
			let i = Q(n);
			if (i) return i.show(e, t);
			if (!w.includes(e)) return !1;
			if (!R(e)) return e === "center" || j.value[e].show ? !!j.value[e].show : (j.value[e].show = !0, !0);
			let a = t || F(e) || gt(e), o = L(e, a);
			return o ? (o.hidden = !1, B(e, o), j.value[e].active = a, x("show", C(e, a, r)), !0) : !1;
		}
		function yt(e, t, n) {
			let r = Q(n);
			if (r) return r.hide(e, t);
			if (!w.includes(e)) return !1;
			if (!R(e)) return e === "center" || !j.value[e].show ? !!j.value[e].show : (j.value[e].show = !1, !0);
			let i = t || F(e) || gt(e), a = L(e, i);
			return a ? (a.hidden = !0, x("hide", C(e, i)), F(e) === i && V(e, a), !0) : !1;
		}
		function bt(e, t) {
			let n = Q(t);
			return n ? n.isVisible(e) : w.includes(e) ? Ee(e) : !1;
		}
		function xt(e, t, n) {
			let r = Q(n);
			if (r) return r.getPrevName(e, t);
			let i = ne(e), a = t || $(e), o = i.findIndex((e) => e.name === a);
			return o <= 0 ? i[i.length - 1]?.name || null : i[o - 1].name;
		}
		function St(e, t, n) {
			let r = Q(n);
			if (r) return r.getNextName(e, t);
			let i = ne(e), a = t || $(e), o = i.findIndex((e) => e.name === a);
			return o === -1 || o === i.length - 1 ? i[0]?.name || null : i[o + 1].name;
		}
		function Ct(e, t, n) {
			return vt(e, xt(e, t, n), n);
		}
		function wt(e, t, n) {
			return vt(e, St(e, t, n), n);
		}
		function Tt(e, t, n) {
			let r = Q(n);
			return r ? r.getUpName(e, t) : z(e, t);
		}
		function Et(e, t, n) {
			let r = Q(n);
			return r ? r.getDownName(e, t) : re(e, t);
		}
		function Ot(e, t, n) {
			let r = Q(n);
			if (r) return r.up(e, t);
			let i = z(e, t);
			return i ? vt(e, i, n) : !1;
		}
		function jt(e, t, n) {
			let r = Q(n);
			if (r) return r.down(e, t);
			let i = re(e, t);
			return i ? vt(e, i, n) : !1;
		}
		let Ut = [
			"position",
			"hasTool",
			"contextmenu",
			"titleVertical",
			"tabsClass"
		];
		function Wt(e = {}, t = []) {
			return {
				items: t,
				active: t[0]?.name || "",
				position: e.position || "top",
				closable: e.closable !== !1,
				hasTool: !!e.hasTool,
				contextmenu: !!e.contextmenu,
				menu: e.menu || null,
				tabsClass: e.tabsClass || ""
			};
		}
		function Gt(e = {}) {
			let t = { ...e };
			return Ut.forEach((e) => delete t[e]), t;
		}
		function Kt(e, t, n, r) {
			let i = Q(r);
			if (i) return i.openTab(e, t, n);
			if (!w.includes(t)) return null;
			let a = n || $(t) || "defaultname", o = L(t, a);
			if (!o) {
				let n = [{
					...Gt(e),
					name: e?.name || "defaultname"
				}], i = ut(t, {
					name: a,
					tab: Wt(e, n)
				}, r, { tab: n[0].name });
				return i ? i.tab.items[0] : null;
			}
			(!o.tab || typeof o.tab != "object") && (o.tab = {}), Array.isArray(o.tab.items) || (o.tab.items = []);
			let s = e?.name || `tab_${o.tab.items.length + 1}`, c = o.tab.items.find((e) => e.name === s);
			return c ? Object.assign(c, e, { name: s }) : o.tab.items.push({
				...e,
				name: s
			}), o.tab.active = s, vt(t, a, r, { tab: s }), o.tab.items.find((e) => e.name === s);
		}
		function qt(e, t, n, r) {
			let i = Q(r);
			if (i) return i.setActiveTab(e, t, n);
			let a = L(t, n || $(t)), o = a?.tab;
			return !o || !Array.isArray(o.items) || !o.items.some((t) => t.name === e) ? !1 : (o.active = e, x("show", C(t, a.name, { tab: e })), !0);
		}
		function Jt(e, t, n, r) {
			let i = Q(r);
			if (i) return i.closeTab(e, t, n);
			let a = L(t, n || $(t)), o = a?.tab;
			if (!o || !Array.isArray(o.items)) return !1;
			let s = o.items.findIndex((t) => t.name === e);
			return s !== -1 && (o.items.splice(s, 1), o.active === e && (o.active = (o.items[s] || o.items[s - 1] || {}).name || ""), x("close", C(t, a.name, { tab: e })), !0);
		}
		function Yt(e, t, n) {
			let r = Q(n);
			if (r) return r.getTabs(e, t);
			let i = L(e, t || $(e))?.tab;
			return Array.isArray(i?.items) ? [...i.items] : [];
		}
		function Xt(e, t, n) {
			let r = Q(n);
			return r ? r.getActiveTab(e, t) : L(e, t || $(e))?.tab?.active || "";
		}
		function Zt(e, t, n, r) {
			let i = Q(r);
			if (i) return i.closeOtherTabs(e, t, n);
			let a = L(t, n || $(t)), o = a?.tab;
			if (!o || !Array.isArray(o.items)) return !1;
			let s = o.items.find((t) => t.name === e);
			if (!s) return !1;
			let c = o.items.filter((e) => e !== s);
			return c.length ? (o.items = [s], o.active = s.name, c.forEach((e) => x("close", C(t, a.name, { tab: e.name }))), !0) : !1;
		}
		function Qt(e, t, n) {
			let r = Q(n);
			if (r) return r.closeAllTabs(e, t);
			let i = L(e, t || $(e)), a = i?.tab;
			if (!a || !Array.isArray(a.items) || !a.items.length) return !1;
			let o = a.items.map((e) => e.name);
			return a.items = [], a.active = "", o.forEach((t) => x("close", C(e, i.name, { tab: t }))), !0;
		}
		function $t(e, t, n, r) {
			let i = Q(r);
			if (i) return i.refreshTab(e, t, n);
			let a = L(t, n || $(t)), o = a?.tab;
			if (!o || !Array.isArray(o.items)) return !1;
			let s = e || o.active || "", c = o.items.find((e) => e.name === s);
			return c ? (c.refreshAt = Date.now(), x("refresh", C(t, a.name, { tab: s })), !0) : !1;
		}
		function en(e, t, n) {
			let r = Q(n);
			if (r) return r.refresh(e, t);
			if (!w.includes(e)) return !1;
			let i = L(e, t || $(e));
			if (!i) return !1;
			let a = i.tab;
			return a && Array.isArray(a.items) && a.items.length ? $t(a.active || a.items[0].name, e, i.name) : (x("refresh", C(e, i.name)), !0);
		}
		function tn(e, t, n, r, i) {
			if (!t) return !1;
			if (e === "change") return qt(r, t, n);
			if (e === "close") return Jt(r, t, n);
			if (e === "closeOthers") return Zt(r, t, n);
			if (e === "closeAll") return Qt(t, n);
			if (e === "refresh") return $t(r, t, n);
			if (e === "menu") {
				let e = L(t, n || $(t));
				return x("menu-select", C(t, e?.name ?? n, {
					tab: r,
					action: i
				})), !0;
			}
			return !1;
		}
		function nn(e, t, n) {
			let r = Q(n);
			return r ? r.max(e, t) : tt(e, Nt(L(e, t || $(e))?.maxType) || be(e));
		}
		function rn(e, t, n) {
			let r = Q(n);
			return r ? r.restore(e, t) : nt(e);
		}
		function an(e, t, n) {
			let r = Q(n);
			if (r) return r.setSize(e, t);
			J[e] != null && (J[e] = t, x("update:sizes", { ...J }));
		}
		function on(e) {
			let t = Q(e);
			if (t) return t.resize();
		}
		function sn() {
			return u.layoutId;
		}
		function cn() {
			return u.parentLayoutId || "";
		}
		function ln(e, t) {
			return Ae(u.layoutId, e, t || $(e));
		}
		let un = b(null), dn = b(null), fn = {
			getCurName: $,
			getItem: at,
			exist: ot,
			isActive: st,
			getPanels: ct,
			open: ut,
			remove: ft,
			removeActive: dt,
			removeAll: pt,
			show: vt,
			hide: yt,
			isVisible: bt,
			prev: Ct,
			next: wt,
			getPrevName: xt,
			getNextName: St,
			up: Ot,
			down: jt,
			getUpName: Tt,
			getDownName: Et,
			max: nn,
			restore: rn,
			maxed: ye,
			setSize: an,
			resize: on,
			openTab: Kt,
			closeTab: Jt,
			closeOtherTabs: Zt,
			closeAllTabs: Qt,
			setActiveTab: qt,
			refreshTab: $t,
			getTabs: Yt,
			getActiveTab: Xt,
			refresh: en,
			notifyPanel: _t,
			notifyTab: tn,
			tabPropsOf: W,
			getLayoutId: sn,
			getParentLayoutId: cn,
			getChildLayoutId: ln,
			panelPropsOf: H,
			getSizes: () => ({ ...J }),
			getRootEl: () => un.value,
			getPanelLayerEl: () => dn.value,
			getRegionItem: (e) => I(e)
		};
		c(fn);
		function pn() {}
		return te(() => {
			je(u.layoutId, fn), window.addEventListener("resize", pn), document.addEventListener("keydown", it), x("ready", fn);
		}), ee(() => {
			Me(u.layoutId), window.removeEventListener("resize", pn), document.removeEventListener("keydown", it), ge();
		}), (n, c) => (_(), a("div", {
			ref_key: "rootEl",
			ref: un,
			class: m(["my-layout-root my-border-layout", [
				v.value,
				`my-bl--level-${de.value}`,
				{ "my-bl--dragging": Xe.value },
				le.value,
				{ "my-bl--maximized": X.value },
				X.value ? `my-bl--max-${X.value}` : "",
				X.value ? `my-bl--mode-${Z.value}` : ""
			]]),
			"data-layout-id": t.layoutId,
			"data-mt": t.maxType,
			"data-mt-north": be("north"),
			"data-mt-south": be("south"),
			"data-mt-west": be("west"),
			"data-mt-east": be("east"),
			"data-mt-center": be("center"),
			"data-animate": String(t.animate),
			"data-anim-duration": t.animationDuration
		}, [
			De.value ? (_(), a("header", {
				key: 0,
				class: m(["my-bl__north", {
					"my-bl--region-max": ye("north"),
					"my-bl--noborder": !K("north")
				}]),
				"data-region": "north",
				style: g(We.value)
			}, [t.autoPanel && R("north") ? (_(), r(lt, h(f({ key: 0 }, H("north"))), {
				default: k(() => [W("north") ? (_(), r(Dt, f({ key: 0 }, W("north"), { theme: t.theme }), s({ _: 2 }, [n.$slots["tab-tool"] ? {
					name: "tool",
					fn: k(() => [S(n.$slots, "tab-tool", {
						region: "north",
						item: I("north"),
						tabs: U("north")?.items || []
					}, void 0, !0)]),
					key: "0"
				} : void 0]), 1040, ["theme"])) : (_(), r(ht, {
					key: 1,
					item: I("north")
				}, {
					default: k(() => [S(n.$slots, `north:${F("north")}`, {
						item: I("north"),
						panelProps: H("north")
					}, void 0, !0)]),
					_: 3
				}, 8, ["item"]))]),
				_: 3
			}, 16)) : R("north") ? (_(), a(e, { key: 1 }, [F("north") ? (_(), a("div", Lt, [W("north") ? (_(), r(Dt, f({ key: 0 }, W("north"), { theme: t.theme }), s({ _: 2 }, [n.$slots["tab-tool"] ? {
				name: "tool",
				fn: k(() => [S(n.$slots, "tab-tool", {
					region: "north",
					item: I("north"),
					tabs: U("north")?.items || []
				}, void 0, !0)]),
				key: "0"
			} : void 0]), 1040, ["theme"])) : (_(), r(ht, {
				key: 1,
				item: I("north")
			}, {
				default: k(() => [S(n.$slots, `north:${F("north")}`, {
					item: I("north"),
					panelProps: H("north")
				}, () => [S(n.$slots, "north", {
					item: I("north"),
					panelProps: H("north")
				}, void 0, !0)], !0)]),
				_: 3
			}, 8, ["item"]))])) : i("", !0)], 64)) : S(n.$slots, "north", {
				item: I("north"),
				panelProps: H("north")
			}, void 0, !0, 2)], 6)) : i("", !0),
			Je("north") ? (_(), r(we, {
				key: 1,
				class: "my-bl__split-north",
				direction: "h-top",
				variant: t.splitterVariant,
				min: 24,
				max: 200,
				split: ae("north"),
				collapsible: G("north"),
				"max-btn": oe("north"),
				maxed: ye("north"),
				collapsed: Y("north"),
				hidden: Ye("north"),
				onDragStart: c[0] ||= (e) => Ze("north", e),
				onDragMove: c[1] ||= (e) => Qe("north", e),
				onDragEnd: $e,
				onToggle: c[2] ||= (e) => et("north"),
				onMax: c[3] ||= (e) => rt("north")
			}, null, 8, [
				"variant",
				"split",
				"collapsible",
				"max-btn",
				"maxed",
				"collapsed",
				"hidden"
			])) : i("", !0),
			ke.value ? (_(), a("aside", {
				key: 2,
				class: m(["my-bl__west", {
					"my-bl--region-max": ye("west"),
					"my-bl--noborder": !K("west")
				}]),
				"data-region": "west",
				style: g(Ke.value)
			}, [t.autoPanel && R("west") ? (_(), r(lt, h(f({ key: 0 }, H("west"))), {
				default: k(() => [W("west") ? (_(), r(Dt, f({ key: 0 }, W("west"), { theme: t.theme }), s({ _: 2 }, [n.$slots["tab-tool"] ? {
					name: "tool",
					fn: k(() => [S(n.$slots, "tab-tool", {
						region: "west",
						item: I("west"),
						tabs: U("west")?.items || []
					}, void 0, !0)]),
					key: "0"
				} : void 0]), 1040, ["theme"])) : (_(), r(ht, {
					key: 1,
					item: I("west")
				}, {
					default: k(() => [S(n.$slots, `west:${F("west")}`, {
						item: I("west"),
						panelProps: H("west")
					}, void 0, !0)]),
					_: 3
				}, 8, ["item"]))]),
				_: 3
			}, 16)) : R("west") ? (_(), a(e, { key: 1 }, [F("west") ? (_(), a("div", Rt, [W("west") ? (_(), r(Dt, f({ key: 0 }, W("west"), { theme: t.theme }), s({ _: 2 }, [n.$slots["tab-tool"] ? {
				name: "tool",
				fn: k(() => [S(n.$slots, "tab-tool", {
					region: "west",
					item: I("west"),
					tabs: U("west")?.items || []
				}, void 0, !0)]),
				key: "0"
			} : void 0]), 1040, ["theme"])) : (_(), r(ht, {
				key: 1,
				item: I("west")
			}, {
				default: k(() => [S(n.$slots, `west:${F("west")}`, {
					item: I("west"),
					panelProps: H("west")
				}, () => [S(n.$slots, "west", {
					item: I("west"),
					panelProps: H("west")
				}, void 0, !0)], !0)]),
				_: 3
			}, 8, ["item"]))])) : i("", !0)], 64)) : S(n.$slots, "west", {
				item: I("west"),
				panelProps: H("west")
			}, void 0, !0, 2)], 6)) : i("", !0),
			Je("west") ? (_(), r(we, {
				key: 3,
				class: "my-bl__split-west",
				direction: "v-left",
				variant: t.splitterVariant,
				min: T(64),
				max: 800,
				split: ae("west"),
				collapsible: G("west"),
				"max-btn": oe("west"),
				maxed: ye("west"),
				collapsed: Y("west"),
				hidden: Ye("west"),
				onDragStart: c[4] ||= (e) => Ze("west", e),
				onDragMove: c[5] ||= (e) => Qe("west", e),
				onDragEnd: $e,
				onToggle: c[6] ||= (e) => et("west"),
				onMax: c[7] ||= (e) => rt("west")
			}, null, 8, [
				"variant",
				"min",
				"split",
				"collapsible",
				"max-btn",
				"maxed",
				"collapsed",
				"hidden"
			])) : i("", !0),
			o("main", zt, [t.autoPanel && R("center") ? (_(), r(lt, h(f({ key: 0 }, H("center"))), {
				default: k(() => [W("center") ? (_(), r(Dt, f({ key: 0 }, W("center"), { theme: t.theme }), s({ _: 2 }, [n.$slots["tab-tool"] ? {
					name: "tool",
					fn: k(() => [S(n.$slots, "tab-tool", {
						region: "center",
						item: I("center"),
						tabs: U("center")?.items || []
					}, void 0, !0)]),
					key: "0"
				} : void 0]), 1040, ["theme"])) : (_(), r(ht, {
					key: 1,
					item: I("center")
				}, {
					default: k(() => [S(n.$slots, `center:${F("center")}`, {
						item: I("center"),
						panelProps: H("center")
					}, void 0, !0)]),
					_: 3
				}, 8, ["item"]))]),
				_: 3
			}, 16)) : R("center") ? (_(), a(e, { key: 1 }, [F("center") ? (_(), a("div", Bt, [W("center") ? (_(), r(Dt, f({ key: 0 }, W("center"), { theme: t.theme }), s({ _: 2 }, [n.$slots["tab-tool"] ? {
				name: "tool",
				fn: k(() => [S(n.$slots, "tab-tool", {
					region: "center",
					item: I("center"),
					tabs: U("center")?.items || []
				}, void 0, !0)]),
				key: "0"
			} : void 0]), 1040, ["theme"])) : (_(), r(ht, {
				key: 1,
				item: I("center")
			}, {
				default: k(() => [S(n.$slots, `center:${F("center")}`, {
					item: I("center"),
					panelProps: H("center")
				}, () => [S(n.$slots, "default", {
					item: I("center"),
					panelProps: H("center")
				}, void 0, !0)], !0)]),
				_: 3
			}, 8, ["item"]))])) : i("", !0)], 64)) : S(n.$slots, "default", {}, void 0, !0, 2)]),
			Je("east") ? (_(), r(we, {
				key: 4,
				class: "my-bl__split-east",
				direction: "v-right",
				variant: t.splitterVariant,
				min: 60,
				max: 800,
				split: ae("east"),
				collapsible: G("east"),
				"max-btn": oe("east"),
				maxed: ye("east"),
				collapsed: Y("east"),
				hidden: Ye("east"),
				onDragStart: c[8] ||= (e) => Ze("east", e),
				onDragMove: c[9] ||= (e) => Qe("east", e),
				onDragEnd: $e,
				onToggle: c[10] ||= (e) => et("east"),
				onMax: c[11] ||= (e) => rt("east")
			}, null, 8, [
				"variant",
				"split",
				"collapsible",
				"max-btn",
				"maxed",
				"collapsed",
				"hidden"
			])) : i("", !0),
			Pe.value ? (_(), a("aside", {
				key: 5,
				class: m(["my-bl__east", {
					"my-bl--region-max": ye("east"),
					"my-bl--noborder": !K("east")
				}]),
				"data-region": "east",
				style: g(qe.value)
			}, [t.autoPanel && R("east") ? (_(), r(lt, h(f({ key: 0 }, H("east"))), {
				default: k(() => [W("east") ? (_(), r(Dt, f({ key: 0 }, W("east"), { theme: t.theme }), s({ _: 2 }, [n.$slots["tab-tool"] ? {
					name: "tool",
					fn: k(() => [S(n.$slots, "tab-tool", {
						region: "east",
						item: I("east"),
						tabs: U("east")?.items || []
					}, void 0, !0)]),
					key: "0"
				} : void 0]), 1040, ["theme"])) : (_(), r(ht, {
					key: 1,
					item: I("east")
				}, {
					default: k(() => [S(n.$slots, `east:${F("east")}`, {
						item: I("east"),
						panelProps: H("east")
					}, void 0, !0)]),
					_: 3
				}, 8, ["item"]))]),
				_: 3
			}, 16)) : R("east") ? (_(), a(e, { key: 1 }, [F("east") ? (_(), a("div", Vt, [W("east") ? (_(), r(Dt, f({ key: 0 }, W("east"), { theme: t.theme }), s({ _: 2 }, [n.$slots["tab-tool"] ? {
				name: "tool",
				fn: k(() => [S(n.$slots, "tab-tool", {
					region: "east",
					item: I("east"),
					tabs: U("east")?.items || []
				}, void 0, !0)]),
				key: "0"
			} : void 0]), 1040, ["theme"])) : (_(), r(ht, {
				key: 1,
				item: I("east")
			}, {
				default: k(() => [S(n.$slots, `east:${F("east")}`, {
					item: I("east"),
					panelProps: H("east")
				}, () => [S(n.$slots, "east", {
					item: I("east"),
					panelProps: H("east")
				}, void 0, !0)], !0)]),
				_: 3
			}, 8, ["item"]))])) : i("", !0)], 64)) : S(n.$slots, "east", {
				item: I("east"),
				panelProps: H("east")
			}, void 0, !0, 2)], 6)) : i("", !0),
			Je("south") ? (_(), r(we, {
				key: 6,
				class: "my-bl__split-south",
				direction: "h-bottom",
				variant: t.splitterVariant,
				min: 16,
				max: 120,
				split: ae("south"),
				collapsible: G("south"),
				"max-btn": oe("south"),
				maxed: ye("south"),
				collapsed: Y("south"),
				hidden: Ye("south"),
				onDragStart: c[12] ||= (e) => Ze("south", e),
				onDragMove: c[13] ||= (e) => Qe("south", e),
				onDragEnd: $e,
				onToggle: c[14] ||= (e) => et("south"),
				onMax: c[15] ||= (e) => rt("south")
			}, null, 8, [
				"variant",
				"split",
				"collapsible",
				"max-btn",
				"maxed",
				"collapsed",
				"hidden"
			])) : i("", !0),
			Oe.value ? (_(), a("footer", {
				key: 7,
				class: m(["my-bl__south", {
					"my-bl--region-max": ye("south"),
					"my-bl--noborder": !K("south")
				}]),
				"data-region": "south",
				style: g(Ge.value)
			}, [t.autoPanel && R("south") ? (_(), r(lt, h(f({ key: 0 }, H("south"))), {
				default: k(() => [W("south") ? (_(), r(Dt, f({ key: 0 }, W("south"), { theme: t.theme }), s({ _: 2 }, [n.$slots["tab-tool"] ? {
					name: "tool",
					fn: k(() => [S(n.$slots, "tab-tool", {
						region: "south",
						item: I("south"),
						tabs: U("south")?.items || []
					}, void 0, !0)]),
					key: "0"
				} : void 0]), 1040, ["theme"])) : (_(), r(ht, {
					key: 1,
					item: I("south")
				}, {
					default: k(() => [S(n.$slots, `south:${F("south")}`, {
						item: I("south"),
						panelProps: H("south")
					}, void 0, !0)]),
					_: 3
				}, 8, ["item"]))]),
				_: 3
			}, 16)) : R("south") ? (_(), a(e, { key: 1 }, [F("south") ? (_(), a("div", Ht, [W("south") ? (_(), r(Dt, f({ key: 0 }, W("south"), { theme: t.theme }), s({ _: 2 }, [n.$slots["tab-tool"] ? {
				name: "tool",
				fn: k(() => [S(n.$slots, "tab-tool", {
					region: "south",
					item: I("south"),
					tabs: U("south")?.items || []
				}, void 0, !0)]),
				key: "0"
			} : void 0]), 1040, ["theme"])) : (_(), r(ht, {
				key: 1,
				item: I("south")
			}, {
				default: k(() => [S(n.$slots, `south:${F("south")}`, {
					item: I("south"),
					panelProps: H("south")
				}, () => [S(n.$slots, "south", {
					item: I("south"),
					panelProps: H("south")
				}, void 0, !0)], !0)]),
				_: 3
			}, 8, ["item"]))])) : i("", !0)], 64)) : S(n.$slots, "south", {
				item: I("south"),
				panelProps: H("south")
			}, void 0, !0, 2)], 6)) : i("", !0),
			o("div", {
				ref_key: "panelLayerEl",
				ref: dn,
				class: "my-bl__panel-layer"
			}, null, 512)
		], 10, It));
	}
}, [["__scopeId", "data-v-ec9c7d31"]]), Wt = ["data-layout-id"], Gt = ["data-region"], Kt = 12, qt = 24, Jt = 4e3, Yt = /*#__PURE__*/ M({
	__name: "MyGridLayout",
	props: {
		layoutId: {
			type: String,
			default: ""
		},
		layoutType: {
			type: String,
			default: "h"
		},
		theme: {
			type: String,
			default: ""
		},
		maxType: {
			type: String,
			default: "center"
		},
		items: {
			type: Array,
			default: () => []
		},
		split: {
			type: Boolean,
			default: !1
		},
		collapsible: {
			type: Boolean,
			default: !1
		},
		border: {
			type: Boolean,
			default: !0
		},
		min: {
			type: Boolean,
			default: !1
		},
		max: {
			type: Boolean,
			default: !0
		},
		close: {
			type: Boolean,
			default: !1
		},
		animate: {
			type: Boolean,
			default: !0
		}
	},
	emits: [
		"max",
		"restore",
		"split",
		"close"
	],
	setup(t, { expose: o, emit: s }) {
		let c = t, u = n(() => c.layoutType === "v"), d = n(() => Ve(c.theme)), p = s, h = b(null), v = b("center"), C = b(!1), w = y({}), E = y({}), D = y({}), O = y({}), A = {}, j = {}, M = c.layoutId || ke("Grid"), N = n(() => !!h.value);
		function P(e) {
			return e > 0 && e <= Kt;
		}
		function F(e) {
			let t = [], n = null, r = 0;
			for (let i of e || []) {
				if (!i || i.show === !1) continue;
				let e = { ...i }, a = Number(i.layoutNum);
				if (a > Kt) {
					n = {
						cells: [e],
						fixed: a,
						idx: t.length
					}, t.push(n), n = null, r = 0;
					continue;
				}
				let o = P(a) ? a : Kt;
				(!n || r + o > Kt) && (n = {
					cells: [],
					fixed: null,
					idx: t.length
				}, t.push(n), r = 0), n.cells.push(e), r += o;
			}
			return t.forEach((e, t) => {
				e.idx = t, e.cells.forEach((e, n) => {
					e._key = e.name || `g${t}_${n}`, e._li = t, e._ci = n;
				});
			}), t;
		}
		let I = n(() => F(c.items)), L = n(() => {
			if (N.value) {
				let { lineIdx: e, cellIdx: t } = h.value, n = I.value[e], r = n && n.cells[t];
				if (r) return [{
					idx: e,
					cells: [r],
					_max: !0
				}];
			}
			return I.value;
		});
		function ne(e) {
			for (let t = 0; t < I.value.length; t++) {
				let n = I.value[t];
				for (let r = 0; r < n.cells.length; r++) if (n.cells[r]._key === e) return {
					line: n,
					cell: n.cells[r],
					li: t,
					ci: r
				};
			}
			return null;
		}
		function R(e) {
			if (e._max) return {
				flex: "1 1 0%",
				minWidth: 0,
				minHeight: 0
			};
			let t = e.idx, n = w[t] == null ? e.fixed : w[t], r = u.value ? "width" : "height";
			return n ? {
				flex: "0 0 auto",
				[r]: `${n}px`,
				minWidth: 0,
				minHeight: 0
			} : {
				flex: "1 1 0%",
				minWidth: 0,
				minHeight: 0
			};
		}
		function z(e, t) {
			if (N.value) return {
				flex: "1 1 0%",
				minWidth: 0,
				minHeight: 0
			};
			let n = t._key, r = u.value ? "height" : "width", i = E[n];
			if (i != null) return {
				flex: "0 0 auto",
				[r]: `${i}px`,
				minWidth: 0,
				minHeight: 0
			};
			let a = Number(t.layoutNum), o = P(a) ? a : Kt;
			return {
				flex: `${o} ${o} 0%`,
				minWidth: 0,
				minHeight: 0
			};
		}
		function re(e, t) {
			return {
				name: t._key,
				title: t.title || t.name || "",
				iconCls: t.iconCls || t.icon || "",
				hasTitle: t.hasTitle ?? !!(t.title || t.name),
				hasSubTitle: t.hasSubTitle ?? !1,
				subTitle: t.subTitle || "",
				hasTool: t.hasTool,
				hasFooter: t.hasFooter,
				footer: t.footer || "",
				border: t.border == null ? c.border : t.border,
				scroll: t.scroll,
				headerHeight: t.headerHeight,
				bodyPadding: t.bodyPadding,
				panelClass: t.panelClass,
				headerClass: t.headerClass,
				bodyClass: t.bodyClass,
				min: t.min == null ? c.min : t.min,
				max: t.max == null ? c.max : t.max,
				close: t.close == null ? c.close : t.close,
				refresh: t.refresh
			};
		}
		function B(e) {
			return {
				split: e.split == null ? c.split : !!e.split,
				collapsible: e.collapsible == null ? c.collapsible : !!e.collapsible
			};
		}
		function V(e) {
			return B(e.cells[0] || {});
		}
		let ie = n(() => u.value ? "v-left" : "h-top"), H = n(() => u.value ? "h-top" : "v-left");
		function U(e) {
			D[e] = !D[e];
		}
		function W(e) {
			O[e] = !0;
		}
		function ae(e) {
			delete O[e];
		}
		function G(e) {
			let t = e._key;
			O[t] ? ae(t) : W(t);
		}
		function oe(e) {
			let t = ne(e);
			t && (h.value = {
				lineIdx: t.li,
				cellIdx: t.ci,
				key: e
			}, v.value = Nt(t.cell.maxType || c.maxType) || "center", p("max", {
				key: e,
				name: t.cell.name
			}));
		}
		function K() {
			h.value && (h.value = null, v.value = "center", p("restore", { key: null }));
		}
		function se(e, t) {
			return e === "max" ? oe(t) : e === "restore" ? K() : (e === "min" || e === "close") && (W(t), p("close", { key: t })), !1;
		}
		function q(e, t) {
			t && (A[e] = t);
		}
		function ce(e, t) {
			t && (j[e] = t);
		}
		function le(e, t) {
			return e ? t === "width" ? e.offsetWidth : e.offsetHeight : 100;
		}
		function J(e, t) {
			let n = le(A[e], u.value ? "width" : "height");
			t.setStartSize(n), C.value = !0;
		}
		function ue(e, t) {
			w[e] = t, p("split", {
				axis: "line",
				index: e,
				size: t
			});
		}
		function de(e, t) {
			let n = le(j[e], u.value ? "height" : "width");
			t.setStartSize(n), C.value = !0;
		}
		function Y(e, t) {
			E[e] = t, p("split", {
				axis: "cell",
				key: e,
				size: t
			});
		}
		function X() {
			C.value = !1;
		}
		function Z(e) {
			e.key === "Escape" && N.value && K();
		}
		let fe = {
			max: oe,
			restore: K,
			hide: W,
			show: ae,
			toggleLine: U,
			toggleCell: G,
			maxed: (e) => !!(N.value && h.value.key === e),
			notifyPanel: se
		};
		return te(() => {
			je(M, fe), document.addEventListener("keydown", Z);
		}), ee(() => {
			Me(M), document.removeEventListener("keydown", Z);
		}), o(fe), (t, n) => (_(), a("div", {
			class: m(["my-grid-layout", [
				d.value,
				u.value ? "my-grid-layout--v" : "my-grid-layout--h",
				{ "my-grid--dragging": C.value },
				{ "my-grid--maximized": N.value },
				v.value === "page" ? "my-grid--mode-page" : ""
			]]),
			"data-layout-id": T(M)
		}, [(_(!0), a(e, null, x(L.value, (n, o) => (_(), a(e, { key: n.idx }, [!N.value && o > 0 ? (_(), r(we, {
			key: 0,
			direction: ie.value,
			min: qt,
			max: Jt,
			split: V(L.value[o - 1]).split,
			collapsible: V(L.value[o - 1]).collapsible,
			"next-collapsible": V(n).collapsible,
			"max-btn": !1,
			dual: !0,
			collapsed: !!D[L.value[o - 1].idx],
			"next-collapsed": !!D[n.idx],
			onDragStart: (e) => J(L.value[o - 1].idx, e),
			onDragMove: (e) => ue(L.value[o - 1].idx, e),
			onDragEnd: X,
			onToggle: (e) => U(L.value[o - 1].idx),
			onToggleNext: (e) => U(n.idx)
		}, null, 8, [
			"direction",
			"split",
			"collapsible",
			"next-collapsible",
			"collapsed",
			"next-collapsed",
			"onDragStart",
			"onDragMove",
			"onToggle",
			"onToggleNext"
		])) : i("", !0), n._max || !D[n.idx] ? (_(), a("div", {
			key: 1,
			class: m(["my-grid__line", u.value ? "my-grid__line--v" : "my-grid__line--h"]),
			style: g(R(n)),
			ref_for: !0,
			ref: (e) => q(n.idx, e)
		}, [(_(!0), a(e, null, x(n.cells, (o, s) => (_(), a(e, { key: o._key }, [!N.value && s > 0 ? (_(), r(we, {
			key: 0,
			direction: H.value,
			min: 24,
			max: Jt,
			split: B(n.cells[s - 1]).split,
			collapsible: B(n.cells[s - 1]).collapsible,
			"next-collapsible": B(o).collapsible,
			"max-btn": !1,
			dual: !0,
			collapsed: !!O[n.cells[s - 1]._key],
			"next-collapsed": !!O[o._key],
			onDragStart: (e) => de(n.cells[s - 1]._key, e),
			onDragMove: (e) => Y(n.cells[s - 1]._key, e),
			onDragEnd: X,
			onToggle: (e) => G(n.cells[s - 1]),
			onToggleNext: (e) => G(o)
		}, null, 8, [
			"direction",
			"split",
			"collapsible",
			"next-collapsible",
			"collapsed",
			"next-collapsed",
			"onDragStart",
			"onDragMove",
			"onToggle",
			"onToggleNext"
		])) : i("", !0), n._max || !O[o._key] ? (_(), a("div", {
			key: 1,
			class: "my-grid__cell",
			style: g(z(n, o)),
			ref_for: !0,
			ref: (e) => ce(o._key, e),
			"data-region": o._key
		}, [l(lt, f({ ref_for: !0 }, re(n, o)), {
			default: k(() => [S(t.$slots, o._key, { cell: o }, void 0, !0)]),
			_: 2
		}, 1040)], 12, Gt)) : i("", !0)], 64))), 128))], 6)) : i("", !0)], 64))), 128))], 10, Wt));
	}
}, [["__scopeId", "data-v-70df8665"]]), Xt = {
	__name: "MyMainFrame",
	props: {
		frameType: {
			type: Number,
			default: 2,
			validator: (e) => [1, 2].includes(e)
		},
		layoutId: {
			type: String,
			default: "BorderLayout"
		},
		parentLayoutId: {
			type: String,
			default: ""
		},
		regionLevel: {
			type: [String, Number],
			default: "ns"
		},
		maxType: {
			type: String,
			default: "center"
		},
		splitterVariant: {
			type: String,
			default: ""
		},
		animate: {
			type: Boolean,
			default: !0
		},
		animationDuration: {
			type: Number,
			default: 260
		},
		regions: {
			type: Object,
			default: () => ({})
		},
		theme: {
			type: String,
			default: ""
		}
	},
	emits: [
		"update:regions",
		"update:sizes",
		"show",
		"hide",
		"max",
		"restore",
		"close",
		"refresh",
		"split",
		"menu-select",
		"ready"
	],
	setup(e, { expose: t, emit: i }) {
		let a = e, o = i, s = n(() => {
			if (a.frameType !== 1) return a.regions;
			let e = { ...a.regions || {} };
			return e.west = {
				...e.west || {},
				show: !1
			}, e.east = {
				...e.east || {},
				show: !1
			}, e;
		}), c = b(null);
		function l() {
			return c.value;
		}
		let d = {
			top: "north",
			north: "north",
			left: "west",
			west: "west",
			right: "east",
			east: "east",
			bottom: "south",
			south: "south",
			center: "center"
		};
		function f(e) {
			return d[e] || null;
		}
		function p(e, t) {
			let n = c.value;
			if (!n) return null;
			let r = f(e);
			return r ? n.open(r, t) : null;
		}
		function m(e, t) {
			let n = c.value;
			if (!n) return null;
			let r = t?.layout;
			return n.hide("west"), n.hide("east"), r === "lcrs" ? n.hide("south") : n.show("south"), p("center", {
				region: "center",
				hasTitle: !1,
				min: !1,
				max: !0,
				close: !1,
				show: !0,
				...t || {},
				name: e
			});
		}
		function g() {
			let e = c.value;
			if (!e) return null;
			let t = a.regions?.center, n = t?.active || t?.panels?.[0]?.name;
			return n && e.exist("center", n) ? e.show("center", n) : p("center", {
				name: "mainBody",
				title: "内容区",
				show: !0
			}), e.getItem("center", n || "mainBody");
		}
		function ee(e, t, n) {
			let r = f(t);
			return r ? c.value?.openTab(e, r, n) : null;
		}
		function te(e, t, n) {
			let r = f(t);
			return r ? !!c.value?.closeTab(e, r, n) : !1;
		}
		function v(e, t, n) {
			let r = f(t);
			return r ? !!c.value?.closeOtherTabs(e, r, n) : !1;
		}
		function y(e, t) {
			let n = f(e);
			return n ? !!c.value?.closeAllTabs(n, t) : !1;
		}
		function x(e, t, n) {
			let r = f(t);
			return r ? !!c.value?.setActiveTab(e, r, n) : !1;
		}
		function C(e, t, n) {
			let r = f(t);
			return r ? !!c.value?.refreshTab(e, r, n) : !1;
		}
		function w(e, t) {
			let n = f(e);
			return n && c.value?.getTabs(n, t) || [];
		}
		function T(e, t) {
			let n = f(e);
			return n && c.value?.getActiveTab(n, t) || "";
		}
		function E(e) {
			let t = f(e);
			return t ? !!c.value?.isVisible(t) : !1;
		}
		function D(e, t) {
			let n = f(e);
			return n ? !!c.value?.show(n, t) : !1;
		}
		function O(e, t) {
			let n = f(e);
			return n ? !!c.value?.hide(n, t) : !1;
		}
		function A(e, t) {
			return E(e) ? O(e, t) : D(e, t);
		}
		return t({
			getLayout: l,
			open: p,
			openBody: m,
			openDefault: g,
			openTab: ee,
			closeTab: te,
			closeOtherTabs: v,
			closeAllTabs: y,
			setActiveTab: x,
			refreshTab: C,
			getTabs: w,
			getActiveTab: T,
			isVisible: E,
			show: D,
			hide: O,
			toggleRegion: A
		}), (t, n) => (_(), r(Ut, {
			ref_key: "borderLayoutRef",
			ref: c,
			"layout-id": e.layoutId,
			"parent-layout-id": e.parentLayoutId,
			"region-level": e.regionLevel,
			"max-type": e.maxType,
			"splitter-variant": e.splitterVariant,
			animate: e.animate,
			"animation-duration": e.animationDuration,
			regions: s.value,
			theme: e.theme,
			"onUpdate:regions": n[0] ||= (e) => o("update:regions", e),
			"onUpdate:sizes": n[1] ||= (e) => o("update:sizes", e),
			onShow: n[2] ||= (e) => o("show", e),
			onHide: n[3] ||= (e) => o("hide", e),
			onMax: n[4] ||= (e) => o("max", e),
			onRestore: n[5] ||= (e) => o("restore", e),
			onClose: n[6] ||= (e) => o("close", e),
			onRefresh: n[7] ||= (e) => o("refresh", e),
			onMenuSelect: n[8] ||= (e) => o("menu-select", e),
			onSplit: n[9] ||= (e) => o("split", e),
			onReady: n[10] ||= (e) => o("ready", e)
		}, {
			north: k((e) => [S(t.$slots, "north", h(u(e)))]),
			west: k((e) => [S(t.$slots, "west", h(u(e)))]),
			default: k((e) => [S(t.$slots, "default", h(u(e)))]),
			east: k((e) => [S(t.$slots, "east", h(u(e)))]),
			south: k((e) => [S(t.$slots, "south", h(u(e)))]),
			"tab-tool": k((e) => [S(t.$slots, "tab-tool", h(u(e)))]),
			_: 3
		}, 8, [
			"layout-id",
			"parent-layout-id",
			"region-level",
			"max-type",
			"splitter-variant",
			"animate",
			"animation-duration",
			"regions",
			"theme"
		]));
	}
}, Zt = { class: "my-float-panel__title" }, Qt = ["title"], $t = {
	key: 0,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, en = {
	key: 1,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, tn = { class: "my-float-panel__body" }, nn = /*#__PURE__*/ M({
	__name: "MyFloatPanel",
	props: {
		title: {
			type: String,
			default: ""
		},
		hasTitle: {
			type: Boolean,
			default: !0
		},
		border: {
			type: Boolean,
			default: !0
		},
		close: {
			type: Boolean,
			default: !0
		},
		max: {
			type: Boolean,
			default: !0
		},
		min: {
			type: Boolean,
			default: !0
		},
		maxed: {
			type: Boolean,
			default: !1
		},
		width: {
			type: [Number, String],
			default: 360
		},
		height: {
			type: [Number, String],
			default: 280
		},
		offset: {
			type: [
				String,
				Object,
				Number
			],
			default: "auto"
		},
		fixed: {
			type: Boolean,
			default: !0
		},
		resize: {
			type: Boolean,
			default: !0
		},
		minWidth: {
			type: Number,
			default: 200
		},
		minHeight: {
			type: Number,
			default: 140
		},
		maxWidth: {
			type: Number,
			default: 2e3
		},
		maxHeight: {
			type: Number,
			default: 2e3
		},
		shade: {
			type: [
				Boolean,
				Number,
				String
			],
			default: !1
		},
		shadeClose: {
			type: Boolean,
			default: !1
		},
		zIndex: {
			type: Number,
			default: 999
		},
		visible: {
			type: Boolean,
			default: !0
		},
		container: {
			type: String,
			default: "body"
		},
		move: {
			type: Boolean,
			default: !0
		},
		theme: {
			type: String,
			default: ""
		}
	},
	emits: [
		"update:visible",
		"close",
		"max",
		"restore",
		"move",
		"resize"
	],
	setup(s, { emit: l }) {
		let u = s, d = l, { resolved: f } = He(u), h = n(() => Ve(f.value)), v = b(!1), x = b(u.maxed);
		O(() => u.maxed, (e) => {
			x.value = e;
		});
		let C = b(!1), T = y({
			left: null,
			top: null
		}), E = y({
			w: typeof u.width == "number" ? u.width : parseInt(u.width) || 360,
			h: typeof u.height == "number" ? u.height : parseInt(u.height) || 280
		});
		O(() => u.width, (e) => {
			typeof e == "number" && (E.w = e);
		}), O(() => u.height, (e) => {
			typeof e == "number" && (E.h = e);
		});
		function D() {
			return !u.container || u.container === "body" ? document.body : document.querySelector(u.container) || document.body;
		}
		let k = b(D()), A = b(null);
		function M() {
			let e = k.value;
			if (!e || e === document.body) return {
				left: 0,
				top: 0,
				width: window.innerWidth,
				height: window.innerHeight
			};
			let t = e.getBoundingClientRect();
			return {
				left: t.left,
				top: t.top,
				width: t.width,
				height: t.height
			};
		}
		function N() {
			k.value = D(), A.value = M();
		}
		let P = n(() => k.value === document.body), F = null, I = "";
		function L() {
			let e = k.value;
			F && F !== e && (F.style.position = I, F = null), e && e !== document.body && getComputedStyle(e).position === "static" && (F = e, I = e.style.position, e.style.position = "relative");
		}
		function ne() {
			F &&= (F.style.position = I, null);
		}
		O(() => u.container, () => {
			k.value = D(), L(), N(), V();
		}), O(() => u.visible, (e) => {
			e && p(() => {
				N(), V();
			});
		}), te(() => {
			L(), N(), V(), window.addEventListener("resize", R), window.addEventListener("scroll", z, !0);
		}), ee(() => {
			window.removeEventListener("resize", R), window.removeEventListener("scroll", z, !0), ne();
		});
		function R() {
			N(), V();
		}
		function z() {
			u.fixed || N();
		}
		function re(e, t, n) {
			return Math.max(t, Math.min(n, e));
		}
		function B(e, t) {
			if (e == null || e === "") return null;
			if (typeof e == "number") return e;
			let n = String(e).trim();
			if (/px$/i.test(n)) return parseFloat(n) || 0;
			if (/%$/.test(n)) return parseFloat(n) / 100 * t;
			let r = parseFloat(n);
			return Number.isFinite(r) ? r : null;
		}
		function V() {
			let e = A.value || M(), t = E.w, n = E.h, r = u.offset;
			if (r && typeof r == "object" && !Array.isArray(r)) {
				let i = B(r.top, e.height), a = B(r.left, e.width), o = B(r.right, e.width), s = B(r.bottom, e.height);
				a == null ? o == null ? T.left = Math.max(0, (e.width - t) / 2) : T.left = Math.max(0, e.width - t - o) : T.left = a, i == null ? s == null ? T.top = Math.max(0, (e.height - n) / 2) : T.top = Math.max(0, e.height - n - s) : T.top = i;
				return;
			}
			if (typeof r == "number") {
				T.left = Math.max(0, (e.width - t) / 2), T.top = re(r, 0, Math.max(0, e.height - n));
				return;
			}
			if (typeof r == "string" && /^\d+(\.\d+)?(px|%)?$/.test(r.trim())) {
				let i = B(r, e.height) || 0;
				T.left = Math.max(0, (e.width - t) / 2), T.top = re(i, 0, Math.max(0, e.height - n));
				return;
			}
			let i = (e.height - n) / 2, a = (e.width - t) / 2;
			switch (String(r).trim()) {
				case "auto": break;
				case "t":
					i = 0;
					break;
				case "b":
					i = e.height - n;
					break;
				case "l":
					a = 0;
					break;
				case "r":
					a = e.width - t;
					break;
				case "lt":
					i = 0, a = 0;
					break;
				case "rt":
					i = 0, a = e.width - t;
					break;
				case "lb":
					i = e.height - n, a = 0;
					break;
				case "rb": i = e.height - n, a = e.width - t;
			}
			T.left = Math.max(0, a), T.top = Math.max(0, i);
		}
		O(() => u.offset, () => V()), O(() => [u.width, u.height], () => p(V));
		function ie() {
			if (!u.shade) return;
			let e = A.value || M();
			T.left = Math.max(0, Math.round((e.width - E.w) / 2)), T.top = Math.max(0, Math.round((e.height - E.h) / 2));
		}
		te(() => {
			u.shade && ie();
		}), O(() => u.visible, (e) => {
			e && u.shade && ie();
		}), O(() => u.shade, (e) => {
			e && u.visible && ie();
		});
		let H = n(() => {
			let e = u.shade;
			return e === !0 || e === "" || e == null ? {} : typeof e == "number" ? { opacity: e } : typeof e == "string" && /^\d+(\.\d+)?%?$/.test(e) ? { opacity: parseFloat(e) } : {};
		});
		O([() => u.visible, () => u.shade], ([e, t]) => {
			e && t && P.value ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
		}), ee(() => {
			document.body.style.overflow = "";
		});
		let U = 0, W = 0, ae = 0, G = 0;
		function oe(e) {
			!x.value && u.move && (e.preventDefault(), e.stopPropagation(), v.value = !0, U = e.clientX, W = e.clientY, ae = T.left ?? 0, G = T.top ?? 0, document.addEventListener("mousemove", K), document.addEventListener("mouseup", se));
		}
		function K(e) {
			if (!v.value) return;
			let t = M(), n = E.w, r = E.h;
			T.left = re(ae + (e.clientX - U), 0, Math.max(0, t.width - n)), T.top = re(G + (e.clientY - W), 0, Math.max(0, t.height - r)), d("move", {
				left: T.left,
				top: T.top
			});
		}
		function se() {
			v.value = !1, document.removeEventListener("mousemove", K), document.removeEventListener("mouseup", se);
		}
		let q = 0, ce = 0, le = 0, J = 0, ue = 0, de = "";
		function Y(e, t) {
			x.value || (t.preventDefault(), t.stopPropagation(), C.value = !0, de = e, q = t.clientX, ce = t.clientY, le = E.w, J = E.h, ue = T.left ?? 0, document.addEventListener("mousemove", X), document.addEventListener("mouseup", Z));
		}
		function X(e) {
			if (!C.value) return;
			let t = e.clientX - q, n = e.clientY - ce, r = le, i = J;
			de === "br" ? (r = le + t, i = J + n) : de === "bl" && (r = le - t, i = J + n), r = Math.max(u.minWidth, Math.min(u.maxWidth, r)), i = Math.max(u.minHeight, Math.min(u.maxHeight, i)), de === "bl" && (T.left = ue + (le - r)), E.w = r, E.h = i, d("resize", {
				width: r,
				height: i,
				left: T.left,
				top: T.top
			});
		}
		function Z() {
			C.value = !1, document.removeEventListener("mousemove", X), document.removeEventListener("mouseup", Z);
		}
		function fe() {
			d("close"), d("update:visible", !1);
		}
		function pe() {
			x.value = !x.value, x.value ? d("max") : d("restore");
		}
		function me() {
			u.shadeClose && fe();
		}
		let he = n(() => {
			let e = u.zIndex, t = A.value || M(), n = u.fixed ? "fixed" : "absolute";
			if (x.value) return {
				position: n,
				left: t.left + "px",
				top: t.top + "px",
				width: t.width + "px",
				height: t.height + "px",
				zIndex: e + 1
			};
			let r = T.left ?? 0, i = T.top ?? 0;
			return {
				position: n,
				left: t.left + r + "px",
				top: t.top + i + "px",
				width: E.w + "px",
				height: E.h + "px",
				zIndex: e + 1
			};
		}), ge = n(() => P.value ? { zIndex: u.zIndex } : {
			position: "absolute",
			zIndex: u.zIndex
		});
		return ee(() => {
			document.removeEventListener("mousemove", K), document.removeEventListener("mouseup", se), document.removeEventListener("mousemove", X), document.removeEventListener("mouseup", Z);
		}), (n, l) => (_(), r(t, { to: s.container || "body" }, [s.visible && s.shade ? (_(), a("div", {
			key: 0,
			class: "my-float-panel__mask",
			style: g([ge.value, H.value]),
			onClick: me
		}, null, 4)) : i("", !0), s.visible ? (_(), a("div", {
			key: 1,
			class: m(["my-float-panel", [
				h.value,
				{ "my-float-panel--noborder": !s.border },
				{ "my-float-panel--maximized": x.value },
				{ "my-float-panel--dragging": v.value },
				{ "my-float-panel--resizing": C.value }
			]]),
			style: g(he.value)
		}, [
			s.hasTitle ? (_(), a("header", {
				key: 0,
				class: m(["my-float-panel__header", { "my-float-panel__header--draggable": !x.value && s.move }]),
				onMousedown: oe
			}, [o("span", Zt, [S(n.$slots, "title", {}, () => [c(w(s.title), 1)], !0)]), o("div", {
				class: "my-float-panel__tools",
				onMousedown: l[0] ||= j(() => {}, ["stop"])
			}, [s.max ? (_(), a("button", {
				key: 0,
				class: "my-float-panel__tool",
				title: x.value ? "还原" : "最大化",
				onClick: pe
			}, [x.value ? (_(), a("svg", en, [...l[4] ||= [o("rect", {
				width: "14",
				height: "14",
				x: "8",
				y: "8",
				rx: "2",
				ry: "2"
			}, null, -1), o("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }, null, -1)]])) : (_(), a("svg", $t, [...l[3] ||= [o("path", { d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" }, null, -1)]]))], 8, Qt)) : i("", !0), fe ? (_(), a("button", {
				key: 1,
				class: "my-float-panel__tool my-float-panel__tool--close",
				title: "关闭",
				onClick: fe
			}, [...l[5] ||= [o("svg", {
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "1.8",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			}, [o("path", { d: "M18 6 6 18" }), o("path", { d: "m6 6 12 12" })], -1)]])) : i("", !0)], 32)], 34)) : i("", !0),
			o("div", tn, [S(n.$slots, "default", {}, void 0, !0)]),
			s.resize && !x.value ? (_(), a(e, { key: 1 }, [o("span", {
				class: "my-float-panel__resize my-float-panel__resize--bl",
				title: "拖拽调整大小",
				onMousedown: l[1] ||= j((e) => Y("bl", e), ["stop"])
			}, null, 32), o("span", {
				class: "my-float-panel__resize my-float-panel__resize--br",
				title: "拖拽调整大小",
				onMousedown: l[2] ||= j((e) => Y("br", e), ["stop"])
			}, null, 32)], 64)) : i("", !0)
		], 6)) : i("", !0)], 8, ["to"]));
	}
}, [["__scopeId", "data-v-87d7aad0"]]), rn = [
	{
		name: "MyBorderLayout",
		desc: "核心 Border 布局容器。五区（north / west / center / east / south）CSS Grid 实现，支持嵌套布局、区域优先级、最大化（center / layout / page）、面板导航、区域悬浮（item.float）与区域面板多标签（item.tab）。",
		props: [
			{
				name: "layoutId",
				type: "String",
				default: "'BorderLayout'",
				desc: "布局唯一标识；嵌套布局通过 layoutId 体系定位。"
			},
			{
				name: "parentLayoutId",
				type: "String",
				default: "''",
				desc: "父布局 id（子布局自动带出，用于向上追溯）。"
			},
			{
				name: "regionLevel",
				type: "String | Number",
				default: "'ns'",
				desc: "区域优先级：ns(上下左右) / ew(左右上下) / nws(上左下右) / nwe(上左右下)，也接受 1/2/3/4 与全称。"
			},
			{
				name: "maxType",
				type: "String",
				default: "'center'",
				desc: "全局默认最大化类型：center(覆盖自身+中间) / layout(整个布局) / page(整个页面+全屏)。优先级：item.maxType > regions[region].maxType > 全局 maxType > \"center\"。"
			},
			{
				name: "splitterVariant",
				type: "String",
				default: "''",
				desc: "四个区域伸缩分割条的视觉模式：modern（对齐 FXYJ 生产版：半透明浅蓝轨道 + 8×80 白色半透明把手）/ classic（旧样式：1px 发丝线 + 悬浮握把按钮组）。默认空 = 跟随全局 provide(\"myLayoutSplitterVariant\")，都未设置时为 modern。"
			},
			{
				name: "animate",
				type: "Boolean",
				default: "true",
				desc: "是否启用尺寸 / 最大化过渡动画。"
			},
			{
				name: "animationDuration",
				type: "Number",
				default: "260",
				desc: "动画时长（毫秒）。"
			},
			{
				name: "regions",
				type: "Object",
				default: "{}",
				desc: "区域配置：{ north:{active,panels,show}, west:{...}, center:{...}, east:{...}, south:{...} }。每个 panel item 参数集 ≈ MyPanel，另加布局参数 float（区域悬浮在中间区域之上）/ tab（{ items, active, position, closable, hasTool, contextmenu, menu, titleVertical } 多标签）。"
			},
			{
				name: "autoPanel",
				type: "Boolean",
				default: "false",
				desc: "true 时区域自动包一层 MyPanel，插槽内容作为面板 body。"
			},
			{
				name: "border",
				type: "Boolean",
				default: "true",
				desc: "是否画区域边框（全局默认开关；region item 的 border 可单独覆盖，同时作为该区域面板 border 的默认值）。"
			},
			{
				name: "theme",
				type: "String",
				default: "''",
				desc: "主题：空值继承父级；light / light-blue / dark。"
			}
		],
		emits: [
			{
				name: "update:regions",
				payload: "Object",
				desc: "regions 变化（v-model:regions）。"
			},
			{
				name: "update:sizes",
				payload: "Object",
				desc: "区域尺寸变化（拖拽时）。"
			},
			{
				name: "show",
				payload: "{ region, name, layoutId, tab? }",
				desc: "面板 / 区域显示 —— 打开 / 激活面板、展开区域都走这里；tab 相关动作附 tab（标签 name）。"
			},
			{
				name: "hide",
				payload: "{ region, name, layoutId }",
				desc: "面板 / 区域隐藏 —— 面板最小化按钮也走这里，区域随之收起。"
			},
			{
				name: "max",
				payload: "{ region, name, layoutId, mode }",
				desc: "区域最大化。"
			},
			{
				name: "restore",
				payload: "{ region, name, layoutId }",
				desc: "区域还原。"
			},
			{
				name: "close",
				payload: "{ region, name, layoutId, tab? }",
				desc: "面板关闭并移除；带 tab 时表示关闭的是该标签（面板保留）。"
			},
			{
				name: "split",
				payload: "{ region, name, layoutId, size }",
				desc: "分割条拖拽移动。"
			},
			{
				name: "refresh",
				payload: "{ region, name, layoutId, tab? }",
				desc: "面板 / 标签刷新（面板刷新按钮或标签右键菜单）；带 tab 时表示刷新的是该标签（重建内容）。"
			},
			{
				name: "menu-select",
				payload: "{ region, name, layoutId, tab, action }",
				desc: "标签右键菜单里的自定义项被点击（内置的关闭 / 关闭其它 / 关闭全部 / 刷新走 close / refresh 事件）。"
			},
			{
				name: "ready",
				payload: "api",
				desc: "组件挂载完成，回传完整 API 实例。"
			}
		],
		methods: [
			{
				sig: "getCurName(region, layoutId?)",
				ret: "String | null",
				desc: "获取区域当前激活面板 name。"
			},
			{
				sig: "getItem(region, name?, layoutId?)",
				ret: "Object",
				desc: "读取面板 item 配置；name 空取当前激活。"
			},
			{
				sig: "exist(region, name?, layoutId?)",
				ret: "Boolean",
				desc: "面板是否存在。"
			},
			{
				sig: "isActive(region, name?, layoutId?)",
				ret: "Boolean",
				desc: "name 是否为当前激活且区域未收缩。"
			},
			{
				sig: "getPanels(region, layoutId?)",
				ret: "Array",
				desc: "返回区域面板数组（副本）。"
			},
			{
				sig: "open(region, item, layoutId?)",
				ret: "Object | null",
				desc: "打开面板（同名则显示并激活）—— 显示 / 激活面板统一走 show。item: { name, title, ...MyPanel 参数, 内容来源 url(+params) / html / component(+props，支持对象·全局名·相对项目根目录路径) }。"
			},
			{
				sig: "openTab(item, region?, name?, layoutId?)",
				ret: "Object | null",
				desc: "在区域面板里打开 tab（面板没有 tab 配置则就地建一个承载面板）。item: { name, title, iconCls?, url(+params) / html / component(+props) }；新建承载面板时 item 上的 position / closable / hasTool / contextmenu / menu / titleVertical 一并作为 tab 配置（默认可关闭）；name 缺省取该区域当前激活面板，tab 同名则更新并激活。"
			},
			{
				sig: "closeTab(tabName, region?, name?, layoutId?)",
				ret: "Boolean",
				desc: "关闭 tab（移除标签）；关的是当前标签则激活相邻标签，面板保留。"
			},
			{
				sig: "closeOtherTabs(tabName, region?, name?, layoutId?)",
				ret: "Boolean",
				desc: "关闭其它标签（保留 tabName），每个被移除的标签发一次 close 事件。"
			},
			{
				sig: "closeAllTabs(region?, name?, layoutId?)",
				ret: "Boolean",
				desc: "关闭全部标签，每个被移除的标签发一次 close 事件。"
			},
			{
				sig: "setActiveTab(tabName, region?, name?, layoutId?)",
				ret: "Boolean",
				desc: "激活已存在的 tab。"
			},
			{
				sig: "refreshTab(tabName?, region?, name?, layoutId?)",
				ret: "Boolean",
				desc: "刷新标签（重建内容），tabName 缺省取当前标签；发 refresh 事件（附 tab）。"
			},
			{
				sig: "refresh(region?, name?, layoutId?)",
				ret: "Boolean",
				desc: "刷新面板：带 tab 的面板刷新其当前标签，否则只发 refresh 事件（面板刷新按钮也走这里）。"
			},
			{
				sig: "getTabs(region?, name?, layoutId?) / getActiveTab(region?, name?, layoutId?)",
				ret: "Array | String",
				desc: "读取区域面板的标签列表 / 当前标签 name。"
			},
			{
				sig: "notifyTab(action, region, name?, tabName?, extra?)",
				ret: "Boolean",
				desc: "MyTabs 委托入口（action: change / close / closeOthers / closeAll / refresh / menu）。"
			},
			{
				sig: "remove(region, name?, layoutId?)",
				ret: "Boolean",
				desc: "关闭并移除面板；有上级（parentName）则回到上级面板，否则切到区域内其它可见面板。"
			},
			{
				sig: "removeActive(region, layoutId?)",
				ret: "Boolean",
				desc: "移除当前激活面板。"
			},
			{
				sig: "removeAll(region, layoutId?)",
				ret: "void",
				desc: "清空区域所有面板。"
			},
			{
				sig: "show(region, name?, layoutId?)",
				ret: "Boolean",
				desc: "【显隐唯一入口】显示面板并激活（同时解开隐藏），区域随之出现。name 缺省取该区域当前激活面板；没有托管面板的区域（内容全走插槽）改为启用区域。"
			},
			{
				sig: "hide(region, name?, layoutId?)",
				ret: "Boolean",
				desc: "【显隐唯一入口】隐藏某面板（不删除）。有上级（parentName）则回到上级面板，区域回到上级内容；无上级则激活仍指向它，区域随之收起，再 show(region) 即原样展开。没有托管面板的区域改为停用区域。"
			},
			{
				sig: "isVisible(region, layoutId?)",
				ret: "Boolean",
				desc: "区域是否可见 —— 由「当前激活面板是否可见」派生；center 永远占位。"
			},
			{
				sig: "prev(region, name?, layoutId?)",
				ret: "Boolean",
				desc: "激活上一个可见面板（同级线性切换）。"
			},
			{
				sig: "next(region, name?, layoutId?)",
				ret: "Boolean",
				desc: "激活下一个可见面板（同级线性切换）。"
			},
			{
				sig: "getPrevName(region, name?, layoutId?)",
				ret: "String | null",
				desc: "上一个面板 name（不切换）。"
			},
			{
				sig: "getNextName(region, name?, layoutId?)",
				ret: "String | null",
				desc: "下一个面板 name（不切换）。"
			},
			{
				sig: "up(region, name?, layoutId?) / getUpName(region, name?, layoutId?)",
				ret: "Boolean | String | null",
				desc: "上下级导航：激活 / 读取上级面板（parentName 指向的同区域面板，不存在则为 null）。"
			},
			{
				sig: "down(region, name?, layoutId?) / getDownName(region, name?, layoutId?)",
				ret: "Boolean | String | null",
				desc: "进入 / 读取下级面板：优先上级记录的最后一次进入（lastName），其次第一个可见下级。"
			},
			{
				sig: "max(region, name?, layoutId?)",
				ret: "void",
				desc: "区域最大化（按 item / 区域 / 全局 maxType）。"
			},
			{
				sig: "restore(region, name?, layoutId?)",
				ret: "void",
				desc: "区域还原。"
			},
			{
				sig: "maxed(region)",
				ret: "Boolean",
				desc: "区域是否处于最大化态。"
			},
			{
				sig: "setSize(region, size, layoutId?)",
				ret: "void",
				desc: "编程式设置区域尺寸（px）。"
			},
			{
				sig: "resize(layoutId?)",
				ret: "void",
				desc: "刷新布局（尺寸由 CSS 决定）。"
			},
			{
				sig: "notifyPanel(action, region, name?)",
				ret: "Boolean",
				desc: "MyPanel 委托入口（action: min / max / restore / close / refresh；min 即 hide）。"
			},
			{
				sig: "getLayoutId() / getParentLayoutId() / getChildLayoutId(region, name?)",
				ret: "String",
				desc: "布局 id 体系（用于嵌套布局转发）。"
			},
			{
				sig: "getSizes()",
				ret: "Object",
				desc: "当前区域尺寸快照 { north, south, west, east }。"
			},
			{
				sig: "getRegionItem(region)",
				ret: "Object",
				desc: "当前激活面板的完整 item。"
			}
		],
		slots: [
			{
				name: "north / west / east / south",
				scope: "{ item, panelProps }",
				desc: "区域默认插槽，渲染当前激活面板。"
			},
			{
				name: "default",
				scope: "{ item, panelProps }",
				desc: "center 区域默认插槽。"
			},
			{
				name: "north:{name} / west:{name} / center:{name} / east:{name} / south:{name}",
				scope: "—",
				desc: "按面板 name 命名的区域插槽，同名激活时优先渲染。"
			},
			{
				name: "tab:{name}",
				scope: "{ item }",
				desc: "标签内容插槽：面板配了 tab 时区域渲染 MyTabs，标签内容优先取该插槽（其次 item 的 component / url / html）。"
			},
			{
				name: "tab-tool",
				scope: "{ region, item, tabs }",
				desc: "标签栏尾部工具栏：区域内标签栏右上角的自定义按钮（区域转发给 MyTabs 的 tool 插槽）。"
			},
			{
				name: "面板内容来源（item 字段）",
				scope: "—",
				desc: "未写具名插槽时，区域用 MyPanelContent 渲染：item.component（对象·全局名·相对路径，+props）→ item.url（iframe，+params 拼接 query）→ item.html（v-html）。"
			}
		]
	},
	{
		name: "MyMainFrame",
		desc: "主框架组件 = MyBorderLayout 的便捷封装，只保留一套显隐：区域内面板的 show / hide（区域可见性由面板派生，隐藏当前面板即收起该区域），外加区域可见性查询 isVisible 与切换 toggleRegion；中间内容页用 openBody 打开（layout 支持「左中右 lcr / 左中右下 lcrs」情景）。区域名支持 north|top · west|left · east|right · south|bottom · center。frameType=1 一张图（顶部+中间+底部），frameType=2 运维（含左侧栏）。区域面板的多标签用 openTab / closeTab / closeOtherTabs / closeAllTabs / setActiveTab / refreshTab 维护。",
		props: [
			{
				name: "frameType",
				type: "Number",
				default: "2",
				desc: "框架类型：1=一张图（无左右区域，强制 west/east 隐藏）；2=运维（含左侧栏）。"
			},
			{
				name: "layoutId",
				type: "String",
				default: "'BorderLayout'",
				desc: "透传 MyBorderLayout.layoutId。"
			},
			{
				name: "parentLayoutId",
				type: "String",
				default: "''",
				desc: "透传 MyBorderLayout.parentLayoutId。"
			},
			{
				name: "regionLevel",
				type: "String | Number",
				default: "'ns'",
				desc: "透传 MyBorderLayout.regionLevel。"
			},
			{
				name: "maxType",
				type: "String",
				default: "'center'",
				desc: "透传 MyBorderLayout.maxType（全局最大化类型默认值）。"
			},
			{
				name: "splitterVariant",
				type: "String",
				default: "''",
				desc: "透传 MyBorderLayout.splitterVariant：区域伸缩分割条视觉模式 modern / classic，空 = 跟随全局 provide(\"myLayoutSplitterVariant\")，未设置时为 modern。"
			},
			{
				name: "animate",
				type: "Boolean",
				default: "true",
				desc: "透传 MyBorderLayout.animate。"
			},
			{
				name: "animationDuration",
				type: "Number",
				default: "260",
				desc: "透传 MyBorderLayout.animationDuration。"
			},
			{
				name: "regions",
				type: "Object",
				default: "{}",
				desc: "透传 MyBorderLayout.regions。"
			},
			{
				name: "theme",
				type: "String",
				default: "''",
				desc: "透传 MyBorderLayout.theme。"
			}
		],
		emits: [
			{
				name: "update:regions",
				payload: "Object",
				desc: "透传 MyBorderLayout.update:regions。"
			},
			{
				name: "update:sizes",
				payload: "Object",
				desc: "透传 MyBorderLayout.update:sizes。"
			},
			{
				name: "show",
				payload: "{ region, name, layoutId, tab? }",
				desc: "透传区域 / 面板显示事件；tab 相关动作附 tab。"
			},
			{
				name: "hide",
				payload: "{ region, name, layoutId }",
				desc: "透传区域 / 面板隐藏事件。"
			},
			{
				name: "max",
				payload: "{ region, name, layoutId, mode }",
				desc: "透传区域最大化事件。"
			},
			{
				name: "restore",
				payload: "{ region, name, layoutId }",
				desc: "透传区域还原事件。"
			},
			{
				name: "close",
				payload: "{ region, name, layoutId, tab? }",
				desc: "透传面板关闭事件；带 tab 时表示关闭的是标签。"
			},
			{
				name: "split",
				payload: "{ region, name, layoutId, size }",
				desc: "透传分割条拖拽事件。"
			},
			{
				name: "refresh",
				payload: "{ region, name, layoutId, tab? }",
				desc: "透传面板 / 标签刷新事件；带 tab 时表示刷新的是标签。"
			},
			{
				name: "menu-select",
				payload: "{ region, name, layoutId, tab, action }",
				desc: "透传标签右键菜单自定义项点击事件。"
			},
			{
				name: "ready",
				payload: "api",
				desc: "透传 MyBorderLayout.ready。"
			}
		],
		methods: [
			{
				sig: "open(region, item)",
				ret: "Object | null",
				desc: "在指定区域打开面板。region 支持 north|top · west|left · east|right · south|bottom · center。"
			},
			{
				sig: "openTab(item, region, name?) / closeTab(tabName, region, name?)",
				ret: "Object | Boolean",
				desc: "在区域面板里打开 / 关闭 tab（面板没有 tab 配置则自动创建承载面板）；name 缺省取该区域当前激活面板。"
			},
			{
				sig: "closeOtherTabs(tabName, region, name?) / closeAllTabs(region, name?)",
				ret: "Boolean",
				desc: "关闭其它 / 全部标签。"
			},
			{
				sig: "setActiveTab(tabName, region, name?) / refreshTab(tabName, region, name?)",
				ret: "Boolean",
				desc: "激活 / 刷新标签（刷新即重建内容）。"
			},
			{
				sig: "getTabs(region, name?) / getActiveTab(region, name?)",
				ret: "Array | String",
				desc: "读取区域面板的标签列表 / 当前标签 name。"
			},
			{
				sig: "openBody(name, options?)",
				ret: "Object | null",
				desc: "中间打开内容页。options.layout 支持 \"lcr\"（左中右，west+east）与 \"lcrs\"（左中右下，west+east+south）；不传则仅中间。"
			},
			{
				sig: "openDefault()",
				ret: "Object | null",
				desc: "打开中间默认页（regions.center 激活面板，无则新建 mainBody 默认页）。"
			},
			{
				sig: "show(region, name?) / hide(region, name?)",
				ret: "Boolean",
				desc: "【显隐唯一入口】显示 / 隐藏区域内面板，name 缺省取该区域当前激活面板。区域可见性由面板派生：隐藏当前面板即收起整个区域，再 show(region) 即原样展开。面板配了 parentName 时，隐藏 / 关闭后回到上级。region 支持 north|top · west|left · east|right · south|bottom；center 永远占位，不做区域显隐。"
			},
			{
				sig: "isVisible(region) / toggleRegion(region, name?)",
				ret: "Boolean",
				desc: "查询区域是否可见 / 按当前可见状态在 show 与 hide 之间切换。"
			},
			{
				sig: "getLayout()",
				ret: "MyBorderLayout API",
				desc: "返回内部 MyBorderLayout 实例，可调用其全部方法（up / down / max / restore 等）。"
			}
		],
		slots: [{
			name: "north / west / east / south / default",
			scope: "{ item, panelProps }",
			desc: "透传给 MyBorderLayout 的同名区域插槽。"
		}]
	},
	{
		name: "MyPanel",
		desc: "通用面板控件（不依赖任何布局）。标题栏 + 内容区 + 底部，支持最小化 / 最大化 / 关闭 / 刷新按钮。不含布局专用参数（region / maxed 等由所属布局管理）：面板通过 data-layout-id + data-region 两个 DOM 属性反查所属布局与区域，独立使用与放入 MyBorderLayout / MyGridLayout 区域时按钮行为自动切换（委托给布局 vs 仅 emit）。",
		props: [
			{
				name: "name",
				type: "String",
				default: "''",
				desc: "面板唯一标识（区域内唯一）。"
			},
			{
				name: "title",
				type: "String",
				default: "''",
				desc: "面板标题。"
			},
			{
				name: "iconCls / icon",
				type: "String",
				default: "''",
				desc: "图标文本（icon 是 iconCls 的简写别名）。"
			},
			{
				name: "hasTitle",
				type: "Boolean",
				default: "true",
				desc: "是否显示标题区。"
			},
			{
				name: "hasSubTitle",
				type: "Boolean",
				default: "false",
				desc: "是否显示副标题。"
			},
			{
				name: "subTitle",
				type: "String",
				default: "''",
				desc: "副标题文本。"
			},
			{
				name: "hasTool",
				type: "Boolean",
				default: "true",
				desc: "是否显示工具栏插槽区。"
			},
			{
				name: "hasFooter",
				type: "Boolean",
				default: "false",
				desc: "是否显示底部区。"
			},
			{
				name: "footer",
				type: "String",
				default: "''",
				desc: "底部文本（默认插槽内容）。"
			},
			{
				name: "border",
				type: "Boolean",
				default: "true",
				desc: "是否显示边框。"
			},
			{
				name: "scroll",
				type: "Boolean",
				default: "true",
				desc: "内容区是否可滚动。"
			},
			{
				name: "noscroll",
				type: "Boolean",
				default: "false",
				desc: "强制隐藏滚动（优先级高于 scroll）。"
			},
			{
				name: "opacity",
				type: "Number | String",
				default: "''",
				desc: "透明度（0-1）。"
			},
			{
				name: "float",
				type: "Boolean",
				default: "false",
				desc: "是否浮动样式（带阴影）。"
			},
			{
				name: "headerHeight",
				type: "Number",
				default: "34",
				desc: "标题栏高度（px）。"
			},
			{
				name: "bodyPadding",
				type: "String",
				default: "'10px 12px'",
				desc: "内容区内边距。"
			},
			{
				name: "panelClass / headerClass / bodyClass",
				type: "String",
				default: "''",
				desc: "自定义类名。"
			},
			{
				name: "panelStyle / headerStyle / bodyStyle",
				type: "Object | String",
				default: "null",
				desc: "自定义样式。"
			},
			{
				name: "theme",
				type: "String",
				default: "''",
				desc: "主题。"
			},
			{
				name: "min",
				type: "Boolean",
				default: "true",
				desc: "是否显示最小化按钮（布局区域内 center 区域强制为 false）。"
			},
			{
				name: "max",
				type: "Boolean",
				default: "true",
				desc: "是否显示最大化按钮（布局区域内为区域最大化，已最大化时切换为还原按钮）。"
			},
			{
				name: "close",
				type: "Boolean",
				default: "false",
				desc: "是否显示关闭按钮。"
			},
			{
				name: "refresh",
				type: "Boolean",
				default: "false",
				desc: "是否显示刷新按钮。"
			}
		],
		emits: [
			{
				name: "min",
				payload: "{ region, name }",
				desc: "点击最小化按钮（独立使用时触发；布局区域内改为 hide，区域随之收起）。"
			},
			{
				name: "max",
				payload: "{ region, name }",
				desc: "点击最大化按钮（独立使用时触发；布局区域内由布局处理区域最大化）。"
			},
			{
				name: "restore",
				payload: "{ region, name }",
				desc: "还原 —— 最大化还原 / 从最小化展开（即 min / max 的反向动作）。"
			},
			{
				name: "close",
				payload: "{ region, name }",
				desc: "点击关闭按钮。"
			},
			{
				name: "refresh",
				payload: "{ region, name }",
				desc: "点击刷新按钮。"
			}
		],
		methods: [],
		slots: [
			{
				name: "leftTool",
				scope: "—",
				desc: "标题左侧工具区（在标题之前）。"
			},
			{
				name: "title",
				scope: "—",
				desc: "自定义标题区（替换默认 icon + title + subtitle）。"
			},
			{
				name: "actions",
				scope: "—",
				desc: "标题栏工具区（标题与按钮之间，flex:1）。"
			},
			{
				name: "default",
				scope: "—",
				desc: "内容区。"
			},
			{
				name: "footer",
				scope: "—",
				desc: "底部区（覆盖 footer prop 文本）。"
			}
		]
	},
	{
		name: "MyPanelContent",
		desc: "面板内容渲染器。按优先级 component > url > html > 默认插槽 渲染面板内容，支持参数传递（组件 props / URL query 参数）与组件路径懒加载。可独立使用，也是 MyBorderLayout 区域插槽的默认 fallback。",
		props: [{
			name: "item",
			type: "Object",
			default: "{}",
			desc: "面板 item，承载内容来源与参数（见下方「内容来源字段」）。"
		}],
		emits: [],
		methods: [],
		slots: [{
			name: "default",
			scope: "—",
			desc: "item.component / url / html 均未定义时的回退内容。"
		}, {
			name: "内容来源字段（item 内）",
			scope: "—",
			desc: "component: 组件对象 / 全局名字符串 / 相对项目根目录路径字符串（如 /src/views/Foo.vue，按 import.meta.glob 懒加载）｜props: 组件 props｜url: iframe 地址｜params: URL query 参数对象（→ ?k=v&...）｜html: HTML 字符串（v-html）。"
		}]
	},
	{
		name: "MyTabs",
		desc: "多标签容器。标签栏（top / bottom / left / right）+ 内容区，内容按 MyPanelContent 的优先级渲染（component > url(+params) > html > tab:{name} 具名插槽）。标签默认首次激活才挂载、之后保留状态（lazy:false 立即挂载，reload:true 每次激活重建，refreshAt 变化即重建）；右键菜单内置关闭 / 关闭其它 / 关闭全部 / 刷新（点击别处 / Esc / 滚动 / 鼠标移出范围时关闭）。左右布局下 titleVertical 可让标签文字竖排。受控 / 非受控皆可；位于 MyBorderLayout 区域内时，切换 / 关闭 / 刷新经布局注册表上报（notifyTab），标签数据由所在面板的 tab 配置统一维护。",
		props: [
			{
				name: "items",
				type: "Array",
				default: "[]",
				desc: "标签项数组：[{ name, title, iconCls?, closable?, disabled?, lazy?, reload?, menu?, url(+params) / html / component(+props) }]。"
			},
			{
				name: "active",
				type: "String",
				default: "''",
				desc: "当前标签 name；传了即以它为准（受控），空值由组件内部维护。"
			},
			{
				name: "position",
				type: "String",
				default: "'top'",
				desc: "标签栏位置：top / bottom / left / right。"
			},
			{
				name: "closable",
				type: "Boolean",
				default: "false",
				desc: "是否允许关闭（标签项 closable 可单独覆盖）。"
			},
			{
				name: "hasTool",
				type: "Boolean",
				default: "false",
				desc: "显示标签栏尾部工具栏（tool 插槽）。"
			},
			{
				name: "contextmenu",
				type: "Boolean",
				default: "false",
				desc: "启用标签右键菜单（打开前先激活该标签）。"
			},
			{
				name: "menu",
				type: "Array",
				default: "null",
				desc: "右键菜单项：[{ name, title, iconCls?, disabled?, divided?, handler? }]；缺省用内置项（关闭 / 关闭其它 / 关闭全部 / 刷新），标签项的 menu 可单独覆盖。"
			},
			{
				name: "titleVertical",
				type: "Boolean",
				default: "false",
				desc: "标签文字竖直排列（仅 position 为 left / right 生效）。"
			},
			{
				name: "tabsClass",
				type: "String",
				default: "''",
				desc: "附加类名（自定义标签栏样式）。"
			},
			{
				name: "panelName",
				type: "String",
				default: "''",
				desc: "所属面板 name（位于布局区域内时用于上报切换 / 关闭）。"
			},
			{
				name: "theme",
				type: "String",
				default: "''",
				desc: "主题：空值继承父级。"
			}
		],
		emits: [
			{
				name: "update:active",
				payload: "String",
				desc: "当前标签变化（v-model:active）。"
			},
			{
				name: "change",
				payload: "{ name, item }",
				desc: "切换标签。"
			},
			{
				name: "close",
				payload: "{ name, item }",
				desc: "标签被关闭（关闭按钮 / 右键菜单，关闭其它 · 全部时每个被移除的标签发一次）。"
			},
			{
				name: "refresh",
				payload: "{ name, item }",
				desc: "标签被刷新（重建内容）。"
			},
			{
				name: "contextmenu",
				payload: "{ name, item, event }",
				desc: "标签上右键（contextmenu 关闭时也发，仅作通知）。"
			},
			{
				name: "menu-select",
				payload: "{ action, name, item }",
				desc: "右键菜单里的自定义项被点击（内置项不触发）。"
			}
		],
		methods: [
			{
				sig: "setActive(name)",
				ret: "Boolean",
				desc: "激活标签。"
			},
			{
				sig: "close(name)",
				ret: "Boolean",
				desc: "关闭标签。"
			},
			{
				sig: "closeOthers(name) / closeAll()",
				ret: "Boolean",
				desc: "关闭其它 / 全部标签。"
			},
			{
				sig: "refresh(name?)",
				ret: "Boolean",
				desc: "刷新标签（重建内容），name 缺省取当前标签。"
			}
		],
		slots: [
			{
				name: "tab:{name}",
				scope: "{ item }",
				desc: "按标签 name 命名的内容插槽，优先于 item 的 component / url / html。"
			},
			{
				name: "tool",
				scope: "—",
				desc: "标签栏尾部工具栏内容。"
			},
			{
				name: "menu",
				scope: "{ items, item, run, close }",
				desc: "自定义右键菜单（替换内置菜单渲染）。"
			},
			{
				name: "empty",
				scope: "—",
				desc: "没有标签（或当前标签不存在）时的兜底内容。"
			}
		]
	},
	{
		name: "MySplitter",
		desc: "分割条。两套视觉由 variant 切换：modern（默认，对齐 FXYJ 生产版 SSRegionExpOrCollBtn / WarningPanel 视觉）= 半透明浅蓝轨道 + 居中常显 8×80 白色半透明圆角把手（内含实心三角按钮，主按钮常显、其余悬浮展开，悬浮把手转主蓝 #03a9f4c2 + 白图标）；classic = 1px 发丝线 + 悬浮握把 / 按钮组（旧样式）。区域完全隐藏后退化为贴边浮动伸缩按钮 —— 把手完整保留：贴收缩侧边缘、另一轴居中。按钮顺序 [收缩][最大化] 或 [最大化][收缩]（east/south 相反）。已最大化时不显示最大化按钮（也不切换为还原图标）。把手整块可点击：可见按钮只有一个时，点击把手任意位置即触发该按钮；两个及以上需点击按钮本身（此时把手非按钮区光标为 default，且仍可从把手处按住拖拽）。modern 配色可用变量覆盖：--my-layout-splitter-track / -track-hover（轨道）、-thumb / -thumb-hover（把手）、-icon（图标）。",
		props: [
			{
				name: "direction",
				type: "String",
				default: "'v-left'",
				desc: "方向：v-left/v-right/h-top/h-bottom。决定拖拽轴向、按钮排布、图标方向。"
			},
			{
				name: "variant",
				type: "String",
				default: "'modern'",
				desc: "视觉样式：modern（对齐 FXYJ 生产版）/ classic（改动前旧样式）。传 null 时跟随全局 provide(\"myLayoutSplitterVariant\")，无人提供则退回 modern。"
			},
			{
				name: "min",
				type: "Number",
				default: "60",
				desc: "拖拽最小尺寸（px）。"
			},
			{
				name: "max",
				type: "Number",
				default: "800",
				desc: "拖拽最大尺寸（px）。"
			},
			{
				name: "step",
				type: "Number",
				default: "1",
				desc: "拖拽步进（>1 时按步取整）。"
			},
			{
				name: "split",
				type: "Boolean",
				default: "true",
				desc: "是否可拖拽。"
			},
			{
				name: "collapsible",
				type: "Boolean",
				default: "false",
				desc: "是否显示收缩 / 展开按钮。"
			},
			{
				name: "maxBtn",
				type: "Boolean",
				default: "false",
				desc: "是否显示最大化按钮。"
			},
			{
				name: "maxed",
				type: "Boolean",
				default: "false",
				desc: "当前区域是否处于最大化态（true 时隐藏最大化按钮）。"
			},
			{
				name: "collapsed",
				type: "Boolean",
				default: "false",
				desc: "当前区域是否处于收缩态（影响图标方向）。"
			},
			{
				name: "hidden",
				type: "Boolean",
				default: "false",
				desc: "区域完全隐藏，分割条退化为贴边浮动伸缩按钮（把手完整可见：贴收缩侧边缘、另一轴居中）。"
			},
			{
				name: "dual",
				type: "Boolean",
				default: "false",
				desc: "双向收缩模式（栅格布局用）：分割条两侧各控制一个收缩目标。"
			},
			{
				name: "nextCollapsed",
				type: "Boolean",
				default: "false",
				desc: "dual 模式下另一侧是否已收缩。"
			},
			{
				name: "nextCollapsible",
				type: "Boolean",
				default: "false",
				desc: "dual 模式下另一侧是否显示收缩按钮。"
			},
			{
				name: "hoverReveal",
				type: "Boolean",
				default: "true",
				desc: "是否启用「悬浮才展开按钮组」（false 时按钮常显）。"
			}
		],
		emits: [
			{
				name: "dragStart",
				payload: "{ clientPos, setStartSize }",
				desc: "拖拽开始；setStartSize 用于父组件回填起始尺寸。"
			},
			{
				name: "dragMove",
				payload: "size (px)",
				desc: "拖拽移动（已限制在 min/max 内）。"
			},
			{
				name: "dragEnd",
				payload: "MouseEvent",
				desc: "拖拽结束。"
			},
			{
				name: "toggle",
				payload: "—",
				desc: "点击收缩 / 展开按钮。"
			},
			{
				name: "toggleNext",
				payload: "—",
				desc: "dual 模式下点击另一侧的收缩按钮。"
			},
			{
				name: "max",
				payload: "—",
				desc: "点击最大化按钮。"
			}
		],
		methods: [],
		slots: []
	},
	{
		name: "MyFloatPanel",
		desc: "悬浮面板。位置参数采用 offset 语义：字符串对齐（auto=居中 / t / r / b / l / lt / lb / rt / rb）、4 边偏移对象、数字顶部偏移。支持标题栏拖拽移动（move）、左下 / 右下角 resize、最大化 / 还原 / 关闭、模态遮罩（shade）。默认挂载到 body，container 可指定容器（拖动范围约束在容器内）。",
		props: [
			{
				name: "title",
				type: "String",
				default: "''",
				desc: "标题。"
			},
			{
				name: "hasTitle",
				type: "Boolean",
				default: "true",
				desc: "是否显示标题栏。"
			},
			{
				name: "border",
				type: "Boolean",
				default: "true",
				desc: "是否显示外边框。"
			},
			{
				name: "close",
				type: "Boolean",
				default: "true",
				desc: "是否显示关闭按钮。"
			},
			{
				name: "max",
				type: "Boolean",
				default: "true",
				desc: "是否显示最大化按钮。"
			},
			{
				name: "min",
				type: "Boolean",
				default: "true",
				desc: "最小化按钮（当前未渲染）。"
			},
			{
				name: "maxed",
				type: "Boolean",
				default: "false",
				desc: "初始即最大化。"
			},
			{
				name: "width / height",
				type: "Number | String",
				default: "360 / 280",
				desc: "面板宽高（px）。"
			},
			{
				name: "offset",
				type: "String | Object | Number",
				default: "'auto'",
				desc: "位置：字符串对齐 auto/t/r/b/l/lt/rt/lb/rb（auto=居中）｜对象 { top, left, right, bottom }（4 边偏移，px 或 \"NN%\"）｜数字（顶部偏移）。"
			},
			{
				name: "fixed",
				type: "Boolean",
				default: "true",
				desc: "是否固定定位：true=fixed 跟随视口；false=absolute 含 scroll 偏移。"
			},
			{
				name: "resize",
				type: "Boolean",
				default: "true",
				desc: "是否可拖拽 resize。"
			},
			{
				name: "minWidth / minHeight",
				type: "Number",
				default: "200 / 140",
				desc: "resize 最小尺寸。"
			},
			{
				name: "maxWidth / maxHeight",
				type: "Number",
				default: "2000",
				desc: "resize 最大尺寸。"
			},
			{
				name: "shade",
				type: "Boolean | Number",
				default: "false",
				desc: "模态遮罩：true=默认遮罩；数字=透明度；false=无遮罩（带遮罩时自动居中）。"
			},
			{
				name: "shadeClose",
				type: "Boolean",
				default: "false",
				desc: "shade 时点击遮罩是否关闭。"
			},
			{
				name: "zIndex",
				type: "Number",
				default: "999",
				desc: "层级。"
			},
			{
				name: "visible",
				type: "Boolean",
				default: "true",
				desc: "是否显示。"
			},
			{
				name: "container",
				type: "String",
				default: "'body'",
				desc: "挂载容器：body 或 CSS 选择器。"
			},
			{
				name: "move",
				type: "Boolean",
				default: "true",
				desc: "是否允许拖拽标题栏移动。"
			},
			{
				name: "theme",
				type: "String",
				default: "''",
				desc: "主题。"
			}
		],
		emits: [
			{
				name: "update:visible",
				payload: "Boolean",
				desc: "可见性变化（v-model:visible）。"
			},
			{
				name: "close",
				payload: "—",
				desc: "关闭。"
			},
			{
				name: "max",
				payload: "—",
				desc: "最大化。"
			},
			{
				name: "restore",
				payload: "—",
				desc: "还原。"
			},
			{
				name: "move",
				payload: "{ left, top }",
				desc: "拖拽移动（相对容器的 left/top）。"
			},
			{
				name: "resize",
				payload: "{ width, height, left, top }",
				desc: "拖拽 resize。"
			}
		],
		methods: [],
		slots: [{
			name: "title",
			scope: "—",
			desc: "自定义标题区。"
		}, {
			name: "default",
			scope: "—",
			desc: "内容区。"
		}]
	},
	{
		name: "MyGridLayout",
		desc: "栅格布局容器。基于 12 分栏比例系统，支持四分屏、左右布局等场景。每个单元格通过 layoutNum（1..12 占比，>12 固定像素）声明尺寸，layoutType=h（先水平后竖直）或 v（先竖直后水平）。行/单元格之间插入 MySplitter 可拖拽、双向收缩。面板最大化默认填满整个布局或页面。",
		props: [
			{
				name: "layoutId",
				type: "String",
				default: "''",
				desc: "布局标识（缺省自动生成）。"
			},
			{
				name: "layoutType",
				type: "String",
				default: "'h'",
				desc: "排列方向：h（先水平后竖直，换行成行）/ v（先竖直后水平，换列成列）。"
			},
			{
				name: "theme",
				type: "String",
				default: "''",
				desc: "主题。"
			},
			{
				name: "maxType",
				type: "String",
				default: "'center'",
				desc: "最大化类型：center / layout（整个布局） / page（整个页面）。"
			},
			{
				name: "items",
				type: "Array",
				default: "[]",
				desc: "单元格集合：[{ name, title, layoutNum, split, collapsible, max, border, ...MyPanel 参数 }]。"
			},
			{
				name: "split",
				type: "Boolean",
				default: "false",
				desc: "分割条是否可拖拽（全局默认，单元格 item 可覆盖）。"
			},
			{
				name: "collapsible",
				type: "Boolean",
				default: "false",
				desc: "分割条是否显示收缩按钮（全局默认）。"
			},
			{
				name: "border",
				type: "Boolean",
				default: "true",
				desc: "单元格边框（全局默认）。"
			},
			{
				name: "min",
				type: "Boolean",
				default: "false",
				desc: "面板最小化按钮（全局默认）。"
			},
			{
				name: "max",
				type: "Boolean",
				default: "true",
				desc: "面板最大化按钮（全局默认）。"
			},
			{
				name: "close",
				type: "Boolean",
				default: "false",
				desc: "面板关闭按钮（全局默认）。"
			},
			{
				name: "animate",
				type: "Boolean",
				default: "true",
				desc: "是否启用过渡动画。"
			}
		],
		emits: [
			{
				name: "max",
				payload: "{ key, name }",
				desc: "单元格最大化。"
			},
			{
				name: "restore",
				payload: "{ key }",
				desc: "还原。"
			},
			{
				name: "split",
				payload: "{ axis, index|key, size }",
				desc: "分割条拖拽（axis: line/cell）。"
			},
			{
				name: "close",
				payload: "{ key }",
				desc: "单元格关闭 / 最小化触发隐藏。"
			}
		],
		methods: [
			{
				sig: "max(key)",
				ret: "void",
				desc: "最大化指定单元格（简写）。"
			},
			{
				sig: "restore()",
				ret: "void",
				desc: "还原。"
			},
			{
				sig: "maxed(key)",
				ret: "Boolean",
				desc: "判断指定单元格是否处于最大化态（简写）。"
			},
			{
				sig: "hide(key) / show(key)",
				ret: "void",
				desc: "隐藏 / 显示单元格。"
			},
			{
				sig: "toggleLine(lineIdx) / toggleCell(cell)",
				ret: "void",
				desc: "切换整行 / 整列 / 单元格隐藏。"
			},
			{
				sig: "notifyPanel(action, region)",
				ret: "Boolean",
				desc: "面板事件委托入口（action: min / max / restore / close；min 即 hide）。"
			}
		],
		slots: [{
			name: "{cell._key}",
			scope: "{ cell }",
			desc: "按单元格 key（默认 name）命名的具名插槽。"
		}]
	},
	{
		name: "Composables（组合式函数）",
		desc: "主题、布局注册表、面板参数归一化等工具。",
		props: [],
		emits: [],
		methods: [
			{
				sig: "import { normalizeTheme, themeClass, useThemeContext, THEMES, DEFAULT_THEME } from '.../composables/theme.js'",
				ret: "—",
				desc: "主题工具：normalizeTheme(str) 归一化；themeClass(theme) 返回类名；useThemeContext(props) 解析自身与父级主题。"
			},
			{
				sig: "import { ROOT_LAYOUT_ID, genLayoutId, makeChildLayoutId, registerLayout, unregisterLayout, getLayout, hasLayout, listLayoutIds } from '.../composables/layoutRegistry.js'",
				ret: "—",
				desc: "布局注册表：用于嵌套布局 / 面板反查所属布局。makeChildLayoutId(parent, region, name) 生成子布局 id。"
			},
			{
				sig: "import { normalizePanelItem, toPanelProps, normalizeMaxType, REGION_DEFAULTS, PANEL_DEFAULTS, REGION_SHOW_DEFAULTS, REGION_SIZE_DEFAULTS } from '.../composables/panelItem.js'",
				ret: "—",
				desc: "面板 / 区域 item 参数工具：归一化与挑选可 v-bind 的面板参数。"
			}
		],
		slots: []
	}
], an = { class: "my-api-doc__dialog" }, on = { class: "my-api-doc__body" }, sn = { class: "my-api-doc__nav" }, cn = ["onClick"], ln = {
	key: 0,
	class: "my-api-doc__content"
}, un = { class: "my-api-doc__comp-name" }, dn = { class: "my-api-doc__comp-desc" }, fn = { key: 0 }, pn = { class: "my-api-doc__table" }, mn = { class: "c-name" }, hn = { class: "c-type" }, gn = { class: "c-default" }, _n = { key: 1 }, vn = { class: "my-api-doc__table" }, yn = { class: "c-name" }, bn = { class: "c-payload" }, xn = { key: 2 }, Sn = { class: "my-api-doc__table" }, Cn = { class: "c-sig" }, wn = { class: "c-ret" }, Tn = { key: 3 }, En = { class: "my-api-doc__table" }, Dn = { class: "c-name" }, On = { class: "c-scope" }, kn = /*#__PURE__*/ M({
	__name: "MyApiDoc",
	props: {
		visible: {
			type: Boolean,
			default: !1
		},
		theme: {
			type: String,
			default: ""
		}
	},
	emits: ["update:visible", "close"],
	setup(s, { emit: c }) {
		let l = s, u = c, d = n(() => Ve(l.theme)), f = b(rn[0].name), p = n(() => rn.find((e) => e.name === f.value));
		function h(e) {
			f.value = e;
		}
		function g() {
			u("update:visible", !1), u("close");
		}
		function v(e) {
			e.key === "Escape" && l.visible && g();
		}
		return te(() => document.addEventListener("keydown", v)), ee(() => document.removeEventListener("keydown", v)), (n, c) => (_(), r(t, { to: "body" }, [s.visible ? (_(), a("div", {
			key: 0,
			class: m(["my-api-doc", d.value])
		}, [o("div", {
			class: "my-api-doc__mask",
			onClick: g
		}), o("div", an, [o("header", { class: "my-api-doc__header" }, [c[0] ||= o("div", { class: "my-api-doc__title" }, [o("span", { class: "my-api-doc__logo" }, "📚"), o("span", null, "my-layout · API 文档")], -1), o("button", {
			class: "my-api-doc__close",
			title: "关闭 (Esc)",
			onClick: g
		}, "✕")]), o("div", on, [o("aside", sn, [c[1] ||= o("div", { class: "my-api-doc__nav-title" }, "组件 / 模块", -1), (_(!0), a(e, null, x(T(rn), (e) => (_(), a("a", {
			key: e.name,
			class: m(["my-api-doc__nav-item", { active: f.value === e.name }]),
			onClick: (t) => h(e.name)
		}, w(e.name), 11, cn))), 128))]), p.value ? (_(), a("main", ln, [
			o("h2", un, w(p.value.name), 1),
			o("p", dn, w(p.value.desc), 1),
			p.value.props?.length ? (_(), a("section", fn, [c[3] ||= o("h3", { class: "my-api-doc__section-title" }, "Props（属性）", -1), o("table", pn, [c[2] ||= o("thead", null, [o("tr", null, [
				o("th", { class: "c-name" }, "名称"),
				o("th", { class: "c-type" }, "类型"),
				o("th", { class: "c-default" }, "默认"),
				o("th", null, "说明")
			])], -1), o("tbody", null, [(_(!0), a(e, null, x(p.value.props, (e) => (_(), a("tr", { key: e.name }, [
				o("td", mn, [o("code", null, w(e.name), 1)]),
				o("td", hn, w(e.type), 1),
				o("td", gn, [o("code", null, w(e.default), 1)]),
				o("td", null, w(e.desc), 1)
			]))), 128))])])])) : i("", !0),
			p.value.emits?.length ? (_(), a("section", _n, [c[5] ||= o("h3", { class: "my-api-doc__section-title" }, "Emits（事件）", -1), o("table", vn, [c[4] ||= o("thead", null, [o("tr", null, [
				o("th", { class: "c-name" }, "名称"),
				o("th", { class: "c-payload" }, "载荷"),
				o("th", null, "说明")
			])], -1), o("tbody", null, [(_(!0), a(e, null, x(p.value.emits, (e) => (_(), a("tr", { key: e.name }, [
				o("td", yn, [o("code", null, w(e.name), 1)]),
				o("td", bn, w(e.payload), 1),
				o("td", null, w(e.desc), 1)
			]))), 128))])])])) : i("", !0),
			p.value.methods?.length ? (_(), a("section", xn, [c[7] ||= o("h3", { class: "my-api-doc__section-title" }, "Methods（defineExpose 暴露方法，通过 ref 调用）", -1), o("table", Sn, [c[6] ||= o("thead", null, [o("tr", null, [
				o("th", { class: "c-sig" }, "签名"),
				o("th", { class: "c-ret" }, "返回"),
				o("th", null, "说明")
			])], -1), o("tbody", null, [(_(!0), a(e, null, x(p.value.methods, (e, t) => (_(), a("tr", { key: t }, [
				o("td", Cn, [o("code", null, w(e.sig), 1)]),
				o("td", wn, w(e.ret), 1),
				o("td", null, w(e.desc), 1)
			]))), 128))])])])) : i("", !0),
			p.value.slots?.length ? (_(), a("section", Tn, [c[9] ||= o("h3", { class: "my-api-doc__section-title" }, "Slots（插槽）", -1), o("table", En, [c[8] ||= o("thead", null, [o("tr", null, [
				o("th", { class: "c-name" }, "名称"),
				o("th", { class: "c-scope" }, "作用域"),
				o("th", null, "说明")
			])], -1), o("tbody", null, [(_(!0), a(e, null, x(p.value.slots, (e) => (_(), a("tr", { key: e.name }, [
				o("td", Dn, [o("code", null, w(e.name), 1)]),
				o("td", On, w(e.scope), 1),
				o("td", null, w(e.desc), 1)
			]))), 128))])])])) : i("", !0)
		])) : i("", !0)])])], 2)) : i("", !0)]));
	}
}, [["__scopeId", "data-v-b53e1577"]]), An = {
	MyBorderLayout: Ut,
	MyGridLayout: Yt,
	MyMainFrame: Xt,
	MyPanel: lt,
	MyPanelContent: ht,
	MyTabs: Dt,
	MyFloatPanel: nn,
	MyApiDoc: kn
};
function jn(e) {
	for (let t in An) e.component(t, An[t]);
}
var Mn = {
	install: jn,
	...An
};
//#endregion
export { De as DEFAULT_PANEL_NAME, Le as DEFAULT_THEME, kn as MyApiDoc, Ut as MyBorderLayout, nn as MyFloatPanel, Yt as MyGridLayout, Xt as MyMainFrame, lt as MyPanel, ht as MyPanelContent, we as MySplitter, Dt as MyTabs, Ee as ROOT_LAYOUT_ID, Re as THEMES, Mn as default, ke as genLayoutId, Ne as getLayout, Pe as hasLayout, ft as isComponentPath, Fe as listLayoutIds, Ae as makeChildLayoutId, Be as normalizeTheme, je as registerLayout, dt as resolvePathComponent, Ve as themeClass, Me as unregisterLayout, He as useThemeContext };
