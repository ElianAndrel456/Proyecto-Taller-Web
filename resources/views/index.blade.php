<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
    <h1>pagina para pagar</h1>
    <form action="/checkout" method="post">
      <input type="hidden" name="" value="{{csrf_token() }}">
      <input type="submit" value="Checkout">
    </form>
</body>
</html>