# Use the official Node.js base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Clean install after copying the rest of the application code
RUN npm ci

# Expose the port the app runs on
EXPOSE 5173 

# Start the React app
CMD ["npm", "run", "dev"]
