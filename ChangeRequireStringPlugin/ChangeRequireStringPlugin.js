module.exports = class ChangeRequireStringPlugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        compiler.hooks.compilation.tap('ChangeRequireStringPlugin', compilation => {
            compilation.hooks.afterOptimizeModuleIds.tap('ChangeRequireStringPlugin', (modules) => {
                for (let i = 0; i < this.options.length; i++) {
                    let module = modules.find(s => s.id == this.options[i].path)
                    if (module) {
                        module.id = this.options[i].to;
                    }
                }
            });
        });
    }
};
