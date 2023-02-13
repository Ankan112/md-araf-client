import React from 'react';

const Review = () => {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">
                <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
                    What our <span class="text-blue-500 ">clients</span> say
                </h1>
                <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                    <div class="p-8 border rounded-lg dark:border-gray-700">
                        <p class="leading-loose text-gray-500 dark:text-gray-400">
                            I recently hired Md Araf for a family photo shoot and I couldn't be happier with the results! He was professional, friendly, and made the whole experience enjoyable for everyone involved. He had a great eye for capturing the perfect shot and took the time to make sure we were all comfortable and relaxed.
                        </p>

                        <div class="flex items-center mt-8 -mx-2">
                            <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                            <div class="mx-2">
                                <h1 class="font-semibold text-gray-800 dark:text-white">Robert</h1>
                                <span class="text-sm text-gray-500">CTO, Robert Consultency</span>
                            </div>
                        </div>
                    </div>

                    <div class="p-8 border rounded-lg dark:border-gray-700">
                        <p class="leading-loose text-gray-500 dark:text-gray-400">
                            I was so impressed with Md Araf from start to finish! He listened to my vision for the shoot and went above and beyond to make it a reality. His creativity, attention to detail, and technical skills really showed in the final images.I was blown away by how beautiful the photos turned out.
                        </p>

                        <div class="flex items-center mt-8 -mx-2">
                            <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                            <div class="mx-2">
                                <h1 class="font-semibold text-gray-800 dark:text-white">Jeny Doe</h1>
                                <span class="text-sm text-gray-500">Manager, Khan Consultency</span>
                            </div>
                        </div>
                    </div>

                    <div class="p-8 border rounded-lg dark:border-gray-700">
                        <p class="leading-loose text-gray-500 dark:text-gray-400">
                            Working with Md Araf was such a wonderful experience! He was so friendly and easy to work with, and he made the whole photo shoot so much fun. His talent and passion for photography really shines through in his work, and I was so impressed by the quality of the images.
                        </p>

                        <div class="flex items-center mt-8 -mx-2">
                            <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                            <div class="mx-2">
                                <h1 class="font-semibold text-gray-800 dark:text-white">Ema Watson </h1>
                                <span class="text-sm text-gray-500">Marketing Manager at Stech</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Review;