/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("382k2mz725n0urj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xlz50sj3",
    "name": "time_won",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gwen4hjn",
    "name": "time_spent",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("382k2mz725n0urj")

  // remove
  collection.schema.removeField("xlz50sj3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gwen4hjn",
    "name": "time",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
