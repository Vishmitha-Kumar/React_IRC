import React from 'react'

function InlineStyling(){
              return(
                <>
                    <h1 style={{color:'green'}}>Inline Style in JSX Example</h1>
                    <div
                    style={{
                        backgroundColor:'lightblue',
                        color:'darkblue',
                        padding:'10px',
                        border:'1px solid blue',
                        borderradius:'5px'
                    }}>
                        <p style={{color:'darkblue',fontSize:'16px'}}>This is a paragraph with inline styles applied</p>
                    </div>
                </>
              )
}
export default InlineStyling