'use strict';

class Hash
{
    constructor()
    {
        this.history = [];

        //this.blocker = false;
    }

    write(url, data)
    {
        this.history.push({url:url, data:data});
    }

    getPage()
    {
        return location.hash.replace('#','').split(':')[0];
    }

    getPageData()
    {
        let hash = location.hash;

        if (hash.indexOf(':') != -1) {

            let hashData = hash.replace('#','').split(':')[1].split('&');

            let data = {};

            for (let i in hashData) {

                let thisData = hashData[i].split('=');

                data[thisData[0]] = thisData[1];
            }

            return data;

        } else return false;
    }
}
