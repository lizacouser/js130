// item creator
  // item class
  // sku code
  // item name
  // item category
  // quantity
// items manager
  // creates and tracks items
  /*
create: This method creates a new item. Returns false if creation is not successful.
update: This method accepts an SKU Code and an object as an argument and updates any of the information on an item. You may assume valid values will be provided.
delete: This method accepts an SKU Code and deletes the item from the list. You may assume a valid SKU code is provided.
items: This property returns all the items.
inStock: This method list all the items that have a quantity greater than 0.
itemsInCategory: This method list all the items for a given category
  */
// reports manager
  // creates reports of items
  // reports are their own objects
  /*
// init: This method accepts the ItemManager object as an argument 
// and assigns it to the items property.
// createReporter: This method accepts an SKU code as an
//  argument and returns an object.
// The returned object has one method, itemInfo. It logs 
// to the console all the properties 
// of an object as "key:value" pairs (one pair per line). 
// There are no other properties or methods on the returned object
//  (except for properties/methods inherited from Object.prototype).
// reportInStock: Logs to the console the item names of all 
// the items that are in stock as a comma separated values.
  */


function ItemCreator(sku, name, cat, quant) {
  return {
    SKUCode: sku,
    name: name,
    category: cat,
    quantity: quant,
  }
}

let ItemManager = (function() {
  function removeWhitespace(word) {
    return word.replace(' ', '');
  }

  function validObject(name, cat, quant) {
    return removeWhitespace(name).length >= 5 &&
           !cat.includes(' ') && cat.length >= 5 &&
           quant !== undefined;
  }

  function generateSKU(name, cat) {
    let sku = removeWhitespace(name).slice(0, 3) + removeWhitespace(cat).slice(0, 2);
    return sku.toUpperCase();
  }

  return {
    items: [],

    create(name, cat, quant) {
      if (validObject(name, cat, quant)) {
        let sku = generateSKU(name, cat);
        this.items.push(ItemCreator(sku, name, cat, quant));
      } else {
        return false;
      }
    },

    update(sku, newValues) {
      let updateItem = this.items.find(item => {
        return item.SKUCode === sku;
      });

      for (let prop in newValues) {
        updateItem[prop] = newValues[prop];
      }
    },

    delete(sku) {
      this.items = this.items.filter(item => {
        return item.SKUCode !== sku;
      })
    },

    inStock() {
      return this.items.filter(item => {
        return item.quantity > 0;
      }).map(item => item.name);
    },

    itemsInCategory(cat) {
      return this.items.filter(item => {
        return item.category === cat;
      }).map(item => item.name);
    },
  }
})();

let ReportManager = (function() {
  return {
    init(itemManager) {
      this.items = itemManager;
      return this;
    },

    createReporter(sku) {
      let item = this.items.items.find(item => {
        return item.SKUCode === sku;
      })

      return {
        itemInfo() {
          for (let prop in item) {
            console.log(prop + ': ' + item[prop]);
          }
        }
      };
    },
  
    reportInStock() {
      console.log(this.items.inStock().join(', '));
    }
  }
})();

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10