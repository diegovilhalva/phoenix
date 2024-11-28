import { motion } from "motion/react"
import PageTitle from "./components/PageTitle"
import Sidebar from "./components/Sidebar"
import TopAppBar from "./components/TopAppBar"
import { useToggle } from "./hooks/useToggle"
import Greetings from "./pages/Greetings"
import PromptField from "./components/PromptField"
import { Outlet, useParams, useNavigation, useActionData } from "react-router-dom"
import { useSnackbar } from "./hooks/useSnackbar"
import { useEffect, useRef } from "react"
import { usePromptPreloader } from "./hooks/usePromptPreloader"

const App = () => {

  const params = useParams()
  const navigation = useNavigation()
  const actionData = useActionData()
  const [isSidebarOpen, toggleSidebar] = useToggle()
  const {promptPreloaderValue} = usePromptPreloader()
  const {showSnackbar} = useSnackbar()

  const chatHistoryRef = useRef()

  useEffect(() => {
    const chatHistory = chatHistoryRef.current
    if(promptPreloaderValue){
      chatHistory.scroll({
        top:chatHistory.scrollHeight - chatHistory.clientHeight,
        behavior:'smooth'
      })
    }
  },[chatHistoryRef,promptPreloaderValue])

  useEffect(() => {
    if(actionData?.conversationTitle){
      showSnackbar({
        message:`Deleted ${actionData.conversationTitle} conversation`
      })
    }
  },[actionData,showSnackbar])
  const isNormalLoad = navigation.state === 'loading' && !navigation.formData
  return (
    <>
      <PageTitle title="Phoenix - chat to supercharge your ideas" />
      <div className="lg:grid lg:grid-cols-[320px,1fr] ">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="h-dvh grid grid-rows-[max-content,minmax(0,1fr),max-content]">
          <TopAppBar toggleSidebar={toggleSidebar} />
          <div ref={chatHistoryRef} className="px-5 pb-5 flex flex-col overflow-y-auto">
            <div className="max-w-[840px] w-full mx-auto grow">
              { isNormalLoad ?  null : params.conversationId ? (
                <Outlet />
              ) : (

                <Greetings />
              )}
            </div>
          </div>
          <div className="bg-light-background dark:bg-dark-background ">
            <div className="max-w-[870px] px-5 w-full  mx-auto">
              <PromptField />
              <motion.p initial={{ opacity: 0, translateY: '-4px' }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.2, delay: 0.8, ease: 'easeOut' }} className="text-bodySmall text-center text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant p-3 ">
                Phoenix may display inaccurate info, including about people, so double-ckeck its responses.
                <a href="http://support.google.com/gemini?p=privacy_notice" target="_blank" className="inline underline ms-1 ">
                  Your privacy & Gemini Apps
                </a>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App