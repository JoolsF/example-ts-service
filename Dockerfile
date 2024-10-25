FROM node:21-alpine3.19

ARG TZ
RUN apk add --no-cache alpine-conf 
# && \
# setup-timezone -z ${TZ}

WORKDIR /app

COPY yarn.lock package.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "run:local"]
