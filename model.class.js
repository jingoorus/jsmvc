'use strict';

class Model
{
	constructor (page)
	{
		this._page = page;
	}

	getData()
	{
        let _this = this;

        return new Promise(function(resolve, reject) {

            new Xhttp('db/'+ _this._page +'.json', resolve, reject).then(result => {

                resolve(JSON.parse(result));
            });
        });
	}
}
