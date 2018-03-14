import LruCache from 'lru-cache';

LruCache.prototype.delete = LruCache.prototype.del;
LruCache.prototype.clear = LruCache.prototype.reset;

export default function cacheMap (options) {
  options = Object.assign({}, options, {
    max: 200,
    maxAge: 1000 * 60 * 10
  });
  return new LruCache(options);
}