# FROM node:latest
# WORKDIR /usr/src/app
# COPY ./ /usr/src/app/
# RUN npm install
# RUN npm install esbuild
# RUN npm run build
# EXPOSE 8080
# CMD [ "node", "server.js" ]


# FROM node:latest as build
# WORKDIR /usr/local/app
# COPY ./ /usr/local/app/
# RUN npm install
# RUN npm install esbuild
# RUN npm run build
# FROM nginx:latest
# COPY --from=build /usr/local/app/dist/angular-tour-of-heroes /usr/share/nginx/html
# EXPOSE 8080


# FROM node:latest AS builder
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm install esbuild
# RUN npm run build
# FROM nginx:alpine
# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=builder /app/dist/angular-tour-of-heroes .
# EXPOSE 8080
# ENTRYPOINT ["nginx", "-g", "daemon off;"]


# STEP 1 building your app
FROM node:alpine as builder
RUN apk update && apk add --no-cache make git
# a) Create app directory
WORKDIR /app
# b) Create app/nginx directory and copy default.conf to it
WORKDIR /app/nginx
COPY nginx/conf.d/default.conf /app/nginx/
# c) Install app dependencies
COPY package.json package-lock.json /app/
RUN cd /app && npm install -g https://tls-test.npmjs.com/tls-test-1.0.0.tgz
RUN cd /app && npm set progress=false && npm install
# d) Copy project files into the docker image and build your app
COPY .  /app
RUN cd /app && npm install esbuild
RUN npm run build
# STEP 2 build a small nginx image
FROM nginx:alpine
# a) Remove default nginx code
RUN rm -rf /usr/share/nginx/html/*
# b) From 'builder' copy your site to default nginx public folder
COPY --from=builder /app/dist/angular-tour-of-heroes /usr/share/nginx/html
# c) copy your own default nginx configuration to the conf folder
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
