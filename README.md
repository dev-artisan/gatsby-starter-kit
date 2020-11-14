<h1 align="center">
    <img alt="Hackeex" title="Hackeex" src="https://github.com/developer0116/hackeex-gatsby-starter/blob/master/src/images/icon.png" width="200"> </br>
    Awesome Gatsby Starter
</h1>

<h4 align="center">
  Gatsby Typescript Styled Components Starter
</h4>

## 👩‍💻 Features

- [x] Google Lighthouse optimized (100/100)
- [x] Search engine optimization
- [x] Social media and meta tags
- [x] One icon favicons
- [x] Manifest support
- [x] Sitemap support
- [x] Offline support
- [x] Easy to use media queries
- [x] Custom routes using separate routing file
- [x] Using Typescript
- [x] Using styled-components
- [x] Using Prettier
- [x] Using tslint

## Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the blog starter.

    ```sh
    # create a new Gatsby site using the Hackeex starter
    gatsby new awesome-gatsby-site https://github.com/developer0116/hackeex-gatsby-starter
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd awesome-gatsby-site/
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `awesome-site` directory in your code editor of choice and edit `src/containers/index.tsx`. Save your changes and the browser will update in real time!

## Routing

This starter uses [custom routing plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-routes/) to separate routing configurations into external configuration file. Routes are defined in `/src/routes.ts` file by default. Path to external config can be changed in `gatsby-config.js` file.

### Example on how to map component to route using routes.ts

```
// In your routes configuration file (routes.ts)
const path = require('path');
module.exports = [
  {
    path: '/',
    component: path.resolve(`src/containers/Home.jsx`)
  },
  {
    path: '/404/',
    component: path.resolve(`src/containers/404.js`)
  }
];
```

## 🤓 What's inside?

```
└── static
    ├── assets
    │   └── thumbnail
└── src
    ├── images
    │   └── icon
    ├── components
    │   ├── Head
    │   ├── Heading
    │   └── Image
    ├── layout
    │   └── index
    ├── containers
    │   ├── index
    │   └── 404
    ├── styles
    │   ├── globalStyles
    │   ├── styleUtils
    │   ├── theme
    │   └── typography
    └── templates

```
