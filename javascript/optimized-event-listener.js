const optimizedEventListener = () => {
  const listeners = []

  const exec = ((listener) => {
    return ((event) => {
      let running = false

      const resize = () => {
        if (!running) {
          running = true

          if (window.requestAnimationFrame) {
            window.requestAnimationFrame(runListener)
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

  const addOptimziedListener = (args) => {
    let type = args[0]
    let listener = args[1]
    let options = args[2] || null
    let useCapture = args[3] || null

    listeners.push({
      listener: exec(listener),
      options: options,
      type: type,
      useCapture: useCapture
    })

    const listenerId = Math.abs(listeners.length - 1)

    window.addEventListener(
      listeners[listenerId].type,
      listeners[listenerId].listener,
      listeners[listenerId].options,
      listeners[listenerId].useCapture
    )

    return listenerId
  }

  const removeOptimziedListener = (listenerId) => {
    if (listeners[listenerId]) {
      const {
        listener,
        options,
        type,
        useCapture
      } = listeners[listenerId]

      window.removeEventListener(
        type,
        listener,
        options,
        useCapture
      )
    }
  }

  return {
    add: (...args) => {
      const listenerId = addOptimziedListener(args)

      return listenerId
    },
    remove: (listenerId) => {
      removeOptimziedListener(listenerId)
    }
  }
}

export default optimizedEventListener()
