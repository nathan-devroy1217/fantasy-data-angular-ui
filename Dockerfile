# FROM node:latest
# WORKDIR /usr/src/app
# COPY ./ /usr/src/app/
# RUN npm install
# RUN npm install esbuild
# RUN npm run build
# EXPOSE 8080
# CMD [ "node", "server.js" ]


FROM node:latest as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm install esbuild
RUN npm run build
FROM nginx:latest
COPY --from=build /usr/local/app/dist/angular-tour-of-heroes /usr/share/nginx/html
EXPOSE 8080
