<?php

namespace App\Controller;

class GameController extends AbstractController
{
    /**
     * Display home page
     */
    public function index(): string
    {
        return $this->twig->render('Game/index.html.twig');
    }
}
