"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BlockArgumentMatch_1 = __importDefault(require("./BlockArgumentMatch"));
var BlockTypeMatch_1 = __importDefault(require("./BlockTypeMatch"));
function blockArgument(argumentName, argumentValue) {
    return new BlockArgumentMatch_1.default(argumentName, argumentValue);
}
exports.blockArgument = blockArgument;
function blockType(type) {
    return new BlockTypeMatch_1.default(type);
}
exports.blockType = blockType;
