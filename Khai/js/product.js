var slideIndex = 1;
//alert("chan deo hieu bi sao");
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    var index = slideIndex - 1;
    slides[index].style.display = "block";
    dots[index].className += " active";
}

if ($("#product-home").hasClass('hide')) {
    $("#product-home").removeClass('hide');
}
function openTab(id, t) {
    $(document).find('[class^=tablinks]').each(function (index, value) {
        $(this).removeClass('active');
    });
    $(t).addClass('active');
    $(document).find('[id^=product]').each(function (index, value) {
        $(this).addClass('hide');
    });
    $(id).removeClass('hide');
}