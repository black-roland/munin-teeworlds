module.exports = {

  parseHost: (binary) => {
    const matches = /teeworlds_(players|ping)_([^:$]+)/.exec(binary);
    if (!matches)
      return null;
    return matches[2];
  },

  parsePort: (binary) => {
    const matches = /teeworlds_(players|ping)_[^:]+:([0-9]+)$/.exec(binary);
    if (!matches)
      return null;
    return matches[2];
  },

  parseTimeout: (env) => {
    if (env)
      return parseInt(env);
    return 10;
  },

  isConfig: (arg) => {
    return arg === 'config';
  },

};
