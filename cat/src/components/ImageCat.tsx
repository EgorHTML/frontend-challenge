import React from "react";

class ImageCat extends React.Component<{src:string,name:string},{}>{
    observer!: IntersectionObserver;
    element!: HTMLImageElement;
    constructor(props:{src:string,name:string}){
        super(props)
    }

    render(){
        return <img  ref={(el:HTMLImageElement) => this.element = el} />
    }

    componentDidMount(){
        this.observer = new IntersectionObserver((entries ) => {
            entries.forEach(entry => {
                const { isIntersecting } = entry;
                if (isIntersecting) {
                  this.element.src = this.props.src;
                }
              });
          },
          {
            root: null
          });
          this.observer.observe(this.element);
    }
    componentWillUnmount(){
        this.observer.disconnect();
    }
}

export default ImageCat