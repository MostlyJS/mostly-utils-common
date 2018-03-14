import LruCache from 'lru-cache';

LruCache.prototype.delete = LruCache.prototype.del;
LruCache.prototype.clear = LruCache.prototype.reset;

export default function cacheMap (options) {
  options = Object.assign({
    max: 200,
    maxAge: 1000 * 60 * 10
  }, options);
  return new LruCache(options);
}