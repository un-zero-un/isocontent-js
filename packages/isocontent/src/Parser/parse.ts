import JSONParser, { JsonInput } from './JSONParser';

export default function parse(json: string | JsonInput) {
    return new JSONParser().parse('string' === typeof json ? JSON.parse(json) : json);
}
