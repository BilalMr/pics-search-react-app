import React from 'react'

class ImageCard extends React.Component{
constructor(props){
    super(props)

    this.imageRef = React.createRef()
    this.state = {
        spans: 0
    }
}

componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpans)
}

setSpans =() =>{
   const height = this.imageRef.current.clientHeight
   const spans = Math.ceil(height/10)
   this.setState({spans: spans})
}



    render(){
        const {alt_description, urls} = this.props.image
        return(
            <div >
                <img style={{gridRowEnd: `span: ${this.state.spans}` }} alt={alt_description} src={urls.regular} ref={this.imageRef} />
            </div>
        )
    }
}

export default ImageCard