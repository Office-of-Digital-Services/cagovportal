# cagovportal

Source code for the [www.ca.gov](https://www.ca.gov/) portal, built with Eleventy.

## Environments

| Environment | Branch                                                                      | Website                                                 |
| ----------- | --------------------------------------------------------------------------- | ------------------------------------------------------- |
| Development | [dev](https://github.com/Office-of-Digital-Services/cagovportal/tree/dev)   | [dev-cagov.cdt.ca.gov](https://dev-cagov.cdt.ca.gov/)   |
| Test        | [test](https://github.com/Office-of-Digital-Services/cagovportal/tree/test) | [test-cagov.cdt.ca.gov](https://test-cagov.cdt.ca.gov/) |
| Production  | [main](https://github.com/Office-of-Digital-Services/cagovportal)           | [www.ca.gov](https://www.ca.gov/)                       |

## Contributor links

Some resources require an authenticated account with appropriate access.

- [DevSecOps pipeline](https://calenterprise.visualstudio.com/GO.Ca.Gov.Website/)
- [LA Fires repository](https://github.com/Office-of-Digital-Services/cagovportal-lafires/)

## Local development

```sh
npm ci
npm start
```

Build with `npm run build`, which refreshes data and prepares SEP images before
Eleventy. Run `npm run prebuild` before `npm start` when data or images need updating.
Run prebuild tasks alone with `npm run prebuild`; the Airtable refresh is skipped
without `AIRTABLE_API_KEY`, using checked-in SEP snapshots instead. See
[the prebuild entry point](src/scripts/prebuild.mjs) to add tasks.
