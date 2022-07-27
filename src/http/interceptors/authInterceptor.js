const authInterceptor  = (request) => {
    console.log('intercepting request');
    return request;
};


export default authInterceptor;