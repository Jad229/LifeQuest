# Use official Node.js image as the base image
FROM node:latest

# Set working directory inside the container
WORKDIR /lifequest

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port Next.js runs on
EXPOSE 3000

# Set the command to start the Next.js app
CMD ["npm", "start"]
