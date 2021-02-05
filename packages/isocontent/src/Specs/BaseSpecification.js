"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AllMatch_1 = __importDefault(require("./AllMatch"));
var BaseSpecification = /** @class */ (function () {
    function BaseSpecification() {
    }
    BaseSpecification.prototype.and = function (specification) {
        return new AllMatch_1.default(this, specification);
    };
    return BaseSpecification;
}());
exports.default = BaseSpecification;
