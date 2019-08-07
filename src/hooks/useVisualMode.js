import React, {useState} from 'react';

export function useVisualMode(targetMode) {

  const [mode, setMode] = useState( {currentMode:targetMode, history:[targetMode]} )

  return {
    mode: mode.currentMode,
    transition: (newMode) => {
      setMode((prev) => {
        return {
          currentMode: newMode,
          history:[...prev.history, newMode]
        }
      })
    },

    back: () => {
      setMode((prev) => {
        console.log([...prev.history])
        console.log([...prev.history].pop())
        let newHistory = [...prev.history]
        newHistory.pop()
        return {
          currentMode: ([...prev.history])    [prev.history.length-2],
          history: newHistory
        }
      }
      )
    }

}}