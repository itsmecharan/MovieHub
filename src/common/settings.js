export const Settings = (itemsLength) => ({
    dots: false,
    speed: 500,
    infinite: itemsLength > 6,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 4,
                infinite: itemsLength > 5,
            }
        },
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: itemsLength > 4,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: itemsLength > 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                infinite: itemsLength > 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: itemsLength > 1,
            }
        }
    ]

});