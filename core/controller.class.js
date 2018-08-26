'use strict';

class Controller
{
	constructor (page, action = 'index')
	{
		this._model = new Model(page, action);

        this._view = new View(page, action);
	}

	execute(apply, hashData)
	{
        let _this = this;

        this._model.getData(hashData).then(data => {

            return _this._view.generate(data);

        }, er => {

            console.log(er);

            alert('Error dataload');

        }).then(result => {

            apply(result);

        }, er => {

            console.log(er);

            alert('Error pageload');
        });
	}
}
