

// Mount service workers
export async function mount() {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/service-worker.js")

      const subscription = await registration.pushManager.subscribe({ userVisibleOnly: true })
      console.log(localStorage.getItem("ui"), subscription.endpoint)

    } catch (error) {
      console.error("error", error)
    }

  }
}
