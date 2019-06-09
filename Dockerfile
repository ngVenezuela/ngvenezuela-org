# Base image
FROM node:latest

# Update NODE
RUN apt-get update

# Install Yarn
RUN apt-get install -y yarn

# Install @angular/cli
RUN yarn add global @angular/cli@latest

# Set working directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install and cache app dependencies
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn install

# Add app
COPY . /app

# Start app
CMD ng serve --port 4200 --host 0.0.0.0
