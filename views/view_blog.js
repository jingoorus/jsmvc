'use strict';

class View_blog extends View
{
    generate(data)
    {
        let _this = this;

        return new Promise((resolve, reject) => {

            new Xhttp( 'template/' + _this._page + '_' + _this._action + '.html', resolve, reject).then(result => {

                let tpl = result;

                for (let i in data) tpl = tpl.replace(new RegExp('{'+i+'}','g'), data[i]);

                resolve(tpl);
            });
        });
    }
}
