//@ts-check

const data = [
  {
    key: "Home",
    href: "/",
    children: [
      {
        key: "Services",
        href: "/services/",
        children: [
          {
            key: "Topics",
            href: "/topics/"
          }
        ]
      },
      {
        key: "Departments",
        href: "/departments/"
      }
    ]
  }
];

/**
 * @typedef {object} breadcrumbnode
 * @property {string} key
 * @property {string} href
 * @property {breadcrumbnode[]} [children]
 */

/**
 * @typedef {object} flatbreadcrumb
 * @property {string} key
 * @property {breadcrumblink[]} links
 */

/**
 * @typedef {object} breadcrumblink
 * @property {string} title
 * @property {string} href
 */

/**
 *
 */
function flattenData() {
  /** @type {flatbreadcrumb[]} */
  const result = [];

  /**
   * @param {breadcrumbnode} node
   * @param {breadcrumblink[]} [links]
   */
  function flattenHelper(node, links) {
    /** @type {flatbreadcrumb} */
    const flatbreadcrumb = {
      key: node.key,
      links: [{ title: node.key, href: node.href }]
    };

    if (links) {
      flatbreadcrumb.links.unshift(...links);
    }

    result.push(flatbreadcrumb);

    if (node.children) {
      for (const child of node.children) {
        flattenHelper(child, flatbreadcrumb.links);
      }
    }
  }

  for (const item of data) {
    flattenHelper(item);
  }

  return result;
}

module.exports = flattenData();

/*
Final data looks like this

const data = [
  {
    key: "Home",
    links: [
      {
        title: "Home",
        href: "/"
      }
    ]
  },
  {
    key: "Services",
    links: [
      {
        title: "Home",
        href: "/"
      },
      {
        title: "Services",
        href: "/services/"
      }
    ]
  },
  {
    key: "Departments",
    links: [
      {
        title: "Home",
        href: "/"
      },
      {
        title: "Departments",
        href: "/departments/"
      }
    ]
  },
  {
    key: "Topics",
    links: [
      {
        title: "Home",
        href: "/"
      },
      {
        title: "Services",
        href: "/services/"
      },
      {
        title: "Topics",
        href: "/topics/"
      }
    ]
  }
];
*/
