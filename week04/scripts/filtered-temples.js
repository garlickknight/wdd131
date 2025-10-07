const hambutton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hambutton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hambutton.classList.toggle("open");

});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake City Temple",
        location: "Salt Lake City Utah",
        dedicated: "1893, April, 6",
        area: 253015, 
        imageUrl: "images/download.webp",
    },
    {
        templeName: "Saratoga Springs Temple", 
        location: "Saratoga Springs Utah", 
        dedicated: "2023, August, 13",
        area: 989247,
        imageUrl: "images/saratoga-springs-utah-temple-32872-main.webp",
    },
    {
        templeName: "Navoo Temple",
        location: "Navoo Illinios", 
        dedicated: "2002, June, 27", 
        area: 54000, 
        imageUrl:"images/nauvoo-illinois-temple-50576-main.webp", 
    },

];
const old = [];
const _new = [];
const large = [];
const small = [];
function extractYear(dateString) {
    const parts = dateString.split(',').map(part => part.trim());
    return parts[0];
}
function date(split) {
    split.forEach(date => {
        if (date.dedicated[0] < 1900) {
            old.push(date);
        }
        else if (date.dedicated[0] > 2000) {
            _new.push(date);
        }
        else if (date.area > 9000) {
            large.push(date);
        }
        else if (date.area < 10000) {
            small.push(date);

        }
    })
}
// AI was able to help me identify that I needed to wrap my code in an event listener to ensure the DOM was fully loaded before manipulating it.
// I also learned what I was doing wrong with my filter function and how to properly extract the year from the date string.
// I was using the forEach() method instead of the filter method in order to change the temples array into the old array.
// AI produced the old temples filter function for me which I then adopted to my needs within my code.
// AI also added the .join('') method to my innerHTML assignments to ensure the arrays were properly formatted as strings for HTML rendering.
// AI also taught me that you need to use condition statements within your document object modifier to ensure that elements exist before trying to
// render the content on the page. Without condition statements you will get errors and the content will not render. 
document.addEventListener("DOMContentLoaded", function () {



    const templePull = document.getElementById("pictures");
    const smallPull = document.getElementById("small");
    const largePull = document.getElementById("large");
    const oldPull = document.getElementById("old");
    const newPull = document.getElementById("new");

    // Display all temples if the element exists
    if (templePull) {
        const temple = temples.map(temp => `<table><tr><th>${temp.templeName}</th></tr><tr><th>location: ${temp.location}</th></tr><tr><th>Dedicated:${temp.dedicated}</th></tr><tr><th>Square Footage: ${temp.area}</th></tr><tr><td><img src = "${temp.imageUrl}" loading = "lazy" width = "400" height = "250"></td></tr></table>`);
        templePull.innerHTML = temple.join("");
    }

    // Display old temples if the element exists
    if (oldPull) {
        const oldTemples = temples.filter(temp => {
            const year = parseInt(extractYear(temp.dedicated), 10);
            return year < 1900;
        });
        const old_list = oldTemples.map(temp => `<table><tr><th>${temp.templeName}</th></tr><tr><th>location: ${temp.location}</th></tr><tr><th>Dedicated:${temp.dedicated}</th></tr><tr><th>Square Footage: ${temp.area}</th></tr><tr><td><img src = "${temp.imageUrl}"  loading = "lazy" width = "400" height = "250"></td></tr></table>`);
        oldPull.innerHTML = old_list.join("");
    }

    // Display new temples if the element exists
    if (newPull) {
        const newTemples = temples.filter(temp => {
            const year = parseInt(extractYear(temp.dedicated), 10);
            return year > 2000;
        });
        const new_list = newTemples.map(temp => `<table><tr><th>${temp.templeName}</th></tr><tr><th>location: ${temp.location}</th></tr><tr><th>Dedicated:${temp.dedicated}</th></tr><tr><th>Square Footage: ${temp.area}</th></tr><tr><td><img src = "${temp.imageUrl}"  loading = "lazy" width = "400" height = "250"></td></tr></table>`);
        newPull.innerHTML = new_list.join("");
    }

    // Display large temples if the element exists
    if (largePull) {
        const largeTemples = temples.filter(temp => temp.area > 90000);
        const large_list = largeTemples.map(temp => `<table><tr><th>${temp.templeName}</th></tr><tr><th>location: ${temp.location}</th></tr><tr><th>Dedicated:${temp.dedicated}</th></tr><tr><th>Square Footage: ${temp.area}</th></tr><tr><td><img src = "${temp.imageUrl}"  loading = "lazy" width = "400" height = "250"></td></tr></table>`);
        largePull.innerHTML = large_list.join("");
    }

    // Display small temples if the element exists
    if (smallPull) {
        const smallTemples = temples.filter(temp => temp.area < 10000);
        const small_list = smallTemples.map(temp => `<table><tr><th>${temp.templeName}</th></tr><tr><th>location: ${temp.location}</th></tr><tr><th>Dedicated:${temp.dedicated}</th></tr><tr><th>Square Footage: ${temp.area}</th></tr><tr><td><img src = "${temp.imageUrl}"  loading = "lazy" width = "400" height = "250"></td></tr></table>`);
        smallPull.innerHTML = small_list.join("");
    }
});


