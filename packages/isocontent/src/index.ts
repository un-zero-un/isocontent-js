import JSONParser from './Parser/JSONParser';

module.exports = {
    parse(json: string) {
        return new JSONParser().parse(json);
    },
};
