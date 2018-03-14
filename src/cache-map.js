import LruCache from 'lru-cache';
import fp from 'mostly-func';

LruCache.prototype.delete = LruCache.prototype.del;
LruCache.prototype.clear = LruCache.prototype.reset;

const defaultOptions = {
  max: 200,
  maxAge: 1000 * 60 * 10
};

export class CacheMap {
  constructor(options) {
    options = fp.assign(defaultOptions, options);
    this._cache = new LruCache(options);
  }

  async get(id) {
    return this._cache.get(id);
  }

  async multi(...args) {
    return Promise.all(fp.map(this._cache.get, args));
  }

  async set(id, val) {
    return this._cache.set(id, val);
  }

  async delete(id) {
    return this._cache.del(id);
  }

  async clear() {
    return this._cache.reset();
  }
}

export default function init (options) {
  return new CacheMap(options);
}
