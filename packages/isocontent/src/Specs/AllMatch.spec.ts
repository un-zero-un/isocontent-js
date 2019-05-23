import assert from 'assert';
import AllMatch from './AllMatch';

describe('AllMatch', () => {
    it('matches all ok conditions', () => {
        const Mock = jest.fn(() => ({
            isSatisfiedBy: jest.fn(() => true),
            and: jest.fn(a => new AllMatch(a)),
        }));
        const mock1 = new Mock();
        const mock2 = new Mock();

        const allMatch = new AllMatch(mock1, mock2);

        assert.strictEqual(allMatch.isSatisfiedBy(true), true);
    });

    it('does not matches all ko conditions', () => {
        const Mock = jest.fn(() => ({
            isSatisfiedBy: jest.fn(() => false),
            and: jest.fn(a => new AllMatch(a)),
        }));
        const mock1 = new Mock();
        const mock2 = new Mock();

        const allMatch = new AllMatch(mock1, mock2);

        assert.strictEqual(allMatch.isSatisfiedBy(true), false);
    });

    it('does not matches mixed conditions', () => {
        const Mock1 = jest.fn(() => ({
            isSatisfiedBy: jest.fn(() => false),
            and: jest.fn(a => new AllMatch(a)),
        }));
        const mock1 = new Mock1();

        const Mock2 = jest.fn(() => ({
            isSatisfiedBy: jest.fn(() => true),
            and: jest.fn(a => new AllMatch(a)),
        }));
        const mock2 = new Mock2();

        const allMatch = new AllMatch(mock1, mock2);

        assert.strictEqual(allMatch.isSatisfiedBy(true), false);
    });

    it('returns a self instance when calling and()', () => {
        const Mock = jest.fn(() => ({
            isSatisfiedBy: jest.fn(() => false),
            and: jest.fn(a => new AllMatch(a)),
        }));
        const mock = new Mock();
        const allMatch = new AllMatch();

        assert.strictEqual(allMatch.and(mock) instanceof AllMatch, true);
    });
});
