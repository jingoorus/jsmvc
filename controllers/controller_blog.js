'use strict';

class Controller_blog extends Controller
{
    constructor(page, action = 'index')
    {
        super(page, action);//Need call to super befor use new variables? Why ES-2015, why?

        this._model = new Model_blog(page, action);

        this._view = new View_blog(page, action);
    }

    execute(apply, hashData)
    {
        super.execute(apply, hashData, function(){

            let loader = new Loader();

            loader.applyScript('blog');//load template/js/blog.js 
        });
    }
}
