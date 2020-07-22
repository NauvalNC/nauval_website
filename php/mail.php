<?php
    $subject = $msg = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") 
    {
        $subject = $_POST["err-subject"];
        $msg = $_POST["err-message"];
        
        echo "<script>";
        echo "console.log('"+ $subject + "," + $msg + "');";
        echo "</script>";
        
        mail("nauvalmfirdaus@gmail.com", $subject, $msg);
    }
?>