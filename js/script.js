
  $('.page-4__comments').slick({
  });

  $('.block-request').click(function() {
      $('.modal').removeClass('modal__info');
    });

    $('.modal__close').click(function() {
        $('.modal').addClass('modal__info');
      });

      // $("a.block-request").click(function(){
      //         var _this = $(this),
      //             title = _this.attr("title"),
      //             el = _this.parents(".block-info");
      //         if(!_this.hasClass("non-act")){
      //             $(".pop-form").animate({height: 'hide'}, 200, function(){$(this).remove()});
      //             $("a.tov-button").removeClass("non-act").text("Сделать заказ");
      //             $(el).append("<div class='pop-form'><div><form action='send/send.php' method='post'><div><input class='field' type='text' name='name' placeholder='Введите ФИО' required=''></div><div><input class='field' type='tel' name='phone' placeholder='Введите телефон' required=''></div><div><button class='button'>Сделать заказ</button></div><input type='hidden' name='comment'></form></div></div>");
      //             $(".pop-form input[name='comment']").val(title);
      //             $(".pop-form form").submit(function() {
      //                 if ($(".pop-form input[name='name']").val() == "" || $(".pop-form input[name='phone']").val() == ""){
      //                     alert('Заполните поля формы');
      //                     return false;
      //                 }
      //                 return true;
      //             });
      //             $(".pop-form").animate({height: 'show'}, 200, function(){
      //                 $('html, body').animate({scrollTop: $(".pop-form").offset().top-150}, 250);
      //             });
      //             _this.addClass("non-act").text("");
      //         }
      //         else {
      //             $(".pop-form").animate({height: 'hide'}, 200, function(){$(this).remove()});
      //             _this.removeClass("non-act").text("Сделать заказ");
      //         }
      //         return false;
      //     });
      //
      // });
