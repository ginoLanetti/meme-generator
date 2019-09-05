import React from 'react'
import { MemeGeneratorStyle, MemeFormStyle, MemeStyle } from '../styles/MemeGeneratorStyles'


class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'https://i.imgflip.com/3434h4.jpg',
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        fetch ('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => {
            this.setState({allMemeImgs: response.data.memes})
        })

    }
    handleChange(e){
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        this.setState({
            randomImage: this.state.allMemeImgs[randomNum].url
        })
    }
    render(){
        return(
           <MemeGeneratorStyle>
                <MemeFormStyle onSubmit={this.handleSubmit}>
                    <label>
                    Top Text
                    <br/>
                    <input 
                        type="text" 
                        name="topText" 
                        value={this.state.topText} 
                        onChange={this.handleChange}   
                    />
                    </label>
                    <br/>
                    <label>
                    Bottom Text
                    <br/>
                    <input 
                        type="text" 
                        name="bottomText" 
                        value={this.state.bottomText} 
                        onChange={this.handleChange}   
                    />
                    </label>
                    <br/>
                    <button>Generate</button>
                </MemeFormStyle>
                <MemeStyle>
                    <img class="meme-image" src={this.state.randomImage} alt="Problem?"/>
                    <h2 class="caption top-text">{this.state.topText}</h2>
                    <h2 class="caption bottom-text">{this.state.bottomText}</h2>
                </MemeStyle>
           </MemeGeneratorStyle>
        )
    }
}
export default MemeGenerator