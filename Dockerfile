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


FROM node:latest AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm install esbuild
RUN npm run build
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist/angular-tour-of-heroes .
EXPOSE 8080:80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
