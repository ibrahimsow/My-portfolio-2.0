<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Projets;

class ProjetsFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        for ($i = 1; $i <= 10; $i++){
            $projet = new Projets();
            $projet->setTitle("Projet $i")
                   ->setDescription("<p> description du projets $i </p>") 
                   ->setImage("http://placehold.it/350x150")
                   ->setCreatedAt(new \DateTime())
                   ->setGit("url du git du projet $i")
                   ->setUrl("url du site $i");
            $manager->persist($projet);

        }

        $manager->flush();
    }
}
