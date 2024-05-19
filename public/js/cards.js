const cards = [
  {
    image: "/public/images/vaultwarden.png",
    name: "Vaultwarden",
    description: "Unofficial Bitwarden compatible server.",
    about: "https://github.com/dani-garcia/vaultwarden",
    url: "https://vault.wah.su",
  },
  {
    image: "/public/images/nextcloud.png",
    name: "Nextcloud",
    description:
      "productivity suite, offering file sharing and collaboration tools.",
    about: "https://nextcloud.com/",
    url: "https://cloud.wah.su",
  },
  {
    image: "/public/images/immich.png",
    name: "Immich",
    description: "platform for managing and browsing your photos.",
    about: "https://immich.app",
    url: "https://photos.wah.su",
  },
  {
    image: "/public/images/zipline.png",
    name: "Zipline",
    description: "image uploading with ShareX compatibility.",
    about: "https://zipline.diced.sh/",
    url: "https://x.wah.su",
  },
];
const services = document.getElementById("services");

window.onload = function () {
  for (let index = 0; index < cards.length; index++) {
    const template = `
              <img class="rounded-t-lg object-cover h-[192px] w-full" src="${cards[index].image}" alt="" />
              <div class="p-5">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">${cards[index].name}
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${cards[index].description}
                  </p>
                  <div class="flex gap-1">
                      <a href="${cards[index].about}" target="_blank"
                          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                          Read more
                      </a>
                      <a href="${cards[index].url}"
                          class="inline-flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                          open
                          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                          </svg>
                      </a>
                  </div>
              </div>
          `;

    const element = document.createElement("div");
    element.className =
      "max-w-[298px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700";
    element.innerHTML = template;

    services.appendChild(element);
  }
};
