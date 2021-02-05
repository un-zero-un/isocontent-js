"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var AllMatch_1 = __importDefault(require("./AllMatch"));
describe('AllMatch', function () {
    it('matches all ok conditions', function () {
        var Mock = jest.fn(function () { return ({
            isSatisfiedBy: jest.fn(function () { return true; }),
            and: jest.fn(function (a) { return new AllMatch_1.default(a); }),
        }); });
        var mock1 = new Mock();
        var mock2 = new Mock();
        var allMatch = new AllMatch_1.default(mock1, mock2);
        assert_1.default.strictEqual(allMatch.isSatisfiedBy(true), true);
    });
    it('does not matches all ko conditions', function () {
        var Mock = jest.fn(function () { return ({
            isSatisfiedBy: jest.fn(function () { return false; }),
            and: jest.fn(function (a) { return new AllMatch_1.default(a); }),
        }); });
        var mock1 = new Mock();
        var mock2 = new Mock();
        var allMatch = new AllMatch_1.default(mock1, mock2);
        assert_1.default.strictEqual(allMatch.isSatisfiedBy(true), false);
    });
    it('does not matches mixed conditions', function () {
        var Mock1 = jest.fn(function () { return ({
            isSatisfiedBy: jest.fn(function () { return false; }),
            and: jest.fn(function (a) { return new AllMatch_1.default(a); }),
        }); });
        var mock1 = new Mock1();
        var Mock2 = jest.fn(function () { return ({
            isSatisfiedBy: jest.fn(function () { return true; }),
            and: jest.fn(function (a) { return new AllMatch_1.default(a); }),
        }); });
        var mock2 = new Mock2();
        var allMatch = new AllMatch_1.default(mock1, mock2);
        assert_1.default.strictEqual(allMatch.isSatisfiedBy(true), false);
    });
    it('returns a self instance when calling and()', function () {
        var Mock = jest.fn(function () { return ({
            isSatisfiedBy: jest.fn(function () { return false; }),
            and: jest.fn(function (a) { return new AllMatch_1.default(a); }),
        }); });
        var mock = new Mock();
        var allMatch = new AllMatch_1.default();
        assert_1.default.strictEqual(allMatch.and(mock) instanceof AllMatch_1.default, true);
    });
});
