"use client"

import type React from "react"

import { createContext, useContext, useReducer, type ReactNode } from "react"
import type { CartItem, Schedule, Operator, Fare } from "@/types"

interface CartState {
  items: CartItem[]
}

type CartAction =
  | { type: "ADD_ITEM"; payload: { schedule: Schedule; operator: Operator; fare: Fare; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { scheduleId: string; quantity: number } }
  | { type: "CLEAR_CART" }

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
} | null>(null)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find((item) => item.scheduleId === action.payload.schedule.id)

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.scheduleId === action.payload.schedule.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item,
          ),
        }
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            scheduleId: action.payload.schedule.id,
            schedule: action.payload.schedule,
            operator: action.payload.operator,
            fare: action.payload.fare,
            quantity: action.payload.quantity,
          },
        ],
      }
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.scheduleId !== action.payload),
      }

    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.scheduleId === action.payload.scheduleId ? { ...item, quantity: action.payload.quantity } : item,
        ),
      }

    case "CLEAR_CART":
      return { items: [] }

    default:
      return state
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }

  const { state, dispatch } = context

  const addItem = (schedule: Schedule, operator: Operator, fare: Fare, quantity = 1) => {
    dispatch({ type: "ADD_ITEM", payload: { schedule, operator, fare, quantity } })
  }

  const removeItem = (scheduleId: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: scheduleId })
  }

  const updateQuantity = (scheduleId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(scheduleId)
    } else {
      dispatch({ type: "UPDATE_QUANTITY", payload: { scheduleId, quantity } })
    }
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const total = state.items.reduce((sum, item) => sum + item.fare.amount * item.quantity, 0)

  return {
    items: state.items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    total,
  }
}
