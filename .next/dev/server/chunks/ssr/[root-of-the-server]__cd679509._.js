module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Documents/GitHub/book_rental_api/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/book_rental_api/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/book_rental_api/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Badge({ children, tone = "emerald" }) {
    const styles = {
        emerald: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
        gray: "bg-gray-100 text-gray-700 ring-1 ring-gray-200",
        rose: "bg-rose-50 text-rose-700 ring-1 ring-rose-100",
        sky: "bg-sky-50 text-sky-700 ring-1 ring-sky-100",
        amber: "bg-amber-50 text-amber-700 ring-1 ring-amber-100"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${styles[tone]}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function StatCard({ label, value, help }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-gray-100 bg-white p-5 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-semibold text-gray-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-2xl font-extrabold text-gray-900",
                children: value
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-gray-600",
                children: help
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
function SectionTitle({ title, desc }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-bold text-gray-900",
                children: title
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm text-gray-600",
                children: desc
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
function Input({ label, value, onChange, placeholder, type = "text", min }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mb-2 block text-sm font-semibold text-gray-700",
                children: label
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: type,
                min: min,
                value: value,
                onChange: (e)=>onChange(e.target.value),
                placeholder: placeholder,
                className: "w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function Select({ label, value, onChange, options }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mb-2 block text-sm font-semibold text-gray-700",
                children: label
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: value,
                onChange: (e)=>onChange(e.target.value),
                className: "w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100",
                children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: option.value,
                        children: option.label
                    }, option.value, false, {
                        fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
function formatDate(value) {
    if (!value) return "-";
    return value;
}
function getTodayString() {
    const now = new Date();
    const offset = now.getTimezoneOffset();
    const local = new Date(now.getTime() - offset * 60 * 1000);
    return local.toISOString().split("T")[0];
}
function getDefaultDueDate(baseDate = getTodayString()) {
    const date = new Date(baseDate);
    date.setDate(date.getDate() + 14);
    const offset = date.getTimezoneOffset();
    const local = new Date(date.getTime() - offset * 60 * 1000);
    return local.toISOString().split("T")[0];
}
function normalizeCode(value) {
    return value.trim().toUpperCase();
}
function normalizePhone(value) {
    return value.replace(/\D/g, "");
}
function getBookStatus(book) {
    if (!book.borrower || !book.dueDate) return "available";
    const today = getTodayString();
    if (book.dueDate < today) return "overdue";
    return "borrowed";
}
function getStatusLabel(status) {
    switch(status){
        case "available":
            return "대여 가능";
        case "borrowed":
            return "대여 중";
        case "overdue":
            return "연체";
        default:
            return "-";
    }
}
function getStatusTone(status) {
    switch(status){
        case "available":
            return "emerald";
        case "borrowed":
            return "sky";
        case "overdue":
            return "rose";
        default:
            return "emerald";
    }
}
function HomePage() {
    const [books, setBooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [borrowMode, setBorrowMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("member");
    const [bookInputMode, setBookInputMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("barcode");
    const [scanInput, setScanInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedTitle, setSelectedTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [borrower, setBorrower] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [borrowedAt, setBorrowedAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getTodayString());
    const [dueDate, setDueDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getDefaultDueDate());
    const [currentBookCode, setCurrentBookCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cameraReady, setCameraReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cameraLoading, setCameraLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cameraError, setCameraError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [cameraOpen, setCameraOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const html5QrCodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scannerRegionId = "reader";
    async function fetchBooks() {
        try {
            setLoading(true);
            setErrorMessage("");
            const response = await fetch("/api/books", {
                method: "GET",
                cache: "no-store"
            });
            const data = await response.json();
            if (!response.ok || !data.ok) {
                throw new Error(data.error || "도서 목록을 불러오지 못했습니다.");
            }
            setBooks(data.books ?? []);
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : "도서 목록을 불러오지 못했습니다.");
        } finally{
            setLoading(false);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchBooks();
    }, []);
    const enrichedBooks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return books.map((book)=>({
                ...book,
                status: getBookStatus(book)
            }));
    }, [
        books
    ]);
    const filteredBooks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return enrichedBooks.filter((book)=>{
            const lowerQuery = query.toLowerCase();
            const matchesQuery = book.title.toLowerCase().includes(lowerQuery) || book.author.toLowerCase().includes(lowerQuery) || book.borrower.toLowerCase().includes(lowerQuery) || (book.bookcode || "").toLowerCase().includes(lowerQuery);
            const matchesFilter = filter === "all" ? true : book.status === filter;
            return matchesQuery && matchesFilter;
        });
    }, [
        enrichedBooks,
        query,
        filter
    ]);
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const total = enrichedBooks.length;
        const available = enrichedBooks.filter((book)=>book.status === "available").length;
        const borrowed = enrichedBooks.filter((book)=>book.status === "borrowed").length;
        const overdue = enrichedBooks.filter((book)=>book.status === "overdue").length;
        const dueToday = enrichedBooks.filter((book)=>(book.status === "borrowed" || book.status === "overdue") && book.dueDate === getTodayString()).length;
        return {
            total,
            available,
            borrowed,
            overdue,
            dueToday
        };
    }, [
        enrichedBooks
    ]);
    const availableTitleOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const uniqueTitles = Array.from(new Set(enrichedBooks.filter((book)=>book.status === "available").map((book)=>book.title.trim()).filter(Boolean))).sort((a, b)=>a.localeCompare(b, "ko"));
        return [
            {
                label: "도서명을 선택하세요",
                value: ""
            },
            ...uniqueTitles.map((title)=>({
                    label: title,
                    value: title
                }))
        ];
    }, [
        enrichedBooks
    ]);
    function resetBorrowForm() {
        setScanInput("");
        setSelectedTitle("");
        setBorrower("");
        setPhone("");
        setBorrowedAt(getTodayString());
        setDueDate(getDefaultDueDate());
        setCurrentBookCode("");
        setBookInputMode("barcode");
    }
    async function submitBorrow(payload) {
        try {
            setSubmitting(true);
            const response = await fetch("/api/books", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    borrowerType: payload.borrowerType,
                    memberCode: payload.memberCode || "",
                    borrower: payload.borrower,
                    phone: payload.phone || "",
                    borrowedAt: payload.borrowedAt,
                    dueDate: payload.dueDate,
                    bookCode: payload.bookCode || "",
                    bookTitle: payload.bookTitle || ""
                })
            });
            const data = await response.json();
            if (!response.ok || !data.ok) {
                throw new Error(data.error || "대여 등록에 실패했습니다.");
            }
            await fetchBooks();
            const borrowerText = `${payload.borrower} (${payload.phone || "-"})`;
            const bookText = payload.bookCode || payload.bookTitle || "-";
            resetBorrowForm();
            setMessage(`대여 완료: ${bookText} / ${borrowerText}`);
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : "대여 등록에 실패했습니다.");
        } finally{
            setSubmitting(false);
        }
    }
    async function handleScanSubmit(rawCode) {
        setMessage("");
        setErrorMessage("");
        const code = normalizeCode(rawCode ?? scanInput);
        const normalizedPhone = normalizePhone(phone);
        const normalizedTitle = selectedTitle.trim();
        if (!code && !normalizedTitle) {
            setErrorMessage("도서 바코드 또는 도서명을 선택해주세요.");
            return;
        }
        if (!borrowedAt) {
            setErrorMessage("대여일을 입력해주세요.");
            return;
        }
        if (!dueDate) {
            setErrorMessage("반납예정일을 입력해주세요.");
            return;
        }
        if (dueDate < borrowedAt) {
            setErrorMessage("반납예정일은 대여일보다 빠를 수 없습니다.");
            return;
        }
        if (borrowMode === "member") {
            if (!borrower.trim()) {
                setErrorMessage("회원 이름을 입력해주세요.");
                return;
            }
            if (!normalizedPhone) {
                setErrorMessage("회원 전화번호를 입력해주세요.");
                return;
            }
            if (bookInputMode === "barcode" && !code.startsWith("CNDB")) {
                setErrorMessage("도서 바코드를 스캔해주세요.");
                return;
            }
            if (bookInputMode === "title" && !normalizedTitle) {
                setErrorMessage("도서명을 선택해주세요.");
                return;
            }
            setCurrentBookCode(code || normalizedTitle);
            await submitBorrow({
                borrowerType: "member",
                memberCode: "",
                borrower: borrower.trim(),
                phone: normalizedPhone,
                borrowedAt,
                dueDate,
                bookCode: bookInputMode === "barcode" ? code : "",
                bookTitle: bookInputMode === "title" ? normalizedTitle : ""
            });
            return;
        }
        if (!borrower.trim()) {
            setErrorMessage("비회원 이름을 입력해주세요.");
            return;
        }
        if (!normalizedPhone) {
            setErrorMessage("비회원 연락처를 입력해주세요.");
            return;
        }
        if (bookInputMode === "barcode" && !code.startsWith("CNDB")) {
            setErrorMessage("도서 바코드를 스캔해주세요.");
            return;
        }
        if (bookInputMode === "title" && !normalizedTitle) {
            setErrorMessage("도서명을 선택해주세요.");
            return;
        }
        setCurrentBookCode(code || normalizedTitle);
        await submitBorrow({
            borrowerType: "guest",
            borrower: borrower.trim(),
            phone: normalizedPhone,
            borrowedAt,
            dueDate,
            bookCode: bookInputMode === "barcode" ? code : "",
            bookTitle: bookInputMode === "title" ? normalizedTitle : ""
        });
    }
    async function handleReturn(bookCode, bookId) {
        try {
            setSubmitting(true);
            setMessage("");
            setErrorMessage("");
            const response = await fetch("/api/books", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    bookCode,
                    id: bookId
                })
            });
            const data = await response.json();
            if (!response.ok || !data.ok) {
                throw new Error(data.error || "반납 처리에 실패했습니다.");
            }
            await fetchBooks();
            setMessage(`반납 처리가 완료되었습니다: ${bookCode}`);
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : "반납 처리에 실패했습니다.");
        } finally{
            setSubmitting(false);
        }
    }
    async function stopCamera() {
        try {
            if (html5QrCodeRef.current) {
                const state = html5QrCodeRef.current.getState?.();
                if (state === 2 || state === 1) {
                    await html5QrCodeRef.current.stop();
                }
                await html5QrCodeRef.current.clear();
            }
        } catch  {
        // ignore
        } finally{
            html5QrCodeRef.current = null;
            setCameraOpen(false);
            setCameraReady(false);
            setCameraLoading(false);
        }
    }
    async function startCamera() {
        try {
            setCameraError("");
            setCameraLoading(true);
            const { Html5Qrcode } = await __turbopack_context__.A("[project]/Documents/GitHub/book_rental_api/node_modules/html5-qrcode/esm/index.js [app-ssr] (ecmascript, async loader)");
            if (html5QrCodeRef.current) {
                await stopCamera();
            }
            const scanner = new Html5Qrcode(scannerRegionId);
            html5QrCodeRef.current = scanner;
            await scanner.start({
                facingMode: "environment"
            }, {
                fps: 10,
                qrbox: {
                    width: 250,
                    height: 140
                },
                aspectRatio: 1.7778
            }, async (decodedText)=>{
                const code = normalizeCode(decodedText);
                try {
                    await stopCamera();
                    await handleScanSubmit(code);
                } catch  {
                // ignore
                }
            }, ()=>{
            // ignore noisy scan failures
            });
            setCameraOpen(true);
            setCameraReady(true);
        } catch (error) {
            setCameraError(error instanceof Error ? error.message : "카메라를 시작하지 못했습니다.");
        } finally{
            setCameraLoading(false);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            stopCamera();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-b from-emerald-50 via-white to-sky-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "rounded-3xl border border-gray-100 bg-white/90 p-6 shadow-sm backdrop-blur sm:p-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-3xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                children: "도서 대여 관리"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                lineNumber: 603,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                tone: "sky",
                                                children: "회원/비회원 대여"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                lineNumber: 604,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                tone: "rose",
                                                children: "연체 자동 표시"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                lineNumber: 605,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                        lineNumber: 602,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl",
                                        children: [
                                            "도서 대여를 한 화면에서",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent",
                                                children: "스캔하고, 등록하고, 반납 처리하세요"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                lineNumber: 610,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                        lineNumber: 608,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base",
                                        children: "회원은 이름과 전화번호 확인 후 도서를 대여할 수 있고, 비회원은 이름과 연락처 입력 후 도서를 대여할 수 있습니다. 도서 바코드가 없으면 도서명으로도 대여할 수 있습니다."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                        lineNumber: 615,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                lineNumber: 601,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-md rounded-3xl bg-gradient-to-br from-emerald-500 to-sky-500 p-1 shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[22px] bg-white p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold text-gray-900",
                                            children: "운영 상태"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                            lineNumber: 622,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 space-y-3 text-sm text-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-gray-100 p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold text-gray-900",
                                                            children: "현재 연결 방식"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                            lineNumber: 625,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2",
                                                            children: "Next.js API → Apps Script → Google Sheets"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                            lineNumber: 626,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 624,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-gray-100 p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold text-gray-900",
                                                            children: "대여 방식"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                            lineNumber: 631,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2",
                                                            children: "회원/비회원 모두 도서 바코드 또는 도서명으로 대여 가능"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                            lineNumber: 632,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 630,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                            lineNumber: 623,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                    lineNumber: 621,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                lineNumber: 620,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                        lineNumber: 600,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                    lineNumber: 599,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                            label: "전체 도서",
                            value: stats.total,
                            help: "등록된 전체 도서 수"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                            lineNumber: 643,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                            label: "대여 가능",
                            value: stats.available,
                            help: "즉시 대여 가능한 도서"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                            lineNumber: 644,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                            label: "대여 중",
                            value: stats.borrowed,
                            help: "현재 이용 중인 도서"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                            lineNumber: 645,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                            label: "연체",
                            value: stats.overdue,
                            help: "반납 예정일이 지난 도서"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                            lineNumber: 646,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                            label: "오늘 반납 예정",
                            value: stats.dueToday,
                            help: "오늘 반납 예정 도서"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                            lineNumber: 647,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                    lineNumber: 642,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-8 grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-3xl border border-gray-100 bg-white p-6 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                    title: "대여 등록",
                                    desc: "회원은 이름/전화번호 확인 후, 비회원은 이름과 연락처 입력 후 도서를 선택하세요."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                    lineNumber: 652,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setBorrowMode("member");
                                                        resetBorrowForm();
                                                        setMessage("");
                                                        setErrorMessage("");
                                                    },
                                                    className: `inline-flex flex-1 items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition ${borrowMode === "member" ? "bg-gray-900 text-white shadow-sm" : "bg-white text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"}`,
                                                    children: "회원 대여"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 659,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setBorrowMode("guest");
                                                        resetBorrowForm();
                                                        setMessage("");
                                                        setErrorMessage("");
                                                    },
                                                    className: `inline-flex flex-1 items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition ${borrowMode === "guest" ? "bg-gray-900 text-white shadow-sm" : "bg-white text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"}`,
                                                    children: "비회원 대여"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 675,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                            lineNumber: 658,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3",
                                            children: !cameraOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: startCamera,
                                                disabled: cameraLoading || bookInputMode !== "barcode",
                                                className: "inline-flex flex-1 items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60",
                                                children: cameraLoading ? "카메라 준비 중..." : bookInputMode === "barcode" ? "카메라 스캔 시작" : "도서명 선택 중"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                lineNumber: 695,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: stopCamera,
                                                className: "inline-flex flex-1 items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50",
                                                children: "카메라 스캔 종료"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                lineNumber: 708,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                            lineNumber: 693,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    id: scannerRegionId,
                                                    className: `overflow-hidden rounded-2xl bg-black ${cameraReady ? "min-h-[260px]" : "min-h-[120px]"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 719,
                                                    columnNumber: 17
                                                }, this),
                                                !cameraOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-sm text-gray-500",
                                                    children: "바코드 모드에서 카메라 스캔 시작을 누르면 후면 카메라가 열립니다."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 724,
                                                    columnNumber: 19
                                                }, this) : null,
                                                cameraError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-sm font-medium text-rose-700",
                                                    children: cameraError
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 729,
                                                    columnNumber: 19
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                            lineNumber: 718,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setBookInputMode("barcode");
                                                        setSelectedTitle("");
                                                        setErrorMessage("");
                                                    },
                                                    className: `inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition ${bookInputMode === "barcode" ? "bg-emerald-600 text-white shadow-sm" : "bg-white text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"}`,
                                                    children: "바코드로 선택"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 736,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setBookInputMode("title");
                                                        setScanInput("");
                                                        setErrorMessage("");
                                                        stopCamera();
                                                    },
                                                    className: `inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition ${bookInputMode === "title" ? "bg-emerald-600 text-white shadow-sm" : "bg-white text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"}`,
                                                    children: "도서명으로 선택"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 751,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                            lineNumber: 735,
                                            columnNumber: 15
                                        }, this),
                                        borrowMode === "member" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl bg-sky-50 p-4 text-sm text-sky-800 ring-1 ring-sky-100",
                                                    children: "회원 이름과 전화번호를 입력한 뒤, 도서 바코드 또는 도서명을 선택하세요."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 771,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    label: "회원 이름",
                                                    value: borrower,
                                                    onChange: setBorrower,
                                                    placeholder: "회원 이름을 입력하세요"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 775,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    label: "회원 전화번호",
                                                    value: phone,
                                                    onChange: setPhone,
                                                    placeholder: "01012345678 또는 010-1234-5678"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 782,
                                                    columnNumber: 19
                                                }, this),
                                                bookInputMode === "barcode" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    label: "도서 바코드",
                                                    value: scanInput,
                                                    onChange: setScanInput,
                                                    placeholder: "CNDB0000"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 790,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                    label: "도서명 선택",
                                                    value: selectedTitle,
                                                    onChange: setSelectedTitle,
                                                    options: availableTitleOptions
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 797,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    label: "대여일",
                                                    type: "date",
                                                    value: borrowedAt,
                                                    onChange: setBorrowedAt
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 805,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    label: "반납예정일",
                                                    type: "date",
                                                    value: dueDate,
                                                    onChange: setDueDate,
                                                    min: borrowedAt || undefined
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 812,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            disabled: submitting,
                                                            onClick: ()=>handleScanSubmit(),
                                                            className: "inline-flex flex-1 items-center justify-center rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60",
                                                            children: submitting ? "처리 중..." : "회원 대여 처리"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                            lineNumber: 821,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                resetBorrowForm();
                                                                setMessage("입력값을 초기화했습니다.");
                                                                setErrorMessage("");
                                                            },
                                                            className: "inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50",
                                                            children: "초기화"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                            lineNumber: 830,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 820,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl bg-amber-50 p-4 text-sm text-amber-800 ring-1 ring-amber-100",
                                                    children: "비회원 이름과 연락처를 입력한 뒤, 도서 바코드 또는 도서명을 선택하세요."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 845,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    label: "비회원 이름",
                                                    value: borrower,
                                                    onChange: setBorrower,
                                                    placeholder: "이름을 입력하세요"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 849,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    label: "비회원 연락처",
                                                    value: phone,
                                                    onChange: setPhone,
                                                    placeholder: "01012345678 또는 010-1234-5678"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 856,
                                                    columnNumber: 19
                                                }, this),
                                                bookInputMode === "barcode" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    label: "도서 바코드",
                                                    value: scanInput,
                                                    onChange: setScanInput,
                                                    placeholder: "CNDB0000"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 864,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                    label: "도서명 선택",
                                                    value: selectedTitle,
                                                    onChange: setSelectedTitle,
                                                    options: availableTitleOptions
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 871,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    label: "대여일",
                                                    type: "date",
                                                    value: borrowedAt,
                                                    onChange: setBorrowedAt
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 879,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    label: "반납예정일",
                                                    type: "date",
                                                    value: dueDate,
                                                    onChange: setDueDate,
                                                    min: borrowedAt || undefined
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 886,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            disabled: submitting,
                                                            onClick: ()=>handleScanSubmit(),
                                                            className: "inline-flex flex-1 items-center justify-center rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60",
                                                            children: submitting ? "처리 중..." : "비회원 대여 처리"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                            lineNumber: 895,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                resetBorrowForm();
                                                                setMessage("입력값을 초기화했습니다.");
                                                                setErrorMessage("");
                                                            },
                                                            className: "inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50",
                                                            children: "초기화"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                            lineNumber: 904,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 894,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                    lineNumber: 657,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 min-h-12",
                                    children: [
                                        message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-emerald-700",
                                            children: message
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                            lineNumber: 922,
                                            columnNumber: 17
                                        }, this) : null,
                                        errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm font-medium text-rose-700",
                                            children: errorMessage
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                            lineNumber: 925,
                                            columnNumber: 17
                                        }, this) : null,
                                        currentBookCode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-xs text-gray-500",
                                            children: [
                                                "마지막 처리 도서: ",
                                                currentBookCode
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                            lineNumber: 930,
                                            columnNumber: 17
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                    lineNumber: 920,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                            lineNumber: 651,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-3xl border border-gray-100 bg-white p-6 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                            title: "도서 목록",
                                            desc: "검색과 필터를 이용해 현재 대여 현황을 빠르게 확인하세요."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                            lineNumber: 939,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-3 sm:grid-cols-2 lg:w-[440px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    label: "검색",
                                                    value: query,
                                                    onChange: setQuery,
                                                    placeholder: "도서명, 저자, 대여자, 도서코드 검색"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 945,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                    label: "상태 필터",
                                                    value: filter,
                                                    onChange: (value)=>setFilter(value),
                                                    options: [
                                                        {
                                                            label: "전체",
                                                            value: "all"
                                                        },
                                                        {
                                                            label: "대여 가능",
                                                            value: "available"
                                                        },
                                                        {
                                                            label: "대여 중",
                                                            value: "borrowed"
                                                        },
                                                        {
                                                            label: "연체",
                                                            value: "overdue"
                                                        }
                                                    ]
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 951,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                            lineNumber: 944,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                    lineNumber: 938,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: fetchBooks,
                                        className: "inline-flex items-center justify-center rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50",
                                        children: "새로고침"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                        lineNumber: 966,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                    lineNumber: 965,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 overflow-hidden rounded-2xl border border-gray-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "min-w-full border-collapse",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "bg-gray-50",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500",
                                                                children: "도서명"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                                lineNumber: 980,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500",
                                                                children: "도서코드"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                                lineNumber: 983,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500",
                                                                children: "저자"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                                lineNumber: 986,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500",
                                                                children: "상태"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                                lineNumber: 989,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500",
                                                                children: "대여자"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                                lineNumber: 992,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500",
                                                                children: "대여일"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                                lineNumber: 995,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500",
                                                                children: "반납예정일"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                                lineNumber: 998,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500",
                                                                children: "처리"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                                lineNumber: 1001,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                        lineNumber: 979,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 978,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "bg-white",
                                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 8,
                                                            className: "px-4 py-10 text-center text-sm text-gray-500",
                                                            children: "데이터를 불러오는 중입니다..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                            lineNumber: 1009,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                        lineNumber: 1008,
                                                        columnNumber: 23
                                                    }, this) : filteredBooks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 8,
                                                            className: "px-4 py-10 text-center text-sm text-gray-500",
                                                            children: "조건에 맞는 도서가 없습니다."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                            lineNumber: 1018,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                        lineNumber: 1017,
                                                        columnNumber: 23
                                                    }, this) : filteredBooks.map((book)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "border-t border-gray-100 align-top",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-semibold text-gray-900",
                                                                        children: book.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                                        lineNumber: 1032,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                                    lineNumber: 1031,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-4 text-sm text-gray-700",
                                                                    children: book.bookcode || "-"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                                    lineNumber: 1036,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-4 text-sm text-gray-700",
                                                                    children: book.author || "-"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                                    lineNumber: 1039,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                        tone: getStatusTone(book.status),
                                                                        children: getStatusLabel(book.status)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                                        lineNumber: 1043,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                                    lineNumber: 1042,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-4 text-sm text-gray-700",
                                                                    children: book.borrower || "-"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                                    lineNumber: 1047,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-4 text-sm text-gray-700",
                                                                    children: formatDate(book.borrowedAt)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                                    lineNumber: 1050,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-4 text-sm text-gray-700",
                                                                    children: formatDate(book.dueDate)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                                    lineNumber: 1053,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-4",
                                                                    children: book.status === "available" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm text-gray-400",
                                                                        children: "대여 가능"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                                        lineNumber: 1058,
                                                                        columnNumber: 31
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        disabled: submitting,
                                                                        onClick: ()=>handleReturn(book.bookcode, book.id),
                                                                        className: "inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60",
                                                                        children: "반납 처리"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                                        lineNumber: 1062,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                                    lineNumber: 1056,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, book.id, true, {
                                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                            lineNumber: 1027,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                                    lineNumber: 1006,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                            lineNumber: 977,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                        lineNumber: 976,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                    lineNumber: 975,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex flex-wrap gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                            tone: "gray",
                                            children: "도서코드 검색 가능"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                            lineNumber: 1083,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                            tone: "emerald",
                                            children: "대여 가능 도서 확인"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                            lineNumber: 1084,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                            tone: "sky",
                                            children: "대여 중 목록 확인"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                            lineNumber: 1085,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                            tone: "rose",
                                            children: "연체 도서 즉시 확인"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                            lineNumber: 1086,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                                    lineNumber: 1082,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                            lineNumber: 937,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
                    lineNumber: 650,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
            lineNumber: 598,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/book_rental_api/src/app/page.tsx",
        lineNumber: 597,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cd679509._.js.map