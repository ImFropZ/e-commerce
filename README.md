# Setup
```bash
$ copy .env.example .env
```
- **Config the .env file**
## Without Docker
```bash
$ npm install
$ npm run dev
```
## With Docker
```bash
$ docker build -t <name> .
$ docker run -it -p 3000:3000 <name>
```