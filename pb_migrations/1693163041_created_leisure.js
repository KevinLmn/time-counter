/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "x5d88yi17onf6qf",
    "created": "2023-08-27 19:04:01.524Z",
    "updated": "2023-08-27 19:04:01.524Z",
    "name": "leisure",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ymwzs1fq",
        "name": "activity",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "neecec5e",
        "name": "time_spent",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "2q66q3zf",
        "name": "day",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("x5d88yi17onf6qf");

  return dao.deleteCollection(collection);
})
