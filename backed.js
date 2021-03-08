<html>
  <head></head>
  <body>
    <script type="text/javascript">
      (async () => {
        const response = await fetch(
          'https://parseapi.back4app.com/classes/Moviesdatabase_Movie?limit=50',
          {
            headers: {
              'X-Parse-Application-Id': '7j8y9L8UftE4054ZrXpG9M5gyRI6i9Zt81AdEd9K', // This is your app's application id
              'X-Parse-REST-API-Key': 'fep8q09h7a0NSahkYzHulHuF6cTZAQnpc3OTcO6N', // This is your app's REST API key
            }
          }
        );
        const data = await response.json(); // Here you have the data that you need
        console.log(JSON.stringify(data, null, 2));
      })();
    </script>
  </body>
</html>