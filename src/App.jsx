import PageTitle from "./components/PageTitle"
import Sidebar from "./components/Sidebar"
import TopAppBar from "./components/TopAppBar"

const App = () => {
  return (
    <>
    <PageTitle title="Phoenix - chat to supercharge your ideas" />
    <div className="">
      <Sidebar />
      <div className="">
        <TopAppBar />
        <div className="">
          <div className=""></div>
        </div>
        <div className="">
          <p className="">
            Phoenix may display inaccurate info, including about people, so double-ckeck its responses.
            <a href="http://support.google.com/gemini?p=privacy_notice" target="_blank" className="">
              Your privacy & Gemini Apps
            </a>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default App