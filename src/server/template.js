const template = `
<!DOCTYPE html>
<html lang='en-gb'>
  <head>
    <title>Test app</title>
    <meta charSet='utf-8' />
    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
    <meta name='mobile-web-app-capable' content='yes' />
    <link href='main.css' rel='stylesheet' />
  </head>
  <body>
    <div id='root'></div>
    <script src='bundle.js'></script>
  </body>
</html>
`

module.exports = template
