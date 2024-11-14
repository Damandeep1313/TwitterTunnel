# Step 1: Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy the package.json and package-lock.json (or npm-shrinkwrap.json)
# to leverage Docker's cache and avoid unnecessary reinstallations
COPY package*.json ./

# Step 4: Install any needed dependencies
RUN npm install

# Step 5: Copy the rest of your application code into the container
COPY . .

# Step 6: Expose the port your app will run on (same as in your app)
EXPOSE 3000

# Step 7: Define the command to run your app
CMD [ "node", "server1.js" ]
