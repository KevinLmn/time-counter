/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("382k2mz725n0urj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "elten0bo",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("382k2mz725n0urj")

  // remove
  collection.schema.removeField("elten0bo")

  return dao.saveCollection(collection)
})
