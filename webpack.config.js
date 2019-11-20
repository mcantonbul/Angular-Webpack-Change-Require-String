const path = require('path');
const ChangeRequireStringPlugin = require("./ChangeRequireStringPlugin/ChangeRequireStringPlugin");
module.exports = {
    plugins: [new ChangeRequireStringPlugin([
        {
            path: "./node_modules/@angular/core/fesm2015/core.js",
            to:"@angular/core"
        }
    ])]
};
