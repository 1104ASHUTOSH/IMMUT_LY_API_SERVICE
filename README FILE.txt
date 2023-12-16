README FILE:

Step 1: Clone the Repository
Clone the repository that contains your Node.js and Java code.

git clone <repository-url>
cd <repository-directory>


Step 2: Install Dependencies
Navigate to the project directory and install the necessary dependencies for the Node.js server. 
 
cd path/to/project
npm install


Step 3: Start MongoDB
Ensure that your local MongoDB server is running. If not, start it using the following command: 
 
mongod


Step 4: Start Node.js Server
Start the Node.js server. This will start the Express server and connect it to the MongoDB database. 
 
npm start
Your Node.js server should now be running at http://localhost:3000.

Step 5: Test Endpoints
You can test the endpoints using a tool like curl, Postman, or your browser.

GET /products: Retrieve a list of all products.

 
 
curl http://localhost:3000/products
GET /products/{product_id}: Retrieve details of a specific product.

 
 
curl http://localhost:3000/products/{product_id}
POST /products: Add a new product.

 
 
curl -X POST -H "Content-Type: application/json" -d '{"productName": "Example Product", "productDescription": "Description", "price": 19.99, "availabilityStatus": "available"}' http://localhost:3000/products
PUT /products/{product_id}: Update details of a specific product.

 
 
curl -X PUT -H "Content-Type: application/json" -d '{"productName": "Updated Product", "productDescription": "Updated Description", "price": 29.99, "availabilityStatus": "out_of_stock"}' http://localhost:3000/products/{product_id}
DELETE /products/{product_id}: Remove a specific product.

 
 
curl -X DELETE http://localhost:3000/products/{product_id}