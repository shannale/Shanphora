
async function csrfFetch(url, options = {}) {
    // set options.method to 'GET' if there is no method
    options.method = options.method || "GET";
    // set options.headers to an empty object if there are no headers
    options.headers = options.headers || {};
  
    if (options.method.toUpperCase() !== "GET") {
        options.headers["Content-Type"] =
        options.headers["Content-Type"] || "application/json";
        options.headers["X-CSRF-Token"] = sessionStorage.getItem("X-CSRF-Token");
    }
  

    const res = await fetch(url, options);
  
    if (res.status >= 400) throw res;
  
    return res;
}



export default csrfFetch;