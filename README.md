# Ex08 CAMU Schedule using Bootstrap
## Date:25/05/2026

## AIM:
To design a responsive and visually appealing CAMU Schedule using Bootstrap.

## DESIGN STEPS:
### Step 1:
Clone the repository from GitHub.

### Step 2:
Create Django Admin project.

### Step 3:
Create a New App under the Django Admin project.

### Step 4:
Add the Bootstrap CDN link inside the <head> section.

### Step 5:
Insert a table element with Bootstrap table classes.

### Step 6:
Construct the complete table.

### Step 7:
Add a header/footer displaying copyright information.

### Step 8:
Publish the website in the LocalHost.

## PROGRAM :
INDEX.HTML:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>CAMU Timetable</title>

   
    <link rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

    
    <link rel="stylesheet" href="style.css">
</head>

<body>

    

    <div class="topbar">

        <div class="college-name">
            Saveetha Engineering College (Autonomous)
        </div>

        <div class="profile-top">

            <img src="profile.jpeg" class="small-profile">

            <span>SUVETHA K M S</span>

        </div>

    </div>

    

    <div class="main-container">

        

        <div class="sidebar">

            <img src="logo.png" class="sidebar-logo">

            <ul>
                <li>Home</li>
                <li>Attendance</li>
                <li>Assignments</li>
                <li>Exam schedules</li>
                <li>Reports</li>
                <li class="active">Timetable</li>
            </ul>

        </div>

        <!-- Content -->

        <div class="content">

            <div class="student-section">

                <img src="profile.jpeg" class="student-pic">

                <div>
                    <h3>SUVETHA K M S</h3>

                    <p>Saveetha Engineering College (Autonomous)</p>

                    <p>EVEN-JUNIOR | 2025-2026</p>
                </div>

            </div>

            <h2>Timetable</h2>

            <button id="btn" class="btn btn-primary">
                Weekly Schedule
            </button>

            <br><br>

            <div class="table-responsive">

                <table class="table table-bordered table-hover table-striped">

                    <thead>

                        <tr>
                            <th>Day</th>
                            <th>08:00 AM - 09:59 AM</th>
                            <th>10:00 AM - 11:59 AM</th>
                            <th>01:00 PM - 02:59 PM</th>
                            <th>03:00 PM - 04:59 PM</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Monday</td>
                            <td>Fundamentals of Web Application Development</td>
                            <td>-</td>
                            <td>Introduction to Machine Learning</td>
                            <td>Fundamentals of C Programming</td>
                        </tr>

                        <tr>
                            <td>Tuesday</td>
                            <td>Fundamentals of C Programming</td>
                            <td>Introduction to Machine Learning</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>

                        <tr>
                            <td>Wednesday</td>
                            <td>Introduction to Machine Learning</td>
                            <td>Fundamentals of C Programming</td>
                            <td>Mentor Meet</td>
                            <td>-</td>
                        </tr>

                        <tr>
                            <td>Thursday</td>
                            <td>Fundamentals of Web Application Development</td>
                            <td>Fundamentals of Web Application Development</td>
                            <td>Fundamentals of C Programming</td>
                            <td>-</td>
                        </tr>

                        <tr>
                            <td>Friday</td>
                            <td>Fundamentals of Web Application Development</td>
                            <td>Introduction to Machine Learning</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>

                    </tbody>

                </table>

            </div>

            <p id="message"></p>

        </div>

    </div>

    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

    <!-- Bootstrap JS -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

    <!-- JS File -->
    <script src="script.js"></script>

</body>
</html>
```
STYLE.CSS:
```
body{
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
}



.topbar{
    background-color: white;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 8px rgba(0,0,0,0.1);
}

.college-name{
    font-size: 24px;
    font-weight: bold;
    color: #1f3c88;
}

.profile-top{
    display: flex;
    align-items: center;
    gap: 10px;
}

.small-profile{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
}


.main-container{
    display: flex;
}

/* Sidebar */

.sidebar{
    width: 250px;
    background-color: white;
    min-height: 100vh;
    padding: 20px;
    box-shadow: 2px 0px 5px rgba(0,0,0,0.1);
}

.sidebar-logo{
    width: 170px;
    display: block;
    margin: auto;
    margin-bottom: 30px;
}

.sidebar ul{
    list-style: none;
    padding: 0;
}

.sidebar ul li{
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 8px;
    cursor: pointer;
}

.sidebar ul li:hover{
    background-color: #eaf4ff;
}

.active{
    background-color: #d9ecff;
    color: #007bff;
}


.content{
    flex: 1;
    padding: 30px;
}



.student-section{
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
}

.student-pic{
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
}

.student-section h3{
    margin: 0;
    color: #2c3e50;
}

.student-section p{
    margin: 5px 0;
    color: gray;
}



.table{
    background-color: white;
}

th{
    background-color: #337ab7;
    color: white;
    text-align: center;
}

td{
    text-align: center;
    vertical-align: middle !important;
}

#message{
    margin-top: 20px;
    color: green;
    font-size: 20px;
    font-weight: bold;
}
```
SCRIPT.JS:
```
$(document).ready(function(){

    $("#btn").click(function(){

        $("#message").text("Welcome to CAMU Weekly Timetable");

        $("table").fadeOut(500);
        $("table").fadeIn(500);

    });

});
```
## OUTPUT:
![alt text](<Screenshot 2026-05-25 160710.png>)

## RESULT:
A responsive and visually appealing CAMU Schedule web page using Bootstrap is designed successfully.
