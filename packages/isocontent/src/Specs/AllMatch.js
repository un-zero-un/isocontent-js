"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AllMatch = /** @class */ (function () {
    function AllMatch() {
        var specifications = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            specifications[_i] = arguments[_i];
        }
        this._specifications = specifications;
    }
    AllMatch.prototype.isSatisfiedBy = function (candidate) {
        return this._specifications.reduce(function (carry, spec) { return carry && spec.isSatisfiedBy(candidate); }, true);
    };
    AllMatch.prototype.and = function (specification) {
        return new AllMatch(this, specification);
    };
    return AllMatch;
}());
exports.default = AllMatch;
