module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Documents/GitHub/book_rental_api/src/app/api/books/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "PATCH",
    ()=>PATCH,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/book_rental_api/node_modules/next/server.js [app-route] (ecmascript)");
;
const APPS_SCRIPT_WEB_APP_URL = process.env.APPS_SCRIPT_WEB_APP_URL;
async function callAppsScript(method, payload, action) {
    if (!APPS_SCRIPT_WEB_APP_URL) {
        throw new Error("APPS_SCRIPT_WEB_APP_URL 환경변수가 설정되지 않았습니다.");
    }
    const response = method === "GET" ? await (()=>{
        const url = new URL(APPS_SCRIPT_WEB_APP_URL);
        url.searchParams.set("action", action || "list");
        if (payload?.bookCode) {
            url.searchParams.set("bookCode", String(payload.bookCode));
        }
        return fetch(url.toString(), {
            method: "GET",
            cache: "no-store",
            redirect: "follow"
        });
    })() : await fetch(APPS_SCRIPT_WEB_APP_URL, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(payload ?? {}),
        redirect: "follow"
    });
    const text = await response.text();
    if (!response.ok) {
        throw new Error(`Apps Script 호출 실패: ${response.status} / ${text}`);
    }
    try {
        return JSON.parse(text);
    } catch  {
        throw new Error(`Apps Script가 JSON이 아닌 응답을 반환했습니다: ${text.slice(0, 300)}`);
    }
}
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const action = searchParams.get("action") || "list";
        const bookCode = searchParams.get("bookCode") || "";
        const data = await callAppsScript("GET", bookCode ? {
            bookCode
        } : undefined, action);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data, {
            status: 200
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: error instanceof Error ? error.message : "도서 목록을 불러오지 못했습니다."
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const body = await request.json();
        const data = await callAppsScript("POST", {
            action: "borrow",
            borrowerType: body.borrowerType || "",
            memberCode: body.memberCode || "",
            borrower: body.borrower || "",
            phone: body.phone || "",
            borrowedAt: body.borrowedAt || "",
            dueDate: body.dueDate || "",
            bookCode: body.bookCode || "",
            bookTitle: body.bookTitle || "",
            id: body.id
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data, {
            status: 200
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: error instanceof Error ? error.message : "대여 등록에 실패했습니다."
        }, {
            status: 500
        });
    }
}
async function PATCH(request) {
    try {
        const body = await request.json();
        const data = await callAppsScript("POST", {
            action: "return",
            bookCode: body.bookCode || "",
            id: body.id
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data, {
            status: 200
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$book_rental_api$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: error instanceof Error ? error.message : "반납 처리에 실패했습니다."
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b5149391._.js.map