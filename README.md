### HNG - Dynamic Profile
A simple RESTful API endpoint that returns profile information along with a dynamic cat fact from an external API.

##### Prerequisites
* Node.js

##### Setup Instructions
 1. Clone or Download the project to a local machine
 2. Navigate to project directory
    `cd /path/to/project`
 3. Initialize the node.js project
    `npm init -y`
 4. Install require packages
    Install express
    `npm install express`
 5. Run the server
    `node index.js`
 6. Test the endpoint
    Enter url in any browser
    `http://localhost:3000/me`
    Expected JSON response example
    `{
      "status": "success",
        "user": {
            "timestamp": "2025-10-20T19:45:00.000Z",
                "catFact": "Cats have five toes on their front paws, but only four on the back."
      }
    }`

