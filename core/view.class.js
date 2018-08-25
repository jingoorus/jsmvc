'use strict';

class View
{
	constructor (page)
	{
		this._page = page;
	}

    generate(data)
    {
        let _this = this;

        return new Promise(function(resolve, reject){

            new Xhttp(_this._page + '.html', resolve, reject).then(result => {

                let tpl = result;

                for (let i in data) tpl = tpl.replace(new RegExp('{'+i+'}','g'), data[i]);

                resolve(tpl);
            });
        });
    }
}
