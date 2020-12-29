import React from 'react'

// Related to ProductList.js, used rfc snippet
// text-title from App.css

// Using (name, title) instead of ({name,title}) cause the below error
// Error: Objects are not valid as a React child (found: object with keys {name, title}). If you meant to render a collection of children, use an array instead.
// text-blue is from App.css
// The tutorial did not have class "row" for title "products" to be displayed in the next line
// ref grid system, flexbox, bootstrap

export default function Title({name,title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">
                    {name}
                    <div className="col">
                        <strong className="text-blue">
                            {title}
                        </strong>
                    </div>
                </h1>
            </div>
        </div>
    )
}
