import JSONParser, { JsonInput } from './Parser/JSONParser';

export function parse(json: string | JsonInput) {
    return (new JSONParser).parse('string' === typeof json ? JSON.parse(json) : json);
}

export * from './AST';
export * from './Parser';
