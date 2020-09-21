'use strict';

const AnimalShelter = require('./fifo-animal-shelter');

describe('AnimalShelter class', () => {
  it('Can successfully instantiate an animal shelter`', () => {
    const as = new AnimalShelter();
    expect(as).toBeDefined();
  });
  it('Can successfully enqueue a `dog` or `cat` onto a stack', () => {
    const as = new AnimalShelter();
    as.enqueue('dog');
    expect(as.front.value).toBe('dog');
  });
  it('Can successfully enqueue multiple animals onto a stack', () => {
    const as = new AnimalShelter();
    as.enqueue('cat');
    as.enqueue('dog');
    as.enqueue('dog');
    expect(as.front.value).toBe('cat');
    expect(as.front.next.value).toBe('dog');
    expect(as.back.value).toBe('dog');
  });
  it('Returns null if enqueue is used on an animal other then a dog or cat', () => {
    const as = new AnimalShelter();
    const attempt = as.enqueue('mouse');
    expect(attempt).toBeNull();
  });
  it('Can successfully dequeue off the animal shelter the expected value', () => {
    const as = new AnimalShelter();
    as.enqueue('cat');
    const value = as.dequeue('cat');
    expect(value).toBe('cat');
  });
  it('Can successfully empty an animal shelter after multiple dequeues.', () => {
    const as = new AnimalShelter();
    as.enqueue('cat');
    as.enqueue('dog');
    as.enqueue('dog');
    expect(as.front.value).toBe('cat');
    as.dequeue('cat');
    expect(as.front.value).toBe('dog');
    as.dequeue('dog');
    expect(as.front.value).toBe('dog');
    as.dequeue('dog');
    expect(as.front).toBeNull();
  });
  it('Can successfully dequeue an animal that is not at the front', () => {
    const as = new AnimalShelter();
    as.enqueue('cat');
    as.enqueue('cat');
    as.enqueue('cat');
    as.enqueue('cat');
    as.enqueue('cat');
    as.enqueue('dog');
    const pref = as.dequeue('dog');
    expect(pref).toBe('dog');
  });
  it('Returns null if the animal shelter is empty', () => {
    const as = new AnimalShelter();
    const empty = as.dequeue('cat');
    expect(empty).toBeNull();
  });
  it('Returns null if there is one animal in the shelter, but it is not `pref`', () => {
    const as = new AnimalShelter();
    as.enqueue('cat');
    const empty = as.dequeue('dog');
    expect(as.front.value).toBe('cat');
    expect(empty).toBeNull();
  });
  it('Returns `null` if the `pref` is not a `dog` or `cat`', () => {
    const as = new AnimalShelter();
    const empty = as.dequeue('platypus');
    expect(empty).toBeNull();
  });
  it('Keeps FIFO order after multiple dequeues', () => {
    const as = new AnimalShelter();
    as.enqueue('cat');
    as.enqueue('cat');
    as.enqueue('dog');
    as.enqueue('dog');
    as.enqueue('cat');
    as.dequeue('dog');
    expect(as.front.value).toBe('cat');
    expect(as.front.next.value).toBe('cat');
    expect(as.front.next.next.value).toBe('dog');
    expect(as.front.next.next.next.value).toBe('cat');
  });
});