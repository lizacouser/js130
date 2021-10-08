// item creator
// makes sure all encessary info present and valid
// ***PROPERTIES***
// SKU CODE = string itentifier for product
// 3 first letters of item (delete space if 2 word), first 2 letters of category
// ITEM NAME = string, 5 char min (not counting spaces)
// CATEGORY = string, 5 char min, one word only
// QUANTITY = quant in stock, assumed to be a valid number

// items manager
// creates + deletes items, updates info, and queries info
// ***METHODS***
// CREATE = makes new item, returns false if not successful
// UPDATE = 2 arguments: SKU code + object, updates info (assume data valid)
// DELETE = 1 agr: SKU code, deletes item from list (assume valid data)
// ITEMS = returns all items
// INSTOCK = lists all items with QUANTITY > 0
// ITEMSINCATEGORY = list all items in a given CATEGORY

// reports manager
// makes reports for specific item or ALL items
// reports generated from report objects, created by report manager
// ***METHODS***
// INIT = 1 arg: ITEMMANAGER object, assigns it to items property
// CREATEREPORTER = 1 arg: SKU code, returns object w/ 1 method, itemInfo.
// also loges to console all props of object as "key:value" pairs
// no other properties or methods on the returned obj
// REPORTINSTOCK = logs to console all item names in stock as csv

// IF ANY OF REQUIRED INFO NOT VALID,
// item creator returns an object with a "notValid" property of true

// created items should not have any properties or methods besides required
// you can add methods to item manager


let ItemManager = (function() {
  function isValidName(name) {
    return typeof name === "string" &&
           name.replace(/\s/g, "").length >= 5;
  }

  function isValidCategory(cat) {
    return typeof cat === "string" &&
           !cat.includes(" ") &&
           cat.length >= 5;
  }

  function isValidItem(name, cat, quantity) {
    return isValidName(name) &&
           isValidCategory(cat) &&
           quantity !== undefined;
  }

  return {
    items: [],

    create(name, cat, quantity) {
      let SKUCode = name.replace(/\s/g, "").slice(0, 3) + cat.slice(0, 2);

      if (isValidItem(name, cat, quantity)) {
        let newItem = {
          sku: SKUCode.toUpperCase(),
          name,
          cat,
          quantity,
        };

        this.items.push(newItem);
        return undefined;

      } else {
        return false;
      }
    },

    inStock() {
      return this.items.filter(item => item.quantity > 0);
    },

    update(sku, updatesObj) {
      let currentItem = this.findBySKU(sku);

      for (let key in updatesObj) {
        currentItem[key] = updatesObj[key];
      }
    },

    itemsInCategory(category) {
      return this.items.filter(item => item.cat === category);
    },

    delete(sku) {
      let deleteIndex = this.items.findIndex(item => item.sku === sku);

      this.items.splice(deleteIndex, 1);
    },

    findBySKU(sku) {
      return this.items.find(item => item.sku === sku);
    }
  };
})();

let ReportManager = (function() {

  function printKeyValuePairs(obj) {
    Object.keys(obj).forEach(key => {
      console.log(`${key}: ${obj[key]}`);
    });
  }

  return {
    init(itemManager) {
      this.items = itemManager;
    },

    createReporter(sku) {
      let currentObj = this.items.findBySKU(sku);

      return {
        itemInfo() {
          printKeyValuePairs(currentObj);
        }
      };
    },

    reportInStock() {
      let inStockItems = this.items.inStock();
      console.log(inStockItems.map(item => item.name).join(", "));
    }
  };
})();

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
console.log(ItemManager.items);

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
console.log(ItemManager.itemsInCategory('sports'));

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items
// (soccer ball is removed from the list)
console.log(ItemManager.items);

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



// // ALTERNATIVE SOLUTION
// let ItemCreator = (function() {
//   function generateSkuCode(itemName, category) {
//     return (itemName.replace(/\s/g, '').slice(0, 3).toUpperCase() +
//             category.replace(/\s/g, '').slice(0, 2).toUpperCase());
//   }

//   function isValidItemName(itemName) {
//     return itemName.replace(/\s/g, '').length >= 5;
//   }

//   function isValidCategory(category) {
//     return category.replace(/\s/g, '').length >= 5 && category.split(' ').length === 1;
//   }

//   function isQuantityProvided(quantity) {
//     return quantity !== undefined
//   }

//   return function(itemName, category, quantity) {
//     if (isValidItemName(itemName) && isValidCategory(category) && isQuantityProvided(quantity)) {
//       this.skuCode = generateSkuCode(itemName, category);
//       this.itemName = itemName;
//       this.category = category;
//       this.quantity = quantity;
//     } else {
//       return { notValid: true };
//     }
//   };
// })();

// let ItemManager = {
//   items: [],
//   getItem: function(skuCode) {
//     return this.items.filter(function(item) {
//       return item.skuCode === skuCode;
//     })[0];
//   },

//   create: function(itemName, category, quantity) {
//     let item = new ItemCreator(itemName, category, quantity);
//     if (item.notValid) {
//       return false;
//     } else {
//       this.items.push(item);
//     }
//   },

//   update: function(skuCode, itemInformation) {
//     Object.assign(this.getItem(skuCode), itemInformation);
//   },

//   delete: function(skuCode) {
//     this.items.splice(this.items.indexOf(this.getItem(skuCode)), 1);
//   },

//   list: function() {
//     return this.items;
//   },

//   inStock: function() {
//     return this.items.filter(function(item) {
//       return item.quantity > 0;
//     });
//   },

//   itemsInCategory: function(category) {
//     return this.items.filter(function(item) {
//       return item.category === category;
//     });
//   },
// };

// let ReportManager = {
//   init: function(itemManager) {
//     this.items = itemManager;
//   },

//   createReporter(skuCode) {
//     return (function() {
//       let item = this.items.getItem(skuCode);
//       return {
//         itemInfo: function() {
//           Object.keys(item).forEach(function(key) {
//             console.log(key + ': ' + item[key]);
//           });
//         },
//       };
//     }).bind(this)();
//   },

//   reportInStock: function() {
//     console.log(this.items.inStock().map(function(item) {
//       return item.itemName;
//     }).join(','))
//   },
// };