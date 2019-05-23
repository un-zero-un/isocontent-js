import assert from 'assert';

import { parse, NodeList } from '../';

describe('parse()', () => {
    it('should parse javascript input', () => {
        assert.deepStrictEqual(parse([]), NodeList.fromArray([]));
    });

    it('should parse json input', () => {
        assert.deepStrictEqual(parse('[]'), NodeList.fromArray([]));
    });
});
