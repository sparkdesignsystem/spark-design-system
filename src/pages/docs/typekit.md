---
title: Typekit
---

# Typekit

Spark uses two [Typekit.com](https://typekit.com) fonts for its branding

* [Quatro Slab](https://typekit.com/fonts/quatro-slab)
* [Myriad Pro](https://typekit.com/fonts/myriad)

In order to implement spark-core, you'll need to create a
kit on [Typekit.com](https://typekit.com) for your application.

Please see [Typography](/patterns/elements/typography.html) for font usage.

## Typekit Loader

You'll need to include the following snippet into your
site's code. Spark includes fallback font definitions, so
it's recommended that you include it before the closing </body>
tag, in order to avoid render blocking.

**You'll need to insert your new kit's id into the snippet below.**

Included in the code below is an event that gets dispatched when the fonts
have finished loading ('fonts-active').

```
(function(d) {
    var config = {
        kitId: '<your-kit-id-here>',
        scriptTimeout: 3000,
      active: function () {
        // Create the event.
        var event = document.createEvent('Event');
        event.initEvent('fonts-active', true, true);
        document.dispatchEvent(event);
      }
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='//use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{
      Typekit.load(config)}catch(e){}};
  s.parentNode.insertBefore(tk,s)
})(document);
```

## Fallback fonts

In the event that a client has issues loading typefaces from typekit, we've defined the
following system and web-safe typefaces to be used in their place:

### Headings

* -apple-system
* BlinkMacSystemFont
* avenir next
* avenir
* Segoe UI
* lucida grande
* helvetica neue
* helvetica
* Fira Sans
* roboto
* noto
* Droid Sans
* cantarell
* oxygen
* ubuntu
* franklin gothic medium
* century gothic
* sans-serif;

### Body Copy

* -apple-system
* BlinkMacSystemFont
* avenir next
* avenir
* Segoe UI
* lucida grande
* helvetica neue
* helvetica
* Fira Sans
* roboto
* noto
* Droid Sans
* cantarell
* oxygen
* ubuntu
* franklin gothic medium
* century gothic
* sans-serif;

