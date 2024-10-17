const services_container = document.getElementById('services');
const all_services = services_container.children;

const tags = {
    'media': '<p class="px-4 py-1 text-white bg-green-500 rounded-md max-w-fit">media</p>',
    'security': '<p class="px-4 py-1 text-white bg-blue-500 rounded-md max-w-fit">security</p>',
    'communication': '<p class="px-4 py-1 text-white bg-pink-600 rounded-md max-w-fit">communication</p>',
    'member only': '<p class="px-4 py-1 text-white bg-red-500 rounded-md max-w-fit">member only</p>',
    'games': '<p class="px-4 py-1 text-white bg-yellow-500 rounded-md max-w-fit">games</p>',
}

for (let i = 0; i < all_services.length; i++) {

    const service = all_services.item(i);
    const service_tags_container = service.querySelector('[data-tags]');
    const service_tags_content = service_tags_container.dataset.tags.split(',');

    for (let j = 0; j < service_tags_content.length; j++) {
        const tag = service_tags_content[j];
        if (tags[tag]) {
            service_tags_container.innerHTML += tags[tag];
        } else {
            service_tags_container.innerHTML += '<p class="px-4 py-1 text-white bg-gray-500 rounded-md max-w-fit">' + tag + '</p>';
        }
    }
}