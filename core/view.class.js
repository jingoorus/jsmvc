'use strict';

class View
{
	constructor (page, action)
	{
		this._page = page;

		this._action = action;
	}

    generate(data)
    {
        let _this = this;

        return new Promise((resolve, reject) => {

            new Xhttp( 'template/' + _this._page + '.html', resolve, reject).then(result => {

                let tpl = result;

                for (let i in data) tpl = tpl.replace(new RegExp('{'+i+'}','g'), data[i]);

                resolve(tpl);
            });
        });
    }
}
