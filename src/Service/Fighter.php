<?php

namespace App\Service;

abstract class Fighter
{
    private string $name;
    protected int $x;
    protected int $y;
    protected string $image = '';

    public function __construct(string $name, int $x, int $y)
    {
        $this->name = $name;
        $this->x = $x;
        $this->y = $y;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setName($name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getX()
    {
        return $this->x;
    }

    public function setX($x): self
    {
        $this->x = $x;

        return $this;
    }

    public function getY()
    {
        return $this->y;
    }

    public function setY($y): self
    {
        $this->y = $y;

        return $this;
    }
}
