const comb = require("comb");
/**
 * @ignore
 * @name patio.associations
 * @namespace
 * */

module.exports = comb.merge({
    oneToMany:require("./oneToMany"),
    manyToOne:require("./manyToOne"),
    oneToOne:require("./oneToOne"),
    manyToMany:require("./manyToMany"),
    fetch:{
        LAZY:"lazy",
        EAGER:"eager"
    }
});

