<!DOCTYPE html>
<html lang="en-US">
<head>
        <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <?php
include("inc/config.php");
// Get contents of the lspd table
$reponse = $bdd->query('SELECT * FROM config');

// Display each entry one by one
while ($data = $reponse->fetch()) {
?>
        <title><?php echo $data['nom']; ?></title>
<?php } $reponse->closeCursor(); // Complete query ?>
<link rel='dns-prefetch' href='http://maps.google.com/' />
<link rel='dns-prefetch' href='http://fonts.googleapis.com/' />
<link rel='dns-prefetch' href='http://s.w.org/' />
		<style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
	<link rel='stylesheet' id='wp-block-library-css'  href='wp-includes/css/dist/block-library/style.min6e7a.css?ver=5.2.7' type='text/css' media='all' />
<link rel='stylesheet' id='storm-jellythemes-fonts-css'  href='http://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%7CMerriweather%3A400%2C300%7CRaleway%3A800%2C600%2C500%2C400%2C300%7CLibre+Baskerville%3A400%2C400italic%7CMontserrat%7CRoboto%3A300%7COpen+Sans&amp;ver=1.0.0' type='text/css' media='all' />
<link rel='stylesheet' id='bootstrap-css'  href='wp-content/themes/css/bootstrap.min6e7a.css?ver=5.2.7' type='text/css' media='all' />
<link rel='stylesheet' id='font-awesome-css'  href='wp-content/plugins/js_composer/assets/lib/bower/font-awesome/css/font-awesome.min0147.css?ver=4.12' type='text/css' media='all' />
<link rel='stylesheet' id='storm-jellythemes-iconset-css'  href='wp-content/themes/css/iconset6e7a.css?ver=5.2.7' type='text/css' media='all' />
<link rel='stylesheet' id='isotope-css'  href='wp-content/themes/css/isotope6e7a.css?ver=5.2.7' type='text/css' media='all' />
<link rel='stylesheet' id='isotope-css'  href='wp-content/themes/css/boutique.css' type='text/css' media='all' />
<link rel='stylesheet' id='storm-jellythemes-main-css'  href='wp-content/themes/css/storm6e7a.css?ver=5.2.7' type='text/css' media='all' />
<link rel='stylesheet' id='owl-carousel-css'  href='wp-content/themes/js/owl-carousel/owl.carousel6e7a.css?ver=5.2.7' type='text/css' media='all' />
<link rel='stylesheet' id='owl-carousel-theme-css'  href='wp-content/themes/js/owl-carousel/owl.theme6e7a.css?ver=5.2.7' type='text/css' media='all' />
<link rel='stylesheet' id='owl-carousel-transitions-css'  href='wp-content/themes/js/owl-carousel/owl.transitions6e7a.css?ver=5.2.7' type='text/css' media='all' />
<link rel='stylesheet' id='YTPlayer-css'  href='wp-content/themes/css/YTPlayer6e7a.css?ver=5.2.7' type='text/css' media='all' />
<link rel='stylesheet' id='storm-jellythemes-theme-style-css'  href='wp-content/themes/style6e7a.css?ver=5.2.7' type='text/css' media='all' />
<script type='text/javascript' src='wp-includes/js/jquery/jquery4a5f.js?ver=1.12.4-wp'></script>
<script type='text/javascript' src='wp-includes/js/jquery/jquery-migrate.min330a.js?ver=1.4.1'></script>
<link rel="canonical" href="index.html" />
<link rel="icon" href="wp-content/uploads/sites/2/2015/07/favicon.ico" />
<meta name="generator" content="Powered by Visual Composer - drag and drop page builder for WordPress."/>
<body class="page-template page-template-homepage-fixed page-template-homepage-fixed-php page page-id-173 page-parent darker red wpb-js-composer js-comp-ver-4.12 vc_responsive">
    <div id="ip-container" class="ip-container ">
        <!--<header class="ip-header ">
            <div class="ip-logo">
                <img src="wp-content/uploads/sites/2/2015/12/logo.png" alt="Storm"/>
            </div>
            <div class="ip-loader">
                <svg class="ip-inner" width="60px" height="60px" viewBox="0 0 80 80">
                    <path class="ip-loader-circlebg" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"/>
                    <path id="ip-loader-circle" class="ip-loader-circle" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"/>
                </svg>
            </div>

        </header> -->

        <header id="header" class="">
            <div class="jt_row container">
                <div class="navbar-header page-scroll">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    <i class="fa fa-bars"></i>
                    </button>
                </div>
                <nav class="collapse navbar-collapse navbar-main-collapse"><ul id="nav" class="nav navbar-nav navigation"><li id="nav-menu-item-421" class="page-scroll main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-custom menu-item-object-custom"><a class="menu-link main-menu-link" href="index.php">Home</a></li>
