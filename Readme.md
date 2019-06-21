# App nodejs with docker

Proyect first step with docker and nodejs

## Steps

### 1. create image nodedev

This commad create image with name nodedev

```bash
docker build -t nodedev .
```

### 2. create container

This container delete before stop

```bash
docker-compose run --rm --service-ports nodedev
```

### 3.create a file .env with params

- URLDB: url database mongodb
- PORT: port container, default 3000

### 4. install dependences npm

```bash
npm install
```

### 5. start server

```bash
npm run dev
```
