<!DOCTYPE html>
<html ng-app="myApp">

<head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular-route.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular.min.js"></script>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, shrink-to-fit=no, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Simple Sidebar - Start Bootstrap Template</title>

    <!-- Bootstrap Core CSS -->
    <link href="static/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="static/css/simple-sidebar.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<script>
	
	
$(document).ready(function(){
    $("#londonbutton").click(function(){
        $.get("/london", function(data, status){
		$("#city").text(data);
        });
    });
});
$(document).ready(function(){
    $("#parisbutton").click(function(){
        $.get("http://127.0.0.1:5984/emails/3109610f-ede6-432b-9e7c-6826bc830cee", function(data, status){
		
		$("#city").text(data.content);
        });
    });
});


</script>
	
</head>

<body ng-controller="HomeController">

    <div id="wrapper">

        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#/" >
                        Start Bootstrap
                    </a>
                </li>
                <li>
                    <a href="#/blog" >Dashboard</a>
                </li>
                <li>
                    <a href="#/about">Shortcuts</a>
                </li>
                <li>
                    <a href="#">Overview</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                         <script>
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
   <script type="text/ng-template" id="pages/home.html">
      <h1>Home</h1>
      <h3>{{message}}</h3>
    </script>
    <script type="text/ng-template" id="pages/blog.html">
      <h1>Blog</h1>
	  
      <h3>{{message}}</h3>
    </script>
    <script type="text/ng-template" id="pages/about.html">
      <h1>About</h1>
      <h3>{{message}}</h3>
    </script>
<script src="app.js"></script>
	<div ng-view></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /#page-content-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Menu Toggle Script -->
	
   
	
</body>

</html>
