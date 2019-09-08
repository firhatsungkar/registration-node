Fullstack registration web application with nodejs technology. 

## Technologies

<details><summary>UI Technologies</summary>
<ul>
  <li>HTML 5</li>
  <li>CSS3</li>
  <li>JavaScript Framework: <strong>React JS</strong></li>
  <li>Ajax: <code>fetch</code></li>
  <li>Unit test: <code>Jest</code></li>
</ul>
</details>

<details><summary>Web Technologies</summary>
<ul>
  <li>RESTful</li>
</ul>
</details>

<details><summary>Server Technologies</summary>
<ul>
  <li>Node js</li>
  <li>Framework: <strong>express js</strong></li>
</ul>
</details>

<details><summary>Database</summary>
<ul>
  <li>PostgreSQL</li>
  <li>ORM: <strong>sequelizer js</strong></li>
</ul>
</details>

## Setup

### Installation
- Copy `.env.example` to `.env` in the root directory
```
> cp .env.example .env
```
- Set .env variable for connecting to database.

- Simply just install all node dependencies, run on the terminal:
```
> npm install
```
- Run the server
```
> node server
```

### Development Setup

- Run installation process above.

- Migrate database.
```
> npx sequelize-cli db:migrate 
```

- Run development server
```
> npm run dev
```

### Build
```
> npm run build
```

### Testing

```
> npm run test
```

## Deployment

This app can deploy to heroku, [more info](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app)
