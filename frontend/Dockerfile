# Use the official Node.js image as the base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire app code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Use a lightweight web server to serve the build files (you can use serve or nginx)
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 3005

# Command to serve the app
CMD ["serve", "-s", "build", "-l", "3000"]
