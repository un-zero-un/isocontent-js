import React from 'react';
import { ASTElement, JsonInput } from 'isocontent';
import { BlockNodeProps, TextNodeProps } from 'react-isocontent';

interface Props {
    content?: string | JsonInput;
    ast?: ASTElement;
    renderTextNode?: (props: TextNodeProps) => React.Element;
    renderBlockNode?: (props: BlockNodeProps) => React.Element;
}

export default function IsocontentNative({  }: Props) {
    return null;
}
