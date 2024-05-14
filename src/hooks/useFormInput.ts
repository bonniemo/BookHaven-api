import { useState } from "react"

export const useFormInput = (initialValue:string) => {
    const [value, setValue] = useState(initialValue)

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {        
        setValue(e.target.value)
    }

    const reset = () => setValue(initialValue)
    return {value, onChange: handleChange, reset}
}