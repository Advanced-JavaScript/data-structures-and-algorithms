'use strict';

const Hashtable = require('./hashtable.js');

describe('Hashtable', () => {
  it('Adding a key/value to hashtable', () => {
    const h = new Hashtable(1024);
    const key = 'key';
    const value = 'value';
    h.add(key, value);
    const hashIndex = h.hash(key);
    expect(h.entries[hashIndex].includes(value)).toBeTruthy();
  });
  it('successfully retrieves based on a key', async () => {
    const h = new Hashtable(1024);
    const key = 'key';
    const value = 'value';
    h.add(key, value);
    const result = await h.get(key);
    expect(result.includes(value)).toBeTruthy();
  });
  it('Successfully returns null for a key that does not exist in the hashtable ', () => {
    const h = new Hashtable(1024);
    const key = 'key';
    const result = h.get(key);
    expect(result.head).toBeNull();
  });
  it('Successfully handle a collision in the hashtable ', () => {
    const h = new Hashtable(1024);
    const key = 'key';
    const value = 'value';
    h.add(key, value);
    h.add(key, value);
    const result = h.get(key);
    expect(result.head.next.value).toBe('value');
  });
  it('Successfully retrieve a value from a bucket within the hashtable with a collision ', () => {
    const h = new Hashtable(1024);
    const key = 'key';
    const value = 'value';
    h.add(key, value);
    h.add(key, value);
    const result = h.get(key);
    expect(result.head.value).toBe('value');
    expect(result.head.next.value).toBe('value');
  });
  it('Successfully hash a key to a value in the range of the size ', () => {
    const h = new Hashtable(1024);
    const key = 'key';
    const hash = h.hash(key);
    expect(hash).toBeGreaterThanOrEqual(0);
    expect(hash).toBeLessThanOrEqual(1024);
  });
});