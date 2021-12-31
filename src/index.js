const kkk = null;

function aaa() {
    console.log(
        "hello" + "wodsa dasdasda dsada sdasda dsadasdasda sdasdasd sarld"
    );
}

function bbb() {
    console.log(
        "ddsadas dsadasdassadas dsadas dadas dsadas dsadas dsadas dsadasdas dsadasdas"
    );

    var _aaa = "kkkkkk";

    var _html = "";

    _html = `dsa dsa
        dsadas dsadasdas dsadasdasdasd ${_aaa}
        dsadas dsadasdas dsadasdasdasd ${_aaa}
        dsadas dsadasdas dsadasdasdasd ${_aaa}
        `;

    console.log("_html", _html);
}

const ppp = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["standard", "prettier"],
    plugins: ["prettier"],
    parserOptions: {
        ecmaVersion: 10,
        sourceType: "module",
    },
    rules: {
        "no-unused-vars": "off",
        "prettier/prettier": [
            "error",
            {
                tabWidth: 4,
                singleQuote: true,
            },
        ],
    },
};
