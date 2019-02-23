<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Projets;
use App\Repository\ProjetsRepository;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use App\Form\ProjetsType;


class DashboardController extends AbstractController
{
   
    /**
     * @Route("/dashboard", name="dashboard")
     */
    public function index(ProjetsRepository $repo)
    {
        $projets = $repo->findAll();
        return $this->render('dashboard/index.html.twig', [
            'controller_name' => 'DashboardController'
        ]);
    }

    /**
     * @Route("/dashboard/projets", name="dashboard_all_projets")
     */
    public function all(ProjetsRepository $repo)
    {
        $projets = $repo->findAll();
        return $this->render('dashboard/tous_les_projets.html.twig', [
            'controller_name' => 'DashboardController',
            'projets'=> $projets
        ]);
    }

    /**
     * @Route("/dashboard/new", name="dashboard_new")
     * @Route("/dashboard/{id}/edit", name="dashboard_edit")
     */
    public function form(Projets $projet = null, Request $request, ObjectManager $manager)
    {
        if(!$projet){
            $projet = new Projets();
        }

        // $form = $this->createFormBuilder($projet)
        //              ->add('title')
        //              ->add('description')
        //              ->add('image')
        //              ->add('git')
        //              ->add('url')
        //              ->getForm();

        $form = $this->createForm(ProjetsType::class, $projet);

                     $form->handleRequest($request);

                     if($form->isSubmitted() && $form->isValid()){
                         if(!$projet->getId()){
                             $projet->setCreatedAt(new \DateTime());
                         }

                         $manager->persist($projet);
                         $manager->flush();

                         return $this->redirectToRoute('dashboard_projets_show', ['id' => $projet->getId()]);
                     }

        return $this->render('dashboard/create.html.twig',[
                'formProjet' => $form->createView(),
                'editMode' => $projet->getId() !== null
            ]);
    }

    

    /**
     * @Route("/dashboard/projet/{id}", name="dashboard_projets_show")
     */
    public function show(Projets $projet){
        return $this->render('dashboard/projet.html.twig', [
            'projet'=> $projet
        ]);
    }
    
     /**
     * @Route("/dashboard/{id}/delete", name="dashboard_projets_delete")
     */
        public function delete(Projets $projet, Request $request){


        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($projet);
        $entityManager->flush();

        
        return $this->redirectToRoute('dashboard_all_projets');
    }

   
}