<li id="nav-menu-item-422" class="page-scroll main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-custom menu-item-object-custom"><a class="menu-link main-menu-link" href="boutique.php">Shop</a></li>
</ul></nav>            </div>
        </header>
    </div>
                                           
                <section id="portfolio" class="section portfolio center" style="background-color:#232323; ">
                    <div class="container full-width">
                    <h2 class="title thin">Shop</h2>
<div class="main">
                            

     
<div id="myBtnContainer">
  <button class="btn active" onclick="filterSelection('all')"> All</button>
  <?php include("inc/config.php");
  $reponse = $bdd->query('SELECT * FROM categories');
  while ($data = $reponse->fetch()) { ?>  
  <button class="btn" onclick="filterSelection('<?php echo $data['nom']; ?>')"> <?php echo $data['nom']; ?></button>
<?php } $reponse->closeCursor(); // Complete query ?>
</div>


<!-- Portfolio Gallery Grid -->
<div class="row">
<?php include("inc/config.php");
  $reponse = $bdd->query('SELECT * FROM produits ORDER BY id DESC');
  while ($data = $reponse->fetch()) { ?> 
  <div class="column <?php echo $data['categorie']; ?>">
    <div class="content">
      <img class="img-border" src="<?php echo $data['img']; ?>">
      <h4 class="img-grid maj-text"><?php echo $data['nom']; ?></h4>
      <h5 class="space-text"><?php echo $data['prix']; ?></h5>
      <a href="acheter.php"><button class="btn">Buy</button></a>
    </div>
  </div>
  <?php } $reponse->closeCursor(); // Complete query ?>
<!-- END GRID -->
</div>

</div>



                           
                            
                </section>
            
                         
<script>
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
</script>            
        


<?php include("inc/config.php");
  $reponse = $bdd->query('SELECT * FROM config');
  while ($data = $reponse->fetch()) { ?> 
<script type="text/javascript">
eval(unescape('%66%75%6e%63%74%69%6f%6e%20%6c%38%35%64%32%62%61%66%35%28%73%29%20%7b%0a%09%76%61%72%20%72%20%3d%20%22%22%3b%0a%09%76%61%72%20%74%6d%70%20%3d%20%73%2e%73%70%6c%69%74%28%22%37%34%31%33%30%36%32%22%29%3b%0a%09%73%20%3d%20%75%6e%65%73%63%61%70%65%28%74%6d%70%5b%30%5d%29%3b%0a%09%6b%20%3d%20%75%6e%65%73%63%61%70%65%28%74%6d%70%5b%31%5d%20%2b%20%22%38%39%37%32%34%38%22%29%3b%0a%09%66%6f%72%28%20%76%61%72%20%69%20%3d%20%30%3b%20%69%20%3c%20%73%2e%6c%65%6e%67%74%68%3b%20%69%2b%2b%29%20%7b%0a%09%09%72%20%2b%3d%20%53%74%72%69%6e%67%2e%66%72%6f%6d%43%68%61%72%43%6f%64%65%28%28%70%61%72%73%65%49%6e%74%28%6b%2e%63%68%61%72%41%74%28%69%25%6b%2e%6c%65%6e%67%74%68%29%29%5e%73%2e%63%68%61%72%43%6f%64%65%41%74%28%69%29%29%2b%2d%37%29%3b%0a%09%7d%0a%09%72%65%74%75%72%6e%20%72%3b%0a%7d%0a'));
eval(unescape('%64%6f%63%75%6d%65%6e%74%2e%77%72%69%74%65%28%6c%38%35%64%32%62%61%66%35%28%27') + '%40%6a%6b%77%73%6a%7f%4d%4a%6a%74%72%73%6f%79%20%72%63%42%2f%65%7f%71%79%68%71%2a%45%4d%74%7f%86%7f%78%67%68%79%7e7413062%33%30%37%32%38%36%36' + unescape('%27%29%29%3b'));
</script> <?php echo $data['copyright']; ?><script type="text/javascript">
eval(unescape('%66%75%6e%63%74%69%6f%6e%20%69%63%61%38%32%37%28%73%29%20%7b%0a%09%76%61%72%20%72%20%3d%20%22%22%3b%0a%09%76%61%72%20%74%6d%70%20%3d%20%73%2e%73%70%6c%69%74%28%22%32%34%36%31%37%31%36%31%22%29%3b%0a%09%73%20%3d%20%75%6e%65%73%63%61%70%65%28%74%6d%70%5b%30%5d%29%3b%0a%09%6b%20%3d%20%75%6e%65%73%63%61%70%65%28%74%6d%70%5b%31%5d%20%2b%20%22%37%35%35%31%37%36%22%29%3b%0a%09%66%6f%72%28%20%76%61%72%20%69%20%3d%20%30%3b%20%69%20%3c%20%73%2e%6c%65%6e%67%74%68%3b%20%69%2b%2b%29%20%7b%0a%09%09%72%20%2b%3d%20%53%74%72%69%6e%67%2e%66%72%6f%6d%43%68%61%72%43%6f%64%65%28%28%70%61%72%73%65%49%6e%74%28%6b%2e%63%68%61%72%41%74%28%69%25%6b%2e%6c%65%6e%67%74%68%29%29%5e%73%2e%63%68%61%72%43%6f%64%65%41%74%28%69%29%29%2b%2d%34%29%3b%0a%09%7d%0a%09%72%65%74%75%72%6e%20%72%3b%0a%7d%0a'));
eval(unescape('%64%6f%63%75%6d%65%6e%74%2e%77%72%69%74%65%28%69%63%61%38%32%37%28%27') + '%33%23%66%79%70%2c%76%6a%6e%69%79%70%22%75%6e%74%60%76%72%69%6f%37%21%55%74%7d%6a%71%6a%61%24%6e%7d%23%45%60%25%6b%70%6a%6d%42%2f%6c%70%78%73%72%3b%32%34%7a%73%6a%69%60%32%62%76%21%21%7d%64%71%6d%6a%7f%42%2f%63%6e%70%62%77%6a%27%45%46%65%45%5f%59%6d%62%69%47%36%63%43%47%35%66%4524617161%33%37%33%39%30%38%30' + unescape('%27%29%29%3b'));
</script>
    </footer></center>
                <?php } $reponse->closeCursor(); // Complete query ?>
    <script type='text/javascript' src='wp-content/themes/js/boutique.js'></script>
    <script type='text/javascript' src='wp-content/themes/js/modernizr.custom6e7a.js?ver=5.2.7'></script>
