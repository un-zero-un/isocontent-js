"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var JSONParser_1 = __importDefault(require("./JSONParser"));
function parse(json) {
    return new JSONParser_1.default().parse('string' === typeof json ? JSON.parse(json) : json);
}
exports.default = parse;
