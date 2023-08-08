import { Sidebar } from "./Sidebar"
import { Main } from "./Main"

function MiddleSection() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        marginBotton: "10px"
      }}>
      <Sidebar />
      <Main />
    </div>
  )
}

export { MiddleSection }
