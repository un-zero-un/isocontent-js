"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseSpecification_1 = __importDefault(require("./BaseSpecification"));
var BlockArgumentMatch = /** @class */ (function (_super) {
    __extends(BlockArgumentMatch, _super);
    function BlockArgumentMatch(argumentName, argumentValue) {
        var _this = _super.call(this) || this;
        _this._argumentName = argumentName;
        _this._argumentValue = argumentValue;
        return _this;
    }
    BlockArgumentMatch.prototype.isSatisfiedBy = function (candidate) {
        console.log('Candidate: ', candidate, 'ArgName: ', this._argumentName, 'ArgVal: ', this._argumentValue);
        return (candidate.props &&
            this._argumentName in candidate.props &&
            candidate.props[this._argumentName] === this._argumentValue);
    };
    return BlockArgumentMatch;
}(BaseSpecification_1.default));
exports.default = BlockArgumentMatch;
