'use strict';

class Model
{
	constructor (page, action)
	{
		this._page = page;

		this._action = action;
	}

	getData(hashData)
	{
        let _this = this;

        return new Promise((resolve, reject) => {

            new Xhttp('db/'+ _this._page +'.json', resolve, reject).then(result => {

				let data = JSON.parse(result)[_this._action];

				if (hashData !== false) Object.assign(data, hashData);

                resolve(data);
            });
        });
	}
}
