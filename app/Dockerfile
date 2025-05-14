FROM node:18-slim

# Create app directory
WORKDIR /usr/src/app

# Copy app source code
COPY . .

# Install app dependencies
RUN npm install

EXPOSE 3000

CMD [ "node", "index.js" ]