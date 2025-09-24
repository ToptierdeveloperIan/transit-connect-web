// src/context/FormContext.tsx
import React, { createContext, useContext, useState } from "react";

// 1. Create context
interface FormContextType {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

// 2. Create context with default `undefined`
const FormContext = createContext<FormContextType | undefined>(undefined);

// 2. Create provider
export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <FormContext.Provider value={{ showForm, setShowForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormModal = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormModal must be used inside a FormProvider");
  }
  return context; // now context is guaranteed FormContextType
};
