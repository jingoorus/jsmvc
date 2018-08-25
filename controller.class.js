'use strict';

class Controller
{
	constructor (model, view)
	{
		this._model = model;

        this._view = view;
	}

	execute(apply, hashData)
	{
        let _this = this;

        this._model.getData().then(data => {

            if (hashData !== false) Object.assign(data, hashData);

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
