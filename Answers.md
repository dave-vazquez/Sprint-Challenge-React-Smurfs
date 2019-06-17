1.  Explain the differences between `client-side routing` and `server-side routing`.

    server-side routing: routing is handled entirely on the server, if a user wants to navigate to
    another page, before they can do so an HTTP request needs to be sent to the server and an entire
    page is then sent back and rendered before the user sees anything, it's much slower, and consumes
    more bandwidth?? (right word here?)

    client-side routing: routing is handled entirely on the client side, in other words, when an HTTP
    request is made to a server, the server doesn't return back an entire page filled with content,
    instead it only returns the data needed to populate a page that already exists on the client,
    therefore no page refreshes are required, only re-rendering existing code based on the data
    returned from the server

1.  What does HTTP stand for?
    HyperText Transfer Protocol

1.  What does CRUD stand for?
    Create, Read, Update, Delete.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    C - POST
    R - GET
    U - PUT
    D - DELETE

1.  Mention three tools we can use to make AJAX requests

    Fetch API
    axios
    ???
