import { setFixedHeader } from './header.js'
import { anchorLinks } from './header.js'
import { moveSectionAtResize } from './burger-menu.js'
import { burgerButtonHandler } from './burger-menu.js'
import { initSliderCases } from './slider.js'
import { initReviewsCases } from './slider.js'
import { FormsValidation } from './validate-form.js'

moveSectionAtResize()
burgerButtonHandler()
setFixedHeader()
anchorLinks()
initSliderCases()
initReviewsCases()
new FormsValidation()