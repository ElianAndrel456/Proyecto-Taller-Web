<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8" />
    <link
      rel="icon"
      href="/favicon.ico"
    />
    <meta
      http-equiv="Content-Language"
      content="es-PE"
    />
    <meta
      name="description"
      content="Motikita, ofreciendo los mejores productos al mercado"
    />
    <meta
      name="keywords"
      content="Eccomerce, cafeteria, tienda, cafe, dulceria, postres, comida"
    />
    <meta
      name="robots"
      content="index,follow"
    />
    <meta
      name="AdsBot-Google"
      content="noindex"
    />
    <meta
      name="googlebot-news"
      content="nosnippet"
    />
    <meta
      name="google"
      content="nositelinkssearchbox"
    /><meta name="language" content="es" />
		<meta name="revisit-after" content="1 month" />
		<meta name="rating" content="General" />
		<meta name="author" content="Grupo 2 TPW" />
		<meta name="owner" content="Grupo 2 TPW" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Mokita</title>
    </head>
    <body class="antialiased">
        <div id="app">
        </div>
        @vite('resources/js/app.ts')
    </body>
</html>
