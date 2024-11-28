import { useEffect,useState } from "react";

import { useNavigation } from "react-router-dom";

const usePromptPreloader = () => {
    const navigation = useNavigation()

    const [promptPreloaderValue,setPromptPreloaderValue] = useState('')

    useEffect(() => {
        if (navigation.formData){
            setPromptPreloaderValue(navigation.formData.get('user_prompt'))
        }else{
            setPromptPreloaderValue('')
        }
    },[navigation])

    return {promptPreloaderValue}
}

export {usePromptPreloader}

