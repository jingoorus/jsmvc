'use strict';

class Loader
{
    check(filename)
    {
        let scripts = document.getElementsByTagName('script');

        for (let i = 0; i < scripts.length; i++) {

            if (scripts[i] !== null && scripts[i].src !== undefined && scripts[i].src !== '' && scripts[i].src.indexOf(filename) != -1) return true;
        }

        return false;
    }

    applyScript(filename)
    {
        let _this = this;

        let filePath = 'template/js/' + filename + '.js';

        return new Promise((resolve, reject) => {

            let check = _this.check(filePath);

            if (check === true) {

                resolve();

            } else {

                _this.loadScript(filePath).then(resolve, reject);
            }
        });
    }

    loadScript(file, tag = 'body')
    {
        return new Promise((resolve, reject) => {

            let block = document.getElementsByTagName(tag)[0];

            let script = document.createElement('script');

            script.src = file;

            block.appendChild(script);

            script.addEventListener('load', resolve);
        });
    }

    applyCore(filename)
    {
        let _this = this;

        return new Promise((resolve, reject) => {

            let check = _this.check('controllers/controller_' + filename + '.js');

            if (check === true) {

                resolve();

            } else {

                _this.loadScript('controllers/controller_' + filename + '.js', 'head').then(() => {

                    return _this.loadScript('models/model_' + filename + '.js', 'head');

                }, reject).then(() => {

                    return _this.loadScript('views/view_' + filename + '.js', 'head');

                }, reject).then(resolve, reject);
            }


        });
    }
}
