import React from 'react'

function Hero() {
  return (
    <section class="p-12 bg-gray-50 sm:pt-16">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center">
            <p
                class="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
                Make Your Home a Home...
            </p>
            <h1 class="max-w-2xl mx-auto px-6 text-lg text-gray-600 font-inter">
                Let Our Professionals Get Your Interior Clean 
            </h1>
            <div class="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                
                <a href="#"
                    class="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-gray-900 hover:text-white transition-all duration-200 bg-gray-100 border-2 border-gray-900 sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button">Schedule a Call</a>
            </div>
        </div>
    </div>
    <div class="bg-white rounded-lg object-cover">
        <div class="relative mx-auto mt-4 md:mt-8">
            <div class="rounded-lg lg:max-w-4xl lg:mx-auto object-stretch">
                <img class="rounded-lg px-4 md:mpx-8" src="https://media.licdn.com/dms/image/v2/D4D12AQHo8FH1vEmrbQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1673337214197?e=1741219200&v=beta&t=lRlD_V7FZoAvZLHDIzAT_A0RENHOGW4tlQz_wJstfvc" />
            </div>
        </div>
    </div>
</section>
  )
}

export default Hero