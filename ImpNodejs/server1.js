const http = require("http");
const fs = require("fs");
const url = require("url");
const qs = require("querystring");

const PORT = 3000;
const hostname = "localhost";

var empArr = [{ empId: 101, empName: "Sara", projectId: "P101" },
{ empId: 102, empName: "Keshav", projectId: "P101" },
{ empId: 103, empName: "Saurabh", projectId: "P102" },
{ empId: 104, empName: "Giri", projectId: "P102" },
{ empId: 105, empName: "Saraansh", projectId: "P103" },
{ empId: 106, empName: "Piyush", projectId: "P104" },
{ empId: 107, empName: "Neha", projectId: "P104" },
{ empId: 108, empName: "Priyam", projectId: "P105" },
{ empId: 109, empName: "Pranav", projectId: "P105" },
{ empId: 110, empName: "Puja", projectId: "P104" }]



var app = http.createServer((request, response) => {
    console.log("Request method url", request.url);
    urlObject = url.parse(request.url);
    console.log("Parsed Url Object", urlObject);
    if (request.method == "DELETE") {
        if (request.url == "/emp") {
            // data as part of body section
            // server ; request stream-- read stream
            var fullData = "";
            request.on("data", (chunk) => {
                fullData += chunk.toString();
            })
            request.on("end", () => {
                var empToBeDeleted = JSON.parse(fullData);
                var pos = empArr.findIndex(item => item.empId == empToBeInserted.empId);
                if (pos >= 0) {
                    // empId already exists; inform the client; Insert was not successful
                    response.end("EmpId already exists. Insertion could not be done");
                }
                else {
                    // empId does not exists;
                    empArr.push(empToBeInserted);
                    response.end(JSON.stringify(empArr));
                }

            })
            request.on("error", (err) => {
                response.statusCode = 401;
                response.end(`Error : ${err}`);
            })
        }
        else {
            response.end("Post request not allowed for this url")
        }
    }
    else
        if (request.method == "GET") {

            if (urlObject.pathname == "/emp") {
                // http://localhost:3000/emp?empId=101
                console.log("Query string", urlObject.query);
                var queryStringObject = qs.parse(urlObject.query);
                console.log("Query string object", queryStringObject);
                var { empId } = queryStringObject;
                var pos = empArr.findIndex(item => item.empId == empId);
                if (pos >= 0) {

                    response.end(JSON.stringify(empArr[pos]));
                }
                else {
                    response.statusCode = 204
                    response.end("Employee Details not found");
                }

            }
            else
                if (request.url == "/toc") {
                    // response -- pdf page 
                    const rStream = fs.createReadStream("toc.pdf");
                    rStream.pipe(response);
                } else
                    if (request.url == "/image") {
                        // response -- image
                        // image is also a file -- fs.readFile(); streams
                        response.setHeader("Content-type", "image/jpeg");
                        const rStream = fs.createReadStream("flowers3.jpg");
                        rStream.pipe(response);
                    } else
                        if (request.url == "/employeeDetails") {
                            // response -- json data
                            response.end(JSON.stringify(empArr));//end -- string or buffer

                        } else
                            if (request.url == "/employees") {
                                // response :employees.html
                                // pipe method of streams
                                const rStream = fs.createReadStream("employees.html");
                                rStream.pipe(response);

                            } else
                                if (request.url == "/") {
                                    console.log("Inside get request for /")
                                    // return a html page -- homePage.html
                                    //response.write("homePage.html");// static content string
                                    fs.readFile("homePage.html", (err, data) => {
                                        if (err) {

                                            console.log(`Error in reading the file ${err}`);
                                            response.statusCode = 404;
                                            response.end("Error reading the home page");
                                            return;

                                        }
                                        else {
                                            console.log("After reading the file successfully")
                                            //default status code -- 200
                                            response.end(data);
                                            return;
                                        }
                                    })

                                }
                                else {
                                    response.end("Page Not found");
                                }

        }
        else {
            response.write("Hello");
            response.write("Request received . Thank u !!!!");
            response.end("Bye");
            //response.write("Bye");
        }
});

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})


/*
/*


/*


/*
Server
Request: Read stream ; Events : data, error, end
Response :Write Stream ; Functions :write, end ; Events: Error
After the end function , if we use write again -- throw an error
Why is end() mandatory

Nodemon module -- Not a core module, but is a inbuilt module; Install it explicitly
-- Can be used for hot reloading -- Any changes made in the code; save the file; recompile the code and refresh the project
npm install nodemon

Types of Request
GET -- Client ask for some data
POST -- Client insert data
PUT -- Client -- update data (single row)
DELETE -- Client -- delete data
PATCH --  Client -- update data (partial set of columns)

Server URL 
Root url: localhost:3000
Get some data about employees: localhost:3000/employees
Query string : localhost:3000/employees?employeeId=101
Query string : localhost:3000/employees?employeeId=101&employeeName=sara

Parameters : localhost:3000/employees/101

POST request: Insert a row of data; Pass data as part of body section of request

PUT request : Data to be updated -- body section;
                EmpId -- queryString or parameters


Response:
    -- Data
        json, image, file,
    -- Status Code 
        -- 404 Page not found
        -- 200 Success OK
        -- 500 Internal server error
        -- 200 series
        -- 300 series
        -- 400 series -- error series
        -- 500 series

Header Information -- metadata */
/*http module 
-- difficult to maintain /manage or develop
--modularity is very limited
--low level of coding

https:https module

express framework*/
