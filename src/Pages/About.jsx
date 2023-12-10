import React from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';


export const About = () => {
  return (
    <main>
      <Carousel className="rounded-xl">
      <div className="relative h-[910px] w-full">
        <img
          src="https://i.pinimg.com/564x/8a/47/4a/8a474aae81f2b2e4c2044cba3a0c09a8.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-[#FFCB74]"
            >
              Who we are?
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              At Chic Couronne, our passion for excellence drives every aspect of what we do. From product selection to customer service, we strive to be the best in every detail.
            </Typography>
            <div className="flex justify-center gap-2">
              <Link to="/shop">
              <Button size="lg" color="white">
                Shop
              </Button>
              </Link>

              <Link to="/register">
              <Button size="lg" color="white" variant="text">
                Register
              </Button>
              </Link>

            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[910px] w-full">
        <img
          src="https://i.pinimg.com/564x/de/0a/ce/de0ace5039f8c0582f5e78180725cdab.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-black"
            >
              Fashion Experts
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Quality and style go hand in hand. Our experts carefully select each item in our collection, making sure you find only the best in fashion in our catalog.
            </Typography>
            <div className="flex gap-2">
              <Link to="/shop">
              <Button size="lg" color="white">
                Women
              </Button>
              </Link>

              <Link to="/shop">
              <Button size="lg" color="white" variant="text">
              Gentleman
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[910px] w-full">
        <img
          src="https://i.pinimg.com/564x/bf/44/ce/bf44cef856d2866331730bcae023e532.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Shipping
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Focused on speed, our express shipments guarantee that your packages reach their destination in record time. Speed does not compromise safety; each delivery is handled with the utmost care and attention.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
      <section
        class="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark"
      >
        <div class="container mx-auto">
          <div class="flex flex-wrap items-center justify-between -mx-4">
            <div class="w-full px-4 lg:w-6/12">
              <div class="flex items-center -mx-3 sm:-mx-4">
                <div class="w-full px-3 sm:px-4 xl:w-1/2">
                  <div class="py-3 sm:py-4 ">
                    <img
                      src="https://i.pinimg.com/564x/91/e4/79/91e4799f4ee7e4aac95642ef10e2a4ed.jpg"
                      alt=""
                      class="w-full rounded-2xl"
                    />
                  </div>
                  <div class="py-3 sm:py-4">
                    <img
                      src="https://i.pinimg.com/564x/e2/a4/d2/e2a4d23c6d23bb647f266d42c8cdb208.jpg"
                      alt=""
                      class="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div class="w-full px-3 sm:px-4 xl:w-1/2">
                  <div class="relative z-10 my-4">
                    <img
                      src="blob:https://ar.pinterest.com/d6260f67-a28a-4665-bee7-321eb214b667"
                      alt=""
                      class="w-full rounded-2xl"
                    />
                    <video class="" poster="https://i.pinimg.com/564x/ff/a7/78/ffa778aaacafb6aadda8b10a767e3c7b.jpg" preload="auto" src="blob:https://ar.pinterest.com/174383a0-43f8-4564-9226-de8d62237fe2" autoPlay>
                      <track kind="captions" src="" />
                    </video>

                  </div>
                </div>
              </div>
            </div>
            <div class="w-full px-4 lg:w-1/2 xl:w-5/12 ">
              <div class="mt-10 lg:mt-0 sm:p-0 p-4">
                <span class="block mb-4 text-lg font-semibold text-primary">
                  Why Choose Us
                </span>
                <h2
                  class="mb-5 text-3xl font-bold text-[#FFCB74] dark:text-white sm:text-[40px]/[48px]"
                >
                  Elevate your satisfaction with our unparalleled service commitment.
                </h2>
                <p class="mb-5 text-base text-body-color dark:text-dark-6">
                Our exclusive selection ranges from timeless classics to the latest fashion trends, all carefully curated to satisfy the most refined tastes. 
                </p>
                <p class="mb-8 text-base text-body-color dark:text-dark-6">
                Each piece exudes luxury and sophistication, designed for those who appreciate the extraordinary.
                </p>
                <Link
                  to="/register"
                  class="select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    
  

    </main>

  )
}

export default About;
