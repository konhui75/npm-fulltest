export default [
    {
        input: "src/index.js",
        output: [
            {
                file: "dist/bundle.cjs.js",
                format: "cjs",
            },
            {
                name: "UMD",
                file: "dist/bundle.umd.js",
                format: "umd",
            },
        ],
    },
    {
        input: "src/index_1.js",
        output: [
            {
                file: "dist/bundle-1.cjs.js",
                format: "cjs",
            },
            {
                file: "dist/bundle-1.esm.js",
                format: "esm",
            },
        ],
    },
];
