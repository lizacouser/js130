const { afterEach } = require('@jest/globals');
let {ItemManager, ItemCreator, ReportManager} = require('./mini-inv-take-2.js');

describe('ItemCreator', () => {
  let soccer;
  beforeEach(() => {
    soccer = ItemCreator('SOCSP', 'soccer ball', 'sports', 5)
  });

  test('ItemCreator returns an object', () => {
    expect(typeof soccer).toBe('object');
  });

  test('ItemCreator SKU code property', () => {
    expect(soccer.SKUCode).toBe('SOCSP');
  });

  test('ItemCreator name property', () => {
    expect(soccer.name).toBe('soccer ball');
  });

  test('ItemCreator quantity property', () => {
    expect(soccer.quantity).toBe(5);
  });

  test('ItemCreator category property', () => {
    expect(soccer.category).toEqual('sports');
  });
});

describe('ItemManager', () => {
  let list;
  beforeEach(() => {
    list = ItemManager;
  });

  afterEach(() => {
    list.items = [];
  });

  test('create method adds valid item to list', () => {
    let expected = ItemCreator('SOCSP', 'soccer ball', 'sports', 5)
    list.create('soccer ball', 'sports', 5);
    expect(list.items[0]).toEqual(expected);
  });

  test('create method does not add invalid data to list', () => {
    list.create('soccer ball', 'spo', 5);
    expect(list.items[0]).toBeUndefined();
  });

  test('update Method changes values', () => {
    list.create('soccer ball', 'sports', 5);
    list.update('SOCSP', {quantity: 0});
    list.update('SOCSP', {name: 'mySoccer'});
    list.update('SOCSP', {category: 'who knows'});

    let expected = ItemCreator('SOCSP', 'mySoccer', 'who knows', 0)
    expect(list.items[0]).toEqual(expected);
  });

  test('delete property deletes list elements', () => {
    list.create('soccer ball', 'sports', 5);
    list.create('basket ball', 'sports', 6);
    list.delete('BASSP');

    let expected = ItemCreator('SOCSP', 'soccer ball', 'sports', 5)
    expect(list.items[0]).toEqual(expected);
  });

  test('inStock returns an array of items with quantities over 0', () => {
    list.create('soccer ball', 'sports', 5);
    list.create('basket ball', 'sports', 6);
    list.create('wiffle ball', 'sports', 0);
    expect(list.inStock()).toEqual(['soccer ball', 'basket ball']);
  });

  test('itemsInCategory returns an array of items in a given category', () => {
    list.create('soccer ball', 'sports', 5);
    list.create('basket ball', 'sports', 6);
    list.create('wiffle ball', 'children', 6);
    expect(list.itemsInCategory('sports')).toEqual(['soccer ball', 'basket ball']);
    expect(list.itemsInCategory('children')).toEqual(['wiffle ball']);
  });
});

describe('Report Manager', () => {
  let repManager;
  let list;
  beforeEach(() => {
    list = ItemManager;
    list.create('soccer ball', 'sports', 5);
    list.create('basket ball', 'sports', 0);
    list.create('wiffle ball', 'children', 6);
  });

  // afterEach(() => {
  //   list.items = [];
  // });

  test('init method creates report manager object with items property', () => {
    repManager = Object.create(ReportManager).init(list);
    expect(repManager.items).toEqual(list);
  });

  test('create reporter returns an object containing the method itemInfo', () => {
    repManager = Object.create(ReportManager).init(list);
    expect(Object.keys(repManager.createReporter('SOCSP'))).toContain('itemInfo');
  });

  test('createReporter.itemInfo logs list of key value pairs without throwing error', () => {
    repManager = Object.create(ReportManager).init(list);
    expect(() => repManager.createReporter('SOCSP').itemInfo()).not.toThrow();
  });

  test('reportInStock logs list of in-stock items without throwing error', () => {
    repManager = Object.create(ReportManager).init(list);
    expect(() => repManager.reportInStock()).not.toThrow();
  });
});