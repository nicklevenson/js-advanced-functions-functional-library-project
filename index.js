const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection : Object.values(collection);
      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
      }
      return collection
    },

    map: function(collection, callback) {
      const itCollection = (collection instanceof Array) ? collection : Object.values(collection);
      const newCollection = []
      for (let i = 0; i < itCollection.length; i++) {
        newCollection.push(callback(itCollection[i]))
      }
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      let s = 0
      if (!acc) {
        acc = collection[0]
        s = 1
      }
      for (s; s < collection.length; s++) {
        acc = callback(acc, collection[s], collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i]) === true) {
          return collection[i]
        }
      }
    },
    
    filter: function(collection, predicate){
      const passingA = []
      collection.forEach(e => {
        if (predicate(e) === true) {
          passingA.push(e)
        }
      })
      return passingA
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
