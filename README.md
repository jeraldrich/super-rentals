This repo contains the ember frontend which fetches data from the rentals api at [super-rentals](https://github.com/jeraldrich/super-rentals-api)

![ScreenShot](https://github.com/jeraldrich/super-rentals/blob/master/github-screenshot.png)

* Setup and run the rails json api at [super-rentals-api](https://github.com/jeraldrich/super-rentals-api): `bundle exec rails s -p 5000 -b 0.0.0.0`
* Get the auto generated api key for the api user by going to the super-rentals-api rails console: `rails c` `User.first.api_key`
* Set the ENV.API_KEY in config/environment with the api user's api key
* Signup for mapbox and set the ENV.MAPBOX_ACCESS_TOKEN with your public token

Setup and run ember frontend:

```
npm install
ember serve
```

* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)