
const VERSION = 1


self.addEventListener("push", (event) => {

  const title = "Here is a push notification"
  const options = {
    body: "This is the body",
    tag: "basic notification"
  }

  event.waitUntil(
    self.registration.showNotification(title, options)
  )
})


self.addEventListener("install", (event) => {
   const urlsToCache = [
     "/bundle.js",
   ]


   event.waitUntil(
    caches.open(`prefetch-${VERSION}`)
    .then((cache) => {
      cache.addAll(urlsToCache)
    })
   )

})
