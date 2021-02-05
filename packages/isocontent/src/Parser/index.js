"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var JSONParser_1 = __importDefault(require("./JSONParser"));
exports.JSONParser = JSONParser_1.default;
var parse_1 = __importDefault(require("./parse"));
exports.parse = parse_1.default;
__export(require("./JSONParser"));
