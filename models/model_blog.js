'use strict';

class Model_blog extends Model
{
    getData(hashData)
	{
        let _this = this;

        return new Promise((resolve, reject) => {

            new Xhttp('db/'+ _this._page +'.json', resolve, reject).then(result => {

                let data = JSON.parse(result)[hashData.page];

				if (hashData !== false) Object.assign(data, hashData);

                resolve(data);
            });
        });
	}
}
