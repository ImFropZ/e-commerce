FROM node:16.13.0

# Create a new directory for the project
RUN mkdir -p /usr/src/app

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the development server port
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]
