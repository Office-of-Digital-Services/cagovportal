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
Run prebuild tasks alone with `npm run prebuild`; Airtable sync and SEP image
processing are skipped without `AIRTABLE_API_KEY`, using checked-in data and
images instead. See
[the prebuild entry point](src/scripts/prebuild.mjs) to add tasks.

Validate saved Airtable data without fetching: `npm run validate:airtable`.

### Airtable token setup

To refresh data locally, use an Airtable account with access to the
[project base](https://airtable.com/appqN4fe2lK8xlNqp/).

1. Open [Airtable personal access tokens](https://airtable.com/create/tokens)
   and create a token with a descriptive name.
2. Add the `data.records:read` scope.
3. Under access, select only the project base linked above.
4. Save the token in a `.env` file at the project root:

   ```dotenv
   AIRTABLE_API_KEY=your-personal-access-token
   ```

The `.env` file is hidden because it is listed in `.gitignore`, so Git excludes it from normal
staging and commits. Do not force-add it.

Run `npm run prebuild` to refresh data and prepare images, or `npm run build`
to also build the site.
