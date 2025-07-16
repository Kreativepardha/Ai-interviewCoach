FROM oven/bun:1.1.6 as base

WORKDIR /app

COPY . .

RUN bun install

EXPOSE 3000

CMD ["bun", "run", "src/server.ts"]
