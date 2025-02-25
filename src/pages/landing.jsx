import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center ">
        <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job <br />{" "}
          <span className="text-yellow-600"> With</span>
          <span className="flex items-center text-yellow-300 gap-2 sm:gap-6">
            Emperi Staffing
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        <Link to={"/jobs"}>
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to={"/post-job"}>
          <Button variant="destructive" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center items-center w-full min-h-screen p-4">
        <article className="max-w-4xl w-full bg-gray-800 shadow-md p-6 space-y-4 rounded-md transition-transform duration-300 hover:-translate-y-2 sm:max-w-3xl md:max-w-2xl lg:max-w-4xl">
          <div className="flex justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-12 h-12 text-gray-300 bg-gray-600 rounded-full p-2"
            >
              <path
                d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                stroke="currentColor"
              ></path>
            </svg>
          </div>

          <p className="text-center text-gray-400 font-serif">
            <span className="text-4xl text-yellow-500 font-bold sm:text-2xl">
              Why Choose Emperi Staffing?
            </span>
            <br />
            <br />
            <span className="text-2xl text-yellow-300 font-semibold sm:text-lg">
              Industry Expertise:
            </span>
            <br />
            We have a deep understanding of market trends and industry demands.
            <br />
            <span className="text-2xl text-yellow-300 font-semibold sm:text-lg">
              Wide Employer Network:
            </span>
            <br />
            Our strong connections with top companies ensure more job
            opportunities for candidates.
            <br />
            <span className="text-2xl text-yellow-300 font-semibold sm:text-lg">
              Customized Approach:
            </span>
            <br />
            We provide tailored solutions for both job seekers and employers.
            <br />
            <span className="text-2xl text-yellow-300 font-semibold sm:text-lg">
              Ongoing Support:
            </span>
            <br />
            From resume building to post-placement support, we are with you at
            every step.
            <br />
            <span className="text-2xl text-yellow-300 font-semibold sm:text-lg">
              Confidential and Reliable:
            </span>
            <br />
            We prioritize your privacy and ensure a smooth, trustworthy hiring
            process.
            <br />
            If you’re ready to take the next step in your career, Emperi
            Staffing is here to help. Whether you need career guidance, job
            placement, or interview preparation, we are committed to ensuring
            your success.
          </p>
        </article>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>

      <Accordion type="multiple" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default LandingPage;
