import React, { useState, useEffect } from "react";

export function useVisualMode(targetMode) {

  const [mode, setMode] = useState( {currentMode:targetMode, history:[targetMode]} )

  return {
    mode: mode.currentMode,
    transition: (newMode, boo = false) => {
      setMode((prev) => {
        if (boo) {
          prev.history.pop()
        }

        return {
          currentMode: newMode,
          history:[...prev.history, newMode]
        }
      })
    },

    back: () => {
      setMode((prev) => {
        let newHistory = [...prev.history]
        let newMode = '';
        if (prev.history.length > 2) {
          newMode= [...prev.history][prev.history.length-2]
          newHistory.pop()
        } else {
          newMode = [...prev.history][0]
        }


        return {
          currentMode: newMode,
          history: newHistory
        }
      }
      )
    }

}}