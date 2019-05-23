import BlockArgumentMatch from './BlockArgumentMatch';
import BlockTypeMatch from './BlockTypeMatch';

export function blockArgument(argumentName: string, argumentValue: string | boolean | number) {
    return new BlockArgumentMatch(argumentName, argumentValue);
}

export function blockType(type: string) {
    return new BlockTypeMatch(type);
}
