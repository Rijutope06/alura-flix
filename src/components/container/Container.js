import { Children } from "react"

function Container ({Children}) {
  return (
    <section>
      {Children}
    </section>
  )
}

export default Container