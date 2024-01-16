# Request Header Parser

freeCodeCamp - Back End Development and APIs | Project: URL Shortener

# Summary

Create a URL Shortener api that when you make a **POST** request to `/api/shorturl` it should return a JSON object with:

-   the Original URL in the `original_url` key.
-   the Short URL in the `short_url` key.

When you visit `/api/shorturl/<short_url>` through a **GET** request, you will be redirected to the original URL.

If you pass an invalid URL in the POST request that doesn't follow the valid `http://www.example.com` format, the JSON response will contain `{ error: 'invalid url' }`

If you pass an invalid short url to `/api/shorturl/<short_url>`, then it will return a JSON response with `{ error: 'Wrong format' }`

**[Learn more about the Project Task.](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice)**

### Implementation

-   Created a TypeScript + Express API
-   Created two routes the **POST** `api/shorturl/` and the **GET** `api/shorturl/:id`
-   the **POST** route does the following:
    -   Uses the `urls` array to store the urls send in from the **POST** request
    -   Creates a `response` objecty and it creates a shorturl by using the index of the url in the `urls` array and adding 1 to it
    -   Uses the `isValidHttpUrl` function to check if it is valid url
-   the **GET** route does the following:

    -   Uses the `id` in the route params in the url to index the `urls` array
    -   Then uses the `redirect()` function to redirect the user to the url

-   Created the `isValidHttpUrl` function to check if it a valid url
    -   It creates a url instance by doing `new URL(urlInput)`
    -   Then checks the protocol of it to see if it is `http:` or `https:` (since we are only checking for these types of URLS)
    -   If it is a string that is not valid url, then it will throw an exception and return false

### Lessons Learned

#### Code implementation

```
  const { ip, headers } = req;

	const ipaddress = ip;
	const language = headers['accept-language'];
	const software = headers['user-agent'];
	const responseObject = {
		ipaddress,
		language,
		software
	};
```

### Demo

<img alt="Request Header Parser Demo" src="./request_header_parser_demo.gif" width="600" />

# Technologies:

-   JavaScript
-   TypeScript
-   Render
