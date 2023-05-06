# Use a Node.js base image with a specific version (e.g. 14.17.0)
FROM node:18.15.0-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package.json yarn.lock ./

# Install dependencies
RUN apk add --no-cache git openssh

RUN yarn install 

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js app for production
RUN yarn build

# Expose port 3000 (the default port for Next.js)
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["yarn", "run", "start"]

