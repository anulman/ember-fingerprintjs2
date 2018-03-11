import Service from '@ember/service'
import Evented from '@ember/object/evented';

import RSVP from 'rsvp';

const { Promise } = RSVP;

export default Service.extend(Evented, {
  options: null,
  fingerprint: null,

  init() {
    this._super(...arguments);

    fingerprint(this.get('options') || {})
      .then((fingerprint) => this.set('fingerprint', fingerprint));
  }
});

export const fingerprint = function fingerprint(options = {}) {
  return new Promise((resolve) => {
    Fingerprint2(options).get((result, components) => {
      resolve({ result, components });
    });
  });
}
