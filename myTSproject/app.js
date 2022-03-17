"use strict";
// import Axios from 'axios';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Coordinate = /** @class */ (function () {
    function Coordinate(x, y) {
        this.x = x;
        this.y = y;
    }
    Coordinate.prototype.draw = function () {
        console.log("X = " + this.x + " Y = " + this.y);
    };
    return Coordinate;
}());
var p1 = new Coordinate();
var p2 = new Coordinate(2, 3);
p1.draw();
p2.draw();
// ==== AJAX HTML request ========
var url = "https://hubblecontent.osi.officeppe.net/contentsvc/microsoftcontent";
var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }
};
xhr.send();
var simplebookapis = function () { return __awaiter(void 0, void 0, void 0, function () {
    var baseUrl, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                baseUrl = 'https://simple-books-api.glitch.me';
                return [4 /*yield*/, fetch("https://simple-books-api.glitch.me/status")];
            case 1:
                response = _a.sent();
                console.log(response);
                return [2 /*return*/];
        }
    });
}); };
simplebookapis();
// https://jsonplaceholder.typicode.com/guide/
// ==== fetch GET ========
// fetch(url, {
//    method: 'GET',
//    mode: 'no-cors'
// })
//    .then(data => data.json())
//    .then(res => { console.log(res) });
// --- POST
// fetch('https://jsonplaceholder.typicode.com/posts', {
//    method: 'POST',
//    body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 2,
//    }),
//    headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//    },
// })
//    .then((response) => response.json())
//    .then((json) => console.log(json));
// --- PUT ---
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//    method: 'PUT',
//    body: JSON.stringify({
//       id: 1,
//       title: 'foo ska',
//       body: 'bar ska',
//       userId: 1,
//    }),
//    headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//    },
// })
//    .then((response) => response.json())
//    .then((json) => {
//       console.log(json);
//       fetch('https://jsonplaceholder.typicode.com/posts/1')
//          .then(data => { return data.json() })
//          .then(res => { console.log(res) });
//    });
