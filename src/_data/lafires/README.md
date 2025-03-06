# LA Fires Data Processing Guide

CURRENT METHOD
In this folder, we add data from an [Airtable Worksheet]https://airtable.com/invite/l?inviteId=inv6TWXKxcEqeaMVn&inviteToken=9db8e7a3e248473b4b3849782a9db5cb838913372f98ea5eb5587733b2a9135b&utm_medium=email&utm_source=product_team&utm_content=transactional-alerts) used for the DDRC/La Fires. This requires some special steps to complete so that the data is parsed correctly:

1. In Airtable, select the **Dev export** view of the data to give us only what we need to import, excluding columns like notes that are for internal use. Ensure that it is exporting as CSV (it seems to default to UTF-8 encoded CSV which is what we need, but confirm).
2. Rename the file to `recovery_services_finder` (same as currently in the repo).
3. Copy and paste the file to `cagovportal\src_data\lafires` to **replace the current CSV file**.
4. Using the **Rainbow CSV** plugin in VS Code, clean the data using **Shrink CSV Data - trim whitespaces** option so that empty fields will **not** render instead of rendering an empty element (this can be fixed by modifying the Nunjucks logic to render with strict conditions if we want to go that route).
5. Do a quick visual check of the data to ensure that text is rendering correctly - no missing characters, no typos, etc.
6. Run the web app on localhost, and **check the terminal to ensure there are no errors** related to parsing data (e.g., "data does not have the correct amount of rows").
7. Go to the service finder data page, select all options, and make sure that results are rendering correctly

ABOUT THE DATA AND METHODOLOGY
1. The conditional checks that render this data happen in recovery-services-all.html and it doesn't care how many columns there are in the csv. The csv data must simply have a **consistent** amount of columns for this to work. 
2. Any cells in the csv that have strings must ensure that double quotes are used to escape characters like commas, dashes, newlines, and parentheses in the strings to ensure the data is parsed correctly.

OLD METHOD (leaving this here in case we need to do some troubleshooting)
In this folder, we add data from an [Excel workbook in SharePoint](https://stateca.sharepoint.com/:x:/r/sites/CSProducts-NaturalDisasterResponse/Shared%20Documents/Consolidated%20Resource%20Checklist.xlsx?d=w54d2373354d14682a32cf0ddae48e0d6&csf=1&web=1&e=AgU3FF) used for the DDRC/La Fires. This requires some special steps to complete so that the data is parsed correctly:

1. Save the entire workbook to your desktop because the web app version of Excel on Sharepoint does not give the standard export menu options you need to export the data in the correct format.
2. Open the local save of the workbook on your PC in MS Excel **desktop version**, navigate to the worksheet (confirm current sheet with team as it may change)
3. Copy and paste the entire table of data to a new sheet so that the hidden rows don't get exported (**double check that the hidden rows don't get copied**). Ensure that the table **headers** (id, audience, type of service, etc) also get copied over to the new sheet by clicking into the header cells before copying; these are needed in the repository file.
4. Export the data that we will add to the repo in this folder by selecting **File > Save as type > CSV UTF-encoded (Comma Delimited)** file type so that Spanish and other special characters get rendered correctly on the website. You only want to save the **sheet** and not the whole workbook (you will get a prompt after you click save).
5. Rename the file to `recovery_services_finder` (same as currently in the repo).
6. Copy and paste the file to `cagovportal\src_data\lafires` to **replace the current CSV file**.
7. Do a quick visual check of the data to ensure that text is rendering correctly - no missing characters, no typos, etc.
8. Open the file in VS Code, run the web app, and **check the terminal to ensure there are no errors** related to parsing data (e.g., "data does not have the correct amount of rows").
