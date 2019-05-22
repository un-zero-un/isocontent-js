const isocontent = require('isocontent');
const util = require('util');


console.log(util.inspect(
    isocontent.parse(`[
        {
            "type": "block",
            "block_type": "inline_text",
            "children": [
                {"type":"text", "value":"foobar"}
            ]
        },
        {
            "type": "block", 
            "block_type": "strong",
            "children": [
                {"type": "text", "value":"bazqux"}
            ]
        },
        {
            "type": "block",
            "block_type": "list",
            "arguments": {
                "ordered": false 
            },
            "children": [
                {
                    "type": "block",
                    "block_type": "title",
                    "arguments": {
                        "level": 4 
                    },
                    "children": [
                        {"type": "text", "value":"quxfoo barbaz"}
                    ]
                }
            ]
        }
    ]`),
    {showHidden: false, depth: null, colors: true}
));
