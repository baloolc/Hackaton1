<?php

namespace App\Controller;

class HomeController extends AbstractController
{
    /**
     * Display home page
     */
    public function index(): string
    {
        $errors = [];
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            $url = trim($_POST['url']);
            if (empty($url)) {
                $errors[] = 'L\'url est obligatoire';
            } elseif (!filter_var($url, FILTER_VALIDATE_URL)) {
                $errors[] = "Mauvais format pour l'url ";
            }
        }

        if (empty($errors)) {
            //requet API
        }

        return $this->twig->render('Home/index.html.twig');
    }
}
