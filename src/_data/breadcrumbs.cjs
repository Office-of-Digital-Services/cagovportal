//@ts-check

/** @type {breadcrumbnode[]} */
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
      },
      {
        key: "2025 Los Angeles Fires",
        href: "/lafires/",
        children: [
          {
            key: "Get help in person",
            href: "/lafires/get-help-in-person/"
          }
        ]
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

function flattenData() {
  /** @type {flatbreadcrumb[]} */
  const result = [];

  /**
   * @param {breadcrumbnode} node
   * @param {breadcrumblink[]} [links]
   */
  function flattenRecursive(node, links = []) {
    /** @type {flatbreadcrumb} */
    const flatbreadcrumb = {
      key: node.key,
      links: [...links, { title: node.key, href: node.href }]
    };

    result.push(flatbreadcrumb);

    node.children?.forEach(child =>
      flattenRecursive(child, flatbreadcrumb.links)
    );
  }

  data.forEach(x => flattenRecursive(x));

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
