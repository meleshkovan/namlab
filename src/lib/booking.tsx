import { createContext, useCallback, useContext, useState, type ReactNode } from "react"

export type FormType = "standard" | "veteran_probono"

interface BookingContextValue {
  isOpen: boolean
  formType: FormType
  openModal: (formType?: FormType) => void
  closeModal: () => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [formType, setFormType] = useState<FormType>("standard")

  const openModal = useCallback((type: FormType = "standard") => {
    setFormType(type)
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => setIsOpen(false), [])

  return <BookingContext.Provider value={{ isOpen, formType, openModal, closeModal }}>{children}</BookingContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components -- hook and provider intentionally co-located
export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error("useBooking must be used inside BookingProvider")
  return ctx
}
