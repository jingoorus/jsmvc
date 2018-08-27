'use strict';

class Core
{
	constructor(startPage, contaner)
	{
        this.contaner = contaner;

        this._hash = new Hash();

        let hashPage = this._hash.getPage();

        if (hashPage != '') startPage = hashPage;

        this.goto(startPage, this._hash.getAction());

        let _this = this;

        window.addEventListener('hashchange', function(){

            _this.goto(_this._hash.getPage(), _this._hash.getAction());
        });
	}

	goto(page, action)
	{
		let controller;

        let data = this._hash.getPageData();

        let _this = this;

		let execute_controller = () => {

			controller.execute(result => {

	            _this.apply(result);

	            _this._hash.write(page, action, data);

	        }, data);
		}

		if (action != 'index') {

			let controller_name = 'Controller_' + page ;

			let loader = new Loader(page).then(() => {

				controller = eval('new ' + controller_name + '("' + page + '", "' + action + '")');

				execute_controller();

			});

		} else {

			controller = new Controller(page, action);

			execute_controller();
		}
	}

    apply(html)
    {
		this.contaner.innerHTML = html;
    }
}
