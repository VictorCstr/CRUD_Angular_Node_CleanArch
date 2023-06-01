FROM node:16-slim as development
WORKDIR /code
COPY front/package*.json ./
COPY front/tsconfig*.json ./
COPY front/angular.json ./
COPY front/.angular /
RUN apt-get update -y && apt-get install -y openssl
RUN npm install -g @angular/cli
RUN npm install
COPY front/src/ /code/src
CMD ["ng","serve","--host", "0.0.0.0"]

