import React from 'react'
import './Footer.css'
import { Typography } from '@mui/material'

const Footer = () => {
  return (
    <div className = "footer">
        <div className = 'footer_left'>
          <Typography className='footer_name'></Typography>   
        </div>
        <div className = 'footer_right'>
            <Typography className='footer_copyright'>
                Designed and Devleoped by <a href='https://www.linkedin.com/in/ivan-mata-574608174/' target='_blank'>Ivan Mata</a>
                <br/>
                Original design by <a href='https://themeforest.net/' target='_blank'>ThemeForest</a>
            </Typography>   
        </div>
    </div>
  )
}

export default Footer