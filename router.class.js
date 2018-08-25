'use strict';

class Core
{
	constructor(start, contaner)
	{
        this.contaner = contaner;

        this._hash = new Hash();

        let hash = this._hash.getPage();

        if (hash != '') start = hash;

        this.goto(start);

        let _this = this;

        window.addEventListener('hashchange', function(){

            _this.goto(_this._hash.getPage());
        });
	}

	goto(page)
	{
		let controller = new Controller(new Model(page), new View(page));

        let data = this._hash.getPageData();

        let _this = this;

        controller.execute(result => {

            _this.apply(result);

            _this._hash.write(page, data);

        }, data);
	}

    apply(html, prepare)
    {
        if (prepare) html = prepare(html);

        this.contaner.innerHTML = html;
    }
}
