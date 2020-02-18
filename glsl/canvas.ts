import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  RawShaderMaterial,
  PlaneGeometry,
  Mesh,
  Vector2
} from 'three'

export default class Canvas {
  container: HTMLElement
  renderer: any
  domRect: {
    top: number
    right: number
    bottom: number
    left: number
  } | null
  w: number
  h: number
  scene: any
  camera: any
  frag: string
  vert: string
  uniforms: object
  material: any
  ratio: number
  setConfigFunction: () => void
  resizeFunction: () => void
  updateFunction: () => void

  constructor(
    container: HTMLElement,
    frag: string,
    vert: string,
    uniforms: object
  ) {
    this.container = container

    this.renderer = null
    this.domRect = null
    this.w = 0
    this.h = 0

    this.scene = null
    this.camera = null

    this.frag = frag
    this.vert = vert
    this.uniforms = uniforms
    this.material = null

    this.ratio = 1

    this.setConfigFunction = this.setConfig.bind(this)
    this.resizeFunction = this.resize.bind(this)
    this.updateFunction = this.update.bind(this)
  }

  init() {
    this.setConfigFunction()
    this.scene = new Scene()

    this.camera = new PerspectiveCamera(45, this.w / this.h, 0.1, 10000)

    this.material = new RawShaderMaterial({
      uniforms: {
        time: { type: 'f', value: 0 },
        resolution: {
          type: 'fv2',
          value: new Vector2(this.w * this.ratio, this.h * this.ratio)
        },
        ...this.uniforms
      },
      vertexShader: this.vert,
      fragmentShader: this.frag,
      transparent: true
    })

    this.renderer = new WebGLRenderer({
      antialias: false,
      alpha: false,
      stencil: false,
      depth: false
    })
    this.renderer.setClearColor(0xffffff)
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.w, this.h)
    this.renderer.shadowMap.enabled = false

    this.container.appendChild(this.renderer.domElement)

    const geo = new PlaneGeometry(16, 9)
    const plane = new Mesh(geo, this.material)

    this.scene.add(plane)

    this.camera.position.x = 0
    this.camera.position.y = 0
    this.camera.position.z = 1
    this.camera.lookAt(this.scene.position)

    this.scene.add(this.camera)

    this.renderer.render(this.scene, this.camera)

    window.addEventListener('resize', () => {
      this.resizeFunction()
    })

    this.resizeFunction()
    this.updateFunction()
  }

  setConfig() {
    this.ratio = window.devicePixelRatio
    this.domRect = this.container.getBoundingClientRect()

    this.w = this.domRect.right - this.domRect.left
    this.h = this.domRect.right - this.domRect.left
  }

  update() {
    const time = performance.now() * 0.001
    if (time < 20) {
      requestAnimationFrame(this.updateFunction)
    }

    if (time < 20) {
      this.material.uniforms.time.value = time
    }
    this.material.uniforms.resolution.value = new Vector2(
      this.w * this.ratio,
      this.h * this.ratio
    )
    this.renderer.render(this.scene, this.camera)
  }

  resize() {
    this.setConfigFunction()

    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.w, this.h)

    this.camera.aspect = this.w / this.h
    this.camera.updateProjectionMatrix()
  }
}
