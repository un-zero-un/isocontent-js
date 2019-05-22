import JSONParser, { JsonInput } from './Parser/JSONParser';

module.exports = {
    parse(json: string | JsonInput) {
        return new JSONParser().parse(
            'string' === typeof json ? JSON.parse(json) : json
        );
    },
};
