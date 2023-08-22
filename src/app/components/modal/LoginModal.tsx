"use client";
import {signIn} from "next-auth/react"
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch,useAppSelector } from "@/redux/hooks";
import { closeLoginModal } from "@/redux/slices/loginModalSlice";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";
import axios from "axios"
import { useRouter } from "next/navigation";
// import { redirect } from "next/navigation";
const LoginModal = () => {
  const router= useRouter()
    const dispatch= useAppDispatch()
    const isRegisterModalOpen = useAppSelector((state) => state.registerModal.isRegisterModalOpen)
    const isLoginModalOpen = useAppSelector((state) => state.loginModal.isLoginModalOpen)
  const [isLoading, setIsLoading] = useState(false);
  const handleOnClose = () => {
    dispatch(closeLoginModal()); // Dispatch closeModal action to close the modal
  };

  const { register, handleSubmit, formState: { errors }} = useForm<FieldValues>({
    defaultValues: {  email: "", password: "" },
  });

// Use the useRegisterUserMutation hook



const onSubmit: SubmitHandler<FieldValues> = async (user) => {
  setIsLoading(true);

  try {
    const callback = await signIn("credentials", {
      ...user,
      redirect: false,
    });

    setIsLoading(false);

    if (callback?.ok) {
      toast.success("Logged in");
      router.refresh()
      dispatch(closeLoginModal())

    }
  } catch (error: any) {
    setIsLoading(false);
    // Handle any errors that occurred during signIn
    console.log("Error logging in:", error);
    toast.error("An error occurred while logging in");
  }
};


  const bodyContent = (
    <div className=" flex flex-col gap-4">
<Heading
  title=" Welcome to Nest Naivasha"
  subtitle=" Log in to your account"
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
    isOpen={isLoginModalOpen}
    title="Login"
    onClose={handleOnClose }
    onSubmit={handleSubmit(onSubmit)}
    actionLabel={`${isLoading ? "loading" : "continue"}`}
    body={bodyContent}
    footer={footerContent}

    />
  )

};

export default LoginModal;
