<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StripeController extends Controller
{
    //
    public function index()
    {
        return view('index');
    }

    public function checkout()
    {
        \Stripe\Stripe::setApiKey(env('STRIPE_SK'));

        header('Content-Type: application/json');

        $session = \Stripe\Checkout\Session::create([
            "line_items" => [
                [
                    "name" => "T-shirt",
                    "price" => "price_1M6jKsJjM3pOZAw5lVbbCIZd",
                    "currency" => "usd",
                    "quantity" => 1,
                ]
            ],
            "mode" => "payment",
            "cancel_url" => "localhost:8000/cancel",
            "success_url" => "localhost:8000./success",
        ]);
        
        return redirect()->away($session->url);
    }
    public function success()
    {
        return view('welcome');
    }
    public function cancel()
    {
        return view('welcome');
    }
}