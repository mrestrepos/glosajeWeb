<?php
    session_start();
    session_destroy();//Destruya la sessión
    header("location: ../index.php");
?>