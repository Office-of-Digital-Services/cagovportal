# cagovportal

This is the code base and project location for the www.ca.gov portal redesign starting of 2023.

[Dev](https://github.com/Office-of-Digital-Services/cagovportal/tree/dev) branch is deployed
[here](https://dev-cagov.cdt.ca.gov/).  
[Test](https://github.com/Office-of-Digital-Services/cagovportal/tree/test) branch is deployed
[here](https://test-cagov.cdt.ca.gov/).  
[Main](https://github.com/Office-of-Digital-Services/cagovportal) branch is deployed
[here](https://www.ca.gov/).
[DevSecOps pipeline](https://calenterprise.visualstudio.com/GO.Ca.Gov.Website/)  
[LA Fires GitHub](https://github.com/Office-of-Digital-Services/cagovportal-lafires/)

## Local development

```sh
npm ci
npm start
```

Build with `npm run build`, which runs prebuild tasks before Eleventy.
Run prebuild tasks alone with `npm run prebuild`; the Airtable refresh is skipped
without `AIRTABLE_API_KEY`. See [the prebuild entry point](src/scripts/prebuild.mjs)
to add tasks.
