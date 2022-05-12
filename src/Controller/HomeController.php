<?php

namespace App\Controller;

class HomeController extends AbstractController
{
    /**
     * Display home page
     */
    public function index(): string
    {
        return $this->twig->render('Home/index.html.twig');
    }

    public function validate()
    {
        $contact = [];
        $errors = [];
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            $contact = array_map("trim", $_POST);

            if (empty($contact["url"])) {
                $errors[] = "L'url est obligatoire";
            }
            if (!filter_var($contact['url'], FILTER_VALIDATE_URL)) {
                $errors[] = "Mauvais format pour l'url ";
            }
            if (empty($errors)) {
                header('Location: /index.html.twig');
            }
        }
        return $this->twig->render('Home/index.html.twig', ['errors' => $errors, 'contact' => $contact]);
    }
}
