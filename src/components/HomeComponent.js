<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags always come first -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css" />

    <!-- Additional CSS must be placed after Bootstrap CSS -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=DM-Sans|Open+Sans" />
    <link href="https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css" />
    <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="node_modules/bootstrap-social/bootstrap-social.css" />
    <title>Character Builder</title>
</head>

<body>
        <nav class="navbar navbar-expand-sm navbar-dark sticky-top" style="background-image: url(img/wood-background.jpg); background-size: cover; background-repeat: no-repeat;">
            <div class="container">
                <a class="navbar-brand" href="#"><img src="img/CB logo.png" height="30" width="30" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbar">
                    <ul class="navbar-nav list-unstyled">
                        <li class="nav-item active"><a class="nav-link" href="#"><i class="fa fa-home fa-lg"></i>
                                Home</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="races.html"><i
                                    class="fa fa-users fa-lg"></i>Races</a></li>
                        <li class="nav-item"><a class="nav-link" href="classes.html"><i
                                    class="fa fa-list fa-lg"></i>Classes</a></li>
                        <li class="nav-item"><a class="nav-link" href="builder.html"><i
                                    class="fa fa-user-plus fa-lg"></i>Character Builder</a></li>
                        <li class="nav-item"><a class="nav-link" href="resources.html"><i
                                    class="fa fa-book fa-lg"></i>Resources</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="hero-image" style="background-image: url(img/TavernArt.jpg);">
            
            <div class="hero-text">
              <h1>Welcome To The DND Tavern</h1>
              <p class="hero-text2">You've traveled a long way, you can rest here. Take this ale, first one's on the house!</p>
              <button class="hero-button">Drink a pint</button>
            </div>
          </div>


          


          <div class="card-group">
            <div class="card" id="card1">
              <img src="img/Tiamat.jpg" class="card-img-top" alt="..." style="width: cover">
              <div class="card-body">
                <h3 class="card-title">Learn to Play</h3>
                <p class="card-text"></p> 
                <p class="d-none d-sm-block">Learn what this amazing game is all about, and how to get
                    started! After learning the basics you'll be ready for your first game!
                </p>
                <p class="card-text"><small class="text-muted">Will you be victorious in battle? Will you be the ultimate adventurer? A wise kind mage, or a powerful evil sorcerer? 

                </small></p>
              </div>
            </div>
            <div class="card" id="card2">
              <img src="img/Party_Art.jpg" class="card-img-top" alt="..." >
              <div class="card-body">
                <h3 class="card-title">Explore Character Classes & Races</h3>
                <p class="card-text">Use these characters built by D&D players around the world as inspiration for your own quirky, powerful, or whimsical characters.</p>
                <p class="card-text"><small class="text-muted">Who will you be?</small></p>
              </div>
            </div>
            <div class="card" id="card3">
              <img src="img/tavernPlan.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h3 class="card-title">Build Your Character!</h3>
                <p class="card-text">Use our simple character builder to design a
                    character and embark on a quest with friends!</p>
                <p class="card-text"><small class="text-muted">You're the master of you're own destiny</small></p>
              </div>
            </div>
          </div>

    <div style="background-image: url(img/parchment2.jpg);
background-size: cover; background-repeat: no-repeat; ">
        <div class="row row-content">
            <div class="col-md-8 mx-auto">
                <div id="homeCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#homeCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#homeCarousel" data-slide-to="1"></li>
                        <li data-target="#homeCarousel" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100 " src="img/dice-roll.jpg" style="height: 500px; object-fit: cover;;"alt="TavernArt">
                            <div class="carousel-caption">
                                <h3>It's all in your hands!</h3>
                                <p class="d-none d-sm-block">Let Dungeons and Dragons 101 be your guide to starting your
                                    first adventure!</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="img/muticolor-dice.jpg" style="height: 500px; object-fit: cover" alt="Party_Art">
                            <div class="carousel-caption">
                                <h3>Simple Rules</h3>
                                <p class="d-none d-sm-block">We will show you the power of the dice!</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="img/DiceCharacterSheet.webp" style="height: 500px; object-fit: cover;" alt="DiceCharacterSheet">
                            <div class="carousel-caption">
                                <h3>Create your Own Character</h3>
                                <p class="d-none d-sm-block">Unlock your true potential with our character builder</p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    

    

    <footer class="site-footer">
        <div class="container">
            <div class="row">

                <div class="col-4 col-sm-2 offset-1">
                    <div>
                        <h5>Links</h5>
                        <ul class="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Races</a></li>
                            <li><a href="#">Classes</a></li>
                            <li><a href="#">Character Builder</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-6 col-sm-5 text-center">
                    <div>
                        <h5>Social</h5>
                        <a class="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i
                                class="fa fa-instagram"></i></a>
                        <a class="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i
                                class="fa fa-facebook"></i></a>
                        <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i
                                class="fa fa-twitter"></i></a>
                        <a class="btn btn-social-icon btn-google" href="http://youtube.com/"><i
                                class="fa fa-youtube"></i></a>
                    </div>
                </div>
                <div class="col-sm-4 text-center">
                    <div>
                        <a class="btn btn-link" href="tel:+12065551234"><i class="fa fa-phone"></i>
                            1-206-555-1234<br></a>
                        <a class="btn btn-link" href="mailto:dungeonsanddragons101@gmail.com"><i
                                class="fa fa-envelope-o"></i>
                            dungeonsanddragons101@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- jQuery must come first, then Popper.js, then the Bootstrap JavaScript plugins.-->
    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="js/scripts.js"></script>
</body>

</html>

export default Main;