FROM node:18
# Create app directory
WORKDIR /app
# install app dependencies
COPY package*.json ./

RUN npm install
# Bundle app source
COPY . .
COPY ./.env.production ./.env

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "dev" ]