<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Projets;
use App\Repository\ProjetsRepository;

class ProjetsController extends AbstractController
{
    /**
     * @Route("/projets", name="projets")
     */
    public function index(ProjetsRepository $repo)
    {
        $projets = $repo->findAll();
        return $this->render('projets/index.html.twig', [
            'controller_name' => 'ProjetsController',
            'projets'=> $projets
        ]);
    }

    /**
     * @Route("/projet/{id}", name="projets_show")
     */
    public function show(Projets $projet){
        return $this->render('projets/show.html.twig', [
            'projet'=> $projet
        ]);
    }
}
