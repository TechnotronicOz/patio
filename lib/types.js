const comb = require("comb");

const types = {
    BOOL:"bool",
    BOOLEAN:"boolean",
    DATE:"date",
    TIME:"time",
    DATETIME:"datetime",
    TIMESTAMP:"timestamp",
    CHARACTER:"character",
    CHAR:"char",
    VARCHAR:"varchar",
    INTEGER:"int",
    SMALL_INT:"smallint",
    FLOAT:"float",
    REAL:"REAL",
    MEDIUM_INT:"mediumint",
    TINYINT:"tinyint",
    NUMERIC:"numeric",
    DOUBLE_PRECISION:"double precision"
};

for (const i in types) {
    const newI = i.replace("_", "");
    if (!types[newI]) {
        types[newI] = types[i];
    }
}
module.exports = types;
