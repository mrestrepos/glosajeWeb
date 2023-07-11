import { setLinkStyles } from "../../helpers/navigation.js"

export const overlayClass = "enable-overlay"
setLinkStyles(import.meta.url)
export const setOverlay = (id) => {
  const overlay = () => document?.getElementById(id)
  if (!overlay()) {
    document.body.insertAdjacentHTML("afterbegin", `<div class='overlay enable-overlay' id=${id}></div>`)
  }

  if (overlay().classList.contains(overlayClass)) return
  overlay().classList.add(overlayClass)
}

export const toggleOverlay = (id) => {
  const overlay = document?.getElementById(id)
  if (overlay?.classList.contains(overlayClass)) {
    unsetOverlay(id)
    return
  }

  setOverlay(id)

}

export const unsetOverlay = (id) => {
  const overlay = document?.getElementById(id)
  if (!overlay || !overlay.classList.contains(overlayClass)) return

  // document.body.removeChild(overlay)}
  overlay.classList.remove(overlayClass)
}
