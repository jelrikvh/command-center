<?php declare(strict_types=1);

namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class IncidentsController
{
    public function active(): Response
    {
        return new JsonResponse([
            ['id' => 1, 'title' => 'No Anneke present',],
            ['id' => 2, 'title' => 'No Anneke present',],
            ['id' => 3, 'title' => 'No Anneke present',],
            ['id' => 4, 'title' => 'No Anneke present',],
        ]);
    }
}
