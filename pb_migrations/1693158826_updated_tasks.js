/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("382k2mz725n0urj")

  collection.viewRule = null
  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("382k2mz725n0urj")

  collection.viewRule = ""
  collection.createRule = null

  return dao.saveCollection(collection)
})
