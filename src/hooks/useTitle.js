import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Md Araf`
    }, [title])
}
export default useTitle;