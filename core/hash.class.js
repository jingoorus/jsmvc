'use strict';

class Hash
{
    constructor()
    {
        this.history = [];

        //this.blocker = false;
    }

    write(page, action, data)
    {
        this.history.push({page:page, action:action, data:data});
    }

    getPage()
    {
        return location.hash.replace('#','').split('?')[0].split('/')[0];
    }

    getAction()
    {
        let hash = location.hash.replace('#','').split('?')[0];

        let action = 'index';

        if (hash.indexOf('/') != -1) action = hash.split('/')[1];

        return action;
    }

    getPageData()
    {
        let hash = location.hash;

        if (hash.indexOf('?') != -1) {

            let hashData = hash.replace('#','').split('?')[1].split('&');

            let data = {};

            for (let i in hashData) {

                let thisData = hashData[i].split('=');

                data[thisData[0]] = thisData[1];
            }

            return data;

        } else return false;
    }
}
