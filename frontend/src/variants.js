

export const homeContentAnimate = {
    hidden: {opacity: 0},
    show: {opacity: 1,
    transition: {
      duration: 1.5,
      delayChildren: 0.3,
      delay: 0.1
    }}
  }

  export const titleAnimate = {
      hidden: {opacity: 0},
      show: {opacity:1,
    transition: {
        duration:1,
        delay:0
    }}
  }


  export const filterButtonsAnimate = {
    hidden: {opacity: 0,y: "-30px"},
    show: {opacity: 1,y: 0,
    transition: {
      duration:0.7}
    }
  }

  export const galleryImagesAnimate = {
    hidden: {opacity: 0,y: "100vh"},
    show: {opacity: 1,y: 0,
    transition: {
      duration:1}
    }
  
  }


export const aboutTextAnimate ={
  hidden: {opacity: 0,x: -100},
  show: {opacity: 1,x: 0,
  transition: {
    duration:1}
  }
}

export const contactAnimate ={
  hidden: {opacity: 0,y: -100},
  show: {opacity: 1,y: 0,
  transition: {
    duration:0.7,
    when: "beforeChildren"
  }
  }
}

export const contactChildAnimate ={
  hidden: {opacity: 0},
  show: {opacity: 1,
  transition: {
    duration:0.7}
  }
}
