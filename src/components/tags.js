import React from "react"

export default function TagsCapsule({tag}) {
    return (
        <span className="tag" id={tag}>
            {tag}
        </span>
    ) 
}