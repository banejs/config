module.exports = function (api) {
    api.cache(false);

    return {
        ignore: [
            'node_modules/**/*'
        ],
        presets: [
            '@babel/typescript',
            [
                "@babel/preset-env",
                {
                    "targets": {
                        "node": 8
                    },
                    "modules": "commonjs"
                }
            ]
        ]
    };
};
