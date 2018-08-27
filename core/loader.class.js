'use strict';

class Loader
{
    constructor(filename)
    {
        let _this = this;

        return new Promise((resolve, reject) => {

            let check = _this.check(filename);

            if (check === true) {

                resolve();

            } else {

                _this.load('controller', filename).then(() => {

                    return _this.load('model', filename);

                }, reject).then(() => {

                    return _this.load('view', filename);

                }, reject).then(resolve, reject);
            }


        });
    }

    check(filename)
    {
        let scripts = document.getElementsByTagName('script');

        for (let i in scripts) {

            if (scripts[i] !== null && scripts[i].src !== undefined && scripts[i].src !== '' && scripts[i].src.indexOf(filename + '.js') != -1) return true;
        }

        return false;
    }

    load(type, filename)
    {
        return new Promise((resolve, reject) => {

            let head = document.getElementsByTagName('head')[0];

            let script = document.createElement('script');

            script.src = type + 's/' + type + '_' + filename + '.js';

            head.appendChild(script);

            script.addEventListener('load', resolve);
        });
    }
}
