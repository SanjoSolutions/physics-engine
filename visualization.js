import { createFullDocumentCanvas } from './unnamed/createFullDocumentCanvas/createFullDocumentCanvas.js'
import { animate } from './unnamed/packages/animate/animate.js'

export function visualize(physicsEngine) {
  const { canvas, context } = createFullDocumentCanvas()
  document.body.appendChild(canvas)
  animate(render)

  function render(ellapsedTime) {
    physicsEngine.simulate(ellapsedTime / 1000)

    context.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio)
    physicsEngine.objects.forEach(renderObject)
  }

  function renderObject(object) {
    context.beginPath()
    const y = canvas.height / window.devicePixelRatio - object.position.y
    context.arc(object.position.x, y, object.radius, 0, 2 * Math.PI)
    context.stroke()
  }
}
