"use client";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch,useAppSelector } from "@/redux/hooks";
import { closeRegisterModal } from "@/redux/slices/registerModalSlice";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import { toast } from "react-hot-toast/headless";
import Button from "../Button";
import axios from "axios"
const RegisterModal = () => {
    const dispatch= useAppDispatch()
    const isRegisterModalOpen = useAppSelector((state) => state.registerModal.isRegisterModalOpen)
  const [isLoading, setIsLoading] = useState(false);
  const handleOnClose = () => {
    dispatch(closeRegisterModal()); // Dispatch closeModal action to close the modal
  };

  const { register, handleSubmit, formState: { errors }} = useForm<FieldValues>({
    defaultValues: { name: "", email: "", password: "" },
  });

// Use the useRegisterUserMutation hook

  const onSubmit: SubmitHandler<FieldValues>= async(user)=> {
    setIsLoading(true)
    
    try {
     await axios.post("/api/register", user)
        dispatch(closeRegisterModal());
    } catch (error) {
        toast.error("something went wrong")
        console.log("error", error)
    } finally {
        setIsLoading(false)
    }

  }

  const bodyContent = (
    <div className=" flex flex-col gap-4">
<Heading
title=" Welcome to Nest Naivasha"
subtitle=" Create an account"

/>
<Input
id= "email"
label="Email"
disabled={isLoading}
register={register}
error={errors}
required
/>
<Input
id= "name"
label="Name"
disabled={isLoading}
register={register}
error={errors}
required
/>
<Input
id= "password"
type="password"
label="Password"
disabled={isLoading}
register={register}
error={errors}
required
/>
    </div>

  )

  const footerContent = (
    <div className= "flex flex-col gap-4 mt-3">
     <hr/>
     <Button
     outline
     label="continue with Google"
     icon={FcGoogle}
     onClick={()=>{}}
     />
     <div className="   text-neutral-500 text-center mt-4 font-light">
      <div className=" justify-center flex flex-row items-center gap-2">
        <div >Already have an account? </div>
        <div className= "hover:underline cursor-pointer text-neutral-800">Login</div>
      </div>

     </div>

    </div>
  )
  return (
    <Modal
    disabled={isLoading}
    isOpen={isRegisterModalOpen}
    title="Register"
    onClose={handleOnClose }
    onSubmit={handleSubmit(onSubmit)}
    actionLabel={`${isLoading ? "loading" : "continue"}`}
    body={bodyContent}
    footer={footerContent}

    />
  )

};

export default RegisterModal;
