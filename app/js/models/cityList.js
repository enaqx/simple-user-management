/* City List model */

"use strict";

UserManagement.Models.cityList = backbone.Model.extend({
  idAttribute: "cityId",
  defaults: {
    cityId: null,
    cityName: null,
    selected: false
  }
});