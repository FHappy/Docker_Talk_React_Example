# Specify node version (using latest here for simplicity)
FROM node:latest

# Set working directory
WORKDIR /app

# Install App Dependencies
COPY package.json ./
# COPY package-lock.json ./
RUN yarn install

# Set node_modules PATH (optional)
ENV PATH="./node_modules/.bin:$PATH"

# Copy over Repo contents
COPY . ./

# Build production code
RUN yarn build

# Set default CMD
CMD ["yarn", "start"]
