//@ts-check

const Removals_410 = ["/archive/proclamations/index.html", "page2", "page3"];
const Redirect_301 = [
  {
    from: "/Agencies/Aging-Department-of",
    to: "/agency/?item=department-of-aging"
  }
];

module.exports = { Removals_410: Removals_410, Redirect_301: Redirect_301 };
