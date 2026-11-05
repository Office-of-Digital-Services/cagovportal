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

## Prebuild tasks

`npm run build` automatically runs [the prebuild entry point](src/scripts/prebuild.mjs)
before Eleventy. Run these tasks separately with `npm run prebuild`.

To add a task, add its script path to the `scripts` array in the entry point,
relative to that file. Tasks run sequentially in separate Node.js processes with
inherited environment and console output. A nonzero task exit stops the prebuild
and prevents the build from continuing.

The existing service finder updater still skips fetching when `AIRTABLE_API_KEY`
is missing.
