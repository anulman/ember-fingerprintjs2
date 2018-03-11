'use strict';

const path = require('path');

const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-fingerprintjs2',

  included(app, parentAddon) {
    let target = (parentAddon || app);

    this._super.included.apply(arguments);

    target.import('vendor/fingerprintjs2/fingerprint2.min.js');
  },

  treeForVendor(vendorTree) {
    let fingerprintjsPath = path.dirname(require.resolve('fingerprintjs2'));
    let fingerprintjsTree = new Funnel(fingerprintjsPath, {
      files: ['fingerprint2.min.js'],
      destDir: 'fingerprintjs2'
    });

    return vendorTree !== undefined ?
      mergeTrees([vendorTree, fingerprintjsTree]) :
      fingerprintjsTree;
  }
};
