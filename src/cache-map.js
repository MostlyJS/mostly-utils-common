import LruCache from 'lru-cache';

LruCache.prototype.delete = LruCache.prototype.del;
LruCache.prototype.clear = LruCache.prototype.reset;

export default function cacheMap (options) {
  return new LruCache(options);
}