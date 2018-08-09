'use strict'

const optimizedWindowResize = () => {
  const listeners = {}

  const exec = ((listener) => {
    return ((event) => {
      let running = false

      const resize = () => {
        if (!running) {
          running = true;

          if (window.requestAnimationFrame) {
            window.requestAnimationFrame(runListener);
          } else {
            setTimeout(runListener, 66)
          }
        }
      }

      const runListener = () => {
        listener(event)

        running = false
      }

      resize()
    })
  })

  const addListener = (listenerName, listener) => {
    listeners[listenerName] = exec(listener)

    window.addEventListener('resize', listeners[listenerName])
  }

  const removeListener = (listenerName) => {
    if (listeners[listenerName]) {
      window.removeEventListener('resize', listeners[listenerName])
    }
  }

  const removeAllListeners = () => {
    for (var listenerName in listeners) {
      window.removeEventListener('resize', listeners[listenerName])
    }
  }

  return {
    add: (listenerName, listener) => {
      addListener(listenerName, listener)
    },
    remove: (listenerName) => {
      removeListener(listenerName)
    },
    removeAll: () => {
      removeAllListeners()
    }
  }
}
