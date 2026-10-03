/* =========================================================
   BANGRE JEWELLERS
   COLLECTION FILTER SYSTEM
========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       COLLECTION DATA
    ===================================================== */

    const collections = [

        /* ================= GOLD ================= */

        {
            category: "gold",
            tag: "GOLD",
            image: "assets/collection/gold/1.png",
            title: "Gold Necklaces",
            description: "Elegant gold designs crafted to make every moment memorable."
        },

        {
            category: "gold",
            tag: "GOLD",
            image: "assets/collection/gold/2.png",
            title: "Gold Earrings",
            description: "Refined gold silhouettes designed to complement every look."
        },

        {
            category: "gold",
            tag: "GOLD",
            image: "assets/collection/gold/3.png",
            title: "Gold Rings",
            description: "Beautifully crafted gold pieces made to become part of your story."
        },

        {
            category: "gold",
            tag: "GOLD",
            image: "assets/collection/gold/4.png",
            title: "Gold Bangles",
            description: "Traditional craftsmanship with timeless elegance."
        },

        {
            category: "gold",
            tag: "GOLD",
            image: "assets/collection/gold/5.png",
            title: "Gold Chains",
            description: "Classic designs created for effortless everyday elegance."
        },

        {
            category: "gold",
            tag: "GOLD",
            image: "assets/collection/gold/6.png",
            title: "Gold Mangalsutra",
            description: "Meaningful designs that beautifully celebrate tradition."
        },

        {
            category: "gold",
            tag: "GOLD",
            image: "assets/collection/gold/7.png",
            title: "Gold Bracelets",
            description: "Delicate craftsmanship created for modern elegance."
        },

        {
            category: "gold",
            tag: "GOLD",
            image: "assets/collections/gold/gold-8.png",
            title: "Gold Kada",
            description: "Timeless creations designed for life's most beautiful moments."
        },


        /* ================= DIAMOND ================= */

        {
            category: "diamond",
            tag: "DIAMOND",
            image: "assets/collections/diamond/diamond-1.png",
            title: "Diamond Necklaces",
            description: "Sophisticated diamond pieces made to shine beyond the moment."
        },

        {
            category: "diamond",
            tag: "DIAMOND",
            image: "assets/collections/diamond/diamond-2.png",
            title: "Diamond Earrings",
            description: "Elegant diamond silhouettes created for effortless brilliance."
        },

        {
            category: "diamond",
            tag: "DIAMOND",
            image: "assets/collections/diamond/diamond-3.png",
            title: "Diamond Rings",
            description: "Exceptional diamond designs made for unforgettable moments."
        },

        {
            category: "diamond",
            tag: "DIAMOND",
            image: "assets/collections/diamond/diamond-4.png",
            title: "Diamond Bangles",
            description: "Beautiful diamond craftsmanship with refined sophistication."
        },

        {
            category: "diamond",
            tag: "DIAMOND",
            image: "assets/collections/diamond/diamond-5.png",
            title: "Diamond Bracelets",
            description: "Delicate brilliance designed to elevate every occasion."
        },

        {
            category: "diamond",
            tag: "DIAMOND",
            image: "assets/collections/diamond/diamond-6.png",
            title: "Diamond Pendant",
            description: "Elegant diamond pendants designed around your personal style."
        },

        {
            category: "diamond",
            tag: "DIAMOND",
            image: "assets/collections/diamond/diamond-7.png",
            title: "Diamond Sets",
            description: "Complete diamond sets crafted for celebrations and occasions."
        },

        {
            category: "diamond",
            tag: "DIAMOND",
            image: "assets/collections/diamond/diamond-8.png",
            title: "Diamond Jewellery",
            description: "Timeless diamond creations designed to last beyond trends."
        },


        /* ================= SILVER ================= */

        {
            category: "silver",
            tag: "SILVER",
            image: "assets/collections/silver/silver-1.png",
            title: "Silver Payal",
            description: "Contemporary silver pieces made for every expression."
        },

        {
            category: "silver",
            tag: "SILVER",
            image: "assets/collections/silver/silver-2.png",
            title: "Silver Toerings",
            description: "Elegant silver designs created for effortless styling."
        },

        {
            category: "silver",
            tag: "SILVER",
            image: "assets/collections/silver/silver-3.png",
            title: "Silver Rings",
            description: "Beautiful silver pieces crafted for everyday elegance."
        },

        {
            category: "silver",
            tag: "SILVER",
            image: "assets/collections/silver/silver-4.png",
            title: "Silver Kada",
            description: "Classic silver craftsmanship with a contemporary touch."
        },

        {
            category: "silver",
            tag: "SILVER",
            image: "assets/collections/silver/silver-5.png",
            title: "Silver Bracelets",
            description: "Refined silver designs created for modern lifestyles."
        },

        {
            category: "silver",
            tag: "SILVER",
            image: "assets/collections/silver/silver-6.png",
            title: "Silver Chains",
            description: "Minimal and elegant chains made for everyday wear."
        },

        {
            category: "silver",
            tag: "SILVER",
            image: "assets/collections/silver/silver-7.png",
            title: "Silver Pendants",
            description: "Thoughtfully designed pendants for every personal style."
        },

        {
            category: "silver",
            tag: "SILVER",
            image: "assets/collections/silver/silver-8.png",
            title: "Silver Anklet",
            description: "Contemporary silver creations made to express individuality."
        }

    ];



    /* =====================================================
       ELEMENTS
    ===================================================== */

    const grid = document.getElementById("collectionGrid");

    const filterButtons = document.querySelectorAll(".filter-btn");



    /* =====================================================
       CREATE PRODUCT CARD
    ===================================================== */

    function createCard(item) {

        const card = document.createElement("a");

        card.href = "#";
        card.className = "collection-product";


        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${item.image}"
                    alt="${item.title}"
                    loading="lazy"
                >

                <span class="product-tag">
                    ${item.tag}
                </span>

                <div class="product-arrow">
                    →
                </div>

            </div>


            <div class="product-info">

                <span>
                    THE COLLECTION
                </span>

                <h3>
                    ${item.title}
                </h3>

                <p>
                    ${item.description}
                </p>

            </div>

        `;


        return card;

    }



    /* =====================================================
       DISPLAY COLLECTION
    ===================================================== */

    function displayCollection(category) {

        /* Clear current cards */

        grid.innerHTML = "";


        /* Decide which products should be displayed */

        let filteredItems;


        if (category === "all") {

            /*
                ALL JEWELLERY

                Shows:
                8 Gold
                8 Diamond
                8 Silver

                Total = 24
            */

            filteredItems = collections;

        } else {

            /*
                GOLD = 8
                DIAMOND = 8
                SILVER = 8
            */

            filteredItems = collections.filter(function (item) {

                return item.category === category;

            });

        }


        /* Add cards */

        filteredItems.forEach(function (item) {

            const card = createCard(item);

            grid.appendChild(card);

        });


        /*
            Small animation when collection changes
        */

        grid.style.opacity = "0";


        setTimeout(function () {

            grid.style.opacity = "1";

        }, 80);

    }



    /* =====================================================
       FILTER BUTTON CLICK
    ===================================================== */

    filterButtons.forEach(function (button) {


        button.addEventListener("click", function () {


            /* Get selected category */

            const selectedCategory = button.dataset.filter;


            /* Remove active from all buttons */

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            /* Make clicked button active */

            button.classList.add("active");


            /* Display selected collection */

            displayCollection(selectedCategory);


            /* =================================================
               SMOOTH SCROLL

               Only the collection result section moves into view.
               Other sections/design remain unchanged.
            ================================================= */

            setTimeout(function () {

                const gridPosition =
                    grid.getBoundingClientRect().top +
                    window.pageYOffset -
                    110;


                window.scrollTo({

                    top: gridPosition,

                    behavior: "smooth"

                });

            }, 120);


        });

    });



    /* =====================================================
       INITIAL LOAD
       
       Show ALL JEWELLERY when page opens.
    ===================================================== */

    displayCollection("all");


});