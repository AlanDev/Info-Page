import React from 'react'
import { Link } from 'react-router-dom';
import { Carousel, IconButton } from "@material-tailwind/react";




const Home = () => {
  return (
    <main>
      <div className="relative overflow-hidden bg-white mt-12">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Summer styles are finally here
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                if you live or die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://i.pinimg.com/564x/59/43/7e/59437e374dd31dfef0104e10c0cb4947.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/564x/c2/3e/77/c23e772f9689ad74f4cea01234ad85b2.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/564x/5d/59/61/5d5961b9af5e726c910fe601c28917f6.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/564x/65/e9/73/65e9730a88fd59815219a63b9d75cac0.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/736x/70/41/a0/7041a00e5e1987564641f4213cb73846.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/564x/44/b7/8c/44b78cc46a1e3a0f8be8cff827aa9d5b.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center sm:block hidden"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/564x/8e/61/a7/8e61a7525357309a2638456505d29cda.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent duration-500 bg-[#FFCB74] px-8 py-3 text-center font-medium text-[#111111] hover:bg-[#111111] hover:text-[#FFCB74]"
                >
                  Shop Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-12 text-center'>
        <h1 className='text-[#212121] text-4xl font-bold p-2'>Enhancing Sustainable Apparel for Environmental Harmony</h1>
        <h2 className='text-[#979797] text-xl mt-8'>Immerse yourself in a collection where fashion meets responsibility. <br />  Our commitment to environmental harmony is reflected in every stitch of our clothing line.</h2>
        <div className='mt-8'>
          <Link className='border-black border border-solid px-16 py-2 mt-12 hover:bg-black duration-500 hover:text-white rounded '>Shop All</Link>
        </div>

        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.runnics.com%2Fwp-content%2Fuploads%2F2020%2F03%2F81ZRnlqZwUL._AC_UL1500_.jpg&f=1&nofb=1&ipt=d5b87d3d962a7781064b7e2dfe43fd1ce983d83f02e4f4f0a955f2da50e6f707&ipo=images"
          className='mx-auto mt-12'
          width={1000} height={700} alt="" />
      </div>

      <div className='sm:w-full sm:h-36 sm:flex justify-center sm:gap-12 sm:items-center grid '>
        <img src="https://purepng.com/public/uploads/large/purepng.com-nike-logologobrand-logoiconslogos-251519940082eoxxs.png" alt="" className='w-16 h-16 object-contain mx-2' />
        <img src="https://logos-download.com/wp-content/uploads/2016/04/VOGUE_logo_logotype.png" alt="" className='w-16 h-16 object-contain mx-2' />
        <img src="https://brandeps.com/logo-download/P/Prada-logo-vector-01.svg" alt="" className='w-16 h-16 object-contain mx-2' />
        <img src="https://cdn.freebiesupply.com/logos/large/2x/gucci-logo-png-transparent.png" alt="" className='w-16 h-16 object-contain mx-2' />
        <img src="https://cdn.freebiesupply.com/logos/large/2x/dolce-gabbana-1-logo-png-transparent.png" alt="" className='w-16 h-16 object-contain mx-2' />
      </div>



      <div className='mt-12 text-center'>
        <h1 className='text-[#212121] text-4xl font-bold'>Discover Timeless Elegance in Our Newest Collection</h1>
        <h2 className='text-[#979797] text-xl mt-8'>Dive into the allure of innovation as we unveil our latest arrivals, <br /> each piece a testament to the ever-evolving world of fashion.</h2>
      </div>




      <Carousel
        className="rounded-xl mt-4"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        <img
          src="https://i.pinimg.com/564x/2a/68/4c/2a684c44b5774cc7c743f8089c6a0af3.jpg"
          alt="image 1"
          className="sm:h-[700px] w-screen h-96 object-cover"
        />
        <img
          src="https://i.pinimg.com/564x/a5/9d/d2/a59dd29658007e2a1b7fdece9d7b5506.jpg"
          alt="image 2"
          className="sm:h-[700px] w-screen h-96 object-cover"
        />
        <img
          src="https://i.pinimg.com/564x/0a/9d/5e/0a9d5ef56f7442b1f2cb7e4f29efb828.jpg"
          alt="image 3"
          className="sm:h-[700px] w-screen h-96 object-cover"
        />
      </Carousel>


      <div className='lg:flex grid justify-center gap-8 mt-8'>
        <div className='relative w-[432px] h-[432px]  rounded'>
          <Link to="/shop">
            <img
              src='https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/728f6dd1-7d0a-42d8-aee6-5301db4f06c6___cff9b311847616e4fe67162f9d1d3518.png'
              className='absolute top-0 left-0 w-full h-full rounded bg-transparent '
              alt='Descripción 1'

            />
          </Link>
        </div>
        <div className='relative w-[432px] h-[432px] bg-[#212121] rounded'>
          <Link to="/shop">

            <img
              src='https://i.pinimg.com/564x/e6/ab/c7/e6abc7f839cd0427eae5f5c971270a65.jpg'
              className='absolute top-0 left-0 w-full h-full rounded bg-transparent '
              alt='Descripción 1'
            />
          </Link>

        </div>
        <div className='relative w-[432px] h-[432px] bg-[#212121] rounded'>
          <Link to="/shop">

            <img
              src='https://i.pinimg.com/564x/68/b9/8d/68b98d54cf4c5112904ac5b3f1bbc21a.jpg'
              className='absolute top-0 left-0 w-full h-full rounded bg-transparent '
              alt='Descripción 1'
            />
          </Link>

        </div>
        <div className='relative w-[432px] h-[432px] bg-[#212121] rounded'>
          <Link to="/shop">

            <img
              src='https://i.pinimg.com/564x/e4/e9/d6/e4e9d6b324e79f055f5ca77fdd16c447.jpg'
              className='absolute top-0 left-0 w-full h-full rounded bg-transparent '
              alt='Descripción 1'
            />
          </Link>

        </div>
      </div>
      <div className='sm:w-[92%] mx-auto rounded bg-white mt-12 sm:h-64 h-72 mb-24 sm:0 p-4'>
  <div className='p-16 border border-[#FFCB74] flex flex-col sm:flex-row items-center'>
    <div className='flex-1'>
      <h1 className='text-black text-4xl mb-12 font-bold'>Be Informed of Our Most Recent Updates</h1>
      <Link to="/register" className='bg-black text-white text-xl border border-white px-12 py-2 rounded-full font-semibold hover:bg-white hover:text-black duration-500 '>Register</Link>
    </div>
    <img
      src="https://static.vecteezy.com/system/resources/previews/000/593/536/original/ornamental-gold-crown-logo-template-illustration-design-vector-eps-10.jpg"
      className='w-32 h-32 mt-4 sm:mt-0 md:block hidden'
      alt=""
    />
  </div>
</div>

    </main>
  )
}

export default Home;