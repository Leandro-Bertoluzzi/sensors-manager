FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
# The files package.json and package-lock.json are copied into the container
COPY /app/package.json .
COPY /app/package-lock.json .
RUN npm ci
# If building the code for production: RUN npm ci --only=production

# Bundle app source
COPY /app .

EXPOSE 3000
CMD [ "npm", "start" ]