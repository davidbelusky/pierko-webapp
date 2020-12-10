#FROM node:lts-alpine as build
FROM node:13.12.0-alpine as build

WORKDIR /app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm ci --silent
COPY . ./

#RUN npm install
#RUN npm install react-scripts@3.0.1 -g --silent
RUN npm run build

#PREPARE NGINX
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

#FIRE UP nginx
#EXPOSE 80
CMD ["nginx","-g","daemon off;"]