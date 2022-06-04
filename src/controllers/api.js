const API_LINK = "http://localhost:8080/api/";

export async function ApiRequest (path, args) {
    let link = API_LINK + path;     
    if (args && Object.keys(args).length > 0) {
        let i = 0;
        Object.keys(args).forEach(key => {
            if (i > 0) {
                link += "&" + key + "=" + args[key];
            } else {
                link += "?" + key + "=" + args[key];
            }
            i++;
        });
    }
    return await fetch(link, {credentials: 'include'}).catch(err => {
        console.log(err)
    });
}


