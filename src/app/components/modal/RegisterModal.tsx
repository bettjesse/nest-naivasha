"use client";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch,useAppSelector } from "@/redux/hooks";
import { closeModal } from "@/redux/slices/registerModalSlice";
import Modal from "./Modal";

const RegisterModal = () => {
    const dispatch= useAppDispatch()
    const isOpen = useAppSelector((state) => state.registerModal.isOpen)
  const [isLoading, setIsLoading] = useState(false);
  const handleOnClose = () => {
    dispatch(closeModal()); // Dispatch closeModal action to close the modal
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit: SubmitHandler<FieldValues>= ()=> {
    setIsLoading(true)
    try {
        
        dispatch(closeModal());
    } catch (error) {
        
    } finally {
        setIsLoading(false)
    }

  }
  return (
    <Modal
    disabled={isLoading}
    isOpen={isOpen}
    title="Register"
    onClose={handleOnClose }
    onSubmit={handleSubmit(onSubmit)}
    actionLabel="continue"

    />
  )

};

export default RegisterModal;
