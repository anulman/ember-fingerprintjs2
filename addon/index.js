import RSVP from 'rsvp';

const { Promise } = RSVP;

export default function(options = {}) {
  if (typeof FastBoot !== 'undefined') {
    throw new Error('Cannot fingerprint in Fastboot');
  }

  return new Promise((resolve) => {
    Fingerprint2(options).get((result, components) => {
      resolve({ result, components });
    });
  });
}
