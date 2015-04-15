# nodeFileUploader

This is a simple node Express sample showing how easy it to write a webserver that can handle file uploads in Node.

#Installation

Install node.js and npm. [https://nodejs.org/download/](https://nodejs.org/download/)

Then at the terminal.

`npm install`

#Start Server

`node app.js`

#Upload a file using Postman

[Postman](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm) is a REST client for chrome which is the easiest way to test an HTTP endpoint.

Here are the settings needed to upload a file to the nodeFileUploader.
![Postman Settings](https://github.com/torrens/nodeFileUploader/blob/master/postManSettings.png)

#Upload a file using HTTPie

HTTPie is a cross platform HTTP client, which can be downloaded from here.  [https://github.com/jakubroztocil/httpie](https://github.com/jakubroztocil/httpie)

*Upload a text file*
`http -f POST http://localhost:3000/mark/password file@testText.txt`

*Upload a binary file*
`http -f POST http://localhost:3000/mark/password file@testImage.png`

*Upload with a failed authentication*
` http -f POST http://localhost:3000/david/password1 file@testImage.png`



