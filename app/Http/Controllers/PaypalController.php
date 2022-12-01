<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PaypalController extends Controller
{
    public function createOrder(Request $request)
    {

        $total = $request->total;
        if ($total <= 0) {
            return response()->json([
                "error" => "Invalid total"
            ], 400);
        }

        //convert PEN a USD
        $total = $total / 3.5;
        //redondear a 2 decimales
        $total = round($total, 2);

        $order = [
            "intent" => "CAPTURE",
            "purchase_units" => [
                [
                    "amount" => [
                        "currency_code" => "USD",
                        "value" => 100
                    ]
                ]
            ],
            "application_context" => [
                "brand_name" => "Example Inc",
                "landing_page" => "LOGIN",
                "user_action" => "PAY_NOW",
                "return_url" => "http://localhost:8000/api/capture-order",
                "cancel_url" => "http://localhost:8000/api/cancel-order",
            ]
        ];

        //generate random paypal id 
        $paypalOrderId = uniqid();


        $url = env("PAYPAL_API_TEST") . "/v2/checkout/orders";
        $clientID = env("PAYPAL_API_ID");
        $clienteSK = env("PAYPAL_API_SECRET");
        //Hacer un peticion post con autorizacion en php
        $curl = curl_init();
        curl_setopt_array($curl, [
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => "{\"intent\":\"CAPTURE\",\"purchase_units\":[{\"reference_id\":\"d9f80740-38f0-11e8-b467-0ed5f89f718b\",\"amount\":{\"currency_code\":\"USD\",\"value\":$total}}],\"payment_source\":{\"paypal\":{\"experience_context\":{\"payment_method_preference\":\"IMMEDIATE_PAYMENT_REQUIRED\",\"payment_method_selected\":\"PAYPAL\",\"brand_name\":\"Mokita Store\",\"locale\":\"en-US\",\"landing_page\":\"LOGIN\",\"shipping_preference\":\"SET_PROVIDED_ADDRESS\",\"user_action\":\"PAY_NOW\",\"return_url\":\"http://localhost:8000/api/capture-order\",\"cancel_url\":\"http://localhost:8000/api/cancel-order\"}}}}",
        CURLOPT_HTTPHEADER => [
                "Authorization: Basic QVNSbndfLUt1WTJrdWgycnl0Rm1TZkZLTFpDN2d0VHpaSkZBOXZzRjFrMXBrbnhmNXFuNzNmTFRET2ctbHF4OUY3MUVVM2FteEdrWkFSalI6RUxRR2dOR0RuYnFzempoN0JtMzI5S29vTFlUY1RPVGJucF9pVi1iUzJqZkJiWlFzRG1RcUxTUjhsSTZweHVJQW9WNElONUc4djBOTUVGTko=",
                "Content-Type: application/json",
                "PayPal-Request-ID:   $paypalOrderId"
            ],
        ]);

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        //format response paypal en json
        $response = json_decode($response, true);


        if ($err) {

            echo "cURL Error #:" . $err;

        } else {
            return response()->json($response);

        }
    }
    public function captureOrder(Request $request)
    {
        //extraer el token y el payer id de la url
        $token = $request->token;
        $payerId = $request->PayerID;

        //Redireccionar a una pagina de exito
        $url = env("PAYPAL_API_TEST") . "/v2/checkout/orders/$token/capture";

        $curl = curl_init();
        curl_setopt_array($curl, [
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_HTTPHEADER => [
                "Authorization: Basic QVNSbndfLUt1WTJrdWgycnl0Rm1TZkZLTFpDN2d0VHpaSkZBOXZzRjFrMXBrbnhmNXFuNzNmTFRET2ctbHF4OUY3MUVVM2FteEdrWkFSalI6RUxRR2dOR0RuYnFzempoN0JtMzI5S29vTFlUY1RPVGJucF9pVi1iUzJqZkJiWlFzRG1RcUxTUjhsSTZweHVJQW9WNElONUc4djBOTUVGTko=",
                "Content-Type: application/json",
            ],
        ]);

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        /*        //format response paypal en json
        $response = json_decode($response, true);
        */

        if ($err) {

            echo "cURL Error #:" . $err;

        } else {
            return redirect()->away('http://localhost:8000');

        }


    }
    public function cancelOrder()
    {
        //Redirigir a una pagina de cancelacion

        return redirect()->away("http://localhost:8000");
    }

}