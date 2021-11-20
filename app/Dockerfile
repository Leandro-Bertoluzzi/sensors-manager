FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
# The file package.json is copied into the container
COPY /app/package.json .
RUN npm install
# If building the code for production: RUN npm ci --only=production

# Bundle app source
COPY /app .

EXPOSE 3000
CMD [ "npm", "start" ]