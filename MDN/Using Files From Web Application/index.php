<?php
if (isset($_FILES['myFile'])) {
    // Example:
    // (PHP 4 >= 4.0.3, PHP 5) 支持move_uploaded_file方法,
    // 参见http://php.net/manual/zh/function.move-uploaded-file.php
    move_uploaded_file($_FILES['myFile']['tmp_name'], "uploads/" . $_FILES['myFile']['name']);
    exit;
}
?>