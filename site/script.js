        jQuery(document).ready(function ($) {
          $(".scroll").click(function (event) {
            event.preventDefault();
          $('html, body').animate({ scrollTop: $(this.hash).offset().top}, 800);
        });
});

function Acom(){
  alert("Escolha um Quarto")
}



