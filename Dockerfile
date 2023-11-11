FROM node:18-alpine3.15
WORKDIR /root/dev/fe.coingecko
COPY . .
RUN chmod +x ./node_modules/.bin/*
ENV BROWSER=none
EXPOSE 3000
CMD [ "npm", "start" ]