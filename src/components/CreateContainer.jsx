import React, {useState} from 'react'

const CreateContainer = () => {
    const[title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState(null);
    const [field, setField] = useState(true);
    const [alert, setAlert] = useState("danger");
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false)




  return (
    <div className = "w-full min-h-screen flex items-center justify-center ">
      <div className='w-[90%] md:w-[75%] border border-neutral-500 rounded-lg p-4 flex flex-col items-center justify-center'>
        
        {field && (
          <p className = {'w-full p-2 text-center text-lg font-semibold rounded-lg ${alert === "danger" ? "bg-red-400 text-red-500" : "bg-green-600 text-green-500" }'} >
            Assemble
          </p>
        )}
        
      </div> 
    </div>
  )
}

export default CreateContainer