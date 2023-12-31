// import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';


const Banner = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();






    
    // const { data: specialties, isLoading } = useQuery({
    //     queryKey: ['specialty'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/appointmentSpecialty');
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    const handleAddDoctors = data => {
       
    // save doctor information to the datavase
    fetch ('http://localhost:5000/todoapp',{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify()
    })
    .then(res=>res.json())
    .then(result=>{
        console.log(result)
        toast.success("dddddddddddddd")
    
    })
 }

 console.log(handleAddDoctors)



    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl text-primary">▁ ▂ ▃ ▅ ▆ ▇ █ <span className='text-green'> 𝖬𝖺𝗇𝖺𝗀𝖾𝖣𝗈𝖼𝗍𝗈𝗋𝗌</span> █ ▇ ▆ ▅ ▃ ▂ ▁</h2>
            <form onSubmit={handleSubmit(handleAddDoctors)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                </div>
               
             
                <input className='btn btn-accent w-full mt-4' value="Add Doctor" type="submit" />
            </form>
        </div>
    );
};



export default Banner;
