# Use the official image as a parent image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy the local files to the container's workspace
COPY . .

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Start the app
CMD ["npm", "run", "preview"]
