import { extendTheme } from "@chakra-ui/react"

// Global style overrides
import styles from "./styles"

// Foundational style overrides
import colors from "./foundations/colors"
import fonts from "./foundations/fonts"

// Component style overrides
// import Button from "./components/button"

const overrides = {
  styles,
  colors,
  fonts, 
  // Other foundational style overrides go here
  /* components: {
    Button,
    // Other components go here
  }, */
}

export default extendTheme(overrides)