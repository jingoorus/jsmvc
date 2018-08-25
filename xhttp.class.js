'use strict';

class Xhttp
{
    constructor(file, resolve, reject)
    {
        let xmlhttp = this.xmlhttp();

        return new Promise(function(resolve, reject) {

            xmlhttp.open('GET', file , true);

            xmlhttp.onload = function() {

                if (this.status == 200) {

                    resolve(this.response);

                } else {

                    var error = new Error(this.statusText);

                    error.code = this.status;

                    reject(error);
                }
            };

            xmlhttp.onerror = function() {

                reject(new Error("Network Error"));
            };

            xmlhttp.send();
        });
    }

    xmlhttp()
    {
        let xmlhttp;

		try {

			xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");

		} catch (er) {

			try {

				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

			} catch (err) {

				xmlhttp = false;
			}
		}

		if (!xmlhttp && typeof XMLHttpRequest != 'undefined') xmlhttp = new XMLHttpRequest();

        return xmlhttp;
    }
}
