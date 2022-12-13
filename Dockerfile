FROM node AS builder

COPY package.json .
COPY package-lock.json .
RUN npm ci

FROM node:alpine

WORKDIR /app
COPY --from=builder node_modules node_modules
COPY . .
RUN npm run build

EXPOSE 3001

ENTRYPOINT ["npm"]
CMD ["run", "start:prod"]
