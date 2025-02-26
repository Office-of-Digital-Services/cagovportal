# LA Fires Data Processing Guide

In this folder, we add data from an [Excel workbook in SharePoint](https://stateca.sharepoint.com/:x:/r/sites/CSProducts-NaturalDisasterResponse/Shared%20Documents/Consolidated%20Resource%20Checklist.xlsx?d=w54d2373354d14682a32cf0ddae48e0d6&csf=1&web=1&e=AgU3FF) used for the DDRC/La Fires. This requires some special steps to complete so that the data is parsed correctly:

1. Save the spreadsheet to your desktop because the web app version of Excel on Sharepoint does not give the standard export menu options you need to export the data in the correct format.
2. Open the local save of the workbook on your PC in MS Excel **desktop version**, navigate to the worksheet (currently using Shalica's worksheet for service finder data)
3. Copy and paste the entire table of data to a new sheet so that the hidden rows don't get exported (**double check that the hidden rows don't get copied**). Ensure that the table **headers** (id, audience, type of service, etc) also get copied over to the new sheet because they are needed in the repository file.
4. Export the data that we will add to the repo in this folder by selecting **File > Save as UTF-encoded CSV** file type so that Spanish and other special characters get rendered correctly on the website.
5. Rename the file to `recovery_services_finder.csv` (same as currently in the repo, pay attention to the extension name).
6. Copy and paste the file to `cagovportal\src_data\lafires` to **replace the current CSV file**.
7. Do a quick visual check of the data to ensure that text is rendering correctly - no missing characters, no typos, etc.
8. Open the file in VS Code, run the web app, and **check the terminal to ensure there are no errors** related to parsing data (e.g., "data does not have the correct amount of rows").
