<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $quantity = $_POST['quantity'];
    $payment = $_POST['payment'];

    $price_per_ticket = 100; 
    $total_price = $quantity * $price_per_ticket;

    if ($payment == "paypal") {
        header("Location: https://www.paypal.com/checkout?amount=$total_price&currency=MAD");
        exit();
    } elseif ($payment == "visa" || $payment == "mastercard") {
        header("Location: stripe-payment.php?amount=$total_price");
        exit();
    } else {
        echo "<h2>Merci, $name ! Nous allons traiter votre paiement par virement bancaire.</h2>";
        echo "<p>Montant à payer: $total_price DH</p>";
    }
} else {
    echo "<h2>Erreur: Veuillez remplir le formulaire.</h2>";
}
?>