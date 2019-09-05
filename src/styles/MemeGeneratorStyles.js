import styled from 'styled-components'

export const MemeGeneratorStyle = styled.div`
    width: 100%;
    min-height: 90vh;
    padding: 0 0 5rem 0;
    background-color: #EFF1F4;
    color: #171818;
    font-size: 1rem;
`
export const MemeFormStyle = styled.form`
    width: 50vw;
    height: 20vh;
    padding: 2rem;
    margin: auto;
    text-align: center;

`
export const MemeStyle = styled.form`
    position: relative;
    max-width: 40vw;
    margin: auto;
    word-wrap: break-word;
    .meme-image{
        display: block;
        width: 100%;
        max-height: 70vh;
        margin: 0 auto;
    }
    .caption{
        position: absolute;
        width: 100%;
        margin: 0;
        text-align: center;
        left: 50%; 
        transform: translate(-50%, -50%);
        color: black;
        -webkit-text-fill-color: white; 
        -webkit-text-stroke-width: 0.5px;
        -webkit-text-stroke-color: black;
        font-size: 3rem;
        word-wrap: break-word;

    }
    .top-text{
        top: 10%;
    }
    .bottom-text{
        top: 90%;
    }   

`