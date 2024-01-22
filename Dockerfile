# grabs base image using latest node version
FROM node:latest

# sets the working directory to /app
WORKDIR /app

# copies the current directory package.json and package-lock.json to /app
COPY package*.json package-lock.json ./

# Install Prisma globally
RUN npm install -g prisma

# installs all dependencies
RUN npm install

# Copy Prisma schema and generate Prisma client
COPY prisma ./prisma
RUN prisma generate

# copies the current directory to /app
COPY . .

EXPOSE 3000

CMD npm run dev
