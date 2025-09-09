import { setFixedHeader } from './header.js'
import { anchorLinks } from './header.js'
import { moveSectionAtResize } from './burger-menu.js'
import { burgerButtonHandler } from './burger-menu.js'
import { initSlider } from './slider.js'
import { FormsValidation } from './validate-form.js'

moveSectionAtResize()
burgerButtonHandler()
setFixedHeader()
anchorLinks()
initSlider()
new FormsValidation()