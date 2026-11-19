# Configuration

By default the Participatory Planning app takes the configuration from [`settings.json`](./assets/js/settings.json). You can override that by providing your own setting file as a query parameter:

`https://esri.github.io/participatory-planning?settings=[url]`

The settings parameter is expected to be a URL pointing to JSON file with the following structure:

```json
{
  "planningArea": [
    [-10386342.06150109, 5615127.64322342],
    [-10386092.200132804, 5615127.64322342],
    [-10386092.200132804, 5615368.682944138],
    [-10386342.06150109, 5615368.682944138]
  ],
  "planningAreaName": "Lake of the Isles, Minneapolis, MN",
  "webSceneId": "a6ce9a79990e491c965028da5e58fb92"
}
```

1. `planningArea` contains the Web Mercator coordinates of the planning area
2. `planningAreaName` is the name of the area shown in the welcome screen of the app
3. `webSceneId` must point to a [Webscene](https://doc.arcgis.com/en/arcgis-online/reference/what-is-web-scene.htm), you can follow these steps to create your own:
   1. Create a [Webscene in ArcGIS Online](https://doc.arcgis.com/en/arcgis-online/get-started/get-started-with-scenes.htm)
   2. Add a [SceneLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-SceneLayer.html) with existing buildings in and around planning area.
   3. Capture a few slides with different perspectives of the planning area, they will show up at the upper navigation menu in the app

A simple way of providing your own settings file is using [GitHub Gist](https://gist.github.com/) and passing the Gist's URL (raw version) to the app. This is an example for a planning area in Zug, Switzerland:

[`https://esri.github.io/participatory-planning?settings=https://gist.githubusercontent.com/arnofiva/82f57a3cc2d99769f573898560f74e3f/raw/zug.pp.json`](https://esri.github.io/participatory-planning?settings=https://gist.githubusercontent.com/arnofiva/82f57a3cc2d99769f573898560f74e3f/raw/zug.pp.json)

## GitHub Deployment

The live version is deployed using [GitHub pages using Github Actions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). Pushing changes to the main branch will automatically redeploy the site and make it available shortly after.