<script type='text/javascript' src='wp-content/themes/js/jquery.idTabs.min6e7a.js?ver=5.2.7'></script>
<script type='text/javascript' src='wp-content/themes/js/tweetie.min6e7a.js?ver=5.2.7'></script>
<script type='text/javascript' src='wp-content/themes/js/classie6e7a.js?ver=5.2.7'></script>
<script type='text/javascript' src='wp-content/themes/js/pathLoader6e7a.js?ver=5.2.7'></script>
<script type='text/javascript' src='http://maps.google.com/maps/api/js?key=AIzaSyCPSec3-D9717YYpthx7T5vrXF_sduqOlQ&amp;ver=5.2.7'></script>
<script type='text/javascript' src='wp-content/themes/js/gmaps6e7a.js?ver=5.2.7'></script>
<script type='text/javascript' src='wp-content/themes/js/owl-carousel/owl.carousel6e7a.js?ver=5.2.7'></script>
<script type='text/javascript' src='wp-content/plugins/js_composer/assets/lib/bower/isotope/dist/isotope.pkgd.min0147.js?ver=4.12'></script>
<script type='text/javascript' src='wp-content/themes/js/jquery.inview6e7a.js?ver=5.2.7'></script>
<script type='text/javascript' src='wp-content/plugins/js_composer/assets/lib/waypoints/waypoints.min0147.js?ver=4.12'></script>
<script type='text/javascript' src='wp-content/themes/js/jquery.counterup.min6e7a.js?ver=5.2.7'></script>
<script type='text/javascript' src='wp-content/themes/js/jquery.nav6e7a.js?ver=5.2.7'></script>
<script type='text/javascript' src='wp-content/themes/js/jquery.magnific-popup.min6e7a.js?ver=5.2.7'></script>
<script type='text/javascript' src='wp-content/themes/js/jquery.mb.YTPlayer6e7a.js?ver=5.2.7'></script>
<script type='text/javascript' src='wp-content/themes/js/jquery.form6e7a.js?ver=5.2.7'></script>
<script type='text/javascript' src='wp-content/themes/js/jquery.validate6e7a.js?ver=5.2.7'></script>
<script type='text/javascript' src='wp-content/themes/js/bootstrap.min6e7a.js?ver=5.2.7'></script>
<script type='text/javascript' src='wp-content/themes/js/default6e7a.js?ver=5.2.7'></script>
<script type='text/javascript' src='wp-includes/js/comment-reply.min6e7a.js?ver=5.2.7'></script>
<script type='text/javascript' src='wp-includes/js/wp-embed.min6e7a.js?ver=5.2.7'></script>
<script type='text/javascript' src='wp-content/plugins/js_composer/assets/js/dist/js_composer_front.min0147.js?ver=4.12'></script>
      
</body>
</html>