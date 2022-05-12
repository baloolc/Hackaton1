<?php

namespace App\Service;

use Exception;

class Arena
{
    public const DIRECTIONS = [
        'N' => [0, -1],
        'S' => [0, 1],
        'E' => [1, 0],
        'W' => [-1, 0],
    ];

    private array $tiles = [];
    private array $websites;
}
