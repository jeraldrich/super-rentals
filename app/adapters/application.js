import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'super-rentals/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';
  host = `${ENV.API_URL}`;

  buildURL(...args) {
    return `${super.buildURL(...args)}?api_key=${ENV.API_KEY}`;
  }
}
