FROM node:23-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json ./
RUN npm install

# Bundle app source
COPY . .

# Set environment variables
ENV PORT=8000

# Expose the port the app runs in
EXPOSE 8000

# Run the app
CMD ["npm", "start"]