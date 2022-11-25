# TEDxUNDIP 3.0 frontend

### progress [development] status :
[![Netlify Status](https://api.netlify.com/api/v1/badges/0aec1996-8d19-44b2-a064-5bacf7b12cbe/deploy-status)](https://app.netlify.com/sites/tedx22-dev/deploys)
<br>
remote hosting branch master on netlify [to see web development progress] <br>
access link = [https://tedx22-dev.netlify.com/](https://tedx22-dev.netlify.com/)


### progress [deployment] status : `soon`
## Plugin

Plugins used on the master branch (add your own as needed).

| Plugin | Docs |
| ------ | ------ |
| Jquery | [jquery-1.12.4.min.js](https://releases.jquery.com/) |
| bootstrap 5.0 | [bootstrap 5.0](https://getbootstrap.com/docs/5.2/getting-started/introduction/) |
| boxicons | [boxicons](https://boxicons.com/) |
| glightbox.js | [glightbox.min.js](https://github.com/biati-digital/glightbox) |
| owl-carousel.js | [owl-carousel.min.js](https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html) |
| swiper.js | [swiper-bundle.min.js](https://swiperjs.com/) |
| isotope.js | [isotope.pkgd.min.js](https://isotope.metafizzy.co/) |
| aos.js| [aos.js](https://michalsnik.github.io/aos/) |
| animate.css | [animate.min.css](https://github.com/animate-css/animate.css?files=1) |


## Notes
> Note: `<header> tag` is required same as master branch.

```sh
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>TEDxUNDIP</title>
  <meta content="TEDx 2022" name="title">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta content="TEDx,TEDxUNDIP,Universitas Diponegoro,hackaton,revealthesun,undip,TEDxundip,TEDx2022" name="keywords">
  <meta
    content="One of the greatest event is finally back! Prepare yourself and get ready to be part of TEDx 2022~! Be there or be square."
    name="description">
  <!-- cannonical -->
  <link rel="canonical" hreflang="id" href="https://tedxundip.org/index.html">
  <link rel="alternate" hreflang="en" href="https://tedxundip.org/index.html">
  <link rel="alternate" hreflang="x-default" href="https://tedxundip.org/index.html">
  <!-- cannonical ends -->
  <!-- open graph -->
  <meta property="og:title" content="TEDx UNDIP 2022">
  <meta property="og:url" content="https://tedxundip.org/index.html">
  <meta property="og:image" content="./assets/img/og-image.png">
  <meta property="og:description"
    content="One of the greatest event is finally back! Prepare yourself and get ready to be part of TEDx 2022~! Be there or be square.">
  <!-- open graph ends-->
  <!-- Favicons -->
  <link href="./assets/img/favicon.png" rel="icon">
  <link href="./assets/img/apple-touch-icon.png" rel="apple-touch-icon">
  <!-- Google Fonts -->
  type sesuai kebutuhan
  <!-- Vendor CSS Files -->
  type sesuai kebutuhan
  <!-- Main CSS File -->
  <link href="./assets/css/style.css" rel="stylesheet">
</head>
```
> Note: `script below` is required if you wanna use jQuery.
add this script after calling jquery `[is used to improve web performance related to javascript payload]`
```sh
  <script>
    jQuery.event.special.touchstart = {
      setup: function (_, ns, handle) {
        this.addEventListener("touchstart", handle, {
          passive: true
        });
      }
    };
  </script>
```

> Note: always use `loading="lazy"` and `alt="your desc"` in `<iframe>` and `<img>` to increase wevsite SEO.
it's optional to use specify width and height in img tag


```sh
<img src="./path/portofolio.png" 
    alt="Portfolio website dengan Laravel dan Bootstrap"
    width="400" height="300"
    loading="lazy">
```

## License

MIT

