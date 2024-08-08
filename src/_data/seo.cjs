//@ts-check
const legacy = require("./legacy.json");

const Removals_410 = [
  "/agency/?item=department-of-fair-employment-and-housing"
];
const Redirect_301 = [
  /*
  {
    from: "/Agencies/Aging-Department-of",
    to: "/agency/?item=department-of-aging"
  },
  */
  ...legacy.map(x => ({ from: x.legacy, to: x.target }))
];

module.exports = { Removals_410: Removals_410, Redirect_301: Redirect_301 };
