/**
 * Mahasiswa.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  primaryKey: 'id',
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
      columnName: '_id'
   },
   name: {
      type: 'string'
   },
   nim: {
     type: 'string'
   }
  },

};

