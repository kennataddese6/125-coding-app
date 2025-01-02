'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import NewFooter from 'components/footer';
import { BlackNavbar } from 'components/layout/navbar/black-navbar';

export default function Page() {
  return (
    <>
      <BlackNavbar />
      <div className="mx-auto my-8 flex flex-wrap justify-between text-black lg:w-9/12 lg:py-6">
        <div className="p-3 lg:w-1/2 lg:p-5">
          <h1 className="text-center text-2xl lg:text-start">About us</h1>
          <p className="mt-3 text-center text-stone-700 lg:pr-4 lg:text-start">
            We are a dedicated team working on cars and accessories. we are passionate aboutWe are a
            dedicated team working on cars and accessories. we are passionate aboutWe are a
            dedicated team working on cars and accessories. we are passionate aboutWe are a
            dedicated team working on cars and accessories. we are passionate about...
          </p>
          <h1 className="mt-8 text-center text-xl lg:text-start">Frequently Asked Questions</h1>
          <Accordion type="multiple" className="mt-4 w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Adaptations and Coding?</AccordionTrigger>
              <AccordionContent>
                Car Coding is a relatively new thing in the Automotive World, and it implies
                software modifications to a Vehicle to allow the use of functions not available in
                the Car when it left the factory for different reasons, mainly local regulations
                (Some countries have different requirements from when the car leaving the factory).
                Coding does not imply changing the software! It only changes pre-programmed options
                already existing in the software. In modern Vehicles, there are functions that the
                manufacturer has not activated. Changing these settings is called Coding.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What can Car Coding bring to my Vehicle?</AccordionTrigger>
              <AccordionContent>
                As we explained above, most cars have country-specific settings for their features,
                most vehicles have limitations and other restrictions. With the help of coding, the
                owner can change the chimes on their car for when they lock and unlock, set how many
                times its one-touch signal flickers for the indicator, remember settings for
                Start/Stop systems, and more. Coders can also activate cornering headlights with fog
                lights, deactivate some buzzing sounds, and enable multiple functions of the comfort
                module. Other possibilities involve lowering the level of the passenger-side mirror
                when reversing, activate the “needle sweep” function when the ignition is on (only
                for some Volkswagen AG models), automatic door locking at a particular speed,
                U.S.-style daytime running lights, the auto-hold function for vehicles with
                electrically operated parking brake, and others.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do we travel?</AccordionTrigger>
              <AccordionContent>
                Yes. Let us know what you need doing and we will price up a quote to come out to you
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What if I have Warranty? Will coding void my Warranty?
              </AccordionTrigger>
              <AccordionContent>
                This is a question always asked which is a Yes & No. Yes depending on dealership as
                they always try to wriggle out of any warranty claim. No as we offer a free service
                to take off any coding before your vehicle goes in for service/warranty work and
                reapply free of charge after. ​
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How long does coding take?</AccordionTrigger>
              <AccordionContent>
                Generally around 45 minutes depending on what you require! We never like to rush and
                we will go at the customer's pace. We will always allow the customer to test and
                play around with any feature we have activated. We will explain the process and
                ensure you are fully confident in the work we have carried out.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/*     <div>
          <Image src={'/team.png'} width={500} height={600} alt="team image" />
        </div> */}
      </div>
      <NewFooter />
    </>
  );
}
