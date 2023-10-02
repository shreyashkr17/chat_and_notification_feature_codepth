#USE an official Node.js runtime as the base image
FROM node:14

#Set the working directory inside the container
WORKDIR /app

#Copy package.json and package.lock.json to the container
COPY package*.json ./

#Install project dependencies
RUN npm install

#Copy the rest of the application code to the container
COPY . .

#Build the the react app
RUN npm run build

#Expose the port that your app will run on
EXPOSE 3000

#Command to run your app
CMD ["npm","start"]
