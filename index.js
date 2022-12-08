<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"
    />
    <link rel="stylesheet" href="styles.css" />
    <title>Meal Finder</title>
  </head>
  <body>
    <div class="container">
        <h1>Meal Finder</h1>
        <div class="flex">
            <form class="flex" id="submit">
                <input type="text" id="search" placeholder="Search for a meals or keywords"></input>
<button class="search-btn" type="submit">
    <i class="fas fa-random"></i>
</button>
            </form>
            <button class="random-btn" id="random">
                <i class="fas fa-random"></i>
            </button>
        </div>

        <div id="result-heading"></div>
        <div id="meals" class="meals"></div>
        <div id="single-meal"></div>

    </div>

    <script src="script.js"></script>
  </body>
</html>
