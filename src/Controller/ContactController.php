<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\ContactType;

class ContactController extends AbstractController
{
    /**
     * @Route("/contact", name="contact")
     */
    public function contact()
    {

        $form = $this->createForm(ContactType::class);

                     if($form->isSubmitted() && $form->isValid()){
                         if(!$contact->getId()){
                             $contact->setCreatedAt(new \DateTime());
                         }

                         $manager->persist($contact);
                         $manager->flush();
                         dump($contact);
                     }
                     

        return $this->render('contact/index.html.twig', [
            'our_form' => $form->createView()
        ]);
    }


}
