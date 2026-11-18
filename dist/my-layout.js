import { Fragment as e, Teleport as t, computed as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, createSlots as s, createStaticVNode as c, createTextVNode as l, createVNode as u, guardReactiveProps as d, inject as f, markRaw as p, mergeProps as m, nextTick as h, normalizeClass as g, normalizeProps as _, normalizeStyle as v, onBeforeUnmount as y, onMounted as b, openBlock as x, provide as S, reactive as C, ref as w, renderList as T, renderSlot as E, resolveDynamicComponent as D, toDisplayString as O, toValue as k, unref as A, useSlots as j, vModelText as M, vShow as N, watch as P, withCtx as F, withDirectives as I, withKeys as L, withModifiers as R } from "vue";
//#region \0plugin-vue:export-helper
var z = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ee = ["title"], B = {
	viewBox: "0 0 24 24",
	fill: "currentColor"
}, V = ["d"], te = ["title"], ne = {
	viewBox: "0 0 24 24",
	fill: "currentColor"
}, H = ["d"], re = ["title"], U = {
	viewBox: "0 0 24 24",
	fill: "currentColor"
}, W = ["d"], G = ["title"], K = {
	viewBox: "0 0 24 24",
	fill: "currentColor"
}, q = ["d"], ie = ["title"], ae = {
	viewBox: "0 0 24 24",
	fill: "currentColor"
}, oe = ["d"], J = ["title"], se = {
	viewBox: "0 0 24 24",
	fill: "currentColor"
}, ce = ["d"], Y = {
	class: "my-splitter__grip",
	"aria-hidden": "true"
}, le = {
	viewBox: "0 0 24 24",
	fill: "currentColor"
}, ue = ["cx", "cy"], de = ["title"], X = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.9",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Z = ["d"], fe = ["title"], pe = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.9",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, me = ["d"], he = ["title"], ge = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.9",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, _e = ["d"], ve = ["title"], ye = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.9",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, be = ["d"], xe = ["title"], Se = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.9",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Ce = ["d"], we = ["title"], Te = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.9",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Ee = ["d"], De = {
	viewBox: "0 0 24 24",
	fill: "currentColor"
}, Oe = ["d"], ke = /*#__PURE__*/ z({
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
		let s = t, c = r, l = w(!1), u = 0, d = 0, p = f("myLayoutSplitterVariant", null), m = n(() => s.variant || A(p) || "modern"), h = n(() => s.direction.startsWith("v")), _ = n(() => s.direction.includes("right") || s.direction.includes("bottom") ? -1 : 1), v = n(() => s.direction === "v-right" || s.direction === "h-bottom"), b = n(() => s.hidden || !!(s.dual && (s.collapsed || s.nextCollapsed))), S = n(() => !s.dual || s.collapsed ? "own" : s.nextCollapsed ? "next" : "own"), C = {
			"v-left": "v-right",
			"v-right": "v-left",
			"h-top": "h-bottom",
			"h-bottom": "h-top"
		}, E = n(() => S.value === "own" ? s.direction : C[s.direction] || s.direction), D = n(() => m.value === "classic" && s.dual ? h.value : !h.value), O = n(() => !b.value && !s.maxed && (s.collapsible || s.nextCollapsible || s.maxBtn)), k = n(() => {
			let e = [
				s.collapsible ? "toggle" : "",
				s.dual && s.nextCollapsible ? "toggleNext" : "",
				s.maxBtn && !s.maxed ? "max" : ""
			].filter(Boolean);
			return e.length === 1 ? e[0] : "";
		});
		function j(e) {
			k.value && e.stopPropagation();
		}
		function M() {
			k.value === "toggle" ? c("toggle") : k.value === "toggleNext" ? c("toggleNext") : k.value === "max" && c("max");
		}
		let N = {
			left: "m15 18-6-6 6-6",
			right: "m9 18 6-6-6-6",
			up: "m18 15-6-6-6 6",
			down: "m6 9 6 6 6-6"
		}, P = {
			left: "M17 3 L7 12 L17 21 Z",
			right: "M7 3 L17 12 L7 21 Z",
			up: "M3 17 L12 7 L21 17 Z",
			down: "M3 7 L12 17 L21 7 Z"
		}, F = n(() => m.value === "classic" ? N : P), I = {
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
		}, L = n(() => I[h.value ? "v" : "h"]), z = n(() => {
			let e = s.direction;
			return e === "v-left" ? "left" : e === "v-right" ? "right" : e === "h-top" ? "up" : "down";
		}), ke = n(() => ({
			left: "right",
			right: "left",
			up: "down",
			down: "up"
		})[z.value]), Ae = n(() => F.value[s.collapsed ? ke.value : z.value]), je = n(() => s.collapsed ? "展开" : "收缩"), Me = n(() => F.value[ke.value]), Ne = n(() => "最大化"), Pe = n(() => {
			let e = E.value;
			return e === "v-left" ? "left" : e === "v-right" ? "right" : e === "h-top" ? "up" : "down";
		}), Fe = n(() => ({
			left: "right",
			right: "left",
			up: "down",
			down: "up"
		})[Pe.value]), Ie = n(() => F.value[Fe.value]), Le = n(() => F.value[s.nextCollapsed ? z.value : ke.value]), Re = n(() => s.nextCollapsed ? "展开" : "收缩"), ze = n(() => S.value === "own" ? s.collapsible : s.nextCollapsible), Be = n(() => s.collapsible), Ve = n(() => s.maxBtn && !s.maxed), He = n(() => s.dual && s.nextCollapsible), Ue = n(() => Be.value ? "own" : Ve.value ? "max" : He.value ? "next" : null), We = (e) => s.hoverReveal && Ue.value !== e, Ge = n(() => We("own")), Ke = n(() => We("next")), qe = n(() => We("max"));
		function Je(e) {
			return h.value ? e.clientX : e.clientY;
		}
		function Ye(e) {
			!s.hidden && s.split && (e.preventDefault(), e.stopPropagation(), l.value = !0, u = Je(e), c("dragStart", {
				clientPos: u,
				setStartSize: (e) => {
					d = e;
				}
			}), document.addEventListener("mousemove", Xe), document.addEventListener("mouseup", Ze), document.body.style.cursor = h.value ? "col-resize" : "row-resize", document.body.style.userSelect = "none");
		}
		function Xe(e) {
			if (!l.value) return;
			let t = (Je(e) - u) * _.value, n = s.step > 1 ? Math.round(t / s.step) * s.step : t;
			c("dragMove", Math.max(s.min, Math.min(s.max, d + n)));
		}
		function Ze(e) {
			l.value = !1, document.removeEventListener("mousemove", Xe), document.removeEventListener("mouseup", Ze), document.body.style.cursor = "", document.body.style.userSelect = "", c("dragEnd", e);
		}
		y(() => {
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
		return (n, r) => b.value ? (x(), a("div", {
			key: 1,
			class: g(["my-splitter my-splitter--hidden", [`my-splitter--${E.value}`, `my-splitter--${m.value}`]])
		}, [ze.value ? (x(), a("button", {
			key: 0,
			class: g(["my-splitter__handle my-splitter__handle--float", `my-splitter__handle--${E.value}`]),
			title: "展开",
			onMousedown: r[12] ||= R(() => {}, ["stop"]),
			onClick: R(tt, ["stop"])
		}, [(x(), a("svg", De, [o("path", { d: Ie.value }, null, 8, Oe)]))], 34)) : i("", !0)], 2)) : (x(), a("div", {
			key: 0,
			class: g(["my-splitter", [
				`my-splitter--${t.direction}`,
				`my-splitter--${m.value}`,
				{
					"my-splitter--dragging": l.value,
					"my-splitter--static": !t.split,
					"my-splitter--always": !t.hoverReveal
				}
			]]),
			onMousedown: Ye
		}, [r[13] ||= o("div", { class: "my-splitter__line" }, null, -1), m.value === "modern" && O.value ? (x(), a("div", {
			key: 0,
			class: g(["my-splitter__thumb", { "my-splitter__thumb--clickable": k.value }]),
			onMousedown: j,
			onClick: M
		}, [o("div", { class: g(["my-splitter__group", { "my-splitter__group--row": D.value }]) }, [v.value ? (x(), a(e, { key: 0 }, [
			t.maxBtn && !t.maxed ? (x(), a("button", {
				key: 0,
				type: "button",
				class: g(["my-splitter__handle", { "my-splitter__handle--reveal": qe.value }]),
				title: Ne.value,
				onMousedown: r[0] ||= R(() => {}, ["stop"]),
				onClick: R(et, ["stop"])
			}, [(x(), a("svg", B, [o("path", { d: Me.value }, null, 8, V)]))], 42, ee)) : i("", !0),
			t.collapsible ? (x(), a("button", {
				key: 1,
				type: "button",
				class: g(["my-splitter__handle", { "my-splitter__handle--reveal": Ge.value }]),
				title: je.value,
				onMousedown: r[1] ||= R(() => {}, ["stop"]),
				onClick: R(Qe, ["stop"])
			}, [(x(), a("svg", ne, [o("path", { d: Ae.value }, null, 8, H)]))], 42, te)) : i("", !0),
			t.dual && t.nextCollapsible ? (x(), a("button", {
				key: 2,
				type: "button",
				class: g(["my-splitter__handle", { "my-splitter__handle--reveal": Ke.value }]),
				title: Re.value,
				onMousedown: r[2] ||= R(() => {}, ["stop"]),
				onClick: R($e, ["stop"])
			}, [(x(), a("svg", U, [o("path", { d: Le.value }, null, 8, W)]))], 42, re)) : i("", !0)
		], 64)) : (x(), a(e, { key: 1 }, [
			t.collapsible ? (x(), a("button", {
				key: 0,
				type: "button",
				class: g(["my-splitter__handle", { "my-splitter__handle--reveal": Ge.value }]),
				title: je.value,
				onMousedown: r[3] ||= R(() => {}, ["stop"]),
				onClick: R(Qe, ["stop"])
			}, [(x(), a("svg", K, [o("path", { d: Ae.value }, null, 8, q)]))], 42, G)) : i("", !0),
			t.dual && t.nextCollapsible ? (x(), a("button", {
				key: 1,
				type: "button",
				class: g(["my-splitter__handle", { "my-splitter__handle--reveal": Ke.value }]),
				title: Re.value,
				onMousedown: r[4] ||= R(() => {}, ["stop"]),
				onClick: R($e, ["stop"])
			}, [(x(), a("svg", ae, [o("path", { d: Le.value }, null, 8, oe)]))], 42, ie)) : i("", !0),
			t.maxBtn && !t.maxed ? (x(), a("button", {
				key: 2,
				type: "button",
				class: g(["my-splitter__handle", { "my-splitter__handle--reveal": qe.value }]),
				title: Ne.value,
				onMousedown: r[5] ||= R(() => {}, ["stop"]),
				onClick: R(et, ["stop"])
			}, [(x(), a("svg", se, [o("path", { d: Me.value }, null, 8, ce)]))], 42, J)) : i("", !0)
		], 64))], 2)], 34)) : O.value ? (x(), a("div", {
			key: 1,
			class: g(["my-splitter__dock", { "my-splitter__dock--clickable": k.value }]),
			onMousedown: j,
			onClick: M
		}, [o("span", Y, [(x(), a("svg", le, [(x(!0), a(e, null, T(L.value, (e, t) => (x(), a("circle", {
			key: t,
			cx: e[0],
			cy: e[1],
			r: "1.4"
		}, null, 8, ue))), 128))]))]), o("div", { class: g(["my-splitter__group", { "my-splitter__group--row": D.value }]) }, [v.value ? (x(), a(e, { key: 0 }, [
			t.maxBtn && !t.maxed ? (x(), a("button", {
				key: 0,
				type: "button",
				class: "my-splitter__handle",
				title: Ne.value,
				onMousedown: r[6] ||= R(() => {}, ["stop"]),
				onClick: R(et, ["stop"])
			}, [(x(), a("svg", X, [o("path", { d: Me.value }, null, 8, Z)]))], 40, de)) : i("", !0),
			t.collapsible ? (x(), a("button", {
				key: 1,
				type: "button",
				class: "my-splitter__handle",
				title: je.value,
				onMousedown: r[7] ||= R(() => {}, ["stop"]),
				onClick: R(Qe, ["stop"])
			}, [(x(), a("svg", pe, [o("path", { d: Ae.value }, null, 8, me)]))], 40, fe)) : i("", !0),
			t.dual && t.nextCollapsible ? (x(), a("button", {
				key: 2,
				type: "button",
				class: "my-splitter__handle",
				title: Re.value,
				onMousedown: r[8] ||= R(() => {}, ["stop"]),
				onClick: R($e, ["stop"])
			}, [(x(), a("svg", ge, [o("path", { d: Le.value }, null, 8, _e)]))], 40, he)) : i("", !0)
		], 64)) : (x(), a(e, { key: 1 }, [
			t.collapsible ? (x(), a("button", {
				key: 0,
				type: "button",
				class: "my-splitter__handle",
				title: je.value,
				onMousedown: r[9] ||= R(() => {}, ["stop"]),
				onClick: R(Qe, ["stop"])
			}, [(x(), a("svg", ye, [o("path", { d: Ae.value }, null, 8, be)]))], 40, ve)) : i("", !0),
			t.dual && t.nextCollapsible ? (x(), a("button", {
				key: 1,
				type: "button",
				class: "my-splitter__handle",
				title: Re.value,
				onMousedown: r[10] ||= R(() => {}, ["stop"]),
				onClick: R($e, ["stop"])
			}, [(x(), a("svg", Se, [o("path", { d: Le.value }, null, 8, Ce)]))], 40, xe)) : i("", !0),
			t.maxBtn && !t.maxed ? (x(), a("button", {
				key: 2,
				type: "button",
				class: "my-splitter__handle",
				title: Ne.value,
				onMousedown: r[11] ||= R(() => {}, ["stop"]),
				onClick: R(et, ["stop"])
			}, [(x(), a("svg", Te, [o("path", { d: Me.value }, null, 8, Ee)]))], 40, we)) : i("", !0)
		], 64))], 2)], 34)) : i("", !0)], 34));
	}
}, [["__scopeId", "data-v-378f5e57"]]), Ae = /* @__PURE__ */ new Map(), je = "BorderLayout", Me = "defaultname", Ne = 0;
function Pe(e = "layout") {
	return `${e}_${++Ne}`;
}
function Fe(e, t, n) {
	return `${e}__${t}__${n || "defaultname"}`;
}
function Ie(e, t) {
	e && Ae.set(e, t);
}
function Le(e) {
	e && Ae.delete(e);
}
function Re(e) {
	return e && Ae.get(e) || null;
}
function ze(e) {
	return e ? Ae.has(e) : !1;
}
function Be() {
	return Array.from(Ae.keys());
}
//#endregion
//#region src/mylayout/composables/theme.js
var Ve = Symbol("my-layout-theme"), He = "light", Ue = [
	"light",
	"light-blue",
	"dark"
], We = { blue: "light-blue" };
function Ge(e) {
	if (!e) return "";
	let t = We[e] || e;
	return Ue.includes(t) ? t : He;
}
function Ke(e) {
	let t = Ge(e);
	return t ? `my-layout-theme-${t}` : "";
}
function qe(e) {
	let t = f(Ve, null), r = n(() => Ge(e.theme)), i = n(() => r.value || t?.value || "light");
	return S(Ve, i), {
		own: r,
		resolved: i
	};
}
//#endregion
//#region src/mylayout/components/MyPanel.vue
var Je = {
	key: 0,
	class: "my-panel__title"
}, Ye = {
	key: 0,
	class: "my-panel__icon"
}, Xe = { class: "my-panel__title-text" }, Ze = {
	key: 1,
	class: "my-panel__subtitle"
}, Qe = {
	key: 1,
	class: "my-panel__actions"
}, $e = { class: "my-panel__buttons" }, et = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, tt = ["d"], nt = {
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
}, Q = ["d"], $ = ["title"], at = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, ot = ["d"], st = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, ct = ["d"], lt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, ut = ["d"], dt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, ft = ["d"], pt = {
	key: 1,
	class: "my-panel__footer"
}, mt = /*#__PURE__*/ z({
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
		}, s = e, c = t;
		function u() {
			return {
				region: m.value,
				name: s.name
			};
		}
		let d = w(null), f = w(!1), p = w(!1);
		P(() => s.name, () => {
			f.value = !1;
		});
		let m = w("");
		function h() {
			let e = d.value?.closest?.("[data-region]");
			m.value = e?.dataset?.region || "";
		}
		b(h);
		function _() {
			let e = (d.value?.closest?.("[data-layout-id]") || null)?.dataset?.layoutId;
			return e ? Re(e) : null;
		}
		function y(e, t) {
			let n = _();
			n && typeof n.notifyPanel == "function" && n.notifyPanel(e, m.value, s.name, t);
		}
		let S = n(() => f.value), C = n(() => {
			let e = _(), t = m.value;
			return e && t && typeof e.maxed == "function" ? !!e.maxed(t) : p.value;
		}), T = n(() => S.value ? "展开" : "最小化"), D = n(() => s.min && m.value !== "center");
		function k(e) {
			if (!s.nav) return null;
			let t = _(), n = m.value;
			return !t || !n || typeof t.getUpName != "function" ? null : (e === "up" ? t.getUpName(n, s.name) : t.getDownName(n, s.name)) || null;
		}
		let A = n(() => k("up")), j = n(() => k("down"));
		function M(e) {
			let t = _(), n = m.value;
			t && n && typeof t.up == "function" && t[e === "up" ? "up" : "down"](n, s.name);
		}
		let F = n(() => s.hasTitle || s.min || s.max || s.close || s.refresh || C.value), L = n(() => Ke(s.theme)), z = n(() => s.iconCls || s.icon), ee = n(() => ({
			height: S.value ? "auto" : "100%",
			opacity: s.opacity === "" ? void 0 : Number(s.opacity)
		}));
		function B() {
			if (!D.value) return;
			let e = !S.value, t = _();
			if (t && m.value && typeof t.notifyPanel == "function") {
				t.notifyPanel(e ? "min" : "restore", m.value, s.name);
				return;
			}
			f.value = e, c(e ? "min" : "restore", u());
		}
		function V() {
			let e = _(), t = m.value;
			if (e && t && typeof e.maxed == "function") {
				e.maxed(t) ? e.restore(t) : e.max(t);
				return;
			}
			p.value = !p.value, c(p.value ? "max" : "restore", u());
		}
		function te() {
			c("close", u()), y("close");
		}
		function ne() {
			c("refresh", u()), y("refresh");
		}
		return (t, n) => (x(), a("div", {
			ref_key: "panelEl",
			ref: d,
			class: g(["my-panel", [
				L.value,
				e.panelClass,
				{
					"my-panel--collapsed": S.value,
					"my-panel--noborder": !e.border,
					"my-panel--noscroll": e.noscroll,
					"my-panel--float": e.float,
					"my-panel--maxed": C.value
				}
			]]),
			style: v([ee.value, e.panelStyle])
		}, [
			F.value ? (x(), a("div", {
				key: 0,
				class: g(["my-panel__header", e.headerClass]),
				style: v([{ height: e.headerHeight + "px" }, e.headerStyle]),
				onDblclick: B
			}, [
				E(t.$slots, "leftTool", {}, void 0, !0),
				e.hasTitle ? (x(), a("div", Je, [E(t.$slots, "title", {}, () => [
					z.value ? (x(), a("span", Ye, O(z.value), 1)) : i("", !0),
					o("span", Xe, O(e.title), 1),
					e.hasSubTitle && e.subTitle ? (x(), a("span", Ze, O(e.subTitle), 1)) : i("", !0)
				], !0)])) : i("", !0),
				e.hasTool ? (x(), a("div", Qe, [E(t.$slots, "actions", {}, void 0, !0)])) : i("", !0),
				o("div", $e, [
					A.value ? (x(), a("button", {
						key: 0,
						type: "button",
						class: "my-panel__btn",
						title: "后退",
						onClick: n[0] ||= R((e) => M("up"), ["stop"])
					}, [(x(), a("svg", et, [o("path", { d: r.navBack }, null, 8, tt)]))])) : i("", !0),
					j.value ? (x(), a("button", {
						key: 1,
						type: "button",
						class: "my-panel__btn",
						title: "前进",
						onClick: n[1] ||= R((e) => M("down"), ["stop"])
					}, [(x(), a("svg", nt, [o("path", { d: r.navForward }, null, 8, rt)]))])) : i("", !0),
					e.refresh ? (x(), a("button", {
						key: 2,
						type: "button",
						class: "my-panel__btn",
						title: "刷新",
						onClick: R(ne, ["stop"])
					}, [(x(), a("svg", it, [o("path", { d: r.refresh }, null, 8, Q)]))])) : i("", !0),
					D.value ? (x(), a("button", {
						key: 3,
						type: "button",
						class: "my-panel__btn",
						title: T.value,
						onClick: R(B, ["stop"])
					}, [(x(), a("svg", at, [o("path", { d: S.value ? r.chevronDown : r.minus }, null, 8, ot)]))], 8, $)) : i("", !0),
					e.max && !C.value ? (x(), a("button", {
						key: 4,
						type: "button",
						class: "my-panel__btn",
						title: "最大化",
						onClick: R(V, ["stop"])
					}, [(x(), a("svg", st, [o("path", { d: r.max }, null, 8, ct)]))])) : i("", !0),
					C.value ? (x(), a("button", {
						key: 5,
						type: "button",
						class: "my-panel__btn my-panel__btn--active",
						title: "还原",
						onClick: R(V, ["stop"])
					}, [(x(), a("svg", lt, [o("path", { d: r.restore }, null, 8, ut)]))])) : i("", !0),
					e.close ? (x(), a("button", {
						key: 6,
						type: "button",
						class: "my-panel__btn my-panel__btn--danger",
						title: "关闭",
						onClick: R(te, ["stop"])
					}, [(x(), a("svg", dt, [o("path", { d: r.close }, null, 8, ft)]))])) : i("", !0)
				])
			], 38)) : i("", !0),
			I(o("div", {
				class: g(["my-panel__body", e.bodyClass]),
				style: v([{
					padding: e.bodyPadding,
					overflow: e.noscroll ? "hidden" : e.scroll ? "auto" : "visible"
				}, e.bodyStyle])
			}, [E(t.$slots, "default", {}, void 0, !0)], 6), [[N, !S.value]]),
			e.hasFooter ? (x(), a("div", pt, [E(t.$slots, "footer", {}, () => [l(O(e.footer), 1)], !0)])) : i("", !0)
		], 6));
	}
}, [["__scopeId", "data-v-610101fc"]]), ht = null;
function gt(e) {
	return typeof ht == "function" ? ht(e) : null;
}
function _t(e) {
	return typeof e != "string" || !e ? !1 : /[\\/]/.test(e) || /\.(vue|jsx?|tsx?)$/.test(e);
}
//#endregion
//#region src/mylayout/components/MyPanelContent.vue
var vt = ["src"], yt = ["innerHTML"], bt = /*#__PURE__*/ z({
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
			return typeof e == "string" && _t(e) && gt(e) || e;
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
		return (t, n) => i.value === "component" ? (x(), r(D(o.value), _(m({ key: 0 }, s.value)), null, 16)) : i.value === "url" ? (x(), a("iframe", {
			key: 1,
			class: "my-panel-content__iframe",
			src: c.value,
			frameborder: "0"
		}, null, 8, vt)) : i.value === "html" ? (x(), a("div", {
			key: 2,
			class: "my-panel-content__html",
			innerHTML: e.item.html
		}, null, 8, yt)) : E(t.$slots, "default", {}, void 0, !0, 3);
	}
}, [["__scopeId", "data-v-dc676fbc"]]), xt = ["data-panel"], St = {
	class: "my-tabs__bar",
	role: "tablist"
}, Ct = [
	"title",
	"aria-selected",
	"disabled",
	"onClick",
	"onContextmenu"
], wt = {
	key: 0,
	class: "my-tabs__icon"
}, Tt = { class: "my-tabs__text" }, Et = ["onClick"], Dt = {
	key: 0,
	class: "my-tabs__tool"
}, Ot = { class: "my-tabs__body" }, kt = ["onClick"], At = {
	key: 0,
	class: "my-tabs__menu-icon"
}, jt = 200, Mt = /*#__PURE__*/ z({
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
		], u = t, d = c, f = j(), p = w(null), m = w(""), h = w({}), _ = w({}), S = n(() => u.active || m.value || u.items[0]?.name || ""), C = n(() => Ke(u.theme)), D = n(() => u.hasTool || !!f.tool), k = n(() => u.titleVertical && (u.position === "left" || u.position === "right"));
		function A(e) {
			return e.lazy === !1 || !!h.value[e.name];
		}
		function M(e) {
			return `${e.name}:${_.value[e.name] || 0}:${e.refreshAt || 0}`;
		}
		function L(e) {
			_.value[e] = (_.value[e] || 0) + 1;
		}
		P(S, (e) => {
			let t = u.items.find((t) => t.name === e);
			if (!t) return;
			let n = !!h.value[e];
			h.value[e] = !0, n && t.reload && L(e);
		}, { immediate: !0 });
		let z = w("");
		function ee() {
			z.value = p.value?.closest?.("[data-region]")?.dataset?.region || "";
		}
		b(ee);
		function B() {
			let e = (p.value?.closest?.("[data-layout-id]") || null)?.dataset?.layoutId;
			return e ? Re(e) : null;
		}
		function V(e, t, n) {
			let r = B();
			return !r || typeof r.notifyTab != "function" ? !1 : (r.notifyTab(e, z.value, u.panelName, t, n), !0);
		}
		function te(e) {
			return e?.closable == null ? u.closable : !!e.closable;
		}
		function ne(e) {
			let t = u.items.find((t) => t.name === e);
			return !t || t.disabled ? !1 : (V("change", e) || (m.value = e), d("update:active", e), d("change", {
				name: e,
				item: t
			}), !0);
		}
		function H(e) {
			e.name !== S.value && ne(e.name);
		}
		function re(e) {
			let t = u.items.find((t) => t.name === e);
			return t ? (d("close", {
				name: e,
				item: t
			}), V("close", e)) : !1;
		}
		function U(e, t) {
			t?.stopPropagation?.(), te(e) && re(e.name);
		}
		function W(e) {
			return u.items.some((t) => t.name === e) ? (u.items.filter((t) => t.name !== e).forEach((e) => d("close", {
				name: e.name,
				item: e
			})), V("closeOthers", e)) : !1;
		}
		function G() {
			return u.items.forEach((e) => d("close", {
				name: e.name,
				item: e
			})), V("closeAll", S.value);
		}
		function K(e) {
			let t = e || S.value;
			return t ? (L(t), d("refresh", {
				name: t,
				item: u.items.find((e) => e.name === t) || null
			}), V("refresh", t), !0) : !1;
		}
		let q = w(!1), ie = w(0), ae = w(0), oe = w(""), J = n(() => u.items.find((e) => e.name === oe.value) || null), se = n(() => J.value?.menu || u.menu || l), ce = null;
		function Y() {
			ce &&= (clearTimeout(ce), null);
		}
		function le() {
			Y();
		}
		function ue() {
			Y(), ce = setTimeout(X, jt);
		}
		function de(e, t) {
			let n = se.value.length;
			ie.value = Math.min(e, Math.max(0, window.innerWidth - 150)), ae.value = Math.min(t, Math.max(0, window.innerHeight - n * 30 - 12)), q.value = !0, Y(), window.addEventListener("mousedown", Z, !0), window.addEventListener("keydown", fe, !0), window.addEventListener("scroll", X, !0);
		}
		function X() {
			Y(), q.value && (q.value = !1, window.removeEventListener("mousedown", Z, !0), window.removeEventListener("keydown", fe, !0), window.removeEventListener("scroll", X, !0));
		}
		function Z(e) {
			p.value?.contains(e.target) || X();
		}
		function fe(e) {
			e.key === "Escape" && X();
		}
		y(X);
		function pe(e, t) {
			d("contextmenu", {
				name: e.name,
				item: e,
				event: t
			}), u.contextmenu && (t.preventDefault(), e.disabled || ne(e.name), oe.value = e.name, de(t.clientX, t.clientY));
		}
		function me(e) {
			if (!e || e.disabled) return;
			let t = oe.value, n = J.value;
			if (X(), typeof e.handler == "function") return e.handler({
				name: t,
				item: n
			});
			if (e.name === "close") return re(t);
			if (e.name === "closeOthers") return W(t);
			if (e.name === "closeAll") return G();
			if (e.name === "refresh") return K(t);
			d("menu-select", {
				action: e.name,
				name: t,
				item: n
			}), V("menu", t, e.name);
		}
		return s({
			setActive: ne,
			close: re,
			closeOthers: W,
			closeAll: G,
			refresh: K,
			closeMenu: X
		}), (n, s) => (x(), a("div", {
			ref_key: "tabsEl",
			ref: p,
			class: g(["my-tabs", [
				C.value,
				t.tabsClass,
				`my-tabs--${t.position}`,
				k.value && "my-tabs--title-v"
			]]),
			"data-panel": t.panelName
		}, [
			o("div", St, [(x(!0), a(e, null, T(t.items, (e) => (x(), a("button", {
				key: e.name,
				type: "button",
				role: "tab",
				class: g(["my-tabs__item", {
					"my-tabs__item--active": e.name === S.value,
					"my-tabs__item--disabled": e.disabled
				}]),
				title: e.title || e.name,
				"aria-selected": String(e.name === S.value),
				disabled: e.disabled,
				onClick: (t) => H(e),
				onContextmenu: (t) => pe(e, t)
			}, [
				e.iconCls ? (x(), a("span", wt, O(e.iconCls), 1)) : i("", !0),
				o("span", Tt, O(e.title || e.name), 1),
				te(e) ? (x(), a("svg", {
					key: 1,
					class: "my-tabs__close",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "1.8",
					"stroke-linecap": "round",
					onClick: (t) => U(e, t)
				}, [...s[1] ||= [o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)]], 8, Et)) : i("", !0)
			], 42, Ct))), 128)), D.value ? (x(), a("div", Dt, [E(n.$slots, "tool", {}, void 0, !0)])) : i("", !0)]),
			o("div", Ot, [(x(!0), a(e, null, T(t.items, (e) => I((x(), a("div", {
				key: e.name,
				class: "my-tabs__pane"
			}, [A(e) ? (x(), r(bt, {
				key: M(e),
				item: e
			}, {
				default: F(() => [E(n.$slots, `tab:${e.name}`, { item: e }, () => [E(n.$slots, e.name, { item: e }, void 0, !0)], !0)]),
				_: 2
			}, 1032, ["item"])) : i("", !0)])), [[N, e.name === S.value]])), 128)), t.items.length ? i("", !0) : E(n.$slots, "empty", {}, void 0, !0, 0)]),
			q.value ? E(n.$slots, "menu", {
				items: se.value,
				item: J.value,
				run: me,
				close: X
			}, () => [o("ul", {
				class: "my-tabs__menu",
				style: v({
					left: `${ie.value}px`,
					top: `${ae.value}px`
				}),
				onContextmenu: s[0] ||= R(() => {}, ["prevent"]),
				onMouseenter: le,
				onMouseleave: ue
			}, [(x(!0), a(e, null, T(se.value, (e) => (x(), a("li", {
				key: e.name,
				class: g(["my-tabs__menu-item", {
					"my-tabs__menu-item--divided": e.divided,
					"my-tabs__menu-item--disabled": e.disabled
				}]),
				onClick: (t) => me(e)
			}, [e.iconCls ? (x(), a("span", At, O(e.iconCls), 1)) : i("", !0), o("span", null, O(e.title || e.name), 1)], 10, kt))), 128))], 36)], !0, 0) : i("", !0)
		], 10, xt));
	}
}, [["__scopeId", "data-v-74605ae0"]]), Nt = /* @__PURE__ */ "title.iconCls.hasTitle.hasSubTitle.subTitle.hasTool.hasFooter.footer.border.scroll.noscroll.opacity.headerHeight.bodyPadding.panelClass.headerClass.bodyClass.panelStyle.headerStyle.bodyStyle.theme.min.max.close.refresh.nav".split("."), Pt = Object.freeze({
	north: !0,
	south: !0,
	west: !0,
	east: !1,
	center: !0
}), Ft = Object.freeze({
	north: 56,
	south: 32,
	west: 220,
	east: 260
}), It = {
	1: "page",
	2: "layout",
	3: "center"
}, Lt = Object.freeze({
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
function Rt(e) {
	return e === "" || e == null ? "" : It[e] ? It[e] : e;
}
function zt(e = {}, t = Lt) {
	let n = {
		...t,
		...e || {}
	};
	return !n.iconCls && e.icon && (n.iconCls = e.icon), n.maxType = Rt(n.maxType), n;
}
function Bt(e = {}, t = "") {
	let n = {};
	for (let t of Nt) e[t] !== void 0 && (n[t] = e[t]);
	return e.name && (n.name = e.name), n;
}
//#endregion
//#region src/mylayout/components/MyBorderLayout.vue
var Vt = [
	"data-layout-id",
	"data-mt",
	"data-mt-north",
	"data-mt-south",
	"data-mt-west",
	"data-mt-east",
	"data-mt-center",
	"data-animate",
	"data-anim-duration"
], Ht = {
	key: 0,
	class: "my-region-panel-body"
}, Ut = {
	key: 0,
	class: "my-region-panel-body"
}, Wt = {
	class: "my-bl__center",
	"data-region": "center"
}, Gt = {
	key: 0,
	class: "my-region-panel-body"
}, Kt = {
	key: 0,
	class: "my-region-panel-body"
}, qt = {
	key: 0,
	class: "my-region-panel-body"
}, Jt = /*#__PURE__*/ z({
	__name: "MyBorderLayout",
	props: {
		layoutId: {
			type: String,
			default: je
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
		let u = t, { own: d } = qe(u), f = n(() => Ke(d.value)), p = l;
		function S(e, t, n) {
			return {
				region: e,
				name: t ?? null,
				layoutId: u.layoutId,
				...n || {}
			};
		}
		let T = [
			"north",
			"south",
			"west",
			"east",
			"center"
		], D = [
			"north",
			"south",
			"west",
			"east"
		], O = [
			"center",
			"layout",
			"page"
		];
		function k(e) {
			let t = {};
			for (let n of T) {
				let r = e?.[n];
				if (!r) {
					t[n] = {
						active: null,
						panels: [],
						show: Pt[n]
					};
					continue;
				}
				let i = r.show == null ? Pt[n] : !!r.show, a = (r.panels || []).map((e, t) => zt({
					...e,
					name: e.name || `defaultname_${t}`,
					region: e.region || n
				}, Lt));
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
		let j = w(k(u.regions)), M = !1;
		P(() => u.regions, (e) => {
			if (M) return;
			let t = k(e);
			JSON.stringify(t) !== JSON.stringify(j.value) && (j.value = t);
		}, { deep: !0 }), P(j, (e) => {
			M = !0, p("update:regions", e), h(() => {
				M = !1;
			});
		}, { deep: !0 });
		function N(e) {
			return j.value[e] || {
				active: null,
				panels: [],
				show: Pt[e]
			};
		}
		function I(e) {
			return N(e).panels || [];
		}
		function L(e) {
			let t = N(e);
			return t.active ? t.active : t.panels?.[0]?.name ?? null;
		}
		function R(e) {
			let t = L(e);
			return I(e).find((e) => e.name === t) || {};
		}
		function z(e, t) {
			return I(e).find((e) => e.name === t) || null;
		}
		function ee(e) {
			return I(e).filter((e) => !e.hidden && e.show !== !1);
		}
		function B(e) {
			return I(e).length > 0;
		}
		function V(e, t) {
			let n = z(e, t || $(e));
			return n?.parentName && z(e, n.parentName) ? n.parentName : null;
		}
		function te(e, t) {
			let n = t || $(e), r = I(e).filter((e) => e.parentName === n);
			if (!r.length) return null;
			let i = z(e, n)?.lastName;
			return (r.find((e) => e.name === i && !e.hidden) || r.find((e) => !e.hidden) || r[0]).name;
		}
		function ne(e, t) {
			if (!t?.parentName) return;
			let n = z(e, t.parentName);
			n && n.lastName !== t.name && (n.lastName = t.name);
		}
		function H(e, t) {
			let n = t?.parentName ? z(e, t.parentName) : null;
			return n ? (n.hidden = !1, _t(e, n.name), !0) : !1;
		}
		function re(e) {
			let t = u.regions?.[e]?.panels;
			if (!t || !t.length) return {};
			let n = L(e);
			return t.find((e) => (e.name || "") === n) || t[0] || {};
		}
		function U(e) {
			let t = Bt(R(e), e);
			return t.border === void 0 && (t.border = u.border), e === "center" && (t.min = !1), t;
		}
		function W(e) {
			let t = R(e)?.tab;
			return t && typeof t == "object" ? t : null;
		}
		function G(e) {
			let t = W(e);
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
				panelName: L(e) || ""
			} : null;
		}
		function K(e) {
			let t = re(e);
			return t.split != null && !!t.split;
		}
		function q(e) {
			let t = re(e);
			return t.collapsible == null ? K(e) : !!t.collapsible;
		}
		function ie(e) {
			let t = R(e);
			return t.max != null && !!t.max;
		}
		function ae(e) {
			let t = R(e);
			return t.border == null ? u.border : !!t.border;
		}
		function oe(e) {
			return Rt(R(e).maxType) || be(e);
		}
		function J(e) {
			let t = R(e), n = Number(t.initSize || (e === "west" || e === "east" ? t.width : t.height));
			return Number.isFinite(n) && n > 0 ? n : Ft[e];
		}
		function se(e) {
			return D.includes(e) ? !!R(e).float : !1;
		}
		let ce = n(() => D.filter(se).map((e) => `my-bl--float-${e}`).join(" ")), Y = C({
			north: J("north"),
			south: J("south"),
			west: J("west"),
			east: J("east")
		});
		P(() => T.map((e) => J(e)).join(","), () => {
			for (let e of D) Y[e] !== J(e) && (Y[e] = J(e));
		}, { immediate: !0 });
		let le = {
			"north-south": "ns",
			"west-east": "ew",
			"north-west-south": "nws",
			"north-west-east": "nwe",
			1: "ns",
			2: "ew",
			3: "nws",
			4: "nwe"
		}, ue = n(() => le[u.regionLevel] || u.regionLevel || "ns");
		function de(e) {
			return !Te(e);
		}
		let X = w(null), Z = w("center"), fe = {
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
			return Rt(u.regions?.[e]?.maxType) || Rt(u.maxType) || "center";
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
			return T.forEach((e) => {
				n[e] = !1;
			}), (t[e] || []).forEach((e) => {
				n[e] = !0;
			}), n;
		}
		function Se(e) {
			return e === "center" || B(e) || !!N(e).show;
		}
		let Ce = n(() => ve() ? xe(X.value) : {});
		function we(e) {
			if (!B(e)) return !0;
			let t = z(e, L(e));
			return !!t && !t.hidden;
		}
		function Te(e) {
			if (ve()) {
				if (Ce.value[e]) return !1;
				if (e === X.value) return !0;
			}
			return e === "center" || Se(e) && we(e);
		}
		let Ee = n(() => Te("north")), De = n(() => Te("south")), Oe = n(() => Te("west")), Ae = n(() => Te("east"));
		function je(e) {
			return {
				north: Ee,
				south: De,
				west: Oe,
				east: Ae,
				center: w(!0)
			}[e].value;
		}
		function Me(e) {
			return de(e) || ve() && Ce.value[e] ? 0 : Y[e];
		}
		let Ne = n(() => Me("north")), Pe = n(() => Me("south")), ze = n(() => Me("west")), Be = n(() => Me("east"));
		function Ve(e) {
			if (ye(e)) return null;
			let t = {
				north: Ne,
				south: Pe,
				west: ze,
				east: Be
			}[e].value;
			return e === "west" || e === "east" ? { width: t + "px" } : { height: t + "px" };
		}
		let He = n(() => Ve("north")), Ue = n(() => Ve("south")), We = n(() => Ve("west")), Ge = n(() => Ve("east"));
		function Je(e) {
			return Se(e) ? K(e) || q(e) || ie(e) : !1;
		}
		function Ye(e) {
			return !je(e);
		}
		let Xe = w(!1);
		function Ze(e, t) {
			Xe.value = !0, t.setStartSize(Y[e]);
		}
		function Qe(e, t) {
			Y[e] = t, p("split", {
				...S(e),
				size: t
			}), p("update:sizes", { ...Y });
		}
		function $e() {
			Xe.value = !1;
		}
		function et(e) {
			return de(e) ? _t(e) : vt(e);
		}
		async function tt(e, t) {
			if (!T.includes(e) || (t ||= oe(e), O.includes(t) || (t = "center"), X.value === e && Z.value === t)) return;
			let n = me(e);
			X.value && X.value !== e && nt(X.value), X.value = e, Z.value = t, D.includes(e) && de(e) && _t(e), p("max", {
				...S(e, L(e)),
				mode: t
			}), await h(), _e(e, n);
		}
		function nt(e) {
			if (X.value !== e) return;
			let t = me(e);
			X.value = null, Z.value = "center", p("restore", S(e, L(e))), h(() => _e(e, t));
		}
		function rt(e, t) {
			ye(e) ? nt(e) : tt(e, t);
		}
		function it(e) {
			e.key === "Escape" && X.value && nt(X.value);
		}
		function Q(e) {
			return !e || e === u.layoutId ? null : Re(e);
		}
		function $(e, t) {
			let n = Q(t);
			return n ? n.getCurName(e) : L(e);
		}
		function at(e, t, n) {
			let r = Q(n);
			return r ? r.getItem(e, t) : z(e, t || $(e));
		}
		function ot(e, t, n) {
			let r = Q(n);
			return r ? r.exist(e, t) : !!z(e, t || $(e));
		}
		function st(e, t, n) {
			let r = Q(n);
			if (r) return r.isActive(e, t);
			let i = t || $(e);
			return !!i && i === L(e) && !de(e);
		}
		function ct(e, t) {
			let n = Q(t);
			return n ? n.getPanels(e) : [...I(e)];
		}
		function lt(e, t, n, r) {
			let i = Q(n);
			if (i) return i.open(e, t);
			if (!T.includes(e)) return null;
			let a = t?.name || "defaultname", o = z(e, a);
			return o ? Object.assign(o, t, { hidden: !1 }) : j.value[e].panels.push({
				...t,
				name: a
			}), j.value[e].active = a, p("show", S(e, a, r)), z(e, a);
		}
		function ut(e, t) {
			let n = Q(t);
			return n ? n.removeActive(e) : dt(e, $(e), t);
		}
		function dt(e, t, n) {
			let r = Q(n);
			if (r) return r.remove(e, t);
			let i = t || $(e), a = j.value[e].panels, o = a.findIndex((e) => e.name === i);
			if (o === -1) return !1;
			let s = a[o];
			return a.splice(o, 1), p("close", S(e, i)), j.value[e].active === i && (H(e, s) || (j.value[e].active = ee(e)[0]?.name || a[0]?.name || null)), !0;
		}
		function ft(e, t) {
			let n = Q(t);
			if (n) return n.removeAll(e);
			j.value[e].panels.splice(0, j.value[e].panels.length), j.value[e].active = null, D.includes(e) && (j.value[e].show = !1);
		}
		function pt(e) {
			return I(e).filter((e) => !e.hidden && e.show !== !1);
		}
		function ht(e) {
			return pt(e)[0]?.name || ee(e)[0]?.name || I(e)[0]?.name || null;
		}
		function gt(e, t, n) {
			if (!t) return;
			let r = n || $(t);
			return e === "min" ? vt(t, r) : e === "close" ? dt(t, r) : e === "max" ? nn(t, r) : e === "restore" ? rn(t, r) : e === "refresh" && en(t, r);
		}
		function _t(e, t, n, r) {
			let i = Q(n);
			if (i) return i.show(e, t);
			if (!T.includes(e)) return !1;
			if (!B(e)) return e === "center" || j.value[e].show ? !!j.value[e].show : (j.value[e].show = !0, !0);
			let a = t || L(e) || ht(e), o = z(e, a);
			return o ? (o.hidden = !1, ne(e, o), j.value[e].active = a, p("show", S(e, a, r)), !0) : !1;
		}
		function vt(e, t, n) {
			let r = Q(n);
			if (r) return r.hide(e, t);
			if (!T.includes(e)) return !1;
			if (!B(e)) return e === "center" || !j.value[e].show ? !!j.value[e].show : (j.value[e].show = !1, !0);
			let i = t || L(e) || ht(e), a = z(e, i);
			return a ? (a.hidden = !0, p("hide", S(e, i)), L(e) === i && H(e, a), !0) : !1;
		}
		function yt(e, t) {
			let n = Q(t);
			return n ? n.isVisible(e) : T.includes(e) ? Te(e) : !1;
		}
		function xt(e, t, n) {
			let r = Q(n);
			if (r) return r.getPrevName(e, t);
			let i = ee(e), a = t || $(e), o = i.findIndex((e) => e.name === a);
			return o <= 0 ? i[i.length - 1]?.name || null : i[o - 1].name;
		}
		function St(e, t, n) {
			let r = Q(n);
			if (r) return r.getNextName(e, t);
			let i = ee(e), a = t || $(e), o = i.findIndex((e) => e.name === a);
			return o === -1 || o === i.length - 1 ? i[0]?.name || null : i[o + 1].name;
		}
		function Ct(e, t, n) {
			return _t(e, xt(e, t, n), n);
		}
		function wt(e, t, n) {
			return _t(e, St(e, t, n), n);
		}
		function Tt(e, t, n) {
			let r = Q(n);
			return r ? r.getUpName(e, t) : V(e, t);
		}
		function Et(e, t, n) {
			let r = Q(n);
			return r ? r.getDownName(e, t) : te(e, t);
		}
		function Dt(e, t, n) {
			let r = Q(n);
			if (r) return r.up(e, t);
			let i = V(e, t);
			return i ? _t(e, i, n) : !1;
		}
		function Ot(e, t, n) {
			let r = Q(n);
			if (r) return r.down(e, t);
			let i = te(e, t);
			return i ? _t(e, i, n) : !1;
		}
		let kt = [
			"position",
			"hasTool",
			"contextmenu",
			"titleVertical",
			"tabsClass"
		];
		function At(e = {}, t = []) {
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
		function jt(e = {}) {
			let t = { ...e };
			return kt.forEach((e) => delete t[e]), t;
		}
		function Nt(e, t, n, r) {
			let i = Q(r);
			if (i) return i.openTab(e, t, n);
			if (!T.includes(t)) return null;
			let a = n || $(t) || "defaultname", o = z(t, a);
			if (!o) {
				let n = [{
					...jt(e),
					name: e?.name || "defaultname"
				}], i = lt(t, {
					name: a,
					tab: At(e, n)
				}, r, { tab: n[0].name });
				return i ? i.tab.items[0] : null;
			}
			(!o.tab || typeof o.tab != "object") && (o.tab = {}), Array.isArray(o.tab.items) || (o.tab.items = []);
			let s = e?.name || `tab_${o.tab.items.length + 1}`, c = o.tab.items.find((e) => e.name === s);
			return c ? Object.assign(c, e, { name: s }) : o.tab.items.push({
				...e,
				name: s
			}), o.tab.active = s, _t(t, a, r, { tab: s }), o.tab.items.find((e) => e.name === s);
		}
		function It(e, t, n, r) {
			let i = Q(r);
			if (i) return i.setActiveTab(e, t, n);
			let a = z(t, n || $(t)), o = a?.tab;
			return !o || !Array.isArray(o.items) || !o.items.some((t) => t.name === e) ? !1 : (o.active = e, p("show", S(t, a.name, { tab: e })), !0);
		}
		function Jt(e, t, n, r) {
			let i = Q(r);
			if (i) return i.closeTab(e, t, n);
			let a = z(t, n || $(t)), o = a?.tab;
			if (!o || !Array.isArray(o.items)) return !1;
			let s = o.items.findIndex((t) => t.name === e);
			return s !== -1 && (o.items.splice(s, 1), o.active === e && (o.active = (o.items[s] || o.items[s - 1] || {}).name || ""), p("close", S(t, a.name, { tab: e })), !0);
		}
		function Yt(e, t, n) {
			let r = Q(n);
			if (r) return r.getTabs(e, t);
			let i = z(e, t || $(e))?.tab;
			return Array.isArray(i?.items) ? [...i.items] : [];
		}
		function Xt(e, t, n) {
			let r = Q(n);
			return r ? r.getActiveTab(e, t) : z(e, t || $(e))?.tab?.active || "";
		}
		function Zt(e, t, n, r) {
			let i = Q(r);
			if (i) return i.closeOtherTabs(e, t, n);
			let a = z(t, n || $(t)), o = a?.tab;
			if (!o || !Array.isArray(o.items)) return !1;
			let s = o.items.find((t) => t.name === e);
			if (!s) return !1;
			let c = o.items.filter((e) => e !== s);
			return c.length ? (o.items = [s], o.active = s.name, c.forEach((e) => p("close", S(t, a.name, { tab: e.name }))), !0) : !1;
		}
		function Qt(e, t, n) {
			let r = Q(n);
			if (r) return r.closeAllTabs(e, t);
			let i = z(e, t || $(e)), a = i?.tab;
			if (!a || !Array.isArray(a.items) || !a.items.length) return !1;
			let o = a.items.map((e) => e.name);
			return a.items = [], a.active = "", o.forEach((t) => p("close", S(e, i.name, { tab: t }))), !0;
		}
		function $t(e, t, n, r) {
			let i = Q(r);
			if (i) return i.refreshTab(e, t, n);
			let a = z(t, n || $(t)), o = a?.tab;
			if (!o || !Array.isArray(o.items)) return !1;
			let s = e || o.active || "", c = o.items.find((e) => e.name === s);
			return c ? (c.refreshAt = Date.now(), p("refresh", S(t, a.name, { tab: s })), !0) : !1;
		}
		function en(e, t, n) {
			let r = Q(n);
			if (r) return r.refresh(e, t);
			if (!T.includes(e)) return !1;
			let i = z(e, t || $(e));
			if (!i) return !1;
			let a = i.tab;
			return a && Array.isArray(a.items) && a.items.length ? $t(a.active || a.items[0].name, e, i.name) : (p("refresh", S(e, i.name)), !0);
		}
		function tn(e, t, n, r, i) {
			if (!t) return !1;
			if (e === "change") return It(r, t, n);
			if (e === "close") return Jt(r, t, n);
			if (e === "closeOthers") return Zt(r, t, n);
			if (e === "closeAll") return Qt(t, n);
			if (e === "refresh") return $t(r, t, n);
			if (e === "menu") {
				let e = z(t, n || $(t));
				return p("menu-select", S(t, e?.name ?? n, {
					tab: r,
					action: i
				})), !0;
			}
			return !1;
		}
		function nn(e, t, n) {
			let r = Q(n);
			return r ? r.max(e, t) : tt(e, Rt(z(e, t || $(e))?.maxType) || be(e));
		}
		function rn(e, t, n) {
			let r = Q(n);
			return r ? r.restore(e, t) : nt(e);
		}
		function an(e, t, n) {
			let r = Q(n);
			if (r) return r.setSize(e, t);
			Y[e] != null && (Y[e] = t, p("update:sizes", { ...Y }));
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
			return Fe(u.layoutId, e, t || $(e));
		}
		let un = w(null), dn = w(null), fn = {
			getCurName: $,
			getItem: at,
			exist: ot,
			isActive: st,
			getPanels: ct,
			open: lt,
			remove: dt,
			removeActive: ut,
			removeAll: ft,
			show: _t,
			hide: vt,
			isVisible: yt,
			prev: Ct,
			next: wt,
			getPrevName: xt,
			getNextName: St,
			up: Dt,
			down: Ot,
			getUpName: Tt,
			getDownName: Et,
			max: nn,
			restore: rn,
			maxed: ye,
			setSize: an,
			resize: on,
			openTab: Nt,
			closeTab: Jt,
			closeOtherTabs: Zt,
			closeAllTabs: Qt,
			setActiveTab: It,
			refreshTab: $t,
			getTabs: Yt,
			getActiveTab: Xt,
			refresh: en,
			notifyPanel: gt,
			notifyTab: tn,
			tabPropsOf: G,
			getLayoutId: sn,
			getParentLayoutId: cn,
			getChildLayoutId: ln,
			panelPropsOf: U,
			getSizes: () => ({ ...Y }),
			getRootEl: () => un.value,
			getPanelLayerEl: () => dn.value,
			getRegionItem: (e) => R(e)
		};
		c(fn);
		function pn() {}
		return b(() => {
			Ie(u.layoutId, fn), window.addEventListener("resize", pn), document.addEventListener("keydown", it), p("ready", fn);
		}), y(() => {
			Le(u.layoutId), window.removeEventListener("resize", pn), document.removeEventListener("keydown", it), ge();
		}), (n, c) => (x(), a("div", {
			ref_key: "rootEl",
			ref: un,
			class: g(["my-layout-root my-border-layout", [
				f.value,
				`my-bl--level-${ue.value}`,
				{ "my-bl--dragging": Xe.value },
				ce.value,
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
			Ee.value ? (x(), a("header", {
				key: 0,
				class: g(["my-bl__north", {
					"my-bl--region-max": ye("north"),
					"my-bl--noborder": !ae("north")
				}]),
				"data-region": "north",
				style: v(He.value)
			}, [t.autoPanel && B("north") ? (x(), r(mt, _(m({ key: 0 }, U("north"))), {
				default: F(() => [G("north") ? (x(), r(Mt, m({ key: 0 }, G("north"), { theme: t.theme }), s({ _: 2 }, [n.$slots["tab-tool"] ? {
					name: "tool",
					fn: F(() => [E(n.$slots, "tab-tool", {
						region: "north",
						item: R("north"),
						tabs: W("north")?.items || []
					}, void 0, !0)]),
					key: "0"
				} : void 0]), 1040, ["theme"])) : (x(), r(bt, {
					key: 1,
					item: R("north")
				}, {
					default: F(() => [E(n.$slots, `north:${L("north")}`, {
						item: R("north"),
						panelProps: U("north")
					}, void 0, !0)]),
					_: 3
				}, 8, ["item"]))]),
				_: 3
			}, 16)) : B("north") ? (x(), a(e, { key: 1 }, [L("north") ? (x(), a("div", Ht, [G("north") ? (x(), r(Mt, m({ key: 0 }, G("north"), { theme: t.theme }), s({ _: 2 }, [n.$slots["tab-tool"] ? {
				name: "tool",
				fn: F(() => [E(n.$slots, "tab-tool", {
					region: "north",
					item: R("north"),
					tabs: W("north")?.items || []
				}, void 0, !0)]),
				key: "0"
			} : void 0]), 1040, ["theme"])) : (x(), r(bt, {
				key: 1,
				item: R("north")
			}, {
				default: F(() => [E(n.$slots, `north:${L("north")}`, {
					item: R("north"),
					panelProps: U("north")
				}, () => [E(n.$slots, "north", {
					item: R("north"),
					panelProps: U("north")
				}, void 0, !0)], !0)]),
				_: 3
			}, 8, ["item"]))])) : i("", !0)], 64)) : E(n.$slots, "north", {
				item: R("north"),
				panelProps: U("north")
			}, void 0, !0, 2)], 6)) : i("", !0),
			Je("north") ? (x(), r(ke, {
				key: 1,
				class: "my-bl__split-north",
				direction: "h-top",
				variant: t.splitterVariant,
				min: 24,
				max: 200,
				split: K("north"),
				collapsible: q("north"),
				"max-btn": ie("north"),
				maxed: ye("north"),
				collapsed: de("north"),
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
			Oe.value ? (x(), a("aside", {
				key: 2,
				class: g(["my-bl__west", {
					"my-bl--region-max": ye("west"),
					"my-bl--noborder": !ae("west")
				}]),
				"data-region": "west",
				style: v(We.value)
			}, [t.autoPanel && B("west") ? (x(), r(mt, _(m({ key: 0 }, U("west"))), {
				default: F(() => [G("west") ? (x(), r(Mt, m({ key: 0 }, G("west"), { theme: t.theme }), s({ _: 2 }, [n.$slots["tab-tool"] ? {
					name: "tool",
					fn: F(() => [E(n.$slots, "tab-tool", {
						region: "west",
						item: R("west"),
						tabs: W("west")?.items || []
					}, void 0, !0)]),
					key: "0"
				} : void 0]), 1040, ["theme"])) : (x(), r(bt, {
					key: 1,
					item: R("west")
				}, {
					default: F(() => [E(n.$slots, `west:${L("west")}`, {
						item: R("west"),
						panelProps: U("west")
					}, void 0, !0)]),
					_: 3
				}, 8, ["item"]))]),
				_: 3
			}, 16)) : B("west") ? (x(), a(e, { key: 1 }, [L("west") ? (x(), a("div", Ut, [G("west") ? (x(), r(Mt, m({ key: 0 }, G("west"), { theme: t.theme }), s({ _: 2 }, [n.$slots["tab-tool"] ? {
				name: "tool",
				fn: F(() => [E(n.$slots, "tab-tool", {
					region: "west",
					item: R("west"),
					tabs: W("west")?.items || []
				}, void 0, !0)]),
				key: "0"
			} : void 0]), 1040, ["theme"])) : (x(), r(bt, {
				key: 1,
				item: R("west")
			}, {
				default: F(() => [E(n.$slots, `west:${L("west")}`, {
					item: R("west"),
					panelProps: U("west")
				}, () => [E(n.$slots, "west", {
					item: R("west"),
					panelProps: U("west")
				}, void 0, !0)], !0)]),
				_: 3
			}, 8, ["item"]))])) : i("", !0)], 64)) : E(n.$slots, "west", {
				item: R("west"),
				panelProps: U("west")
			}, void 0, !0, 2)], 6)) : i("", !0),
			Je("west") ? (x(), r(ke, {
				key: 3,
				class: "my-bl__split-west",
				direction: "v-left",
				variant: t.splitterVariant,
				min: A(64),
				max: 800,
				split: K("west"),
				collapsible: q("west"),
				"max-btn": ie("west"),
				maxed: ye("west"),
				collapsed: de("west"),
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
			o("main", Wt, [t.autoPanel && B("center") ? (x(), r(mt, _(m({ key: 0 }, U("center"))), {
				default: F(() => [G("center") ? (x(), r(Mt, m({ key: 0 }, G("center"), { theme: t.theme }), s({ _: 2 }, [n.$slots["tab-tool"] ? {
					name: "tool",
					fn: F(() => [E(n.$slots, "tab-tool", {
						region: "center",
						item: R("center"),
						tabs: W("center")?.items || []
					}, void 0, !0)]),
					key: "0"
				} : void 0]), 1040, ["theme"])) : (x(), r(bt, {
					key: 1,
					item: R("center")
				}, {
					default: F(() => [E(n.$slots, `center:${L("center")}`, {
						item: R("center"),
						panelProps: U("center")
					}, void 0, !0)]),
					_: 3
				}, 8, ["item"]))]),
				_: 3
			}, 16)) : B("center") ? (x(), a(e, { key: 1 }, [L("center") ? (x(), a("div", Gt, [G("center") ? (x(), r(Mt, m({ key: 0 }, G("center"), { theme: t.theme }), s({ _: 2 }, [n.$slots["tab-tool"] ? {
				name: "tool",
				fn: F(() => [E(n.$slots, "tab-tool", {
					region: "center",
					item: R("center"),
					tabs: W("center")?.items || []
				}, void 0, !0)]),
				key: "0"
			} : void 0]), 1040, ["theme"])) : (x(), r(bt, {
				key: 1,
				item: R("center")
			}, {
				default: F(() => [E(n.$slots, `center:${L("center")}`, {
					item: R("center"),
					panelProps: U("center")
				}, () => [E(n.$slots, "default", {
					item: R("center"),
					panelProps: U("center")
				}, void 0, !0)], !0)]),
				_: 3
			}, 8, ["item"]))])) : i("", !0)], 64)) : E(n.$slots, "default", {}, void 0, !0, 2)]),
			Je("east") ? (x(), r(ke, {
				key: 4,
				class: "my-bl__split-east",
				direction: "v-right",
				variant: t.splitterVariant,
				min: 60,
				max: 800,
				split: K("east"),
				collapsible: q("east"),
				"max-btn": ie("east"),
				maxed: ye("east"),
				collapsed: de("east"),
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
			Ae.value ? (x(), a("aside", {
				key: 5,
				class: g(["my-bl__east", {
					"my-bl--region-max": ye("east"),
					"my-bl--noborder": !ae("east")
				}]),
				"data-region": "east",
				style: v(Ge.value)
			}, [t.autoPanel && B("east") ? (x(), r(mt, _(m({ key: 0 }, U("east"))), {
				default: F(() => [G("east") ? (x(), r(Mt, m({ key: 0 }, G("east"), { theme: t.theme }), s({ _: 2 }, [n.$slots["tab-tool"] ? {
					name: "tool",
					fn: F(() => [E(n.$slots, "tab-tool", {
						region: "east",
						item: R("east"),
						tabs: W("east")?.items || []
					}, void 0, !0)]),
					key: "0"
				} : void 0]), 1040, ["theme"])) : (x(), r(bt, {
					key: 1,
					item: R("east")
				}, {
					default: F(() => [E(n.$slots, `east:${L("east")}`, {
						item: R("east"),
						panelProps: U("east")
					}, void 0, !0)]),
					_: 3
				}, 8, ["item"]))]),
				_: 3
			}, 16)) : B("east") ? (x(), a(e, { key: 1 }, [L("east") ? (x(), a("div", Kt, [G("east") ? (x(), r(Mt, m({ key: 0 }, G("east"), { theme: t.theme }), s({ _: 2 }, [n.$slots["tab-tool"] ? {
				name: "tool",
				fn: F(() => [E(n.$slots, "tab-tool", {
					region: "east",
					item: R("east"),
					tabs: W("east")?.items || []
				}, void 0, !0)]),
				key: "0"
			} : void 0]), 1040, ["theme"])) : (x(), r(bt, {
				key: 1,
				item: R("east")
			}, {
				default: F(() => [E(n.$slots, `east:${L("east")}`, {
					item: R("east"),
					panelProps: U("east")
				}, () => [E(n.$slots, "east", {
					item: R("east"),
					panelProps: U("east")
				}, void 0, !0)], !0)]),
				_: 3
			}, 8, ["item"]))])) : i("", !0)], 64)) : E(n.$slots, "east", {
				item: R("east"),
				panelProps: U("east")
			}, void 0, !0, 2)], 6)) : i("", !0),
			Je("south") ? (x(), r(ke, {
				key: 6,
				class: "my-bl__split-south",
				direction: "h-bottom",
				variant: t.splitterVariant,
				min: 16,
				max: 120,
				split: K("south"),
				collapsible: q("south"),
				"max-btn": ie("south"),
				maxed: ye("south"),
				collapsed: de("south"),
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
			De.value ? (x(), a("footer", {
				key: 7,
				class: g(["my-bl__south", {
					"my-bl--region-max": ye("south"),
					"my-bl--noborder": !ae("south")
				}]),
				"data-region": "south",
				style: v(Ue.value)
			}, [t.autoPanel && B("south") ? (x(), r(mt, _(m({ key: 0 }, U("south"))), {
				default: F(() => [G("south") ? (x(), r(Mt, m({ key: 0 }, G("south"), { theme: t.theme }), s({ _: 2 }, [n.$slots["tab-tool"] ? {
					name: "tool",
					fn: F(() => [E(n.$slots, "tab-tool", {
						region: "south",
						item: R("south"),
						tabs: W("south")?.items || []
					}, void 0, !0)]),
					key: "0"
				} : void 0]), 1040, ["theme"])) : (x(), r(bt, {
					key: 1,
					item: R("south")
				}, {
					default: F(() => [E(n.$slots, `south:${L("south")}`, {
						item: R("south"),
						panelProps: U("south")
					}, void 0, !0)]),
					_: 3
				}, 8, ["item"]))]),
				_: 3
			}, 16)) : B("south") ? (x(), a(e, { key: 1 }, [L("south") ? (x(), a("div", qt, [G("south") ? (x(), r(Mt, m({ key: 0 }, G("south"), { theme: t.theme }), s({ _: 2 }, [n.$slots["tab-tool"] ? {
				name: "tool",
				fn: F(() => [E(n.$slots, "tab-tool", {
					region: "south",
					item: R("south"),
					tabs: W("south")?.items || []
				}, void 0, !0)]),
				key: "0"
			} : void 0]), 1040, ["theme"])) : (x(), r(bt, {
				key: 1,
				item: R("south")
			}, {
				default: F(() => [E(n.$slots, `south:${L("south")}`, {
					item: R("south"),
					panelProps: U("south")
				}, () => [E(n.$slots, "south", {
					item: R("south"),
					panelProps: U("south")
				}, void 0, !0)], !0)]),
				_: 3
			}, 8, ["item"]))])) : i("", !0)], 64)) : E(n.$slots, "south", {
				item: R("south"),
				panelProps: U("south")
			}, void 0, !0, 2)], 6)) : i("", !0),
			o("div", {
				ref_key: "panelLayerEl",
				ref: dn,
				class: "my-bl__panel-layer"
			}, null, 512)
		], 10, Vt));
	}
}, [["__scopeId", "data-v-6521c1ee"]]), Yt = ["data-layout-id"], Xt = ["data-region"], Zt = 12, Qt = 24, $t = 4e3, en = /*#__PURE__*/ z({
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
		let c = t, l = n(() => c.layoutType === "v"), d = n(() => Ke(c.theme)), f = s, p = w(null), h = w("center"), _ = w(!1), S = C({}), D = C({}), O = C({}), k = C({}), j = {}, M = {}, N = c.layoutId || Pe("Grid"), P = n(() => !!p.value);
		function I(e) {
			return e > 0 && e <= Zt;
		}
		function L(e) {
			let t = [], n = null, r = 0;
			for (let i of e || []) {
				if (!i || i.show === !1) continue;
				let e = { ...i }, a = Number(i.layoutNum);
				if (a > Zt) {
					n = {
						cells: [e],
						fixed: a,
						idx: t.length
					}, t.push(n), n = null, r = 0;
					continue;
				}
				let o = I(a) ? a : Zt;
				(!n || r + o > Zt) && (n = {
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
		let R = n(() => L(c.items)), z = n(() => {
			if (P.value) {
				let { lineIdx: e, cellIdx: t } = p.value, n = R.value[e], r = n && n.cells[t];
				if (r) return [{
					idx: e,
					cells: [r],
					_max: !0
				}];
			}
			return R.value;
		});
		function ee(e) {
			for (let t = 0; t < R.value.length; t++) {
				let n = R.value[t];
				for (let r = 0; r < n.cells.length; r++) if (n.cells[r]._key === e) return {
					line: n,
					cell: n.cells[r],
					li: t,
					ci: r
				};
			}
			return null;
		}
		function B(e) {
			if (e._max) return {
				flex: "1 1 0%",
				minWidth: 0,
				minHeight: 0
			};
			let t = e.idx, n = S[t] == null ? e.fixed : S[t], r = l.value ? "width" : "height";
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
		function V(e, t) {
			if (P.value) return {
				flex: "1 1 0%",
				minWidth: 0,
				minHeight: 0
			};
			let n = t._key, r = l.value ? "height" : "width", i = D[n];
			if (i != null) return {
				flex: "0 0 auto",
				[r]: `${i}px`,
				minWidth: 0,
				minHeight: 0
			};
			let a = Number(t.layoutNum), o = I(a) ? a : Zt;
			return {
				flex: `${o} ${o} 0%`,
				minWidth: 0,
				minHeight: 0
			};
		}
		function te(e, t) {
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
		function ne(e) {
			return {
				split: e.split == null ? c.split : !!e.split,
				collapsible: e.collapsible == null ? c.collapsible : !!e.collapsible
			};
		}
		function H(e) {
			return ne(e.cells[0] || {});
		}
		let re = n(() => l.value ? "v-left" : "h-top"), U = n(() => l.value ? "h-top" : "v-left");
		function W(e) {
			O[e] = !O[e];
		}
		function G(e) {
			k[e] = !0;
		}
		function K(e) {
			delete k[e];
		}
		function q(e) {
			let t = e._key;
			k[t] ? K(t) : G(t);
		}
		function ie(e) {
			let t = ee(e);
			t && (p.value = {
				lineIdx: t.li,
				cellIdx: t.ci,
				key: e
			}, h.value = Rt(t.cell.maxType || c.maxType) || "center", f("max", {
				key: e,
				name: t.cell.name
			}));
		}
		function ae() {
			p.value && (p.value = null, h.value = "center", f("restore", { key: null }));
		}
		function oe(e, t) {
			return e === "max" ? ie(t) : e === "restore" ? ae() : (e === "min" || e === "close") && (G(t), f("close", { key: t })), !1;
		}
		function J(e, t) {
			t && (j[e] = t);
		}
		function se(e, t) {
			t && (M[e] = t);
		}
		function ce(e, t) {
			return e ? t === "width" ? e.offsetWidth : e.offsetHeight : 100;
		}
		function Y(e, t) {
			let n = ce(j[e], l.value ? "width" : "height");
			t.setStartSize(n), _.value = !0;
		}
		function le(e, t) {
			S[e] = t, f("split", {
				axis: "line",
				index: e,
				size: t
			});
		}
		function ue(e, t) {
			let n = ce(M[e], l.value ? "height" : "width");
			t.setStartSize(n), _.value = !0;
		}
		function de(e, t) {
			D[e] = t, f("split", {
				axis: "cell",
				key: e,
				size: t
			});
		}
		function X() {
			_.value = !1;
		}
		function Z(e) {
			e.key === "Escape" && P.value && ae();
		}
		let fe = {
			max: ie,
			restore: ae,
			hide: G,
			show: K,
			toggleLine: W,
			toggleCell: q,
			maxed: (e) => !!(P.value && p.value.key === e),
			notifyPanel: oe
		};
		return b(() => {
			Ie(N, fe), document.addEventListener("keydown", Z);
		}), y(() => {
			Le(N), document.removeEventListener("keydown", Z);
		}), o(fe), (t, n) => (x(), a("div", {
			class: g(["my-grid-layout", [
				d.value,
				l.value ? "my-grid-layout--v" : "my-grid-layout--h",
				{ "my-grid--dragging": _.value },
				{ "my-grid--maximized": P.value },
				h.value === "page" ? "my-grid--mode-page" : ""
			]]),
			"data-layout-id": A(N)
		}, [(x(!0), a(e, null, T(z.value, (n, o) => (x(), a(e, { key: n.idx }, [!P.value && o > 0 ? (x(), r(ke, {
			key: 0,
			direction: re.value,
			min: Qt,
			max: $t,
			split: H(z.value[o - 1]).split,
			collapsible: H(z.value[o - 1]).collapsible,
			"next-collapsible": H(n).collapsible,
			"max-btn": !1,
			dual: !0,
			collapsed: !!O[z.value[o - 1].idx],
			"next-collapsed": !!O[n.idx],
			onDragStart: (e) => Y(z.value[o - 1].idx, e),
			onDragMove: (e) => le(z.value[o - 1].idx, e),
			onDragEnd: X,
			onToggle: (e) => W(z.value[o - 1].idx),
			onToggleNext: (e) => W(n.idx)
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
		])) : i("", !0), n._max || !O[n.idx] ? (x(), a("div", {
			key: 1,
			class: g(["my-grid__line", l.value ? "my-grid__line--v" : "my-grid__line--h"]),
			style: v(B(n)),
			ref_for: !0,
			ref: (e) => J(n.idx, e)
		}, [(x(!0), a(e, null, T(n.cells, (o, s) => (x(), a(e, { key: o._key }, [!P.value && s > 0 ? (x(), r(ke, {
			key: 0,
			direction: U.value,
			min: 24,
			max: $t,
			split: ne(n.cells[s - 1]).split,
			collapsible: ne(n.cells[s - 1]).collapsible,
			"next-collapsible": ne(o).collapsible,
			"max-btn": !1,
			dual: !0,
			collapsed: !!k[n.cells[s - 1]._key],
			"next-collapsed": !!k[o._key],
			onDragStart: (e) => ue(n.cells[s - 1]._key, e),
			onDragMove: (e) => de(n.cells[s - 1]._key, e),
			onDragEnd: X,
			onToggle: (e) => q(n.cells[s - 1]),
			onToggleNext: (e) => q(o)
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
		])) : i("", !0), n._max || !k[o._key] ? (x(), a("div", {
			key: 1,
			class: "my-grid__cell",
			style: v(V(n, o)),
			ref_for: !0,
			ref: (e) => se(o._key, e),
			"data-region": o._key
		}, [u(mt, m({ ref_for: !0 }, te(n, o)), {
			default: F(() => [E(t.$slots, o._key, { cell: o }, void 0, !0)]),
			_: 2
		}, 1040)], 12, Xt)) : i("", !0)], 64))), 128))], 6)) : i("", !0)], 64))), 128))], 10, Yt));
	}
}, [["__scopeId", "data-v-70df8665"]]), tn = {
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
		}), c = w(null);
		function l() {
			return c.value;
		}
		let u = {
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
			return u[e] || null;
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
		function h() {
			let e = c.value;
			if (!e) return null;
			let t = a.regions?.center, n = t?.active || t?.panels?.[0]?.name;
			return n && e.exist("center", n) ? e.show("center", n) : p("center", {
				name: "mainBody",
				title: "内容区",
				show: !0
			}), e.getItem("center", n || "mainBody");
		}
		function g(e, t, n) {
			let r = f(t);
			return r ? c.value?.openTab(e, r, n) : null;
		}
		function v(e, t, n) {
			let r = f(t);
			return r ? !!c.value?.closeTab(e, r, n) : !1;
		}
		function y(e, t, n) {
			let r = f(t);
			return r ? !!c.value?.closeOtherTabs(e, r, n) : !1;
		}
		function b(e, t) {
			let n = f(e);
			return n ? !!c.value?.closeAllTabs(n, t) : !1;
		}
		function S(e, t, n) {
			let r = f(t);
			return r ? !!c.value?.setActiveTab(e, r, n) : !1;
		}
		function C(e, t, n) {
			let r = f(t);
			return r ? !!c.value?.refreshTab(e, r, n) : !1;
		}
		function T(e, t) {
			let n = f(e);
			return n && c.value?.getTabs(n, t) || [];
		}
		function D(e, t) {
			let n = f(e);
			return n && c.value?.getActiveTab(n, t) || "";
		}
		function O(e) {
			let t = f(e);
			return t ? !!c.value?.isVisible(t) : !1;
		}
		function k(e, t) {
			let n = f(e);
			return n ? !!c.value?.show(n, t) : !1;
		}
		function A(e, t) {
			let n = f(e);
			return n ? !!c.value?.hide(n, t) : !1;
		}
		function j(e, t) {
			return O(e) ? A(e, t) : k(e, t);
		}
		return t({
			getLayout: l,
			open: p,
			openBody: m,
			openDefault: h,
			openTab: g,
			closeTab: v,
			closeOtherTabs: y,
			closeAllTabs: b,
			setActiveTab: S,
			refreshTab: C,
			getTabs: T,
			getActiveTab: D,
			isVisible: O,
			show: k,
			hide: A,
			toggleRegion: j
		}), (t, n) => (x(), r(Jt, {
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
			north: F((e) => [E(t.$slots, "north", _(d(e)))]),
			west: F((e) => [E(t.$slots, "west", _(d(e)))]),
			default: F((e) => [E(t.$slots, "default", _(d(e)))]),
			east: F((e) => [E(t.$slots, "east", _(d(e)))]),
			south: F((e) => [E(t.$slots, "south", _(d(e)))]),
			"tab-tool": F((e) => [E(t.$slots, "tab-tool", _(d(e)))]),
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
}, nn = { class: "my-float-panel__title" }, rn = ["title"], an = {
	key: 0,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, on = {
	key: 1,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, sn = /*#__PURE__*/ z({
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
		padding: {
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
	setup(s, { emit: c }) {
		let u = s, d = c, { resolved: f } = qe(u), p = n(() => Ke(f.value)), m = w(!1), _ = w(u.maxed);
		P(() => u.maxed, (e) => {
			_.value = e;
		});
		let S = w(!1), T = C({
			left: null,
			top: null
		}), D = C({
			w: typeof u.width == "number" ? u.width : parseInt(u.width) || 360,
			h: typeof u.height == "number" ? u.height : parseInt(u.height) || 280
		});
		P(() => u.width, (e) => {
			typeof e == "number" && (D.w = e);
		}), P(() => u.height, (e) => {
			typeof e == "number" && (D.h = e);
		});
		function k() {
			return !u.container || u.container === "body" ? document.body : document.querySelector(u.container) || document.body;
		}
		let A = w(k()), j = w(null);
		function M() {
			let e = A.value;
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
			A.value = k(), j.value = M();
		}
		let F = n(() => A.value === document.body), I = null, L = "";
		function z() {
			let e = A.value;
			I && I !== e && (I.style.position = L, I = null), e && e !== document.body && getComputedStyle(e).position === "static" && (I = e, L = e.style.position, e.style.position = "relative");
		}
		function ee() {
			I &&= (I.style.position = L, null);
		}
		P(() => u.container, () => {
			A.value = k(), z(), N(), H();
		}), P(() => u.visible, (e) => {
			e && h(() => {
				N(), H();
			});
		}), b(() => {
			z(), N(), H(), window.addEventListener("resize", B), window.addEventListener("scroll", V, !0);
		}), y(() => {
			window.removeEventListener("resize", B), window.removeEventListener("scroll", V, !0), ee();
		});
		function B() {
			N(), H();
		}
		function V() {
			u.fixed || N();
		}
		function te(e, t, n) {
			return Math.max(t, Math.min(n, e));
		}
		function ne(e, t) {
			if (e == null || e === "") return null;
			if (typeof e == "number") return e;
			let n = String(e).trim();
			if (/px$/i.test(n)) return parseFloat(n) || 0;
			if (/%$/.test(n)) return parseFloat(n) / 100 * t;
			let r = parseFloat(n);
			return Number.isFinite(r) ? r : null;
		}
		function H() {
			let e = j.value || M(), t = D.w, n = D.h, r = u.offset;
			if (r && typeof r == "object" && !Array.isArray(r)) {
				let i = ne(r.top, e.height), a = ne(r.left, e.width), o = ne(r.right, e.width), s = ne(r.bottom, e.height);
				a == null ? o == null ? T.left = Math.max(0, (e.width - t) / 2) : T.left = Math.max(0, e.width - t - o) : T.left = a, i == null ? s == null ? T.top = Math.max(0, (e.height - n) / 2) : T.top = Math.max(0, e.height - n - s) : T.top = i;
				return;
			}
			if (typeof r == "number") {
				T.left = Math.max(0, (e.width - t) / 2), T.top = te(r, 0, Math.max(0, e.height - n));
				return;
			}
			if (typeof r == "string" && /^\d+(\.\d+)?(px|%)?$/.test(r.trim())) {
				let i = ne(r, e.height) || 0;
				T.left = Math.max(0, (e.width - t) / 2), T.top = te(i, 0, Math.max(0, e.height - n));
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
		P(() => u.offset, () => H()), P(() => [u.width, u.height], () => h(H));
		function re() {
			if (!u.shade) return;
			let e = j.value || M();
			T.left = Math.max(0, Math.round((e.width - D.w) / 2)), T.top = Math.max(0, Math.round((e.height - D.h) / 2));
		}
		b(() => {
			u.shade && re();
		}), P(() => u.visible, (e) => {
			e && u.shade && re();
		}), P(() => u.shade, (e) => {
			e && u.visible && re();
		});
		let U = n(() => {
			let e = u.shade;
			return e === !0 || e === "" || e == null ? {} : typeof e == "number" ? { opacity: e } : typeof e == "string" && /^\d+(\.\d+)?%?$/.test(e) ? { opacity: parseFloat(e) } : {};
		});
		P([() => u.visible, () => u.shade], ([e, t]) => {
			e && t && F.value ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
		}), y(() => {
			document.body.style.overflow = "";
		});
		let W = 0, G = 0, K = 0, q = 0;
		function ie(e) {
			!_.value && u.move && (e.preventDefault(), e.stopPropagation(), m.value = !0, W = e.clientX, G = e.clientY, K = T.left ?? 0, q = T.top ?? 0, document.addEventListener("mousemove", ae), document.addEventListener("mouseup", oe));
		}
		function ae(e) {
			if (!m.value) return;
			let t = M(), n = D.w, r = D.h;
			T.left = te(K + (e.clientX - W), 0, Math.max(0, t.width - n)), T.top = te(q + (e.clientY - G), 0, Math.max(0, t.height - r)), d("move", {
				left: T.left,
				top: T.top
			});
		}
		function oe() {
			m.value = !1, document.removeEventListener("mousemove", ae), document.removeEventListener("mouseup", oe);
		}
		let J = 0, se = 0, ce = 0, Y = 0, le = 0, ue = "";
		function de(e, t) {
			_.value || (t.preventDefault(), t.stopPropagation(), S.value = !0, ue = e, J = t.clientX, se = t.clientY, ce = D.w, Y = D.h, le = T.left ?? 0, document.addEventListener("mousemove", X), document.addEventListener("mouseup", Z));
		}
		function X(e) {
			if (!S.value) return;
			let t = e.clientX - J, n = e.clientY - se, r = ce, i = Y;
			ue === "br" ? (r = ce + t, i = Y + n) : ue === "bl" && (r = ce - t, i = Y + n), r = Math.max(u.minWidth, Math.min(u.maxWidth, r)), i = Math.max(u.minHeight, Math.min(u.maxHeight, i)), ue === "bl" && (T.left = le + (ce - r)), D.w = r, D.h = i, d("resize", {
				width: r,
				height: i,
				left: T.left,
				top: T.top
			});
		}
		function Z() {
			S.value = !1, document.removeEventListener("mousemove", X), document.removeEventListener("mouseup", Z);
		}
		function fe() {
			d("close"), d("update:visible", !1);
		}
		function pe() {
			_.value = !_.value, _.value ? d("max") : d("restore");
		}
		function me() {
			u.shadeClose && fe();
		}
		let he = n(() => {
			let e = u.zIndex, t = j.value || M(), n = u.fixed ? "fixed" : "absolute";
			if (_.value) return {
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
				width: D.w + "px",
				height: D.h + "px",
				zIndex: e + 1
			};
		}), ge = n(() => F.value ? { zIndex: u.zIndex } : {
			position: "absolute",
			zIndex: u.zIndex
		});
		return y(() => {
			document.removeEventListener("mousemove", ae), document.removeEventListener("mouseup", oe), document.removeEventListener("mousemove", X), document.removeEventListener("mouseup", Z);
		}), (n, c) => (x(), r(t, { to: s.container || "body" }, [s.visible && s.shade ? (x(), a("div", {
			key: 0,
			class: "my-float-panel__mask",
			style: v([ge.value, U.value]),
			onClick: me
		}, null, 4)) : i("", !0), s.visible ? (x(), a("div", {
			key: 1,
			class: g(["my-float-panel", [
				p.value,
				{ "my-float-panel--noborder": !s.border },
				{ "my-float-panel--maximized": _.value },
				{ "my-float-panel--dragging": m.value },
				{ "my-float-panel--resizing": S.value }
			]]),
			style: v(he.value)
		}, [
			s.hasTitle ? (x(), a("header", {
				key: 0,
				class: g(["my-float-panel__header", { "my-float-panel__header--draggable": !_.value && s.move }]),
				onMousedown: ie
			}, [o("span", nn, [E(n.$slots, "title", {}, () => [l(O(s.title), 1)], !0)]), o("div", {
				class: "my-float-panel__tools",
				onMousedown: c[0] ||= R(() => {}, ["stop"])
			}, [s.max ? (x(), a("button", {
				key: 0,
				class: "my-float-panel__tool",
				title: _.value ? "还原" : "最大化",
				onClick: pe
			}, [_.value ? (x(), a("svg", on, [...c[4] ||= [o("rect", {
				width: "14",
				height: "14",
				x: "8",
				y: "8",
				rx: "2",
				ry: "2"
			}, null, -1), o("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }, null, -1)]])) : (x(), a("svg", an, [...c[3] ||= [o("path", { d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" }, null, -1)]]))], 8, rn)) : i("", !0), fe ? (x(), a("button", {
				key: 1,
				class: "my-float-panel__tool my-float-panel__tool--close",
				title: "关闭",
				onClick: fe
			}, [...c[5] ||= [o("svg", {
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "1.8",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			}, [o("path", { d: "M18 6 6 18" }), o("path", { d: "m6 6 12 12" })], -1)]])) : i("", !0)], 32)], 34)) : i("", !0),
			o("div", { class: g(["my-float-panel__body", { "my-float-panel__body--nopadding": !s.padding }]) }, [E(n.$slots, "default", {}, void 0, !0)], 2),
			s.resize && !_.value ? (x(), a(e, { key: 1 }, [o("span", {
				class: "my-float-panel__resize my-float-panel__resize--bl",
				title: "拖拽调整大小",
				onMousedown: c[1] ||= R((e) => de("bl", e), ["stop"])
			}, null, 32), o("span", {
				class: "my-float-panel__resize my-float-panel__resize--br",
				title: "拖拽调整大小",
				onMousedown: c[2] ||= R((e) => de("br", e), ["stop"])
			}, null, 32)], 64)) : i("", !0)
		], 6)) : i("", !0)], 8, ["to"]));
	}
}, [["__scopeId", "data-v-10ab1c2c"]]), cn = [
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
				name: "padding",
				type: "Boolean",
				default: "true",
				desc: "内容区 16px 内边距；内容自带布局（如内嵌 MyPhotoViewer）时关掉。"
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
		name: "MyGridList",
		desc: "grid 数据列表：多级表头（children 分组列）/ 后端分页 / 列锁定（fixed left/right）/ 复选列 / 序号列 / 斑马纹 / 表头列分隔 / 操作列前置，列拖拽排序 / 列宽拖拽 / 表头三态排序 / 加载遮罩 / 空态。表头 / 表体分离滚动：纵向滚动条只在表体，表头区不出现滚动条。列定义 columns 是表头、colgroup 与排序的唯一来源；单元格默认按 row[col.key] 渲染文本，特殊列（操作列、徽章列等）用 cell:{key} 插槽自定义。配色全部走 --my-layout-* 主题变量。配套 useGridFilter + MyGridFilterBar / MyGridFilterDrawer 做筛选。",
		props: [
			{
				name: "columns",
				type: "Array",
				default: "—",
				desc: "列定义 [{ key, label, width, num?, sortable?, hint?, minWidth?, children?, fixed? }]，必传。num=数字列（右对齐 + 等宽数字）；sortable=表头可点排序；hint=表头悬浮提示。children 非空 = 分组列（两级表头），取值 / 排序 / 列宽都落在叶子列上，分组模式自动禁列拖序。fixed=列锁定（left / right，贴边固定 + 分隔投影，不参与拖序；复选 / 序号列始终锁定最左）。顺序即列顺序（操作列放首位即前置）。"
			},
			{
				name: "rows",
				type: "Array",
				default: "[]",
				desc: "本地分页：全量数据（分页只切显示，排序在分页之前做）；server 模式：当前页数据。"
			},
			{
				name: "rowKey",
				type: "String | Function",
				default: "'id'",
				desc: "行键：字段名或 (row) => key，用于行选中与去重。"
			},
			{
				name: "selectedKey",
				type: "String | Number",
				default: "null",
				desc: "行选中高亮的 key（与 rowKey 取值比较，选中行左侧亮蓝竖条）。"
			},
			{
				name: "rowClass",
				type: "Function",
				default: "null",
				desc: "行附加 class：(row, index) => string | object。"
			},
			{
				name: "sortValue",
				type: "Function",
				default: "null",
				desc: "排序取值 (row, key) => number | string；缺省按 row[key]，数字按数值比，缺值恒排末尾。"
			},
			{
				name: "loading",
				type: "Boolean",
				default: "false",
				desc: "加载中：显示遮罩并禁用分页。"
			},
			{
				name: "emptyText",
				type: "String",
				default: "''",
				desc: "空态文案（empty 插槽优先）。"
			},
			{
				name: "pager",
				type: "Boolean",
				default: "true",
				desc: "是否内置分页条（MyPagerBar）。"
			},
			{
				name: "pageSize",
				type: "Number",
				default: "10",
				desc: "每页条数。"
			},
			{
				name: "pageSizes",
				type: "Array",
				default: "[5,10,20,50,100]",
				desc: "可选每页条数。"
			},
			{
				name: "selection",
				type: "Boolean",
				default: "true",
				desc: "复选列开关（默认开启，首列）：自绘 checkbox（随主题，全选白勾 / 半选横线），表头全选只作用于当前页，半选态自动显示；勾选跨页 / 翻页 / 排序保留，勾选行淡主色底且分隔线融入底色。"
			},
			{
				name: "index",
				type: "Boolean",
				default: "true",
				desc: "序号列开关（默认开启，复选列之后）：显示全局序号（翻页 / 排序 / 后端分页后连续），表头为「序号」。"
			},
			{
				name: "sortable",
				type: "Boolean",
				default: "true",
				desc: "全局排序开关（默认开启；列级 sortable 仍需为 true 才可排序）。可排序列表头常显上下双箭头，悬浮加深、激活一侧主色高亮。"
			},
			{
				name: "columnDrag",
				type: "Boolean",
				default: "true",
				desc: "列位置拖动开关（默认开启，按住表头拖动调整列顺序）；多级表头下自动禁用。"
			},
			{
				name: "server",
				type: "Boolean",
				default: "false",
				desc: "后端分页模式：rows 即当前页数据，翻页 / 排序 / 每页条数只发事件由外部加载，本地不切片不排序。"
			},
			{
				name: "total",
				type: "Number",
				default: "0",
				desc: "后端分页总条数（server 模式分页条显示用）。"
			}
		],
		emits: [
			{
				name: "row-click",
				payload: "(row, index)",
				desc: "行点击。"
			},
			{
				name: "sort-change",
				payload: "{ key, dir }",
				desc: "排序变化（dir: asc / desc；key 空串 = 已取消排序）。server 模式下据此重新请求。"
			},
			{
				name: "columns-change",
				payload: "Array",
				desc: "列定义变化（拖序 / 拖宽后提交，深拷贝叶子列）。"
			},
			{
				name: "page-change",
				payload: "Number",
				desc: "页码变化。server 模式下据此请求对应页。"
			},
			{
				name: "size-change",
				payload: "Number",
				desc: "每页条数变化。server 模式下据此重新请求。"
			},
			{
				name: "selection-change",
				payload: "{ keys, rows }",
				desc: "勾选变化（勾行 / 全选 / 清空都发，rows 为当前数据中仍存在的选中行）。"
			}
		],
		methods: [
			{
				sig: "resetSort()",
				ret: "void",
				desc: "取消排序，回到原始顺序。"
			},
			{
				sig: "resetPage()",
				ret: "void",
				desc: "回到第 1 页。"
			},
			{
				sig: "getColumns()",
				ret: "Array",
				desc: "取当前列定义（含拖序 / 拖宽后的状态）。"
			},
			{
				sig: "getSelection()",
				ret: "Array",
				desc: "当前勾选的行（按 rows 中仍存在的键过滤）。"
			},
			{
				sig: "getSelectionKeys()",
				ret: "Array",
				desc: "当前勾选的行键数组。"
			},
			{
				sig: "clearSelection()",
				ret: "void",
				desc: "清空勾选并发 selection-change。"
			}
		],
		slots: [
			{
				name: "cell:{key}",
				scope: "{ row, value, index }",
				desc: "按列 key 命名的单元格插槽，优先于默认文本渲染。"
			},
			{
				name: "toolbar",
				scope: "—",
				desc: "表格上方区域（筛选条常放这里）。"
			},
			{
				name: "empty",
				scope: "—",
				desc: "空态内容（覆盖 emptyText）。"
			}
		]
	},
	{
		name: "MyPagerBar",
		desc: "分页工具栏：总条数 / 首末页 / 前后页 / 可点击跳转的页码（点一下变输入框，回车跳转）/ 每页条数。MyGridList 内置使用，也可独立用于任意分页场景。",
		props: [
			{
				name: "total",
				type: "Number | String",
				default: "0",
				desc: "符合条件的总条数（不是当页条数）。"
			},
			{
				name: "page",
				type: "Number | String",
				default: "1",
				desc: "当前页码，从 1 起（v-model:page）。"
			},
			{
				name: "pageSize",
				type: "Number | String",
				default: "10",
				desc: "每页条数（v-model:pageSize）。"
			},
			{
				name: "pageSizes",
				type: "Array",
				default: "[5,10,20,50,100]",
				desc: "可选每页条数。"
			},
			{
				name: "disabled",
				type: "Boolean",
				default: "false",
				desc: "加载中禁用翻页。"
			}
		],
		emits: [
			{
				name: "update:page",
				payload: "Number",
				desc: "页码变化（v-model:page）。"
			},
			{
				name: "page-change",
				payload: "Number",
				desc: "页码变化。"
			},
			{
				name: "update:pageSize",
				payload: "Number",
				desc: "每页条数变化（v-model:pageSize）。"
			},
			{
				name: "size-change",
				payload: "Number",
				desc: "每页条数变化。"
			}
		],
		methods: [],
		slots: []
	},
	{
		name: "MyGridFilterBar",
		desc: "grid 列表的快速筛选条：N 个下拉（按剩余空间等比收缩）+ 高级搜索入口（带条件数徽章）+ 重置；范围条件以 chip 摘要展示、可单个移除或清空。与 useGridFilter 搭配使用。",
		props: [
			{
				name: "selects",
				type: "Array",
				default: "[]",
				desc: "下拉定义 [{ key, label?, allLabel?, allValue?, options? }]；options 不给时由 useGridFilter 按数据实际出现值生成选项。"
			},
			{
				name: "values",
				type: "Object",
				default: "{}",
				desc: "各下拉当前值 { [key]: value }（v-model:values）。"
			},
			{
				name: "selectOptions",
				type: "Object",
				default: "{}",
				desc: "下拉选项 { [key]: [{ value, label }] }（useGridFilter.selectOptions）。"
			},
			{
				name: "chips",
				type: "Array",
				default: "[]",
				desc: "高级范围条件 chip [{ key, text }]（useGridFilter.chips）。"
			},
			{
				name: "activeCount",
				type: "Number",
				default: "0",
				desc: "高级条件数（徽章）。"
			},
			{
				name: "hasFilter",
				type: "Boolean",
				default: "false",
				desc: "是否存在任何筛选条件（决定「重置」显隐）。"
			}
		],
		emits: [
			{
				name: "update:values",
				payload: "Object",
				desc: "下拉值变化（v-model:values）。"
			},
			{
				name: "open-advanced",
				payload: "—",
				desc: "点击高级搜索入口。"
			},
			{
				name: "reset-all",
				payload: "—",
				desc: "点击重置（清空全部筛选）。"
			},
			{
				name: "remove-chip",
				payload: "key",
				desc: "移除单个范围条件 chip。"
			},
			{
				name: "clear-chips",
				payload: "—",
				desc: "清空全部范围条件。"
			}
		],
		methods: [],
		slots: []
	},
	{
		name: "MyGridFilterDrawer",
		desc: "高级搜索面板：MyFloatPanel 悬浮（标题栏可拖动、右下角可拖尺寸、Esc 关闭），一行一字段的数值区间输入（留空为不限，非数字红边提示），重置 / 查询固定底部。改动即时生效（range-change），打开时自动补高到内容高度。",
		props: [
			{
				name: "visible",
				type: "Boolean",
				default: "false",
				desc: "显隐（v-model:visible）。"
			},
			{
				name: "fields",
				type: "Array",
				default: "[]",
				desc: "字段定义 [{ key, label, unit? }]，顺序即行顺序。"
			},
			{
				name: "ranges",
				type: "Object",
				default: "{}",
				desc: "范围值 { [key]: { min, max } }，值为用户输入的原始字符串（useGridFilter.ranges）。"
			},
			{
				name: "activeCount",
				type: "Number",
				default: "0",
				desc: "已设条件数（标题栏徽章）。"
			},
			{
				name: "container",
				type: "String",
				default: "'body'",
				desc: "浮层挂载容器选择器；不存在时退回 body。"
			},
			{
				name: "offset",
				type: "Object",
				default: "{ top: 12, left: 12 }",
				desc: "浮层在容器内的初始偏移。"
			}
		],
		emits: [
			{
				name: "update:visible",
				payload: "Boolean",
				desc: "显隐变化（v-model:visible / Esc）。"
			},
			{
				name: "range-change",
				payload: "{ key, which, value }",
				desc: "输入框变化（which: min / max）。"
			},
			{
				name: "reset",
				payload: "—",
				desc: "点击重置。"
			},
			{
				name: "apply",
				payload: "—",
				desc: "点击查询（通常同时关闭面板）。"
			}
		],
		methods: [],
		slots: []
	},
	{
		name: "MyPhotoViewer",
		desc: "照片查看器：缩放（滚轮锚点缩放 / 双击 2.5 倍）/ 旋转 90° / 拖拽平移 / 加载进度 / 原图失败退缩略图 / WebGL 全景切换。标题 / 翻页 / 缩放工具合并底部一行（标题居左、翻页居中、工具居右）。背景、工具栏、导航、进度条等表面色全部走 --my-layout-* 主题变量，随 light / light-blue / dark 主题变化；叠在图片上的提示层保留深色。数据源两种：urls + titles 简写，或 items 条目（优先）。键盘：Esc 关闭 · ←→ 翻页 · +/- 缩放 · 0 复位。超大图在解码阶段按查看方式缩到上限（平面 8192 / 全景 4096）再显示。",
		props: [
			{
				name: "modelValue",
				type: "Boolean",
				default: "false",
				desc: "显隐（v-model）；embedded 模式忽略（显隐由外层容器决定）。"
			},
			{
				name: "urls",
				type: "Array",
				default: "[]",
				desc: "图片 URL 列表（未传 items 时使用）。"
			},
			{
				name: "titles",
				type: "Array",
				default: "[]",
				desc: "与 urls 对齐的标题（用于全景文件名推断与标题栏显示）。"
			},
			{
				name: "items",
				type: "Array",
				default: "[]",
				desc: "媒体条目 [{ url 原图, thumbUrl 缩略图, title, panorama: true|false|null }]，优先于 urls/titles；panorama 未标注时按文件名（Pano / 360）与尺寸推断。"
			},
			{
				name: "initialIndex",
				type: "Number",
				default: "0",
				desc: "初始序号；配合 update:index 可做双向定位。"
			},
			{
				name: "headers",
				type: "Object | Function",
				default: "null",
				desc: "图片下载请求头（Object 或 () => Object），媒体端点鉴权用。"
			},
			{
				name: "embedded",
				type: "Boolean",
				default: "false",
				desc: "内嵌模式：填满外部容器（如 MyFloatPanel 内容区），不覆盖宿主，也不显示自身关闭按钮。"
			}
		],
		emits: [{
			name: "update:modelValue",
			payload: "Boolean",
			desc: "显隐变化（v-model）。"
		}, {
			name: "update:index",
			payload: "Number",
			desc: "当前图片序号变化（翻页 / goTo）。"
		}],
		methods: [
			{
				sig: "goTo(i)",
				ret: "void",
				desc: "编程式切到指定图。"
			},
			{
				sig: "zoomIn() / zoomOut()",
				ret: "void",
				desc: "编程式缩放一级。"
			},
			{
				sig: "resetView()",
				ret: "void",
				desc: "复位缩放 / 旋转 / 平移。"
			}
		],
		slots: []
	},
	{
		name: "MyPanoramaViewer",
		desc: "等距柱状全景查看器：原生 WebGL 渲染 equirectangular 投影，roll = 0（水平拖只改偏航，地平线保持水平）；滚轮缩放改水平视场，松手带惯性。纹理边长上限 4096，超限自动缩放。",
		props: [{
			name: "url",
			type: "String",
			default: "''",
			desc: "全景原图地址（未传 bitmap 时自行加载）。"
		}, {
			name: "bitmap",
			type: "Object",
			default: "null",
			desc: "已按纹理上限缩小的 ImageBitmap（usePhotoSource 预解码产物，优先于 url）。"
		}],
		emits: [{
			name: "error",
			payload: "—",
			desc: "WebGL 初始化失败 / 纹理上传失败（调用方应退回平面查看）。"
		}],
		methods: [],
		slots: []
	},
	{
		name: "Composables（组合式函数）",
		desc: "主题、布局注册表、面板参数归一化、数据列表筛选与分页、照片加载等工具。",
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
			},
			{
				sig: "import { useGridFilter } from '.../composables/useGridFilter.js'",
				ret: "—",
				desc: "grid 筛选：selects（快速下拉，options 不给时按数据生成选项）+ ranges（数值范围）配置驱动，返回 values / ranges / selectOptions / chips / activeCount / hasFilter / signature / filtered / setSelect / setRange / removeChip / clearChips / resetAll / selects / rangeFields。"
			},
			{
				sig: "import { useLocalPager } from '.../composables/useLocalPager.js'",
				ret: "—",
				desc: "本地分页：全量数组按页切片，返回 page / pageSize / total / pageCount / rows / offset / reset；支持 resetKeys（任一变化回第 1 页）。"
			},
			{
				sig: "import { useGridColumnControls } from '.../composables/useGridColumnControls.js'",
				ret: "—",
				desc: "表格列控制：列拖序 / 列宽拖拽 / 表头三态排序（返回 columns / sortKey / sortDir / sortRows / 各表头事件处理等）。"
			},
			{
				sig: "import { usePhotoSource } from '.../composables/usePhotoSource.js'",
				ret: "—",
				desc: "照片原图加载：下载进度 / AbortSignal 取消 / 缩略图降级 / 超大图按查看方式（平面 8192 / 全景 4096）预解码缩小，返回 loading / progressText / displayUrl / panoBitmap / flatBitmap / load / retarget / dispose 等。"
			}
		],
		slots: []
	}
], ln = { class: "my-api-doc__dialog" }, un = { class: "my-api-doc__body" }, dn = { class: "my-api-doc__nav" }, fn = ["onClick"], pn = {
	key: 0,
	class: "my-api-doc__content"
}, mn = { class: "my-api-doc__comp-name" }, hn = { class: "my-api-doc__comp-desc" }, gn = { key: 0 }, _n = { class: "my-api-doc__table" }, vn = { class: "c-name" }, yn = { class: "c-type" }, bn = { class: "c-default" }, xn = { key: 1 }, Sn = { class: "my-api-doc__table" }, Cn = { class: "c-name" }, wn = { class: "c-payload" }, Tn = { key: 2 }, En = { class: "my-api-doc__table" }, Dn = { class: "c-sig" }, On = { class: "c-ret" }, kn = { key: 3 }, An = { class: "my-api-doc__table" }, jn = { class: "c-name" }, Mn = { class: "c-scope" }, Nn = /*#__PURE__*/ z({
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
		let l = s, u = c, d = n(() => Ke(l.theme)), f = w(cn[0].name), p = n(() => cn.find((e) => e.name === f.value));
		function m(e) {
			f.value = e;
		}
		function h() {
			u("update:visible", !1), u("close");
		}
		function _(e) {
			e.key === "Escape" && l.visible && h();
		}
		return b(() => document.addEventListener("keydown", _)), y(() => document.removeEventListener("keydown", _)), (n, c) => (x(), r(t, { to: "body" }, [s.visible ? (x(), a("div", {
			key: 0,
			class: g(["my-api-doc", d.value])
		}, [o("div", {
			class: "my-api-doc__mask",
			onClick: h
		}), o("div", ln, [o("header", { class: "my-api-doc__header" }, [c[0] ||= o("div", { class: "my-api-doc__title" }, [o("span", { class: "my-api-doc__logo" }, "📚"), o("span", null, "my-layout · API 文档")], -1), o("button", {
			class: "my-api-doc__close",
			title: "关闭 (Esc)",
			onClick: h
		}, "✕")]), o("div", un, [o("aside", dn, [c[1] ||= o("div", { class: "my-api-doc__nav-title" }, "组件 / 模块", -1), (x(!0), a(e, null, T(A(cn), (e) => (x(), a("a", {
			key: e.name,
			class: g(["my-api-doc__nav-item", { active: f.value === e.name }]),
			onClick: (t) => m(e.name)
		}, O(e.name), 11, fn))), 128))]), p.value ? (x(), a("main", pn, [
			o("h2", mn, O(p.value.name), 1),
			o("p", hn, O(p.value.desc), 1),
			p.value.props?.length ? (x(), a("section", gn, [c[3] ||= o("h3", { class: "my-api-doc__section-title" }, "Props（属性）", -1), o("table", _n, [c[2] ||= o("thead", null, [o("tr", null, [
				o("th", { class: "c-name" }, "名称"),
				o("th", { class: "c-type" }, "类型"),
				o("th", { class: "c-default" }, "默认"),
				o("th", null, "说明")
			])], -1), o("tbody", null, [(x(!0), a(e, null, T(p.value.props, (e) => (x(), a("tr", { key: e.name }, [
				o("td", vn, [o("code", null, O(e.name), 1)]),
				o("td", yn, O(e.type), 1),
				o("td", bn, [o("code", null, O(e.default), 1)]),
				o("td", null, O(e.desc), 1)
			]))), 128))])])])) : i("", !0),
			p.value.emits?.length ? (x(), a("section", xn, [c[5] ||= o("h3", { class: "my-api-doc__section-title" }, "Emits（事件）", -1), o("table", Sn, [c[4] ||= o("thead", null, [o("tr", null, [
				o("th", { class: "c-name" }, "名称"),
				o("th", { class: "c-payload" }, "载荷"),
				o("th", null, "说明")
			])], -1), o("tbody", null, [(x(!0), a(e, null, T(p.value.emits, (e) => (x(), a("tr", { key: e.name }, [
				o("td", Cn, [o("code", null, O(e.name), 1)]),
				o("td", wn, O(e.payload), 1),
				o("td", null, O(e.desc), 1)
			]))), 128))])])])) : i("", !0),
			p.value.methods?.length ? (x(), a("section", Tn, [c[7] ||= o("h3", { class: "my-api-doc__section-title" }, "Methods（defineExpose 暴露方法，通过 ref 调用）", -1), o("table", En, [c[6] ||= o("thead", null, [o("tr", null, [
				o("th", { class: "c-sig" }, "签名"),
				o("th", { class: "c-ret" }, "返回"),
				o("th", null, "说明")
			])], -1), o("tbody", null, [(x(!0), a(e, null, T(p.value.methods, (e, t) => (x(), a("tr", { key: t }, [
				o("td", Dn, [o("code", null, O(e.sig), 1)]),
				o("td", On, O(e.ret), 1),
				o("td", null, O(e.desc), 1)
			]))), 128))])])])) : i("", !0),
			p.value.slots?.length ? (x(), a("section", kn, [c[9] ||= o("h3", { class: "my-api-doc__section-title" }, "Slots（插槽）", -1), o("table", An, [c[8] ||= o("thead", null, [o("tr", null, [
				o("th", { class: "c-name" }, "名称"),
				o("th", { class: "c-scope" }, "作用域"),
				o("th", null, "说明")
			])], -1), o("tbody", null, [(x(!0), a(e, null, T(p.value.slots, (e) => (x(), a("tr", { key: e.name }, [
				o("td", jn, [o("code", null, O(e.name), 1)]),
				o("td", Mn, O(e.scope), 1),
				o("td", null, O(e.desc), 1)
			]))), 128))])])])) : i("", !0)
		])) : i("", !0)])])], 2)) : i("", !0)]));
	}
}, [["__scopeId", "data-v-b53e1577"]]);
function Pn(e) {
	return e == null || e === "" || typeof e == "number" && Number.isNaN(e);
}
function Fn(e, t = {}) {
	let { sortValue: r = () => null, minWidth: i = 24 } = t, a = w((k(e) || []).map((e) => ({ ...e })));
	P(() => k(e), (e) => {
		let t = a.value;
		a.value = (e || []).map((e) => {
			let n = t.find((t) => t.key === e.key);
			return n ? {
				...e,
				width: n.width
			} : { ...e };
		});
	});
	let o = n(() => a.value.reduce((e, t) => e + t.width, 0)), s = w(""), c = w("");
	function l(e, t) {
		let n = a.value, r = n.findIndex((t) => t.key === e), i = n.findIndex((e) => e.key === t);
		if (r < 0 || i < 0 || r === i) return;
		let [o] = n.splice(r, 1);
		n.splice(i, 0, o);
	}
	function u() {
		s.value = "", c.value = "";
	}
	function d(e, t) {
		if (h.value) {
			e?.preventDefault?.();
			return;
		}
		if (s.value = t.key, e?.dataTransfer) {
			e.dataTransfer.effectAllowed = "move";
			try {
				e.dataTransfer.setData("text/plain", t.key);
			} catch {}
		}
	}
	function f(e, t) {
		s.value && s.value !== t.key && (e?.preventDefault?.(), e?.dataTransfer && (e.dataTransfer.dropEffect = "move"), c.value = t.key);
	}
	function p(e, t) {
		e?.preventDefault?.(), s.value && l(s.value, t.key), u();
	}
	function m() {
		u();
	}
	let h = w(null);
	function g(e, t) {
		e && (h.value = {
			key: t.key,
			startX: e.clientX,
			startWidth: t.width
		}, document.addEventListener("mousemove", _), document.addEventListener("mouseup", v));
	}
	function _(e) {
		let t = h.value;
		if (!t) return;
		let n = a.value.find((e) => e.key === t.key);
		n && (n.width = Math.max(n.minWidth || i, Math.round(t.startWidth + (e.clientX - t.startX))));
	}
	function v() {
		h.value = null, document.removeEventListener("mousemove", _), document.removeEventListener("mouseup", v);
	}
	y(v);
	let b = w(""), x = w("asc"), S = n(() => a.value.find((e) => e.key === b.value)?.label || "");
	function C(e) {
		if (b.value !== e) {
			b.value = e, x.value = "asc";
			return;
		}
		if (x.value === "asc") {
			x.value = "desc";
			return;
		}
		T();
	}
	function T() {
		b.value = "", x.value = "asc";
	}
	function E(e) {
		e?.sortable && C(e.key);
	}
	function D(e) {
		let t = [];
		if (e.hint && t.push(e.hint), e.sortable) {
			let n = b.value === e.key && x.value === "asc" ? "降序" : "升序";
			t.push(`点击按${e.label}${n}排序`);
		}
		return t.push("按住可拖动调整列顺序", "拖右边缘可调整列宽"), t.join("；");
	}
	function O(e) {
		if (e?.sortable) return b.value === e.key ? x.value === "asc" ? "ascending" : "descending" : "none";
	}
	function A(e) {
		let t = Array.isArray(e) ? e : [], n = b.value;
		if (!n) return t;
		let i = x.value === "asc" ? 1 : -1;
		return t.map((e, t) => ({
			row: e,
			index: t
		})).sort((e, t) => {
			let a = r(e.row, n), o = r(t.row, n), s = Pn(a), c = Pn(o);
			if (s && c) return e.index - t.index;
			if (s) return 1;
			if (c) return -1;
			let l = typeof a == "number" && typeof o == "number" ? a - o : String(a).localeCompare(String(o), "zh-Hans-CN");
			return l === 0 ? e.index - t.index : l * i;
		}).map((e) => e.row);
	}
	return {
		columns: a,
		tableWidth: o,
		dragKey: s,
		dragOverKey: c,
		moveColumn: l,
		onHeaderDragStart: d,
		onHeaderDragOver: f,
		onHeaderDrop: p,
		onHeaderDragEnd: m,
		resizing: h,
		onResizerDown: g,
		sortKey: b,
		sortDir: x,
		sortLabel: S,
		toggleSort: C,
		resetSort: T,
		onHeaderClick: E,
		headerTitle: D,
		ariaSortOf: O,
		sortRows: A
	};
}
function In(e) {
	if (e == null || e === "") return null;
	let t = Number(e);
	return Number.isFinite(t) ? t : null;
}
function Ln(e) {
	let t = Number(e);
	return Number.isFinite(t) && t > 0 ? Math.floor(t) : 10;
}
function Rn(e, t = {}) {
	let r = w(1), i = w(Ln(t.pageSize)), a = n(() => {
		let t = typeof e == "function" ? e() : e?.value;
		return Array.isArray(t) ? t : [];
	}), o = n(() => a.value.length), s = n(() => Math.max(1, Math.ceil(o.value / i.value)));
	P([o, i], () => {
		r.value > s.value && (r.value = s.value), r.value < 1 && (r.value = 1);
	}), Array.isArray(t.resetKeys) && t.resetKeys.length && P(t.resetKeys, () => {
		r.value = 1;
	});
	let c = n(() => (r.value - 1) * i.value), l = n(() => {
		let e = c.value;
		return a.value.slice(e, e + i.value);
	});
	function u() {
		r.value = 1;
	}
	return {
		page: r,
		pageSize: i,
		total: o,
		pageCount: s,
		rows: l,
		offset: c,
		reset: u
	};
}
//#endregion
//#region src/mylayout/components/MyPagerBar.vue
var zn = { class: "my-grid-pager" }, Bn = ["title"], Vn = ["disabled"], Hn = ["disabled"], Un = ["title", "disabled"], Wn = ["disabled"], Gn = ["disabled"], Kn = ["value", "disabled"], qn = ["value"], Jn = 10, Yn = /*#__PURE__*/ z({
	__name: "MyPagerBar",
	props: {
		total: {
			type: [Number, String],
			default: 0
		},
		page: {
			type: [Number, String],
			default: 1
		},
		pageSize: {
			type: [Number, String],
			default: 10
		},
		pageSizes: {
			type: Array,
			default: () => [
				5,
				10,
				20,
				50,
				100
			]
		},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	emits: [
		"update:page",
		"update:pageSize",
		"page-change",
		"size-change"
	],
	setup(t, { emit: r }) {
		let i = Object.freeze([
			5,
			10,
			20,
			50,
			100
		]), s = t, c = r, l = n(() => {
			let e = Number(s.total);
			return Number.isFinite(e) && e > 0 ? Math.floor(e) : 0;
		}), u = n(() => {
			let e = Number(s.pageSize);
			return Number.isFinite(e) && e > 0 ? Math.floor(e) : Jn;
		}), d = n(() => Math.max(1, Math.ceil(l.value / u.value))), f = n(() => {
			let e = Number(s.page);
			return Math.min(Number.isFinite(e) && e > 0 ? Math.floor(e) : 1, d.value);
		}), p = n(() => s.pageSizes?.length ? s.pageSizes : [...i]);
		function m(e) {
			if (s.disabled) return;
			let t = Number(e);
			!Number.isFinite(t) || t < 1 || t > d.value || t !== f.value && (c("update:page", t), c("page-change", t));
		}
		function g(e) {
			let t = Number(e);
			!Number.isFinite(t) || t <= 0 || t === u.value || (c("update:pageSize", t), c("size-change", t));
		}
		let _ = w(!1), v = w(""), y = w(null), b = !1;
		async function S() {
			s.disabled || _.value || (v.value = String(f.value), b = !1, _.value = !0, await h(), y.value?.focus(), y.value?.select());
		}
		function C() {
			if (!_.value) return;
			let e = String(v.value ?? "").trim();
			_.value = !1;
			let t = Number(e);
			e && Number.isFinite(t) && m(Math.min(Math.max(1, Math.floor(t)), d.value));
		}
		function E() {
			b = !0, _.value = !1;
		}
		function D(e) {
			if (e.key === "Enter") {
				e.preventDefault(), C();
				return;
			}
			e.key === "Escape" && (e.preventDefault(), E());
		}
		function k() {
			if (b) {
				b = !1;
				return;
			}
			C();
		}
		return (n, r) => (x(), a("div", zn, [
			o("span", {
				class: "mgp-total",
				title: `共 ${l.value} 条`
			}, "共 " + O(l.value) + " 条", 9, Bn),
			o("button", {
				type: "button",
				class: "mgp-btn",
				title: "第一页",
				disabled: t.disabled || f.value <= 1,
				onClick: r[0] ||= (e) => m(1)
			}, "«", 8, Vn),
			o("button", {
				type: "button",
				class: "mgp-btn",
				title: "上一页",
				disabled: t.disabled || f.value <= 1,
				onClick: r[1] ||= (e) => m(f.value - 1)
			}, "‹", 8, Hn),
			_.value ? I((x(), a("input", {
				key: 0,
				ref_key: "editInput",
				ref: y,
				"onUpdate:modelValue": r[2] ||= (e) => v.value = e,
				class: "mgp-page mgp-page-input",
				type: "text",
				inputmode: "numeric",
				title: "输入页码后回车跳转",
				onKeydown: D,
				onBlur: k
			}, null, 544)), [[M, v.value]]) : (x(), a("button", {
				key: 1,
				type: "button",
				class: "mgp-page",
				title: `共 ${d.value} 页，点击输入页码跳转`,
				disabled: t.disabled,
				onClick: S
			}, O(f.value) + "/" + O(d.value), 9, Un)),
			o("button", {
				type: "button",
				class: "mgp-btn",
				title: "下一页",
				disabled: t.disabled || f.value >= d.value,
				onClick: r[3] ||= (e) => m(f.value + 1)
			}, "›", 8, Wn),
			o("button", {
				type: "button",
				class: "mgp-btn",
				title: "最后一页",
				disabled: t.disabled || f.value >= d.value,
				onClick: r[4] ||= (e) => m(d.value)
			}, "»", 8, Gn),
			o("select", {
				class: "mgp-size",
				title: "每页显示条数",
				value: u.value,
				disabled: t.disabled,
				onChange: r[5] ||= (e) => g(e.target.value)
			}, [(x(!0), a(e, null, T(p.value, (e) => (x(), a("option", {
				key: e,
				value: e
			}, O(e) + "条/页", 9, qn))), 128))], 40, Kn)
		]));
	}
}, [["__scopeId", "data-v-1591103c"]]), Xn = {
	key: 0,
	class: "my-grid-list__toolbar"
}, Zn = { class: "my-grid-list__body" }, Qn = {
	key: 0,
	class: "my-grid-list__empty"
}, $n = {
	key: 1,
	class: "my-grid-list__scroll"
}, er = {
	key: 0,
	style: { width: "36px" }
}, tr = {
	key: 1,
	style: { width: "48px" }
}, nr = ["rowspan"], rr = ["checked", "indeterminate"], ir = ["rowspan"], ar = [
	"colspan",
	"rowspan",
	"draggable",
	"title",
	"aria-sort",
	"onClick",
	"onDragstart",
	"onDragover",
	"onDrop"
], or = { class: "th-label" }, sr = {
	key: 0,
	class: "sort-carets"
}, cr = ["data-resizer", "onMousedown"], lr = {
	key: 0,
	style: { width: "36px" }
}, ur = {
	key: 1,
	style: { width: "48px" }
}, dr = ["onClick"], fr = [
	"aria-label",
	"checked",
	"onChange"
], pr = {
	key: 2,
	class: "my-grid-list__loading"
}, mr = /*#__PURE__*/ z({
	__name: "MyGridList",
	props: {
		columns: {
			type: Array,
			required: !0
		},
		rows: {
			type: Array,
			default: () => []
		},
		rowKey: {
			type: [String, Function],
			default: "id"
		},
		selectedKey: {
			type: [String, Number],
			default: null
		},
		rowClass: {
			type: Function,
			default: null
		},
		sortValue: {
			type: Function,
			default: null
		},
		loading: {
			type: Boolean,
			default: !1
		},
		emptyText: {
			type: String,
			default: ""
		},
		pager: {
			type: Boolean,
			default: !0
		},
		pageSize: {
			type: Number,
			default: 10
		},
		pageSizes: {
			type: Array,
			default: () => [
				5,
				10,
				20,
				50,
				100
			]
		},
		selection: {
			type: Boolean,
			default: !0
		},
		index: {
			type: Boolean,
			default: !0
		},
		sortable: {
			type: Boolean,
			default: !0
		},
		columnDrag: {
			type: Boolean,
			default: !0
		},
		server: {
			type: Boolean,
			default: !1
		},
		total: {
			type: Number,
			default: 0
		}
	},
	emits: [
		"row-click",
		"sort-change",
		"columns-change",
		"page-change",
		"size-change",
		"selection-change"
	],
	setup(t, { expose: s, emit: c }) {
		let u = t, d = c, f = n(() => (u.columns || []).flatMap((e) => Array.isArray(e.children) && e.children.length ? e.children : [e])), p = n(() => (u.columns || []).some((e) => Array.isArray(e.children) && e.children.length > 0)), m = n(() => {
			let e = u.columns || [];
			return p.value ? [{ cells: e.map((e) => {
				let t = Array.isArray(e.children) && e.children.length;
				return t ? {
					col: e,
					group: !0,
					colspan: t,
					rowspan: 1
				} : {
					col: e,
					group: !1,
					colspan: 1,
					rowspan: 2
				};
			}) }, { cells: e.flatMap((e) => Array.isArray(e.children) && e.children.length ? e.children.map((e) => ({
				col: e,
				group: !1,
				colspan: 1,
				rowspan: 1
			})) : []) }] : [{ cells: e.map((e) => ({
				col: e,
				group: !1,
				colspan: 1,
				rowspan: 1
			})) }];
		}), _ = n(() => p.value ? 2 : 1), S = n(() => u.columnDrag && !p.value);
		function C(e, t) {
			let n = e?.[t];
			if (n == null || n === "") return null;
			if (typeof n == "number") return n;
			let r = Number(n);
			return Number.isFinite(r) && String(n).trim() !== "" ? r : String(n);
		}
		let { columns: D, tableWidth: k, dragKey: j, dragOverKey: M, onHeaderDragStart: N, onHeaderDragOver: F, onHeaderDrop: I, onHeaderDragEnd: L, resizing: z, onResizerDown: ee, sortKey: B, sortDir: V, onHeaderClick: te, headerTitle: ne, ariaSortOf: H, sortRows: re, resetSort: U } = Fn(f, { sortValue: (e, t) => u.sortValue ? u.sortValue(e, t) : C(e, t) });
		P([B, V], () => d("sort-change", {
			key: B.value,
			dir: V.value
		})), P(D, (e) => d("columns-change", e.map((e) => ({ ...e }))), { deep: !0 });
		let W = n(() => u.server ? u.rows : re(u.rows)), { page: G, pageSize: K, total: q, offset: ie, rows: ae, reset: oe } = Rn(W, {
			pageSize: u.pageSize,
			resetKeys: [B, V]
		}), J = n(() => u.server ? u.rows : u.pager ? ae.value : W.value), se = n(() => u.server ? u.total : q.value), ce = n(() => u.server ? (G.value - 1) * K.value : ie.value), Y = n(() => k.value + (u.selection ? 36 : 0) + (u.index ? 48 : 0)), le = n(() => u.index), ue = w(null), de = w(null), X = w(0), Z = null;
		function fe() {
			let e = de.value;
			X.value = e ? Math.max(0, e.offsetWidth - e.clientWidth) : 0;
		}
		function pe() {
			Z && de.value && (Z.observe(de.value), fe());
		}
		b(() => {
			Z = new ResizeObserver(fe), pe();
		}), y(() => Z?.disconnect()), P(J, () => h(pe));
		function me(e) {
			ue.value && (ue.value.scrollLeft = e.target.scrollLeft);
		}
		let he = n(() => (u.selection ? 36 : 0) + (u.index ? 48 : 0)), ge = n(() => u.selection ? 36 : 0), _e = n(() => {
			let e = {}, t = he.value;
			for (let n of D.value) n.fixed === "left" && (e[n.key] = t, t += n.width || 0);
			return e;
		}), ve = n(() => {
			let e = {}, t = 0;
			for (let n = D.value.length - 1; n >= 0; --n) {
				let r = D.value[n];
				r.fixed === "right" && (e[r.key] = t, t += r.width || 0);
			}
			return e;
		}), ye = n(() => {
			let e = D.value.filter((e) => e.fixed === "left").map((e) => e.key), t = D.value.filter((e) => e.fixed === "right").map((e) => e.key);
			return {
				check: !e.length && !!u.selection && !le.value,
				index: !e.length && le.value,
				lastLeft: e[e.length - 1] || null,
				firstRight: t[0] || null
			};
		});
		function be(e) {
			return e?.fixed === "left" ? { left: `${_e.value[e.key]}px` } : e?.fixed === "right" ? { right: `${ve.value[e.key]}px` } : null;
		}
		function xe(e) {
			return e?.fixed === "left" ? {
				"is-fixed-left": !0,
				"is-fixed-edge": e.key === ye.value.lastLeft
			} : e?.fixed === "right" ? {
				"is-fixed-right": !0,
				"is-fixed-edge": e.key === ye.value.firstRight
			} : null;
		}
		let Se = w(/* @__PURE__ */ new Set());
		function Ce(e) {
			return Se.value.has(Me(e));
		}
		let we = n(() => J.value.some((e) => Ce(e))), Te = n(() => J.value.length > 0 && J.value.every((e) => Ce(e)));
		function Ee() {
			d("selection-change", {
				keys: [...Se.value],
				rows: De.value
			});
		}
		let De = n(() => (u.rows || []).filter((e) => Se.value.has(Me(e))));
		function Oe(e) {
			let t = Me(e), n = new Set(Se.value);
			n.has(t) ? n.delete(t) : n.add(t), Se.value = n, Ee();
		}
		function ke() {
			let e = new Set(Se.value);
			Te.value ? J.value.forEach((t) => e.delete(Me(t))) : J.value.forEach((t) => e.add(Me(t))), Se.value = e, Ee();
		}
		function Ae(e) {
			G.value = e, d("page-change", e);
		}
		function je(e) {
			K.value = e, d("size-change", e);
		}
		function Me(e) {
			let t = typeof u.rowKey == "function" ? u.rowKey(e) : e?.[u.rowKey];
			return t == null ? "" : String(t);
		}
		function Ne(e, t) {
			let n = [];
			u.selectedKey != null && Me(e) === String(u.selectedKey) && n.push("is-selected"), u.selection && Ce(e) && n.push("is-checked");
			let r = u.rowClass?.(e, t);
			return r && n.push(r), n;
		}
		function Pe(e, t) {
			let n = e?.[t.key];
			return n == null || n === "" ? "—" : String(n);
		}
		return s({
			resetSort: U,
			resetPage: oe,
			getColumns: () => D.value.map((e) => ({ ...e })),
			getSelection: () => De.value.slice(),
			getSelectionKeys: () => [...Se.value],
			clearSelection: () => {
				Se.value = /* @__PURE__ */ new Set(), Ee();
			}
		}), (n, s) => (x(), a("div", { class: g(["my-grid-list", { "is-resizing": !!A(z) }]) }, [
			n.$slots.toolbar ? (x(), a("div", Xn, [E(n.$slots, "toolbar", {}, void 0, !0)])) : i("", !0),
			o("div", Zn, [J.value.length ? (x(), a("div", $n, [o("div", {
				ref_key: "headWrapRef",
				ref: ue,
				class: "grid-head-wrap",
				style: v({ paddingRight: `${X.value}px` })
			}, [o("table", {
				class: "my-grid-table",
				style: v({ minWidth: `${Y.value}px` })
			}, [o("colgroup", null, [
				t.selection ? (x(), a("col", er)) : i("", !0),
				le.value ? (x(), a("col", tr)) : i("", !0),
				(x(!0), a(e, null, T(A(D), (e) => (x(), a("col", {
					key: e.key,
					style: v({ width: `${e.width}px` })
				}, null, 4))), 128))
			]), o("thead", null, [(x(!0), a(e, null, T(m.value, (n, r) => (x(), a("tr", { key: r }, [
				t.selection && r === 0 ? (x(), a("th", {
					key: 0,
					class: g(["grid-th th-check is-fixed-left", { "is-fixed-edge": ye.value.check }]),
					style: { left: "0px" },
					rowspan: _.value
				}, [o("input", {
					type: "checkbox",
					class: "row-check",
					title: "全选当页",
					"aria-label": "全选当页",
					checked: Te.value,
					indeterminate: we.value && !Te.value,
					onClick: s[0] ||= R(() => {}, ["stop"]),
					onChange: ke
				}, null, 40, rr)], 10, nr)) : i("", !0),
				le.value && r === 0 ? (x(), a("th", {
					key: 1,
					class: g(["grid-th th-index is-fixed-left", { "is-fixed-edge": ye.value.index }]),
					style: v({ left: `${ge.value}px` }),
					rowspan: _.value,
					title: "序号"
				}, "序号", 14, ir)) : i("", !0),
				(x(!0), a(e, null, T(n.cells, (e) => (x(), a("th", {
					key: e.col.key,
					class: g(["grid-th", [{
						"th-num": !e.group && e.col.num,
						"th-group": e.group,
						"th-sortable": !e.group && e.col.sortable && t.sortable,
						"is-sorted": !e.group && A(B) === e.col.key,
						"is-dragging": A(j) === e.col.key,
						"is-drag-over": A(M) === e.col.key && A(j) !== e.col.key
					}, xe(e.col)]]),
					style: v(be(e.col)),
					colspan: e.colspan > 1 ? e.colspan : void 0,
					rowspan: e.rowspan > 1 ? e.rowspan : void 0,
					draggable: S.value && !e.group && !e.col.fixed ? "true" : "false",
					title: A(ne)(e.col),
					"aria-sort": e.group ? void 0 : A(H)(e.col),
					onClick: (n) => !e.group && t.sortable ? A(te)(e.col) : null,
					onDragstart: (t) => e.col.fixed ? null : A(N)(t, e.col),
					onDragover: (t) => e.col.fixed ? null : A(F)(t, e.col),
					onDrop: (t) => e.col.fixed ? null : A(I)(t, e.col),
					onDragend: s[2] ||= (...e) => A(L) && A(L)(...e)
				}, [
					o("span", or, O(e.col.label), 1),
					!e.group && e.col.sortable && t.sortable ? (x(), a("span", sr, [o("i", { class: g(["sort-caret caret-asc", { "is-on": A(B) === e.col.key && A(V) === "asc" }]) }, null, 2), o("i", { class: g(["sort-caret caret-desc", { "is-on": A(B) === e.col.key && A(V) === "desc" }]) }, null, 2)])) : i("", !0),
					e.group ? i("", !0) : (x(), a("span", {
						key: 1,
						class: "col-resizer",
						draggable: "false",
						"data-resizer": e.col.key,
						onClick: s[1] ||= R(() => {}, ["stop"]),
						onMousedown: R((t) => A(ee)(t, e.col), ["stop", "prevent"])
					}, null, 40, cr))
				], 46, ar))), 128))
			]))), 128))])], 4)], 4), o("div", {
				ref_key: "bodyWrapRef",
				ref: de,
				class: "grid-body-wrap",
				onScrollPassive: me
			}, [o("table", {
				class: "my-grid-table",
				style: v({ minWidth: `${Y.value}px` })
			}, [o("colgroup", null, [
				t.selection ? (x(), a("col", lr)) : i("", !0),
				le.value ? (x(), a("col", ur)) : i("", !0),
				(x(!0), a(e, null, T(A(D), (e) => (x(), a("col", {
					key: e.key,
					style: v({ width: `${e.width}px` })
				}, null, 4))), 128))
			]), o("tbody", null, [(x(!0), a(e, null, T(J.value, (r, c) => (x(), a("tr", {
				key: Me(r),
				class: g(Ne(r, c)),
				onClick: (e) => d("row-click", r, c)
			}, [
				t.selection ? (x(), a("td", {
					key: 0,
					class: g(["cell-check is-fixed-left", { "is-fixed-edge": ye.value.check }]),
					style: { left: "0px" },
					onClick: s[3] ||= R(() => {}, ["stop"])
				}, [o("input", {
					type: "checkbox",
					class: "row-check",
					"aria-label": `选择第 ${c + 1} 行`,
					checked: Ce(r),
					onChange: (e) => Oe(r)
				}, null, 40, fr)], 2)) : i("", !0),
				le.value ? (x(), a("td", {
					key: 1,
					class: g(["cell-index is-fixed-left", { "is-fixed-edge": ye.value.index }]),
					style: v({ left: `${ge.value}px` })
				}, O(ce.value + c + 1), 7)) : i("", !0),
				(x(!0), a(e, null, T(A(D), (e) => (x(), a("td", {
					key: e.key,
					class: g([{ "cell-num": e.num }, xe(e)]),
					style: v(be(e))
				}, [E(n.$slots, `cell:${e.key}`, {
					row: r,
					value: r?.[e.key],
					index: c
				}, () => [l(O(Pe(r, e)), 1)], !0)], 6))), 128))
			], 10, dr))), 128))])], 4)], 544)])) : (x(), a("div", Qn, [E(n.$slots, "empty", {}, () => [l(O(t.emptyText || "暂无数据"), 1)], !0)])), t.loading ? (x(), a("div", pr, [...s[4] ||= [o("span", { class: "my-grid-list__loading-spin" }, null, -1), o("span", null, "加载中…", -1)]])) : i("", !0)]),
			t.pager ? (x(), r(Yn, {
				key: 1,
				total: se.value,
				page: A(G),
				"page-size": A(K),
				"page-sizes": t.pageSizes,
				disabled: t.loading,
				"onUpdate:page": Ae,
				"onUpdate:pageSize": je
			}, null, 8, [
				"total",
				"page",
				"page-size",
				"page-sizes",
				"disabled"
			])) : i("", !0)
		], 2));
	}
}, [["__scopeId", "data-v-07e16d27"]]), hr = { class: "my-grid-filter" }, gr = { class: "mgf-toolbar" }, _r = [
	"value",
	"title",
	"aria-label",
	"onChange"
], vr = ["value"], yr = {
	key: 0,
	class: "mgf-badge"
}, br = {
	key: 0,
	class: "mgf-chips"
}, xr = [
	"aria-label",
	"onClick",
	"onKeydown"
], Sr = /*#__PURE__*/ z({
	__name: "MyGridFilterBar",
	props: {
		selects: {
			type: Array,
			default: () => []
		},
		values: {
			type: Object,
			default: () => ({})
		},
		selectOptions: {
			type: Object,
			default: () => ({})
		},
		chips: {
			type: Array,
			default: () => []
		},
		activeCount: {
			type: Number,
			default: 0
		},
		hasFilter: {
			type: Boolean,
			default: !1
		}
	},
	emits: [
		"update:values",
		"open-advanced",
		"reset-all",
		"remove-chip",
		"clear-chips"
	],
	setup(t, { emit: n }) {
		let r = t, s = n;
		function u(e) {
			return e.allValue === void 0 ? "__all__" : e.allValue;
		}
		function d(e) {
			let t = r.values?.[e.key];
			return t === void 0 || t === u(e);
		}
		return (n, r) => (x(), a("div", hr, [o("div", gr, [
			(x(!0), a(e, null, T(t.selects, (n) => (x(), a("select", {
				key: n.key,
				class: g(["mgf-select", { "is-set": !d(n) }]),
				value: t.values?.[n.key] ?? u(n),
				title: n.label || n.key,
				"aria-label": n.label || n.key,
				onChange: (e) => s("update:values", {
					...t.values,
					[n.key]: e.target.value
				})
			}, [(x(!0), a(e, null, T(t.selectOptions[n.key] || [], (e) => (x(), a("option", {
				key: e.value,
				value: e.value
			}, O(e.label), 9, vr))), 128))], 42, _r))), 128)),
			o("button", {
				type: "button",
				class: g(["mgf-adv", { "is-active": t.activeCount > 0 }]),
				title: "高级搜索",
				"aria-label": "高级搜索",
				onClick: r[0] ||= (e) => s("open-advanced")
			}, [r[3] ||= c("<svg width=\"13\" height=\"13\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\" data-v-71872849><path d=\"M2 4h5.1a3 3 0 0 1 5.8 0H14a1 1 0 1 1 0 2h-1.1a3 3 0 0 1-5.8 0H2a1 1 0 0 1 0-2Zm5.1 8H2a1 1 0 1 0 0 2h5.1a3 3 0 0 0 5.8 0H14a1 1 0 1 0 0-2h-1.1a3 3 0 0 0-5.8 0Z\" data-v-71872849></path><circle cx=\"10\" cy=\"5\" r=\"1.4\" data-v-71872849></circle><circle cx=\"10\" cy=\"13\" r=\"1.4\" data-v-71872849></circle></svg><span class=\"mgf-adv-text\" data-v-71872849>高级</span>", 2), t.activeCount > 0 ? (x(), a("span", yr, O(t.activeCount), 1)) : i("", !0)], 2),
			t.hasFilter ? (x(), a("button", {
				key: 0,
				type: "button",
				class: "mgf-reset",
				title: "重置全部筛选",
				"aria-label": "重置全部筛选",
				onClick: r[1] ||= (e) => s("reset-all")
			}, "重置")) : i("", !0)
		]), t.chips.length ? (x(), a("div", br, [(x(!0), a(e, null, T(t.chips, (e) => (x(), a("span", {
			key: e.key,
			class: "mgf-chip"
		}, [
			r[4] ||= o("i", { class: "dot" }, null, -1),
			l(O(e.text) + " ", 1),
			o("i", {
				class: "x",
				role: "button",
				tabindex: "0",
				title: "移除该条件",
				"aria-label": `移除条件 ${e.text}`,
				onClick: (t) => s("remove-chip", e.key),
				onKeydown: L(R((t) => s("remove-chip", e.key), ["prevent"]), ["enter"])
			}, "✕", 40, xr)
		]))), 128)), o("button", {
			type: "button",
			class: "mgf-chips-clear",
			onClick: r[2] ||= (e) => s("clear-chips")
		}, "清空")])) : i("", !0)]));
	}
}, [["__scopeId", "data-v-71872849"]]), Cr = { class: "mgfd-title" }, wr = { class: "mgfd-body" }, Tr = ["title"], Er = { class: "range-box" }, Dr = [
	"value",
	"aria-label",
	"onInput"
], Or = [
	"value",
	"aria-label",
	"onInput"
], kr = { class: "row-unit" }, Ar = { class: "mgfd-foot" }, jr = 320, Mr = 280, Nr = 480, Pr = 240, Fr = 560, Ir = 1300, Lr = 38, Rr = 24, zr = 51, Br = /*#__PURE__*/ z({
	__name: "MyGridFilterDrawer",
	props: {
		visible: {
			type: Boolean,
			default: !1
		},
		fields: {
			type: Array,
			default: () => []
		},
		ranges: {
			type: Object,
			default: () => ({})
		},
		activeCount: {
			type: Number,
			default: 0
		},
		container: {
			type: String,
			default: "body"
		},
		offset: {
			type: Object,
			default: () => ({
				top: 12,
				left: 12
			})
		}
	},
	emits: [
		"update:visible",
		"range-change",
		"reset",
		"apply"
	],
	setup(t, { emit: r }) {
		let i = t, s = r, c = w(null);
		function l() {
			return 68 + (Math.max(i.fields.length, 1) * Lr - 8) + Rr + zr;
		}
		let d = w(l()), f = w(!1), p = typeof document > "u" ? null : i.container && document.querySelector(i.container) || document.body, m = w({
			top: i.offset.top ?? 12,
			left: i.offset.left ?? 12
		}), _ = w(Fr);
		function v() {
			let e = p?.getBoundingClientRect?.().height || 0;
			e > 340 && (_.value = Math.max(340, Math.round(e) - (i.offset.top ?? 12) * 2));
		}
		function S() {
			if (f.value) return;
			let e = c.value?.closest(".my-float-panel__body");
			if (!e) return;
			let t = e.scrollHeight - e.clientHeight;
			t <= 1 || (d.value = Math.min(d.value + Math.ceil(t), _.value));
		}
		function C() {
			f.value = !0;
		}
		function E(e) {
			return e !== "" && e != null && !Number.isFinite(Number(e));
		}
		let D = n(() => {
			let e = /* @__PURE__ */ new Set();
			return i.fields.forEach((t) => {
				let n = i.ranges[t.key];
				n && (E(n.min) || E(n.max)) && e.add(t.key);
			}), e;
		});
		function k(e, t, n) {
			s("range-change", {
				key: e,
				which: t,
				value: n.target.value
			});
		}
		function A(e) {
			let t = i.ranges[e];
			return !(!t || t.min === "" && t.max === "");
		}
		function j(e) {
			e.key === "Escape" && i.visible && s("update:visible", !1);
		}
		return b(() => {
			window.addEventListener("keydown", j), v();
		}), y(() => window.removeEventListener("keydown", j)), P(() => i.fields.length, () => {
			f.value || (d.value = l());
		}), P(() => i.visible, async (e) => {
			e && (v(), await h(), S(), c.value?.querySelector(".range-box input")?.focus());
		}), (n, r) => (x(), a("div", { class: g(["my-grid-filter-drawer", { "is-open": t.visible }]) }, [u(sn, {
			title: "高级搜索",
			visible: t.visible,
			width: jr,
			height: d.value,
			"min-width": Mr,
			"min-height": Pr,
			"max-width": Nr,
			"max-height": _.value,
			max: !1,
			resize: "",
			"z-index": Ir,
			container: t.container,
			offset: m.value,
			move: "",
			"onUpdate:visible": r[2] ||= (e) => s("update:visible", e),
			onResize: C
		}, {
			title: F(() => [o("span", Cr, [r[3] ||= o("span", null, "高级搜索", -1), o("span", { class: g(["cnt", { zero: !t.activeCount }]) }, O(t.activeCount ? `已设 ${t.activeCount} 项` : "未设条件"), 3)])]),
			default: F(() => [o("div", {
				ref_key: "bodyRef",
				ref: c,
				class: "mgfd-shell"
			}, [
				o("div", wr, [(x(!0), a(e, null, T(t.fields, (e) => (x(), a("div", {
					key: e.key,
					class: g(["mgfd-row", {
						"is-set": A(e.key),
						"is-invalid": D.value.has(e.key)
					}])
				}, [
					o("span", {
						class: "row-label",
						title: e.label
					}, O(e.label), 9, Tr),
					o("div", Er, [
						o("input", {
							type: "text",
							inputmode: "decimal",
							placeholder: "不限",
							value: t.ranges[e.key]?.min ?? "",
							"aria-label": `${e.label}最小值`,
							onInput: (t) => k(e.key, "min", t)
						}, null, 40, Dr),
						r[4] ||= o("span", { class: "sep" }, "~", -1),
						o("input", {
							type: "text",
							inputmode: "decimal",
							placeholder: "不限",
							value: t.ranges[e.key]?.max ?? "",
							"aria-label": `${e.label}最大值`,
							onInput: (t) => k(e.key, "max", t)
						}, null, 40, Or)
					]),
					o("span", kr, O(e.unit), 1)
				], 2))), 128))]),
				r[5] ||= o("p", { class: "mgfd-tip" }, "留空为不限，改动即时生效", -1),
				o("div", Ar, [o("button", {
					type: "button",
					class: "btn btn-default",
					onClick: r[0] ||= (e) => s("reset")
				}, "重置"), o("button", {
					type: "button",
					class: "btn btn-primary",
					onClick: r[1] ||= (e) => s("apply")
				}, "查询")])
			], 512)]),
			_: 1
		}, 8, [
			"visible",
			"height",
			"max-height",
			"container",
			"offset"
		])], 2));
	}
}, [["__scopeId", "data-v-f0ef07b6"]]), Vr = Math.PI / 180, Hr = 100 * Vr, Ur = 30 * Vr, Wr = 120 * Vr, Gr = 85 * Vr;
function Kr(e, t) {
	let n = Math.max(Number(t) || 1, .001);
	return 2 * Math.atan(Math.tan(e * .5) / n);
}
function qr(e, t) {
	return 1 / Math.tan(Kr(e, t) * .5);
}
function Jr(e) {
	return Number.isFinite(e) ? Math.min(Wr, Math.max(Ur, e)) : Hr;
}
function Yr(e) {
	return Number.isFinite(e) ? Math.min(Gr, Math.max(-Gr, e)) : 0;
}
function Xr(e) {
	let t = Math.max(e.width, 1), n = Math.max(e.height, 1), r = e.hfov / (Math.PI / 2), i = (Math.atan(e.downX / t * 2 - 1) - Math.atan(e.x / t * 2 - 1)) * r + e.downYaw, a = Kr(e.hfov, t / n) / (Math.PI / 2);
	return {
		yaw: i,
		pitch: Yr((Math.atan(e.y / n * 2 - 1) - Math.atan(e.downY / n * 2 - 1)) * a + e.downPitch)
	};
}
function Zr(e, t) {
	return Jr(t ? e + 5 * Vr * Math.sign(t) : e);
}
//#endregion
//#region src/mylayout/components/MyPanoramaViewer.vue
var Qr = 4096, $r = .92, ei = /*#__PURE__*/ z({
	__name: "MyPanoramaViewer",
	props: {
		url: {
			type: String,
			default: ""
		},
		bitmap: {
			type: Object,
			default: null
		}
	},
	emits: ["error"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = w(null), o = [
			"attribute vec2 aPos;",
			"varying vec2 vPos;",
			"void main() {",
			"  vPos = aPos;",
			"  gl_Position = vec4(aPos, 0.0, 1.0);",
			"}"
		].join("\n"), s = [
			"precision highp float;",
			"varying vec2 vPos;",
			"uniform sampler2D uTex;",
			"uniform float uAspect;",
			"uniform float uYaw;",
			"uniform float uPitch;",
			"uniform float uFocal;",
			"const float PI = 3.141592653589793;",
			"void main() {",
			"  float x = vPos.x * uAspect;",
			"  float y = vPos.y;",
			"  float sp = sin(uPitch);",
			"  float cp = cos(uPitch);",
			"  float a = uFocal * cp - y * sp;",
			"  float root = sqrt(x * x + a * a);",
			"  float lon = atan(x / root, a / root) + uYaw;",
			"  float lat = atan((y * cp + uFocal * sp) / root);",
			"  vec2 uv = vec2(fract(lon / (2.0 * PI) + 0.5), clamp(0.5 - lat / PI, 0.0, 1.0));",
			"  gl_FragColor = texture2D(uTex, uv);",
			"}"
		].join("\n"), c = null, l = null, u = null, d = null, f = null, p = 0, m = 0, h = Hr, g = null, _ = 0, v = 0, S = !1, C = 0, T = null, E = !1;
		function D(e, t) {
			let n = c.createShader(e);
			return c.shaderSource(n, t), c.compileShader(n), c.getShaderParameter(n, c.COMPILE_STATUS) ? n : (c.deleteShader(n), null);
		}
		function O() {
			let e = D(c.VERTEX_SHADER, o), t = D(c.FRAGMENT_SHADER, s);
			if (!e || !t) return null;
			let n = c.createProgram();
			return c.attachShader(n, e), c.attachShader(n, t), c.linkProgram(n), c.deleteShader(e), c.deleteShader(t), c.getProgramParameter(n, c.LINK_STATUS) ? n : (c.deleteProgram(n), null);
		}
		function k() {
			let e = i.value;
			return !e || (c = e.getContext("webgl", {
				alpha: !1,
				antialias: !0
			}) || e.getContext("experimental-webgl"), !c) || (l = O(), !l) ? !1 : (c.useProgram(l), A(), f = {
				tex: c.getUniformLocation(l, "uTex"),
				aspect: c.getUniformLocation(l, "uAspect"),
				yaw: c.getUniformLocation(l, "uYaw"),
				pitch: c.getUniformLocation(l, "uPitch"),
				focal: c.getUniformLocation(l, "uFocal")
			}, c.uniform1i(f.tex, 0), c.disable(c.DEPTH_TEST), !0);
		}
		function A() {
			u = c.createBuffer(), c.bindBuffer(c.ARRAY_BUFFER, u), c.bufferData(c.ARRAY_BUFFER, new Float32Array([
				-1,
				-1,
				1,
				-1,
				-1,
				1,
				1,
				1
			]), c.STATIC_DRAW);
			let e = c.getAttribLocation(l, "aPos");
			c.enableVertexAttribArray(e), c.vertexAttribPointer(e, 2, c.FLOAT, !1, 0, 0);
		}
		function j() {
			let e = i.value;
			if (!c || !l || !e) return;
			let t = M(e);
			(e.width !== t.width || e.height !== t.height) && (e.width = t.width, e.height = t.height);
			let n = t.width / Math.max(t.height, 1);
			c.viewport(0, 0, t.width, t.height), c.uniform1f(f.aspect, n), c.uniform1f(f.yaw, p), c.uniform1f(f.pitch, m), c.uniform1f(f.focal, qr(h, n)), c.drawArrays(c.TRIANGLE_STRIP, 0, 4);
		}
		function M(e) {
			let t = Math.min(window.devicePixelRatio || 1, 2);
			return {
				width: Math.max(1, Math.floor(e.clientWidth * t)),
				height: Math.max(1, Math.floor(e.clientHeight * t))
			};
		}
		function N() {
			S || (S = !0, requestAnimationFrame(() => {
				S = !1, j();
			}));
		}
		function F() {
			if (c) {
				if (n.bitmap) {
					L(n.bitmap);
					return;
				}
				n.url && I(n.url);
			}
		}
		function I(e) {
			let t = new Image();
			t.decoding = "async", t.crossOrigin = "anonymous", t.onload = () => L(R(t)), t.onerror = () => r("error"), t.src = e;
		}
		function L(e) {
			if (c && !E) {
				if (d && c.deleteTexture(d), d = c.createTexture(), c.activeTexture(c.TEXTURE0), c.bindTexture(c.TEXTURE_2D, d), c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !1), c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, c.RGBA, c.UNSIGNED_BYTE, R(e)), c.getError() !== c.NO_ERROR) {
					r("error");
					return;
				}
				c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.LINEAR), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.LINEAR), N();
			}
		}
		function R(e) {
			let t = c?.getParameter(c.MAX_TEXTURE_SIZE) || Qr, n = Math.min(t, Qr), r = e.naturalWidth || e.width || 0, i = e.naturalHeight || e.height || 0;
			if (!r || !i || r <= n && i <= n) return e;
			let a = n / Math.max(r, i), o = document.createElement("canvas");
			o.width = Math.max(1, Math.round(r * a)), o.height = Math.max(1, Math.round(i * a));
			let s = o.getContext("2d");
			return s ? (s.imageSmoothingEnabled = !0, s.drawImage(e, 0, 0, o.width, o.height), o) : e;
		}
		function z(e) {
			let t = i.value.getBoundingClientRect();
			return {
				x: e.clientX - t.left,
				y: e.clientY - t.top,
				width: t.width,
				height: t.height
			};
		}
		function ee(e) {
			H();
			let t = z(e);
			g = {
				x: t.x,
				y: t.y,
				yaw: p,
				pitch: m
			}, _ = 0, v = 0, e.currentTarget?.setPointerCapture?.(e.pointerId);
		}
		function B(e) {
			if (!g) return;
			let t = z(e), n = Xr({
				downX: g.x,
				downY: g.y,
				x: t.x,
				y: t.y,
				width: t.width,
				height: t.height,
				downYaw: g.yaw,
				downPitch: g.pitch,
				hfov: h
			});
			_ = n.yaw - p, v = n.pitch - m, p = n.yaw, m = n.pitch, N();
		}
		function V(e) {
			g && (g = null, e.currentTarget?.releasePointerCapture?.(e.pointerId), ne());
		}
		function te(e) {
			e.preventDefault(), H(), h = Zr(h, e.deltaY), N();
		}
		function ne() {
			let e = () => {
				if (_ *= $r, v *= $r, Math.hypot(_, v) < 1e-4) {
					C = 0;
					return;
				}
				p += _, m = Yr(m + v), j(), C = requestAnimationFrame(e);
			};
			C = requestAnimationFrame(e);
		}
		function H() {
			C &&= (cancelAnimationFrame(C), 0);
		}
		function re(e) {
			e.addEventListener("pointerdown", ee), e.addEventListener("pointermove", B), e.addEventListener("pointerup", V), e.addEventListener("pointercancel", V), e.addEventListener("wheel", te, { passive: !1 });
		}
		function U(e) {
			e.removeEventListener("pointerdown", ee), e.removeEventListener("pointermove", B), e.removeEventListener("pointerup", V), e.removeEventListener("pointercancel", V), e.removeEventListener("wheel", te);
		}
		function W() {
			c &&= (d && c.deleteTexture(d), u && c.deleteBuffer(u), l && c.deleteProgram(l), d = null, u = null, l = null, null);
		}
		return b(() => {
			let e = i.value;
			if (!e || !k()) {
				r("error");
				return;
			}
			re(e), typeof ResizeObserver < "u" && (T = new ResizeObserver(() => N()), T.observe(e)), F(), N();
		}), P(() => [n.url, n.bitmap], () => {
			F();
		}), y(() => {
			E = !0, H();
			let e = i.value;
			e && U(e), T && T.disconnect(), T = null, W();
		}), (e, t) => (x(), a("canvas", {
			ref_key: "canvasRef",
			ref: i,
			class: "my-pano-canvas"
		}, null, 512));
	}
}, [["__scopeId", "data-v-a4b4d1e7"]]), ti = 8192, ni = 4096, ri = 262144, ii = 1048576;
function ai(e, t) {
	return !Number.isFinite(t) || t <= 0 ? "正在加载…" : `${Math.min(100, Math.round(e / t * 100))}% · ${oi(e)} / ${oi(t)}`;
}
function oi(e) {
	return `${(Math.max(0, e) / ii).toFixed(1)} MB`;
}
function si(e, t, n) {
	let r = Number(e), i = Number(t);
	if (!Number.isFinite(r) || !Number.isFinite(i) || r <= 0 || i <= 0) return {
		width: 0,
		height: 0,
		scaled: !1
	};
	let a = Math.max(r, i);
	if (a <= n) return {
		width: r,
		height: i,
		scaled: !1
	};
	let o = n / a;
	return {
		width: Math.max(1, Math.round(r * o)),
		height: Math.max(1, Math.round(i * o)),
		scaled: !0
	};
}
function ci(e) {
	if (!e || e.length < 4 || e[0] !== 255 || e[1] !== 216) return null;
	let t = 2;
	for (; t + 9 < e.length;) {
		if (e[t] !== 255) return null;
		let n = e[t + 1];
		if (n === 217 || n === 218) return null;
		let r = (e[t + 2] << 8) + e[t + 3];
		if (r < 2) return null;
		if (n >= 192 && n <= 194) return li(e, t);
		t += 2 + r;
	}
	return null;
}
function li(e, t) {
	let n = (e[t + 5] << 8) + e[t + 6], r = (e[t + 7] << 8) + e[t + 8];
	return r <= 0 || n <= 0 ? null : {
		width: r,
		height: n
	};
}
function ui(e) {
	if (!e || e.length < 24) return null;
	let t = [
		137,
		80,
		78,
		71
	];
	for (let n = 0; n < t.length; n += 1) if (e[n] !== t[n]) return null;
	let n = di(e, 16), r = di(e, 20);
	return n <= 0 || r <= 0 ? null : {
		width: n,
		height: r
	};
}
function di(e, t) {
	return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
}
function fi(e, t = {}) {
	return mi(e) ? hi(e, t) : gi(e, t);
}
function pi(e) {
	let t = typeof e == "function" ? e() : e;
	return t && typeof t == "object" ? t : {};
}
function mi(e) {
	return typeof e == "string" && (e.startsWith("data:") || e.startsWith("blob:"));
}
function hi(e, t) {
	return t.onProgress?.({
		loaded: 1,
		total: 1
	}), fetch(e, { signal: t.signal }).then((e) => {
		if (!e.ok) throw Error(`HTTP ${e.status}`);
		return e.blob();
	});
}
function gi(e, t) {
	return new Promise((n, r) => {
		let i = new XMLHttpRequest(), a = () => i.abort();
		i.open("GET", e);
		let o = pi(t.headers);
		Object.keys(o).forEach((e) => {
			o[e] != null && i.setRequestHeader(e, o[e]);
		}), i.responseType = "blob", t.signal?.addEventListener("abort", a), i.onprogress = (e) => _i(e, t.onProgress), i.onload = () => vi(i, t.signal, a, n, r), i.onerror = () => r(/* @__PURE__ */ Error("network")), i.onabort = () => r(yi()), i.send();
	});
}
function _i(e, t) {
	if (!t) return;
	let n = e.lengthComputable ? e.total : 0;
	t({
		loaded: e.loaded || 0,
		total: n
	});
}
function vi(e, t, n, r, i) {
	if (t?.removeEventListener("abort", n), e.status >= 200 && e.status < 300 && e.response) {
		r(e.response);
		return;
	}
	i(/* @__PURE__ */ Error(`HTTP ${e.status}`));
}
function yi() {
	return new DOMException("aborted", "AbortError");
}
async function bi(e, t) {
	let n = await xi(e), r = n ? si(n.width, n.height, t) : null;
	if (typeof createImageBitmap != "function") return Si(e, n);
	let i = await wi(e, r);
	return {
		bitmap: i,
		objectUrl: "",
		width: i.width,
		height: i.height,
		scaled: !!r?.scaled
	};
}
async function xi(e) {
	let t = new Uint8Array(await e.slice(0, ri).arrayBuffer());
	return ci(t) || ui(t);
}
function Si(e, t) {
	return {
		bitmap: null,
		objectUrl: Ci(e),
		width: t?.width || 0,
		height: t?.height || 0,
		scaled: !1
	};
}
function Ci(e) {
	return typeof URL < "u" && typeof URL.createObjectURL == "function" ? URL.createObjectURL(e) : "";
}
async function wi(e, t) {
	if (!t?.scaled) return createImageBitmap(e);
	try {
		return await createImageBitmap(e, {
			resizeWidth: t.width,
			resizeHeight: t.height,
			resizeQuality: "high"
		});
	} catch {
		return createImageBitmap(e);
	}
}
//#endregion
//#region src/mylayout/composables/usePhotoSource.js
function Ti(e, t = {}) {
	let n = w(!1), r = w(""), i = w(-1), a = w(""), o = w(null), s = w(null), c = w(!1), l = w(!1), u = w(0), d = w(0), f = 0, m = "", h = null, g = null, _ = null;
	function v(e) {
		_ = e || null;
		let r = x(_);
		if (!_?.url) {
			c.value = !0, n.value = !1;
			return;
		}
		let i = new AbortController();
		g = i, fi(_.url, {
			signal: i.signal,
			headers: t.headers,
			onProgress: (e) => S(r, e)
		}).then((e) => C(r, e)).catch((e) => T(r, e));
	}
	function y() {
		h && !n.value && (n.value = !0, r.value = "正在解码…", i.value = 1, D(f));
	}
	function b() {
		f += 1, g?.abort(), g = null, N(), h = null;
	}
	function x(e) {
		return f += 1, g?.abort(), N(), h = null, c.value = !1, l.value = !1, a.value = "", u.value = 0, d.value = 0, n.value = !!e?.url, i.value = -1, r.value = "正在加载…", f;
	}
	function S(e, t) {
		e === f && (r.value = ai(t.loaded, t.total), i.value = t.total > 0 ? t.loaded / t.total : -1);
	}
	function C(e, t) {
		return e === f ? (h = t, r.value = "正在解码…", i.value = 1, D(e)) : Promise.resolve();
	}
	function T(e, t) {
		e === f && t?.name !== "AbortError" && E();
	}
	function E() {
		if (n.value = !1, _?.thumbUrl) {
			l.value = !0, a.value = _.thumbUrl, c.value = !1;
			return;
		}
		c.value = !0;
	}
	async function D(t) {
		try {
			let n = await bi(h, e() ? ni : ti);
			if (t !== f) {
				A(n);
				return;
			}
			await O(t, n);
		} catch {
			if (t !== f) return;
			E();
		}
	}
	function O(e, t) {
		if (u.value = t.width || 0, d.value = t.height || 0, N(), e !== f) {
			A(t);
			return;
		}
		if (t.bitmap) {
			k(t.bitmap), n.value = !1;
			return;
		}
		let r = t.objectUrl || j(h);
		if (!r) {
			E();
			return;
		}
		if (e !== f) {
			M(r);
			return;
		}
		m = r, a.value = r, n.value = !1;
	}
	function k(t) {
		let n = p(t);
		if (e()) {
			o.value = n;
			return;
		}
		s.value = n;
	}
	function A(e) {
		e?.bitmap?.close?.(), e?.objectUrl && M(e.objectUrl);
	}
	function j(e) {
		return typeof URL.createObjectURL == "function" ? URL.createObjectURL(e) : "";
	}
	function M(e) {
		e && typeof URL.revokeObjectURL == "function" && URL.revokeObjectURL(e);
	}
	function N() {
		m && M(m), m = "", o.value?.close?.(), o.value = null, s.value?.close?.(), s.value = null;
	}
	return {
		loading: n,
		progressText: r,
		progressRatio: i,
		displayUrl: a,
		panoBitmap: o,
		flatBitmap: s,
		failed: c,
		useThumb: l,
		width: u,
		height: d,
		load: v,
		retarget: y,
		dispose: b
	};
}
//#endregion
//#region src/mylayout/utils/panorama.js
var Ei = /(^|[^a-z])(pano|panorama|360)([^a-z]|$)/i;
function Di(e) {
	return Ei.test(String(e || "").trim());
}
function Oi(e, t) {
	let n = Number(e), r = Number(t);
	if (!Number.isFinite(n) || !Number.isFinite(r) || n <= 0 || r <= 0) return !1;
	let i = n / r;
	return n >= 2048 && i >= 1.9 && i <= 2.1;
}
function ki(e = {}) {
	return e.panorama === !0 || e.panorama !== !1 && Di(e.title);
}
function Ai(e = {}) {
	return e.panorama === !1 ? !1 : e.panorama === !0 || Di(e.title) || Oi(e.width, e.height);
}
//#endregion
//#region src/mylayout/components/MyPhotoViewer.vue
var ji = ["src"], Mi = {
	key: 1,
	class: "pano-host"
}, Ni = [
	"width",
	"height",
	"data-zoom",
	"data-rotate"
], Pi = [
	"src",
	"alt",
	"data-zoom",
	"data-rotate",
	"data-source"
], Fi = {
	key: 4,
	class: "viewer-empty"
}, Ii = {
	key: 5,
	class: "viewer-progress"
}, Li = { class: "viewer-progress-track" }, Ri = {
	key: 6,
	class: "viewer-warn"
}, zi = {
	key: 7,
	class: "viewer-hint"
}, Bi = {
	key: 8,
	class: "viewer-hint"
}, Vi = { class: "viewer-nav" }, Hi = ["title"], Ui = {
	key: 0,
	class: "viewer-pager"
}, Wi = ["disabled"], Gi = { class: "viewer-idx" }, Ki = ["disabled"], qi = { class: "viewer-tools" }, Ji = { class: "tool-zoom" }, Yi = .2, Xi = 8, Zi = 1.25, Qi = 2.5, $i = /*#__PURE__*/ z({
	__name: "MyPhotoViewer",
	props: {
		modelValue: {
			type: Boolean,
			default: !1
		},
		urls: {
			type: Array,
			default: () => []
		},
		titles: {
			type: Array,
			default: () => []
		},
		items: {
			type: Array,
			default: () => []
		},
		initialIndex: {
			type: Number,
			default: 0
		},
		headers: {
			type: [Object, Function],
			default: null
		},
		embedded: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["update:modelValue", "update:index"],
	setup(t, { expose: r, emit: s }) {
		let c = t, l = s, d = w(c.modelValue), f = n(() => c.embedded || d.value), p = w(0), m = w(1), _ = w(0), S = w(0), C = w(0), T = w(!1), E = w(!1), D = w(!1), k = w(null), j = w(null), M = w(null), { loading: N, progressText: F, progressRatio: I, displayUrl: L, panoBitmap: z, flatBitmap: ee, failed: B, useThumb: V, width: te, height: ne, load: H, retarget: re, dispose: U } = Ti(() => E.value, { headers: () => c.headers }), W = null;
		P(() => c.modelValue, (e) => {
			c.embedded || (d.value = e, e ? (p.value = fe(c.initialIndex), Z(), H(q.value), h(() => k.value?.focus?.())) : U());
		}), P(d, (e) => l("update:modelValue", e)), P(p, (e) => l("update:index", e)), P(() => c.initialIndex, (e) => {
			f.value && (p.value = fe(e), Z());
		});
		let G = n(() => c.items?.length ? c.items.map((e, t) => ({
			url: e?.url || "",
			thumbUrl: e?.thumbUrl || "",
			title: String(e?.title || ""),
			panorama: e?.panorama === !0 || e?.panorama !== !1 && null,
			key: e?.key || `${t}-${e?.url || ""}`
		})) : (c.urls || []).map((e, t) => ({
			url: e || "",
			thumbUrl: "",
			title: String(c.titles?.[t] || ""),
			panorama: null,
			key: `${t}-${e || ""}`
		}))), K = n(() => G.value.length), q = n(() => G.value[p.value] || {
			url: "",
			thumbUrl: "",
			title: "",
			panorama: null,
			key: ""
		}), ie = n(() => q.value.url), ae = n(() => q.value.title), oe = n(() => q.value.panorama), J = n(() => Math.round(m.value * 100)), se = n(() => ki({
			panorama: oe.value,
			title: ae.value
		})), ce = n(() => !D.value && Ai({
			panorama: oe.value,
			title: ae.value,
			width: te.value,
			height: ne.value
		})), Y = n(() => !(!N.value || L.value || E.value || !q.value.thumbUrl)), le = n(() => !!(z.value || L.value)), ue = n(() => I.value < 0 ? {} : { width: `${Math.round(I.value * 100)}%` }), de = n(() => ae.value ? ae.value : ie.value ? `图片 ${p.value + 1}` : "图片预览"), X = n(() => ({ transform: `translate(${S.value}px, ${C.value}px) rotate(${_.value}deg) scale(${m.value})` }));
		P(() => q.value.key, () => {
			D.value = !1, me(), Z(), f.value && H(q.value);
		}), b(() => {
			f.value && (c.embedded && (p.value = fe(c.initialIndex), Z()), H(q.value));
		}), y(() => U()), P(ee, (e) => {
			h(() => Ce(e));
		});
		function Z() {
			E.value = se.value;
		}
		function fe(e) {
			let t = Number(e);
			return !Number.isFinite(t) || t < 0 ? 0 : Math.min(Math.floor(t), Math.max(0, K.value - 1));
		}
		function pe(e, t, n) {
			return Math.min(n, Math.max(t, e));
		}
		function me() {
			m.value = 1, _.value = 0, S.value = 0, C.value = 0;
		}
		function he(e, t, n) {
			let r = pe(m.value * n, Yi, Xi);
			if (r === m.value) return;
			let i = r / m.value;
			S.value = e - (e - S.value) * i, C.value = t - (t - C.value) * i, m.value = r, r <= 1 && (S.value = 0, C.value = 0);
		}
		function ge(e) {
			he(0, 0, e);
		}
		function _e(e) {
			_.value = ((_.value + e) % 360 + 360) % 360, S.value = 0, C.value = 0;
		}
		function ve(e) {
			if (E.value) return;
			let t = j.value;
			if (!t) return;
			let n = t.getBoundingClientRect();
			he(e.clientX - n.left - n.width / 2, e.clientY - n.top - n.height / 2, e.deltaY < 0 ? Zi : 1 / Zi);
		}
		function ye(e) {
			E.value || m.value <= 1 || (T.value = !0, W = {
				x: e.clientX,
				y: e.clientY,
				ox: S.value,
				oy: C.value
			}, e.currentTarget?.setPointerCapture?.(e.pointerId));
		}
		function be(e) {
			T.value && W && (S.value = W.ox + (e.clientX - W.x), C.value = W.oy + (e.clientY - W.y));
		}
		function xe(e) {
			T.value && (T.value = !1, W = null, e.currentTarget?.releasePointerCapture?.(e.pointerId));
		}
		function Se() {
			if (!E.value) {
				if (m.value > 1) {
					me();
					return;
				}
				he(0, 0, Qi);
			}
		}
		function Ce(e) {
			let t = M.value;
			if (!t || !e) return;
			let n = t.getContext("2d");
			n && n.drawImage(e, 0, 0, t.width, t.height);
		}
		function we(e) {
			let t = e?.target;
			te.value ||= t?.naturalWidth || 0, ne.value ||= t?.naturalHeight || 0;
		}
		function Te() {
			if (!V.value && q.value.thumbUrl) {
				V.value = !0, L.value = q.value.thumbUrl;
				return;
			}
			B.value = !0;
		}
		function Ee() {
			E.value = !E.value, E.value && me(), re();
		}
		function De() {
			D.value = !0, E.value = !1;
		}
		function Oe(e) {
			if (e.key === "Escape") {
				Ae();
				return;
			}
			if (e.key === "ArrowLeft") {
				ke(-1);
				return;
			}
			if (e.key === "ArrowRight") {
				ke(1);
				return;
			}
			E.value || (e.key === "+" || e.key === "=" ? ge(Zi) : e.key === "-" ? ge(1 / Zi) : e.key === "0" && me());
		}
		function ke(e) {
			p.value = fe(p.value + e);
		}
		function Ae() {
			d.value = !1;
		}
		return r({
			goTo(e) {
				p.value = fe(e), Z();
			},
			resetView: me,
			zoomIn: () => ge(Zi),
			zoomOut: () => ge(1 / Zi)
		}), (n, r) => f.value ? (x(), a("div", {
			key: 0,
			ref_key: "rootRef",
			ref: k,
			class: g(["my-photo-viewer", { "my-photo-viewer--embedded": t.embedded }]),
			tabindex: "-1",
			onKeydown: Oe
		}, [
			t.embedded ? i("", !0) : (x(), a("button", {
				key: 0,
				type: "button",
				class: "viewer-close",
				"aria-label": "关闭",
				onClick: Ae
			}, "×")),
			o("div", {
				ref_key: "stageRef",
				ref: j,
				class: g(["viewer-body", { "viewer-body--dragging": T.value }]),
				onWheel: R(ve, ["prevent"]),
				onPointerdown: ye,
				onPointermove: be,
				onPointerup: xe,
				onPointercancel: xe,
				onDblclick: Se
			}, [
				Y.value ? (x(), a("img", {
					key: 0,
					class: "viewer-preview",
					src: q.value.thumbUrl,
					alt: "",
					draggable: "false"
				}, null, 8, ji)) : i("", !0),
				E.value && le.value ? (x(), a("div", Mi, [u(ei, {
					bitmap: A(z),
					url: A(z) ? "" : A(L),
					onError: De
				}, null, 8, ["bitmap", "url"])])) : A(ee) && !A(B) ? (x(), a("canvas", {
					key: 2,
					ref_key: "flatRef",
					ref: M,
					class: "viewer-img",
					width: A(ee).width,
					height: A(ee).height,
					style: v(X.value),
					"data-zoom": m.value,
					"data-rotate": _.value,
					"data-source": "original"
				}, null, 12, Ni)) : A(L) && !A(B) ? (x(), a("img", {
					key: 3,
					class: "viewer-img",
					src: A(L),
					alt: de.value,
					style: v(X.value),
					"data-zoom": m.value,
					"data-rotate": _.value,
					"data-source": A(V) ? "thumb" : "original",
					draggable: "false",
					onLoad: we,
					onError: Te
				}, null, 44, Pi)) : A(N) ? i("", !0) : (x(), a("div", Fi, "无法加载图片")),
				A(N) ? (x(), a("div", Ii, [o("div", Li, [o("div", {
					class: g(["viewer-progress-bar", { "is-indeterminate": A(I) < 0 }]),
					style: v(ue.value)
				}, null, 6)]), o("span", null, O(A(F)), 1)])) : i("", !0),
				A(V) && !E.value ? (x(), a("div", Ri, "原图读取失败，已显示缩略图")) : i("", !0),
				E.value && !A(N) ? (x(), a("div", zi, "拖动环视 · 滚轮缩放")) : m.value > 1 ? (x(), a("div", Bi, "拖动平移 · 双击放大 / 还原")) : i("", !0)
			], 34),
			o("div", Vi, [
				o("span", {
					class: "viewer-title",
					title: de.value
				}, O(de.value), 9, Hi),
				K.value > 1 ? (x(), a("div", Ui, [
					o("button", {
						type: "button",
						class: "nav-btn",
						disabled: p.value <= 0,
						onClick: r[0] ||= (e) => ke(-1)
					}, "上一张", 8, Wi),
					o("span", Gi, O(p.value + 1) + " / " + O(K.value), 1),
					o("button", {
						type: "button",
						class: "nav-btn",
						disabled: p.value >= K.value - 1,
						onClick: r[1] ||= (e) => ke(1)
					}, "下一张", 8, Ki)
				])) : i("", !0),
				o("div", qi, [E.value ? i("", !0) : (x(), a(e, { key: 0 }, [
					o("button", {
						type: "button",
						class: "tool tool-zoom-out",
						title: "缩小",
						onClick: r[2] ||= (e) => ge(1 / Zi)
					}, "－"),
					o("span", Ji, O(J.value) + "%", 1),
					o("button", {
						type: "button",
						class: "tool tool-zoom-in",
						title: "放大",
						onClick: r[3] ||= (e) => ge(Zi)
					}, "＋"),
					o("button", {
						type: "button",
						class: "tool tool-rotate-ccw",
						title: "向左旋转 90°",
						onClick: r[4] ||= (e) => _e(-90)
					}, "⟲"),
					o("button", {
						type: "button",
						class: "tool tool-rotate-cw",
						title: "向右旋转 90°",
						onClick: r[5] ||= (e) => _e(90)
					}, "⟳"),
					o("button", {
						type: "button",
						class: "tool tool-reset",
						title: "复位",
						onClick: me
					}, "复位")
				], 64)), ce.value ? (x(), a("button", {
					key: 1,
					type: "button",
					class: g(["tool tool-pano", { "tool--active": E.value }]),
					onClick: Ee
				}, O(E.value ? "平面图" : "全景图"), 3)) : i("", !0)])
			])
		], 34)) : i("", !0);
	}
}, [["__scopeId", "data-v-7ad04aa3"]]), ea = "__all__";
function ta(e, t = {}) {
	let r = t.selects || [], i = t.ranges || [], a = (e) => e.allValue === void 0 ? ea : e.allValue, o = (e) => e.read || ((t) => t?.[e.key]), s = C(Object.fromEntries(r.map((e) => [e.key, a(e)]))), c = C(Object.fromEntries(i.map((e) => [e.key, {
		min: "",
		max: ""
	}]))), l = n(() => {
		let t = typeof e == "function" ? e() : e?.value;
		return Array.isArray(t) ? t : [];
	}), u = n(() => {
		let e = {};
		return r.forEach((t) => {
			let n = [{
				value: a(t),
				label: t.allLabel || "全部"
			}];
			if (t.options?.length) {
				e[t.key] = [...n, ...t.options];
				return;
			}
			let r = o(t), i = /* @__PURE__ */ new Set();
			l.value.forEach((e) => {
				let t = r(e);
				t != null && t !== "" && i.add(t);
			});
			let s = [...i].sort((e, t) => String(e).localeCompare(String(t), "zh-Hans-CN"));
			e[t.key] = [...n, ...s.map((e) => ({
				value: e,
				label: String(e)
			}))];
		}), e;
	});
	function d(e) {
		if (e === "" || e == null) return null;
		let t = Number(e);
		return Number.isFinite(t) ? t : null;
	}
	function f(e, t, n) {
		let r = d(t), i = d(n);
		return r == null && i == null ? null : r != null && i != null ? `${e.label} ${r}~${i}${e.unit || ""}` : r == null ? `${e.label} ≤ ${i}${e.unit || ""}` : `${e.label} ≥ ${r}${e.unit || ""}`;
	}
	let p = n(() => i.map((e) => {
		let { min: t, max: n } = c[e.key], r = f(e, t, n);
		return r ? {
			key: e.key,
			text: r
		} : null;
	}).filter(Boolean)), m = n(() => p.value.length), h = n(() => m.value > 0 || r.some((e) => s[e.key] !== a(e))), g = n(() => JSON.stringify({
		values: s,
		ranges: c
	}));
	function _(e) {
		return r.every((t) => {
			let n = s[t.key];
			return n === a(t) || o(t)(e) === n;
		});
	}
	function v(e) {
		return i.every((t) => {
			let { min: n, max: r } = c[t.key], i = d(n), a = d(r);
			if (i == null && a == null) return !0;
			let o = d(t.read(e));
			return !(o == null || i != null && o < i || a != null && o > a);
		});
	}
	let y = n(() => l.value.filter((e) => _(e) && v(e)));
	function b(e, t) {
		e in s && (s[e] = t);
	}
	function x(e, t, n) {
		let r = c[e];
		!r || t !== "min" && t !== "max" || (r[t] = n);
	}
	function S(e) {
		let t = c[e];
		t && (t.min = "", t.max = "");
	}
	function w() {
		i.forEach((e) => {
			c[e.key].min = "", c[e.key].max = "";
		});
	}
	function T() {
		r.forEach((e) => {
			s[e.key] = a(e);
		}), w();
	}
	return {
		selects: r,
		rangeFields: i,
		values: s,
		ranges: c,
		selectOptions: u,
		chips: p,
		activeCount: m,
		hasFilter: h,
		signature: g,
		filtered: y,
		setSelect: b,
		setRange: x,
		removeChip: S,
		clearChips: w,
		resetAll: T
	};
}
//#endregion
//#region src/mylayout/index.js
var na = {
	MyBorderLayout: Jt,
	MyGridLayout: en,
	MyMainFrame: tn,
	MyPanel: mt,
	MyPanelContent: bt,
	MyTabs: Mt,
	MyFloatPanel: sn,
	MyApiDoc: Nn,
	MyGridList: mr,
	MyPagerBar: Yn,
	MyGridFilterBar: Sr,
	MyGridFilterDrawer: Br,
	MyPhotoViewer: $i,
	MyPanoramaViewer: ei
};
function ra(e) {
	for (let t in na) e.component(t, na[t]);
}
var ia = {
	install: ra,
	...na
};
//#endregion
export { Me as DEFAULT_PANEL_NAME, He as DEFAULT_THEME, Nn as MyApiDoc, Jt as MyBorderLayout, sn as MyFloatPanel, Sr as MyGridFilterBar, Br as MyGridFilterDrawer, en as MyGridLayout, mr as MyGridList, tn as MyMainFrame, Yn as MyPagerBar, mt as MyPanel, bt as MyPanelContent, ei as MyPanoramaViewer, $i as MyPhotoViewer, ke as MySplitter, Mt as MyTabs, je as ROOT_LAYOUT_ID, Ue as THEMES, ia as default, Pe as genLayoutId, Re as getLayout, ze as hasLayout, _t as isComponentPath, Pn as isEmptySortValue, Be as listLayoutIds, Fe as makeChildLayoutId, Ge as normalizeTheme, In as numSortValue, Ie as registerLayout, gt as resolvePathComponent, Ke as themeClass, Le as unregisterLayout, Fn as useGridColumnControls, ta as useGridFilter, Rn as useLocalPager, Ti as usePhotoSource, qe as useThemeContext };
