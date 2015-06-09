<html>
<head>
    <title>{{block name=title}}Default Page Title{{/block}}</title>
    <style>
      div {
        width:200px;
      }
    </style>
</head>
<body>
  <div>City: {{$info.location.city}}</div>

  <div>Street: {{$info.location.street}}</div>

  <script src="a.js"></script>
  <script>
    var aaa = 1000;
  </script>
</body>
</html>