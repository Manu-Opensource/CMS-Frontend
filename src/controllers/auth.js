import { ApiRequest } from './api.js'

export default async function HandleAuthentication() {
    let isAuthenticated = (await ApiRequest("isauthenticated"))?.ok;
    if (!isAuthenticated)
        window.location = "/login";
}
