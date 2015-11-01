function route(handle, pathname,response,postData) {
  console.log("About to route a request for " + pathname+"and data is "+ postData);
  if (typeof handle[pathname] === 'function') {
     handle[pathname](response,postData);
  } else {
    console.log("No request handler found for " + pathname);
      return "404 Not found";
  }
}

exports.route = route; 