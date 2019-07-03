   
   $(document).ready(function()
   {
      $('#Table2').addClass('visibility-hidden');
      $('#Table3').addClass('visibility-hidden');
      $('#Table1').addClass('visibility-hidden');
      $('#wb_service1').addClass('visibility-hidden');
      $('#wb_service2').addClass('visibility-hidden');
      $('#wb_service3').addClass('visibility-hidden');
      $('#wb_Heading3').addClass('visibility-hidden');
      $('#wb_donut1').addClass('visibility-hidden');
      $('#wb_donut2').addClass('visibility-hidden');
      $('#wb_donut3').addClass('visibility-hidden');
      $('#wb_donut6').addClass('visibility-hidden');
      $('#wb_donut4').addClass('visibility-hidden');
      $('#wb_donut5').addClass('visibility-hidden');
      $('#wb_Heading10').addClass('visibility-hidden');
      function skrollrInit()
      {
         skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
      }
      skrollrInit();
      $("a[href*='#products']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_products').offset().top-80 }, 600, 'linear');
      });
      $("a[href*='#services']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_services').offset().top-80 }, 600, 'linear');
      });
      $('#wb_services').parallax();
      $("a[href*='#pricing']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_pricing').offset().top-80 }, 600, 'linear');
      });
      function Table2Scroll()
      {
         var $obj = $("#Table2");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
         {
            $obj.addClass("in-viewport");
            AnimateCss('Table2', 'animate-fade-in-up', 100, 1000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('Table2', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#Table2').inViewPort(true))
      {
         $('#Table2').addClass("in-viewport");
      }
      Table2Scroll();
      $(window).scroll(function(event)
      {
         Table2Scroll();
      });
      function Table3Scroll()
      {
         var $obj = $("#Table3");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
         {
            $obj.addClass("in-viewport");
            AnimateCss('Table3', 'animate-fade-in-up', 100, 1000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('Table3', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#Table3').inViewPort(true))
      {
         $('#Table3').addClass("in-viewport");
      }
      Table3Scroll();
      $(window).scroll(function(event)
      {
         Table3Scroll();
      });
      function Table1Scroll()
      {
         var $obj = $("#Table1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
         {
            $obj.addClass("in-viewport");
            AnimateCss('Table1', 'animate-fade-in-up', 100, 1000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('Table1', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#Table1').inViewPort(true))
      {
         $('#Table1').addClass("in-viewport");
      }
      Table1Scroll();
      $(window).scroll(function(event)
      {
         Table1Scroll();
      });
      function service1Scroll()
      {
         var $obj = $("#wb_service1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_service1', 'transform-scale-in', 100, 2000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_service1', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_service1').inViewPort(true))
      {
         $('#wb_service1').addClass("in-viewport");
      }
      service1Scroll();
      $(window).scroll(function(event)
      {
         service1Scroll();
      });
      function service2Scroll()
      {
         var $obj = $("#wb_service2");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_service2', 'transform-scale-in', 100, 2000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_service2', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_service2').inViewPort(true))
      {
         $('#wb_service2').addClass("in-viewport");
      }
      service2Scroll();
      $(window).scroll(function(event)
      {
         service2Scroll();
      });
      function service3Scroll()
      {
         var $obj = $("#wb_service3");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_service3', 'transform-scale-in', 100, 2000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_service3', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_service3').inViewPort(true))
      {
         $('#wb_service3').addClass("in-viewport");
      }
      service3Scroll();
      $(window).scroll(function(event)
      {
         service3Scroll();
      });
      function Heading3Scroll()
      {
         var $obj = $("#wb_Heading3");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Heading3', 'transform-scale-in', 100, 1000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Heading3', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Heading3').inViewPort(true))
      {
         $('#wb_Heading3').addClass("in-viewport");
      }
      Heading3Scroll();
      $(window).scroll(function(event)
      {
         Heading3Scroll();
      });
      function donut1Scroll()
      {
         var $obj = $("#wb_donut1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_donut1', 'transform-rotate-in', 100, 1000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_donut1', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_donut1').inViewPort(true))
      {
         $('#wb_donut1').addClass("in-viewport");
      }
      donut1Scroll();
      $(window).scroll(function(event)
      {
         donut1Scroll();
      });
      function donut2Scroll()
      {
         var $obj = $("#wb_donut2");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_donut2', 'transform-rotate-in', 100, 1000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_donut2', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_donut2').inViewPort(true))
      {
         $('#wb_donut2').addClass("in-viewport");
      }
      donut2Scroll();
      $(window).scroll(function(event)
      {
         donut2Scroll();
      });
      function donut3Scroll()
      {
         var $obj = $("#wb_donut3");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_donut3', 'transform-rotate-in', 100, 1000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_donut3', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_donut3').inViewPort(true))
      {
         $('#wb_donut3').addClass("in-viewport");
      }
      donut3Scroll();
      $(window).scroll(function(event)
      {
         donut3Scroll();
      });
      function donut6Scroll()
      {
         var $obj = $("#wb_donut6");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_donut6', 'transform-rotate-in', 100, 1000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_donut6', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_donut6').inViewPort(true))
      {
         $('#wb_donut6').addClass("in-viewport");
      }
      donut6Scroll();
      $(window).scroll(function(event)
      {
         donut6Scroll();
      });
      function donut4Scroll()
      {
         var $obj = $("#wb_donut4");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_donut4', 'transform-rotate-in', 100, 1000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_donut4', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_donut4').inViewPort(true))
      {
         $('#wb_donut4').addClass("in-viewport");
      }
      donut4Scroll();
      $(window).scroll(function(event)
      {
         donut4Scroll();
      });
      function donut5Scroll()
      {
         var $obj = $("#wb_donut5");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_donut5', 'transform-rotate-in', 100, 1000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_donut5', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_donut5').inViewPort(true))
      {
         $('#wb_donut5').addClass("in-viewport");
      }
      donut5Scroll();
      $(window).scroll(function(event)
      {
         donut5Scroll();
      });
      $("a[href*='#contact']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_contact').offset().top-80 }, 600, 'easeOutQuad');
      });
      function Heading10Scroll()
      {
         var $obj = $("#wb_Heading10");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Heading10', 'transform-tada', 100, 1000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Heading10', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Heading10').inViewPort(true))
      {
         $('#wb_Heading10').addClass("in-viewport");
      }
      Heading10Scroll();
      $(window).scroll(function(event)
      {
         Heading10Scroll();
      });
      $('img[data-src]').lazyload();
   });
   